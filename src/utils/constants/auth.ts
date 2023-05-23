export const STORAGE_KEYS = {
  REFRESH_TOKEN: "refreshToken",
  TOKEN: "token",
  USER: "user",
};

export const BASE_URL =
  (process.env.APP_URL ? process.env.APP_URL : window.location.origin) +
  "/" +
  process.env.CONTEXT;
