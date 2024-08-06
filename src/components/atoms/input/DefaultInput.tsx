import { Input } from "@nextui-org/react";
import React, { FC, ReactNode } from "react";

export const DefaultInput: FC<{
  className?: string;
  endContent?: ReactNode;
  placeholder: string;
  type: string;
  value?: string | number;
  onChange: (value: string | number) => void;
  onClear?: () => void;
  debounce?: number;
  isClearable?: boolean;
  label?: string;
  startContent?: ReactNode;
  labelPlacement?: "outside" | "outside-left" | "inside";
}> = ({ value = "", onChange, debounce = 300, type, ...props }) => {
  const [_value, setValue] = React.useState(value);

  React.useEffect(() => {
    setValue(value);
  }, [value]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(_value);
    }, debounce);

    return (): void => clearTimeout(timeout);
  }, [debounce, onChange, _value]);

  return (
    <Input
      type={type}
      variant="bordered"
      value={_value as string}
      onChange={(e) => setValue(e.target.value)}
      {...props}
    />
  );
};
