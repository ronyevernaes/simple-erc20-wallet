import { FC } from "react";
import { useAccount, useBalance, useDisconnect } from "wagmi";

import { Button } from "../../components/ui";
import { SIMPLEX_ADDRESS } from "../../constants";
import { format} from "../../utils";

export const AccountPage: FC = () => {
  const account = useAccount();

  const balance = useBalance({
    address: account?.address,
    token: SIMPLEX_ADDRESS,
  });

  const { disconnect } = useDisconnect();
  
  if (!balance || !balance.data) {
    return null;
  }

  const { data: { symbol, value } } = balance;
  
  return (
    <div className="flex flex-col gap-8 text-center">
      <h1 className="font-bold text-2xl">Account</h1>
    
      {account && (
        <div>{account.chain?.name} - {account.address}</div>
      )}

      <div>
        {symbol}: {format(value)}
      </div>

      <Button
        onClick={() => disconnect()}
      >
        Disconnect
      </Button>
    </div>
  );
};
