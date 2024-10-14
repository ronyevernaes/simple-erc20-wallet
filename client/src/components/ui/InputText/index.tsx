import { FC, ChangeEvent } from "react";

type Props = {
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  dataTest?: string;
};

export const InputText: FC<Props> = ({
  name,
  value,
  error,
  placeholder,
  onChange,
  dataTest,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <input
        className={error ? "!border-red-500 !border-2" : ""}
        name={name}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        data-test={dataTest}
      />

      {error && (
        <div
          className="text-xs text-red text-left pl-4 text-red-500"
          data-test={`${dataTest}-error`}
        >
          {error}
        </div>
      )}
    </div>
  );
};
