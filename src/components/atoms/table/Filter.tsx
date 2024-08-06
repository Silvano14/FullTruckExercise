import { DefaultInput } from "@atoms/input/DefaultInput";
import { Column } from "@tanstack/react-table";
import React from "react";
import { useTranslation } from "react-i18next";

type FilterProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  column: Column<any, unknown>;
};

export const Filter: React.FC<FilterProps> = ({ column }) => {
  const columnFilterValue = column.getFilterValue() as string;
  const { t } = useTranslation();
  // @ts-expect-error is a custom way to add new type of filter
  const { filterVariant } = column.columnDef.meta ?? {};

  return filterVariant === "range" ? (
    <div className="flex space-x-2 w-full">
      <DefaultInput
        type="number"
        value={(columnFilterValue as unknown as [number, number])?.[0] ?? ""}
        onChange={(value) =>
          column.setFilterValue((old: [number, number]) => [value, old?.[1]])
        }
        placeholder={`Min`}
        className="w-full rounded"
      />
      <DefaultInput
        type="number"
        value={(columnFilterValue as unknown as [number, number])?.[1] ?? ""}
        onChange={(value) =>
          column.setFilterValue((old: [number, number]) => [old?.[0], value])
        }
        placeholder={`Max`}
        className="w-full rounded"
      />
    </div>
  ) : (
    <DefaultInput
      type="text"
      value={columnFilterValue ?? ""}
      onChange={(value) => column.setFilterValue(value)}
      placeholder={`${t("search")}...`}
    />
  );
};
