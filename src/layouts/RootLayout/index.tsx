import { ReactNode, useEffect } from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { STORAGE, useGetUserQuery } from "@/services";
import { useAuthContext } from "@/contexts";
import s from "./styles.module.css";

interface RootLayoutProps {
  children: ReactNode;
}

export const RootLayout = (props: RootLayoutProps) => {
  const { children } = props;
  const { handleToken, token: authToken } = useAuthContext();
  const { data: user } = useGetUserQuery(null, {
    skip: !authToken,
  });
  console.log("user", user);

  const token = STORAGE.getToken();

  useEffect(() => {
    if (token) {
      handleToken();
    }
  }, [token]);

  return (
    <>
      <Header />
      <Main className={s.main}>{children}</Main>
    </>
  );
};
