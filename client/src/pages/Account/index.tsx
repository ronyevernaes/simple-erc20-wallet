import { FC } from "react";
import { useDisconnect } from "wagmi";

import { Button } from "../../components/ui";

export const AccountPage: FC = () => {
  const { disconnect } = useDisconnect();

  return (
    <div className="flex flex-col gap-4 text-center">
      Account

      <Button
        onClick={() => disconnect()}
      >
        Disconnect
      </Button>
    </div>
  );
};
