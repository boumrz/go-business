import { redirect } from "react-router-dom";
import { router } from "../router";

export const redirectWithState = (
  url: string,
  data: Record<string, unknown>
) => {
  redirect(url, data);
  return router.navigate(url, { state: data });
};
