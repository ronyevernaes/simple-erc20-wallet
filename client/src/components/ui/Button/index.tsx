import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  dataTest?: string;
  onClick?: () => void;
  className?: string;
};

export const Button: FC<Props> = ({
  children,
  disabled,
  dataTest,
  onClick,
  className,
}) => {
  return (
    <button
      disabled={disabled}
      data-test={dataTest}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
};
