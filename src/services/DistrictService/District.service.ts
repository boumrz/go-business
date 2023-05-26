import { Api } from "../api";
import { DistrictDto } from "./District.dto";

export const DistrictService = Api.enhanceEndpoints({
  addTagTypes: ["DISTRICT"],
}).injectEndpoints({
  endpoints: (builder) => ({
    getDistrictList: builder.query<Array<DistrictDto>, void>({
      query: () => ({
        url: "/api/v1/district/list",
        method: "GET",
      }),
      providesTags: ["DISTRICT"],
      transformResponse: (elements: Array<DistrictDto>) => {
        return elements.map((item: DistrictDto) => ({
          ...item,
          label: item.district,
        }));
      },
    }),
  }),
});

export const { useGetDistrictListQuery } = DistrictService;
