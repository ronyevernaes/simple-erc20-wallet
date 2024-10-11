import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
  dataTest?: string;
}

export const Footer: FC<Props> = ({ children, dataTest }) => (
  <footer className="py-2 w-full text-center" data-test={dataTest}>
    {children}
  </footer>
);
