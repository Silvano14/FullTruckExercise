import { Input } from "@nextui-org/react";
import { Column } from "@tanstack/react-table";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";

type FilterProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  column: Column<any, unknown>;
};

export const Filter: React.FC<FilterProps> = ({ column }) => {
  const columnFilterValue = column.getFilterValue() as string;
  const { t } = useTranslation();

  return (
    <DebouncedInput
      type="text"
      value={columnFilterValue ?? ""}
      onChange={(value) => column.setFilterValue(value)}
      placeholder={`${t("search")}...`}
    />
  );
};

const DebouncedInput: FC<{
  className?: string;
  placeholder: string;
  type: string;
  value: string | undefined;
  onChange: (value: string) => void;
  debounce?: number;
}> = ({ value: initialValue, onChange, debounce = 500, ...props }) => {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value ?? "");
    }, debounce);

    return (): void => clearTimeout(timeout);
  }, [debounce, onChange, value]);

  return (
    <Input
      onClear={() => {
        setValue("");
      }}
      isClearable
      variant="bordered"
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
