export interface RegisterRequest {
  lastName: string;
  firstName: string;
  middleName: string;
  organizationName: string;
  taxpayerNumber: string;
  industry: string;
  country: string;
  city: string;
  position: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}
