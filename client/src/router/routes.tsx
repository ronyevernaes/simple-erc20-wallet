import { FC } from "react";
import { Outlet, Route, Routes } from "react-router-dom";

import { AccountPage, LoginPage } from "../pages";
import { Layout } from "../components/layout";
import HomeRedirect from "./HomeRedirect";
import { PrivateOutlet, PublicOutlet } from "../components/outlets";

export const ROUTES = {
  ACCOUNT: "/account",
  HOME: "/",
  LOGIN: "/login",
};

export const AppRoutes: FC = () => (
  <Routes>
    <Route
      element={
        <Layout>
          <Outlet />
        </Layout>
      }
    >
      <Route path={ROUTES.HOME} element={<HomeRedirect />} />

      <Route element={<PublicOutlet />}>
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      </Route>

      <Route element={<PrivateOutlet />}>
        <Route path={ROUTES.ACCOUNT} element={<AccountPage />} />
      </Route>
    </Route>
  </Routes>
);
