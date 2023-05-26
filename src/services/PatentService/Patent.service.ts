import { Api } from "../api";

export const PatentService = Api.enhanceEndpoints({
  addTagTypes: ["PATENT"],
}).injectEndpoints({
  endpoints: (builder) => ({
    getTestList: builder.query<void, void>({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      providesTags: ["PATENT"],
    }),
  }),
});

export const { useGetTestListQuery } = PatentService;
