import { FC } from "react";
import { useDisconnect } from "wagmi";

import { Button } from "../../../components/ui";

export const DisconnectAction: FC = () => {
  const { disconnect } = useDisconnect();

  return (
    <Button
      onClick={() => disconnect()}
    >
      Disconnect
    </Button>
  );
};