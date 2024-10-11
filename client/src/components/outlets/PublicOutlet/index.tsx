import { FC, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes";

export const PublicOutlet: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(ROUTES.LOGIN);
  }, [navigate]);

  return (
    <Outlet />
  );
};
