import { Route, Routes } from "react-router-dom";

import { PrivateOutlet, PublicOutlet } from "./components/outlets";
import { AccountPage, LoginPage } from "./pages";

export const ROUTES = {
  ACCOUNT: "/account",
  HOME: "/",
  LOGIN: "/login",
};

export const AppRoutes: React.FC = () => (
  <Routes>
    <Route path={ROUTES.HOME} element={<PublicOutlet />}>
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
    </Route>

    <Route path={ROUTES.HOME} element={<PrivateOutlet />}>
      <Route path={ROUTES.ACCOUNT} element={<AccountPage />} />
    </Route>
  </Routes>
);
