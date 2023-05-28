import { Api } from "../api";
import { BuildingsDto } from "./Buildings.dto";

export const BuildingsService = Api.enhanceEndpoints({
  addTagTypes: ["BUILDINGS", "CAPITAL_BUILDINGS"],
}).injectEndpoints({
  endpoints: (builder) => ({
    getBuildingsList: builder.query<Array<BuildingsDto>, void>({
      query: () => ({
        url: "/api/v1/building/list",
        method: "GET",
      }),
      transformResponse: (elements: Array<any>) => {
        return elements.map((item) => ({
          ...item,
          label: item.type,
        }));
      },
      providesTags: ["BUILDINGS"],
    }),
    getCapitalBuildingsList: builder.query<any, any>({
      query: () => ({
        url: "/api/v1/capital-building/list",
        method: "GET",
      }),
      transformResponse: (elements: Array<any>) => {
        return elements.map((item) => ({
          ...item,
          label: item.type,
        }));
      },
      providesTags: ["CAPITAL_BUILDINGS"],
    }),
  }),
});

export const { useGetBuildingsListQuery, useGetCapitalBuildingsListQuery } =
  BuildingsService;
