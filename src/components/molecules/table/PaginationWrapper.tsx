import { DefaultSelect } from "@atoms/select/DefaultSelect";
import { defaultPageSize } from "@atoms/table/DefaultTable";
import { Pagination } from "@nextui-org/react";
import { Table } from "@tanstack/react-table";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type PaginationWrapperProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  table: Table<any>;
};

export const PaginationWrapper: React.FC<PaginationWrapperProps> = ({
  table,
}) => {
  const { t } = useTranslation();
  const [value, setValue] = useState<string>(defaultPageSize.toString());

  return (
    <div className="flex justify-between gap-4 items-center p-2">
      <div className="flex gap-3 items-center">
        <span className="w-20">
          <DefaultSelect
            label={t("show")}
            items={["5", "10", "15"]}
            selectedKeys={[value]}
            onChange={(e) => {
              table.setPageSize(parseInt(e.target.value));
              setValue(e.target.value);
            }}
          />
        </span>
      </div>
      <div>
        <Pagination
          onChange={(el) => {
            table.setPageIndex(el - 1);
          }}
          total={table.getPageCount()}
          initialPage={1}
        />
      </div>
    </div>
  );
};
