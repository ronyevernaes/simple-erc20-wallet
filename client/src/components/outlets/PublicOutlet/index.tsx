import { FC, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";

import { ROUTES } from "../../../router";

export const PublicOutlet: FC = () => {
  const { isConnected } = useAccount();
  const navigate = useNavigate();

  useEffect(() => {
    if (isConnected) {
      navigate(ROUTES.ACCOUNT);
    }
  }, [navigate, isConnected]);

  return (
    <Outlet />
  );
};
