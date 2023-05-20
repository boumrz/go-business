import { DetailedHTMLProps, HTMLAttributes } from "react";
import cn from "clsx";
import s from "./styles.module.css";

type MainProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export const Main = ({ children, className, ...props }: MainProps) => {
  return (
    <main className={cn(s.main, className)} {...props}>
      {children}
    </main>
  );
};
