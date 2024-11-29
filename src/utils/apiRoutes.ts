export const apiRoutes = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    forgottenPassword: '/auth/forgotten-password',
  },
};

export type IApiRoutesKeys = (typeof apiRoutes)[keyof typeof apiRoutes];
