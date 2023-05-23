import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { Mutex } from "async-mutex";
import { BASE_URL, redirectWithState } from "@/utils";
import { STORAGE } from "./Storage.service";

const mutex = new Mutex();

export const prepareHeaders = (headers: Headers) => {
  const token = STORAGE.getToken();

  if (token && !headers.has("refresh-token")) {
    headers.set("authorization", `Bearer ${token}`);
  }

  return headers;
};

export const baseRequestOptions = {
  baseUrl: BASE_URL,
  prepareHeaders: prepareHeaders,
};

export const baseQuery = fetchBaseQuery(baseRequestOptions);

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (result.error) {
    if (result.error.status === 401) {
      if (!mutex.isLocked()) {
        const release = await mutex.acquire();
        try {
          const refresh = await baseQuery(
            {
              url: "/api/auth/refresh",
              method: "POST",
              headers: {
                "refresh-token": `Bearer ${STORAGE.getRefreshToken()}`,
              },
            },
            api,
            extraOptions
          );

          if (refresh.data) {
            STORAGE.setToken(refresh.data.accessToken);
            STORAGE.setRefreshToken(refresh.data.refreshToken);
            result = await baseQuery(args, api, extraOptions);
          }

          if (refresh.error) {
            throw Error("Пользователь не авторизован");
          }
        } catch {
          await redirectWithState("/error", { status: 401 });
        } finally {
          release();
        }
      } else {
        await mutex.waitForUnlock();
        result = await baseQuery(args, api, extraOptions);
      }
    } else if (result.error.status === 403) {
      await redirectWithState("/error", { status: 403 });
    }
  }

  return result;
};
