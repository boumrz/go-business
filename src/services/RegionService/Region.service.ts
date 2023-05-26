import { Api } from "../api";

export const RegionService = Api.enhanceEndpoints({
  addTagTypes: ["REGION"],
}).injectEndpoints({
  endpoints: (builder) => ({
    getRegionList: builder.query<any, void | null>({
      query: () => ({
        url: "/api/v1/region/list",
        method: "GET",
      }),
      providesTags: ["REGION"],
    }),
  }),
});

export const { useGetRegionListQuery } = RegionService;
