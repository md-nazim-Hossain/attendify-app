export const apiRoutes = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    changePassword: '/auth/change-password',
    profile: '/auth/profile',
    loginCompany: '/auth/login-company',
  },
  company: {
    createCompany: '/company/create-company',
    companies: '/company',
    myCompanies: '/company/my-companies',
  },
  employee: {
    addEmployee: '/employee/add-employee',
    employees: '/employee',
    updateEmployeeStatus: '/employee/update-employee-status',
    employeeAcceptedInvitation: '/employee/employee-accepted-invitation',
  },
};

export type IApiRoutesKeys = (typeof apiRoutes)[keyof typeof apiRoutes];
