import {QueryKeyT} from '@/types';

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
    .then(res => res.data);
};
