import { Navigate } from "react-router-dom";
import { useAccount } from "wagmi";

import { ROUTES } from "../routes";

const HomeRedirect = () => {
  const { isConnected } = useAccount();

  return isConnected
    ? <Navigate to={ROUTES.ACCOUNT} />
    : <Navigate to={ROUTES.LOGIN} />;
};

export default HomeRedirect;
