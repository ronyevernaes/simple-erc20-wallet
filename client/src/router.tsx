import { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./routes";

export const Router: FC = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);
