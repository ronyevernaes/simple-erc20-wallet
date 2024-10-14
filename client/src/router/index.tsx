import { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import { AppRoutes, ROUTES } from "./routes";

export const Router: FC = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export { AppRoutes, ROUTES };
