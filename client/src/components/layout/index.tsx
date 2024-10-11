import { FC, ReactNode } from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";

type Props = {
  children: ReactNode
  dataTest?: string;
};

export const Layout: FC<Props> = ({ children, dataTest }) => (
  <div
    className="flex flex-col justify-between items-center h-screen gap-8 px-0 md:px-8"
    data-test={dataTest}
  >
    <Header dataTest={`${dataTest}-header`}>SimpleX Wallet</Header>

    {children}

    <Footer dataTest={`${dataTest}-footer`}>
      {new Date().getFullYear()} &copy; All rights reserved
    </Footer>
  </div>
);
