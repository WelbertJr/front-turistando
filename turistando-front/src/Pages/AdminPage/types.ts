export type UserType = {
  email: string;
  password: string;
} | null;

export interface FormNewAdminValues {
  email: string;
  password: string;
  password_2: string;
}
