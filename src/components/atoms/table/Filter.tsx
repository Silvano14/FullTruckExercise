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
  const { filterVariant } = column.columnDef.meta ?? {};

  return filterVariant === "range" ? (
    <div>
      <div className="flex space-x-2">
        <DebouncedInput
          type="number"
          value={(columnFilterValue as unknown as [number, number])?.[0] ?? ""}
          onChange={(value) =>
            column.setFilterValue((old: [number, number]) => [value, old?.[1]])
          }
          placeholder={`Min`}
          className="w-24 border shadow rounded"
        />
        <DebouncedInput
          type="number"
          value={(columnFilterValue as unknown as [number, number])?.[1] ?? ""}
          onChange={(value) =>
            column.setFilterValue((old: [number, number]) => [old?.[0], value])
          }
          placeholder={`Max`}
          className="w-24 border shadow rounded"
        />
      </div>
      <div className="h-1" />
    </div>
  ) : (
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
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
}> = ({ value: initialValue, onChange, debounce = 500, type, ...props }) => {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return (): void => clearTimeout(timeout);
  }, [debounce, onChange, value]);

  return (
    <Input
      type={type}
      variant="bordered"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      {...props}
    />
  );
};
