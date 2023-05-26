import { Api } from "../api";
import { EquipmentDto } from "./Equipment.dto";

export const EquipmentService = Api.enhanceEndpoints({
  addTagTypes: ["EQUIPMENT"],
}).injectEndpoints({
  endpoints: (builder) => ({
    getEquipmentList: builder.query<Array<EquipmentDto>, void>({
      query: () => ({
        url: "api/v1/equipment/list",
        method: "GET",
      }),
      providesTags: ["EQUIPMENT"],
      transformResponse: (elements: Array<EquipmentDto>) => {
        return elements.map((item) => ({
          ...item,
          label: item.equipmentType,
        }));
      },
    }),
  }),
});

export const { useGetEquipmentListQuery } = EquipmentService;
