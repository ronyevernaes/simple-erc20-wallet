import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  dataTest?: string;
  onClick?: () => void;
};

export const Button: FC<Props> = ({ children, dataTest, onClick }) => {
  return (
    <button data-test={dataTest} onClick={onClick}>
      {children}
    </button>
  );
};
