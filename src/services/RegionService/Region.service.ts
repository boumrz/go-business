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
      transformResponse: (elements: Array<any>) => {
        return elements.map((item) => ({
          ...item,
          label: item.name,
        }));
      },
    }),
  }),
});

export const { useGetRegionListQuery } = RegionService;
