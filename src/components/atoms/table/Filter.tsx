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
  const { filterVariant } = column.columnDef.meta ?? {};

  return filterVariant === "range" ? (
    <div>
      <div className="flex space-x-2">
        <DefaultInput
          type="number"
          value={(columnFilterValue as unknown as [number, number])?.[0] ?? ""}
          onChange={(value) =>
            column.setFilterValue((old: [number, number]) => [value, old?.[1]])
          }
          placeholder={`Min`}
          className="w-24 border shadow rounded"
        />
        <DefaultInput
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
    <DefaultInput
      type="text"
      value={columnFilterValue ?? ""}
      onChange={(value) => column.setFilterValue(value)}
      placeholder={`${t("search")}...`}
    />
  );
};
