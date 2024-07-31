import { DefaultButton } from "@atoms/buttons/DefaultButton";
import { DefaultTable } from "@atoms/table/DefaultTable";
import { SkeletonCellTable } from "@atoms/table/SkeletonCellTable";
import { createColumnHelper } from "@tanstack/react-table";
import useStatistics from "hook/useStatistics";
import { DataModelBase, DataTableEntryBase } from "models/DataType";
import { FC, useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { formatDate } from "utils/dateFormatter";
import { formatToTwoDecimalPlaces } from "utils/numberFormatter";

const columnHelper = createColumnHelper<DataTableEntryBase>();

export const TableData: FC = () => {
  const { t } = useTranslation();
  const { fetchStatistics } = useStatistics();
  const [data, setData] = useState<DataModelBase | null>(null);

  const getData = useCallback(
    () =>
      fetchStatistics({
        aggregateBy: "day",
        timeTarget: "pickup_date",
        startDate: "",
        endDate: "",
      }),
    [fetchStatistics]
  );

  const columns = useMemo(
    () => [
      columnHelper.accessor("active_carrier", {
        cell: (info) => (data ? info.getValue() : <SkeletonCellTable />),
        header: () => t("active_carrier"),
        filterFn: "includesString",
      }),
      columnHelper.accessor("active_client", {
        cell: (info) => info.getValue(),
        header: () => t("active_client"),
        filterFn: "includesString",
      }),
      columnHelper.accessor("aggregate_date", {
        cell: (info) => formatDate(info.getValue()),
        header: () => t("aggregate_date"),
        filterFn: "includesString",
      }),
      columnHelper.accessor("assigned_count", {
        cell: (info) => info.getValue(),
        header: () => t("assigned_count"),
        filterFn: "includesString",
      }),
      columnHelper.accessor("margin_abs", {
        cell: (info) => info.getValue(),
        header: () => t("margin_abs"),
        filterFn: "includesString",
      }),
      columnHelper.accessor("margin_abs_per_order", {
        cell: (info) => formatToTwoDecimalPlaces(info.getValue()),
        header: () => t("margin_abs_per_order"),
        filterFn: "includesString",
      }),
      columnHelper.accessor("margin_perc", {
        cell: (info) => formatToTwoDecimalPlaces(info.getValue()),
        header: () => t("margin_perc"),
        filterFn: "includesString",
      }),
      columnHelper.accessor("new_carriers", {
        cell: (info) => info.getValue(),
        header: () => t("new_carriers"),
        filterFn: "includesString",
      }),
      columnHelper.accessor("new_clients", {
        cell: (info) => info.getValue(),
        header: () => t("new_clients"),
        filterFn: "includesString",
      }),
      columnHelper.accessor("order_count", {
        cell: (info) => info.getValue(),
        header: () => t("order_count"),
        filterFn: "includesString",
      }),
      columnHelper.accessor("order_per_period", {
        cell: (info) => info.getValue(),
        header: () => t("order_per_period"),
        filterFn: "includesString",
      }),
      columnHelper.accessor("revenue", {
        cell: (info) => info.getValue(),
        header: () => t("revenue"),
        filterFn: "includesString",
      }),
      columnHelper.accessor("revenue_assigned", {
        cell: (info) => info.getValue(),
        header: () => t("revenue_assigned"),
        filterFn: "includesString",
      }),
      columnHelper.accessor("revenue_per_order", {
        cell: (info) => formatToTwoDecimalPlaces(info.getValue()),
        header: () => t("revenue_per_order"),
        filterFn: "includesString",
      }),
    ],
    [data, t]
  );

  const reload = (): void => {
    setData(null);
    getData().then((res: unknown) => setData(res as DataModelBase));
  };

  return (
    <div className="">
      <DefaultButton onClick={reload}>{t("Load data")}</DefaultButton>
      <SkeletonCellTable />
      <DefaultTable columns={columns} data={data?.data_table}></DefaultTable>
    </div>
  );
};
