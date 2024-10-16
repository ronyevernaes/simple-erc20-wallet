import { FC } from "react";
import { useAccount } from "wagmi";

import { DisconnectAction } from "./DisconnectAction";
import { BalanceBanner } from "./BalanceBanner";
import { TransferForm } from "./TransferForm";

export const AccountPage: FC = () => {
  const account = useAccount();

  return (
    <div className="flex flex-col gap-6 text-center">
      <h1 className="font-bold text-2xl">Account</h1>
    
      {account && (
        <div>{account.chain?.name} - {account.address}</div>
      )}

      <BalanceBanner address={account?.address} />

      <TransferForm />

      <DisconnectAction />
    </div>
  );
};
