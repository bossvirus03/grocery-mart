export const Role = {
  Owner: "Owner",
  Employee: "Employee",
} as const;

export const RoleValues = [Role.Owner, Role.Employee] as const;

export enum TypeUserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
  EMPLOYEE = 'EMPLOYEE',
  MERCHANT = 'MERCHANT',
}