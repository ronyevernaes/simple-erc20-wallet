import { Route, Routes } from "react-router-dom";

import { PrivateOutlet, PublicOutlet } from "./components/outlets";
import { LoginPage } from "./pages";

export const ROUTES = {
  LOGIN: "/login",
  HOME: "/",
};

export const AppRoutes: React.FC = () => (
  <Routes>
    <Route path={ROUTES.HOME} element={<PublicOutlet />}>
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
    </Route>

    <Route path={ROUTES.HOME} element={<PrivateOutlet />} />
  </Routes>
);
