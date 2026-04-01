export interface AuthStateModel {
  token: string | null;
  error: string | null;
  loading: boolean;
  userName: string | null;
}

export interface AuthDTO {
  login: string;
  password: string;
}
