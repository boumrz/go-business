import { ReactNode, useEffect } from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { STORAGE } from "@/services";
import { useAuthContext } from "@/contexts";
import s from "./styles.module.css";

interface RootLayoutProps {
  children: ReactNode;
}

export const RootLayout = (props: RootLayoutProps) => {
  const { children } = props;
  const { handleToken } = useAuthContext();
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
