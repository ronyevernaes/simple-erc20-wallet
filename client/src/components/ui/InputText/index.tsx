import { FC, ChangeEvent, InputHTMLAttributes } from "react";

type Props = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  mask?: (value: string) => string;
  validate?: (value: string) => (boolean | string);
  error?: string;
  onError?: (error: string) => void;
  dataTest?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const InputText: FC<Props> = ({
  value,
  error,
  onChange,
  mask,
  validate,
  dataTest,
  ...rest
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
        type="text"
        value={value}
        onChange={handleInputChange}
        data-test={dataTest}
        {...rest}
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
