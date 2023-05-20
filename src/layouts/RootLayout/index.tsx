import { ReactNode } from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import s from "./styles.module.css";

interface RootLayoutProps {
  children: ReactNode;
}

export const RootLayout = (props: RootLayoutProps) => {
  const { children } = props;

  return (
    <>
      <Header />
      <Main className={s.main}>{children}</Main>
    </>
  );
};
