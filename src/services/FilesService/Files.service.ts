import { Api } from "../api";

export const FilesService = Api.enhanceEndpoints({
  addTagTypes: ["FILES"],
}).injectEndpoints({
  endpoints: (build) => ({
    getSavePDF: build.query<any, any | void>({
      query: () => {
        return {
          url: `api/v1/equipment/list`,
          method: "GET",
          responseType: "blob",
          responseHandler: async (response) => await response.blob(),
        };
      },
      providesTags: ["FILES"],
    }),
  }),
});

export const { useGetSavePDFQuery } = FilesService;
