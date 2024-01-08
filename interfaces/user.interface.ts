type UserRoles = "ADMIN" | "CUSTOMER";

export interface User {
  id: string;
  image: string;
  role: UserRoles;
  email: string;
}
