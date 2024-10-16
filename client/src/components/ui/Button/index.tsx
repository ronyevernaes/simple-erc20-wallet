import { FC, ReactNode, ButtonHTMLAttributes } from "react";

type Props = {
  children: ReactNode;
  dataTest?: string;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<Props> = ({
  children,
  dataTest,
  className,
  ...rest
}) => {
  return (
    <button
      data-test={dataTest}
      className={className}
      {...rest}
    >
      {children}
    </button>
  );
};
