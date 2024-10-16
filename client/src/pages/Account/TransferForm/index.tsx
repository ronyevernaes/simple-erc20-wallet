import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import {
  BaseError,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { parseEther } from "viem";

import abi from "../../../abis/SimpleX";
import { Button, InputText, Message } from "../../../components/ui";
import { SIMPLEX_ADDRESS } from "../../../constants";
import { useValidateAddress } from "../../../hooks/useValidateAddress";
import { maskNumber } from "../../../utils";

type Props = {};

type Input = {
  address: string;
  amount: string;
};

export const TransferForm: FC<Props> = () => {
  const [input, setInput] = useState<Input>({ address: "", amount: "" });

  const {
    data: hash,
    error,
    isPending,
    writeContract,
  } = useWriteContract();

  const { isLoading, isSuccess } = useWaitForTransactionReceipt({
    hash
  });

  useEffect(() => {
    if (isSuccess) {
      setInput({ address: "", amount: "" });
    }
  }, [isSuccess]);

  const [isValidAddress, addressError] = useValidateAddress(input.address);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({...input, [e.target.name]: e.target.value });
  };

  const isValidInput = () => isValidAddress && !!input.amount;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    writeContract({ 
      abi,
      address: SIMPLEX_ADDRESS,
      functionName: "transfer",
      args: [input.address as `0x${string}`, parseEther(input.amount)]
    });
  };

  return (
    <form
      className="flex flex-col gap-4 border border-gray-700 rounded-md p-4"
      onSubmit={handleSubmit}
    >
      <InputText
        disabled={isPending || isLoading}
        error={addressError}
        name="address"
        onChange={handleChange}
        placeholder="Recipient Address: 0x1234567890abcdef..."
        required
        value={input.address}
      />

      <InputText
        disabled={isPending || isLoading}
        mask={maskNumber}
        name="amount"
        onChange={handleChange}
        placeholder="Amount: 1.23456789"
        required
        value={input.amount}
      />

      <Button
        disabled={!isValidInput() || isPending || isLoading}
        type="submit"
      >
        Send
      </Button>

      {error && (
        <Message type="error">{(error as BaseError).shortMessage}</Message>
      )}

      {hash && (
        <Message type={isLoading ? "warning" : isSuccess ? "success" : "info"}>
          <div className="flex flex-col gap-2 items-start">
            <div>Tx Hash: {hash}</div>
            {isLoading && <div>Waiting for confirmation...</div>}
            {isSuccess && <div>Confirmed!</div>}
          </div>
        </Message>
      )}
    </form>
  );
};
