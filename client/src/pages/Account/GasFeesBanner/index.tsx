import { FC } from "react";
import { useEstimateFeesPerGas } from "wagmi";
import { formatEther } from "viem";

import { Message } from "../../../components/ui";

type Props = {};

export const GasFeesBanner: FC<Props> = () => {
  const { data } = useEstimateFeesPerGas();

  return (
    <Message>
      Estimated Fee per Gas: {formatEther(data?.maxFeePerGas || 0n)} ETH
    </Message>
  );
};
