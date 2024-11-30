import {ENUM_BREAK_TYPE, ENUM_LEAVE_TYPE} from '@/enums';
import {z} from 'zod';

export const logingSchema = z.object({
  employeeId: z
    .string({required_error: 'Employee ID is required'})
    .min(6, {message: 'Employee ID must be at least 6 characters'}),
  password: z
    .string({required_error: 'Password is required'})
    .min(6, {message: 'Password must be at least 6 characters'}),
});
export type ILoginSchema = z.infer<typeof logingSchema>;

export const addLeaveRequestSchema = z
  .object({
    leaveType: z.enum(Object.values(ENUM_LEAVE_TYPE) as [string, ...string[]], {
      required_error: 'Leave type is required',
      message: 'Invalid leave type',
    }),
    startDate: z.string({required_error: 'Start date is required'}),
    endDate: z.string({required_error: 'End date is required'}),
    reason: z.string({required_error: 'Reason is required'}),
  })
  .refine(
    ({startDate, endDate}) => {
      const start = new Date(startDate);
      const end = new Date(endDate);
      return start < end;
    },
    {
      message: 'Start date must be before end date',
    },
  )
  .refine(
    ({startDate}) => {
      const start = new Date(startDate);
      return start > new Date();
    },
    {
      message: 'Start date must be after current date',
    },
  );

export type IAddLeaveRequestSchema = z.infer<typeof addLeaveRequestSchema>;

export const addDailyBreakRequestSchema = z.object({
  type: z
    .enum(Object.values(ENUM_BREAK_TYPE) as [string, ...string[]], {
      required_error: 'Break type is required',
      message: 'Invalid break type',
    })
    .optional(),
  endTime: z.string({required_error: 'End date is required'}),
  reason: z.string({required_error: 'Reason is required'}),
});

export type IAddDailyBreakRequestSchema = z.infer<
  typeof addDailyBreakRequestSchema
>;

export const updateEmployeeSchema = z.object({
  fullName: z.string({required_error: 'Name is required'}),
  email: z
    .string({required_error: 'Email is required'})
    .email({message: 'Invalid email'}),
  phone: z.string({required_error: 'Phone is required'}).optional(),
  address: z.string({required_error: 'Address is required'}).optional(),
  designation: z.string({required_error: 'Designation is required'}).optional(),
  photo: z.string({required_error: 'Photo is required'}).optional(),
});

export type IUpdateEmployeeSchema = z.infer<typeof updateEmployeeSchema>;
