import { FC } from "react";
import { useAccount, useBalance } from "wagmi";

import { SIMPLEX_ADDRESS } from "../../constants";
import { format} from "../../utils";
import { DisconnectAction } from "./DisconnectAction";

export const AccountPage: FC = () => {
  const account = useAccount();

  const balance = useBalance({
    address: account?.address,
    token: SIMPLEX_ADDRESS,
  });

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

      <DisconnectAction />
    </div>
  );
};
