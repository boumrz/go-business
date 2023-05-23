import { Api } from "../api";

export const RegionService = Api.injectEndpoints({
  endpoints: (builder) => ({
    getTestList: builder.query<void, void>({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetTestListQuery } = RegionService;
