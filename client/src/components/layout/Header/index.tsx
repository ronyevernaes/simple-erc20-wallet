import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
  dataTest?: string;
}

export const Header: FC<Props> = ({ children, dataTest }) => (
  <header
    className="flex justify-center md:justify-between py-2 md:py-4 w-full"
    data-test={dataTest}
  >
    <h1 className="text-3xl font-bold">
      {children}
    </h1>
  </header>
);
