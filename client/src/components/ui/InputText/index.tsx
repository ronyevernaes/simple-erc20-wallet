import { FC, ChangeEvent } from "react";

type Props = {
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  mask?: (value: string) => string;
  error?: string;
  dataTest?: string;
};

export const InputText: FC<Props> = ({
  name,
  value,
  error,
  placeholder,
  onChange,
  mask,
  dataTest,
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const maskedValue = mask ? mask(e.target.value) : e.target.value;
    e.target.value = maskedValue;

    onChange(e);
  };

  return (
    <div className="flex flex-col gap-1">
      <input
        className={error ? "!border-red-500 !border-2" : ""}
        name={name}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
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
