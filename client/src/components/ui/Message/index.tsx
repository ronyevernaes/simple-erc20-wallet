import { FC, ReactNode } from "react";

type Props = {
  type?: "info" | "success" | "error" | "warning";
  children: ReactNode;
  dataTest?: string;
};

export const Message: FC<Props> = ({ type = "info", children, dataTest }) => (
  <div className={`flex message message-${type} text-xs`} data-test={dataTest}>
    {children}
  </div>
);
