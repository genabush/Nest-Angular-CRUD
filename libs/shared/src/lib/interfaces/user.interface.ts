export interface User {
  email: string;
  password?: string;
  hash?: string;
  token?: string;
  id?: number;
  role?: string;
}
