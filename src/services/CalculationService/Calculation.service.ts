import { Api } from "../api";
import { CalculationRequest, CalculationResponse } from "./Calculation.dto";

export const CalculationService = Api.enhanceEndpoints({
  addTagTypes: ["CALCULATION"],
}).injectEndpoints({
  endpoints: (builder) => ({
    postCalculation: builder.mutation<CalculationResponse, CalculationRequest>({
      query: (params) => ({
        url: "/api/v1/calculation/calc",
        method: "POST",
        body: {
          organizationalAndLegalForm: params.organizationalAndLegalForm,
          taxationSystemType: params.taxationSystemType,
          industryId: params.industryId,
          subindustryId: params.subindustryId,
          regionNames: params.regionNames,
          areaOnRegions: Number(params.areaOnRegions),
          buildingCostIdAndAreaPairList: params.buildingCostIdAndAreaPairList,
          otherCapitalBuildingCostIdAndAreaPairList:
            params.otherCapitalBuildingCostIdAndAreaPairList,
          equipmentIdAndCountPairList: params.equipmentIdAndCountPairList,
          staffCount: Number(params.staffCount),
          averageSalary: Number(params.averageSalary),
          otherNeeds: params.otherNeeds,
        },
      }),
      invalidatesTags: ["CALCULATION"],
    }),
  }),
});

export const { usePostCalculationMutation } = CalculationService;
