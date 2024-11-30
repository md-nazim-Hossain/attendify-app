export const apiRoutes = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    changePassword: '/auth/change-password',
    profile: '/auth/profile',
  },
};

export type IApiRoutesKeys = (typeof apiRoutes)[keyof typeof apiRoutes];
