import {QueryKeyT} from '@/types';
import {
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query';
import {QueryFunctionContext} from '@tanstack/react-query';
import {api} from './api';
import {AxiosError, AxiosResponse} from 'axios';

export const fetcher = async <T>({
  queryKey,
  pageParam,
}: Pick<
  QueryFunctionContext<QueryKeyT>,
  'pageParam' | 'queryKey'
>): Promise<T> => {
  const [url, params] = queryKey;
  return api
    .get<T>(url, {params: {...params, pageParam}})
    .then((res: AxiosResponse<T>) => res.data);
};

export const useFetch = <T>(
  url: string | null,
  params?: object,
  config?: UseQueryOptions<T, AxiosError<any, any>, T, QueryKeyT>,
) => {
  const context = useQuery<T, AxiosError<any, any>, T, QueryKeyT>({
    queryKey: [url!, params],
    queryFn: ({queryKey}) => fetcher({queryKey}),
    ...config,
  });

  return context;
};

const useGenericMutation = <T, S>(
  func: (data: T | S) => Promise<AxiosResponse<S>>,
  url: string,
  params?: object,
  updater?: ((oldData: T, newData: S) => T) | undefined,
) => {
  const queryClient = useQueryClient();
  const queryKey = [url, params];

  return useMutation<AxiosResponse, AxiosError, T | S>({
    mutationFn: func,
    onMutate: async (data: T | S) => {
      await queryClient.cancelQueries({
        queryKey,
      });
      const previousData = queryClient.getQueryData(queryKey);

      queryClient.setQueryData<T>(queryKey, oldData => {
        return updater ? updater(oldData!, data as S) : ({data} as T);
      });

      return previousData;
    },
    onError: (_err: any, _: any, context: any) =>
      queryClient.setQueryData(queryKey, context),
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey,
      });
    },
  });
};

export const useDelete = <T>(
  url: string,
  params?: object,
  updater?: (oldData: T, id: string | number) => T,
) => {
  const queryKey = [url, params];
  return useGenericMutation<T, string | number>(
    id => api.delete(`${url}/${id}${queryKey}`),
    url,
    params,
    updater,
  );
};

export const usePost = <T, S>(
  url: string,
  params?: object,
  updater?: (oldData: T, newData: S) => T,
) => {
  return useGenericMutation<T, S>(
    data => api.post<S>(url, data),
    url,
    params,
    updater,
  );
};

export const useUpdate = <T, S>(
  url: string,
  params?: object,
  updater?: (oldData: T, newData: S) => T,
) => {
  return useGenericMutation<T, S>(
    data => api.patch<S>(url, data),
    url,
    params,
    updater,
  );
};
