import {
  ENUM_ACTIVITY_STATUS,
  ENUM_ATTENDANCE_STATUS,
  ENUM_BREAK_TYPE,
  ENUM_COMPANY_SIZE,
  ENUM_COMPANY_STATUS,
  ENUM_COMPANY_TYPE,
  ENUM_EMPLOYEE_ROLE,
  ENUM_LEAVE_STATUS,
  ENUM_LEAVE_TYPE,
  ENUM_PROJECT_STATUS,
  ENUM_TEAM_DESIGNATIONS,
  ENUM_TEAM_STATUS,
  ENUM_USER_GENDER,
  ENUM_USER_STATUS,
} from '@/enums';
import {StackNavigationProp} from '@react-navigation/stack';

export interface IUser {
  _id: string;
  name: string;
  email: string;
  passwordChangeAt?: string | Date;
  status: ENUM_USER_STATUS;
  createdAt: string;
  updatedAt: string;
}

export interface ICompany {
  _id: string;
  name: string;
  domain: string;
  verfiedAt?: Date;
  owner: string | IUser;
  status: ENUM_COMPANY_STATUS;
  createdAt: string;
  updatedAt: string;
}

export interface ICompanyDetails {
  _id: string;
  email: string;
  phone?: string;
  address: string;
  website?: string;
  logo?: string;
  type?: ENUM_COMPANY_TYPE;
  createdAt: string;
  updatedAt: string;
  description?: string;
  totalEmployees?: number;
  size?: ENUM_COMPANY_SIZE;
  regNumber?: string;
  officeStartTime: string;
  officeEndTime: string;
  company: string | ICompany;
}

export interface IEmployee {
  _id: string;
  employeeId: string;
  user: string | IUser;
  company: string | ICompany;
  fullName?: string;
  photo?: string;
  employeeEmail: string;
  phone?: string;
  address?: string;
  designation: string;
  role: ENUM_EMPLOYEE_ROLE;
  status: ENUM_EMPLOYEE_STATUS;
  photo?: string;
  gender?: ENUM_USER_GENDER;
  dob?: string;
  createdAt: string;
  updatedAt: string;
}

export interface IEmployeeAttendance {
  _id: string;
  employeeId: string | IEmployee;
  checkInTime: string;
  checkOutTime?: string;
  checkInLocation: string;
  checkOutLocation?: string;
  device: string;
  browser: string;
  ip?: string;
  status: ENUM_ATTENDANCE_STATUS;
  createdAt: string;
  updatedAt: string;
}

export interface IEmployeeDailyActivity {
  _id: string;
  employeeId: string | IEmployee;
  activities: string;
  reason?: string;
  status: ENUM_ACTIVITY_STATUS;
  createdAt: string;
  updatedAt: string;
}

export interface IEmployeeDailyBreak {
  _id: string;
  employeeId: string | IEmployee;
  startTime: string;
  endTime: string;
  reason: string;
  type: ENUM_BREAK_TYPE;
  status: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IEmployeeLeaveRequest {
  _id: string;
  employeeId: string | IEmployee;
  startDate: string;
  endDate: string;
  reason: string;
  reviewer?: string | IEmployee;
  leaveType: ENUM_LEAVE_TYPE;
  status: ENUM_LEAVE_STATUS;
  createdAt: string;
  updatedAt: string;
}

export interface IProject {
  name: string;
  description: string;
  technologyUsed: Array<string>;
  clientName: string;
  clientPhone?: string;
  projectManager?: string | IEmployee;
  startDate: string;
  endDate: string;
  deliveryDate?: string;
  teamIds?: Array<string | ITeam>;
  teamStatus?: Array<{_id: string; status: ENUM_TEAM_STATUS}>;
  status: ENUM_PROJECT_STATUS;
  createdAt: string;
  updatedAt: string;
}

export interface ITeam {
  _id: string;
  name: string;
  designations: Array<ENUM_TEAM_DESIGNATIONS>;
  teamLead: string | IEmployee;
  status: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Measure {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface ITimeClockProps {
  hours: string;
  minutes: string;
  seconds: string;
}

export interface IInfiniteScrollAPIResponse<T> {
  pageParams: number[];
  pages: Array<IAPIResponse<T>>;
}

export type QueryKeyT = [string, object | undefined];
export interface GetInfinitePagesInterface<T> {
  meta: {
    nextId: number | null;
    previousId: number | null;
    currentId: number | null;
    total: number;
  };
  data: T;
}
export type IAPIResponse<T = unknown> = {
  success: boolean;
  data: T | null;
  message: string;
  error: string | null;
  meta?: {
    nextId: number | null;
    previousId: number | null;
    currentId: number | null;
    total: number;
  };
};

export interface ILoginUserResponse {
  accessToken: string;
  refreshToken?: string;
  status: ENUM_USER_STATUS;
}

export type IEmployeeWithUser =
  | (IUser & {
      employee: IEmployee | null;
      companyId: string | null;
    })
  | null;

export type AuthStackParamList = {
  MyCompanies: undefined;
  Login: undefined;
  ForgottenPassword: undefined;
};

export type AuthNavigationProp = StackNavigationProp<
  AuthStackParamList,
  'MyCompanies'
>;
