import { isAddress } from "viem";
import { useAccount } from "wagmi";

export const useValidateAddress = (address: string): [boolean, string?] => {
  const account = useAccount();

  if (!address) {
    return [false];
  }

  if (address === account?.address) {
    return [false, "Recipient address must be different from your account address"];
  }

  if (!isAddress(address)) {
    return [false, "Invalid address"];
  }

  return [true];
};
