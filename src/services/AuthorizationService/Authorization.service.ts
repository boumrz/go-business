import { Api } from "../api";

export const AuthorizationService = Api.injectEndpoints({
  endpoints: (builder) => ({
    postRegisterUser: builder.mutation<any, any>({
      query: (params: any) => ({
        url: "/api/v1/auth/register",
        method: "POST",
        body: {
          lastName: params.lastName,
          firstName: params.firstName,
          middleName: params.middleName,
          organizationName: params.organizationName,
          taxpayerNumber: params.taxpayerNumber,
          industry: params.industry,
          country: params.country,
          city: params.city,
          position: params.position,
          email: params.email,
          password: params.password,
        },
      }),
    }),
    postLoginUser: builder.mutation<any, any>({
      query: (params: any) => ({
        url: "/api/v1/auth/login",
        method: "POST",
        body: {
          email: params.email,
          password: params.password,
        },
      }),
    }),
  }),
});

export const { usePostLoginUserMutation, usePostRegisterUserMutation } =
  AuthorizationService;
