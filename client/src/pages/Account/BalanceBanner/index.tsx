import { FC } from "react";
import { Address } from "viem";
import { useBalance } from "wagmi";

import { SIMPLEX_ADDRESS } from "../../../constants";
import { format } from "../../../utils";

type Props = {
  address?: Address;
};

export const BalanceBanner: FC<Props> = ({ address }) => {
  const balance = useBalance({
    address,
    token: SIMPLEX_ADDRESS,
  });

  if (!balance || !balance.data) {
    return null;
  }

  return (
    <div>
      {balance.data.symbol}: {format(balance.data.value)}
    </div>
  );
};
