import { Outlet, Route } from "react-router-dom";

import { PrivateOutlet, PublicOutlet } from "./components/outlets";

export const AppRoutes: React.FC = () => (
  <Route element={<Outlet />}>
    <Route path="/" element={<PublicOutlet />} />
    <Route path="/" element={<PrivateOutlet />} />
  </Route>
);
