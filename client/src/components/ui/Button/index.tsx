import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  dataTest?: string;
  onClick?: () => void;
};

export const Button: FC<Props> = ({ children, disabled, dataTest, onClick }) => {
  return (
    <button disabled={disabled} data-test={dataTest} onClick={onClick}>
      {children}
    </button>
  );
};
