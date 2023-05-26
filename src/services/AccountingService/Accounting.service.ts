import { Api } from "../api";
import { AccountingDto } from "./Accounting.dto";

export const AccountingService = Api.enhanceEndpoints({
  addTagTypes: ["ACCOUNTING"],
}).injectEndpoints({
  endpoints: (builder) => ({
    getAccountingList: builder.query<Array<AccountingDto>, void>({
      query: () => ({
        url: "/api/v1/accounting/list",
        method: "GET",
      }),
      providesTags: ["ACCOUNTING"],
    }),
  }),
});

export const { useGetAccountingListQuery } = AccountingService;
