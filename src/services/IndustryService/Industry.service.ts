import { Api } from "../api";
import { IndustryDto, IndustryRequest } from "./Industry.dto";

export const IndustryService = Api.enhanceEndpoints({
  addTagTypes: ["INDUSTRY"],
}).injectEndpoints({
  endpoints: (builder) => ({
    getIndustryList: builder.query<Array<IndustryDto>, void | IndustryRequest>({
      query: (params) => ({
        url: "api/v1/industry/list",
        method: "GET",
        params: {
          name: params?.name,
        },
      }),
      providesTags: ["INDUSTRY"],
      transformResponse: (elements: Array<IndustryDto>) => {
        return elements.map((item) => ({
          ...item,
          label: item.name,
        }));
      },
    }),
  }),
});

export const { useGetIndustryListQuery } = IndustryService;
