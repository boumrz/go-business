import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./service.utils";

export const Api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
