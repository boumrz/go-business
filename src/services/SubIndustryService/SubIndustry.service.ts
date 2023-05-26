import { Api } from "../api";

export const SubIndustryService = Api.enhanceEndpoints({
  addTagTypes: ["SUB_INDUSTRY"],
}).injectEndpoints({
  endpoints: (builder) => ({
    getTestList: builder.query<any, void>({
      query: () => ({
        url: "api/v1/subindustry/list",
        method: "GET",
      }),
      providesTags: ["SUB_INDUSTRY"],
    }),
  }),
});

export const { useGetTestListQuery } = SubIndustryService;
