import { DefaultTable } from "@atoms/table/DefaultTable";
import { SkeletonCellTable } from "@atoms/table/SkeletonCellTable";
import { createColumnHelper } from "@tanstack/react-table";
import { DataContext } from "contexts/context";
import { DataTableEntryBase } from "models/DataType";
import { FC, useContext, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { formatDate } from "utils/dateFormatter";
import { formatToTwoDecimalPlaces } from "utils/numberFormatter";

const columnHelper = createColumnHelper<DataTableEntryBase>();

export const TableData: FC = () => {
  const { t } = useTranslation();
  const { data, isFetched } = useContext(DataContext);

  const columns = useMemo(
    () => [
      columnHelper.accessor("active_carrier", {
        cell: (info) => (
          <SkeletonCellTable isLoaded={isFetched}>
            {info.getValue()}
          </SkeletonCellTable>
        ),
        header: () => t("active_carrier"),
        filterFn: "includesString",
      }),
      columnHelper.accessor("active_client", {
        cell: (info) => (
          <SkeletonCellTable isLoaded={isFetched}>
            {info.getValue()}
          </SkeletonCellTable>
        ),
        header: () => t("active_client"),
        filterFn: "includesString",
      }),
      columnHelper.accessor("aggregate_date", {
        cell: (info) => (
          <SkeletonCellTable isLoaded={isFetched}>
            {formatDate(info.getValue(), t)}
          </SkeletonCellTable>
        ),
        header: () => t("aggregate_date"),
        filterFn: "includesString",
      }),
      columnHelper.accessor("assigned_count", {
        cell: (info) => (
          <SkeletonCellTable isLoaded={isFetched}>
            {info.getValue()}
          </SkeletonCellTable>
        ),
        header: () => t("assigned_count"),
        filterFn: "includesString",
      }),
      columnHelper.accessor("margin_abs", {
        cell: (info) => (
          <SkeletonCellTable isLoaded={isFetched}>
            {info.getValue()}
          </SkeletonCellTable>
        ),
        header: () => t("margin_abs"),
        filterFn: "includesString",
      }),
      columnHelper.accessor("margin_abs_per_order", {
        cell: (info) => (
          <SkeletonCellTable isLoaded={isFetched}>
            {formatToTwoDecimalPlaces(info.getValue())}
          </SkeletonCellTable>
        ),
        header: () => t("margin_abs_per_order"),
        filterFn: "includesString",
      }),
      columnHelper.accessor("margin_perc", {
        cell: (info) => (
          <SkeletonCellTable isLoaded={isFetched}>
            {formatToTwoDecimalPlaces(info.getValue()) + " %"}
          </SkeletonCellTable>
        ),
        header: () => t("margin_perc"),
        filterFn: "includesString",
      }),
      columnHelper.accessor("new_carriers", {
        cell: (info) => (
          <SkeletonCellTable isLoaded={isFetched}>
            {info.getValue()}
          </SkeletonCellTable>
        ),
        header: () => t("new_carriers"),
        filterFn: "includesString",
      }),
      columnHelper.accessor("new_clients", {
        cell: (info) => (
          <SkeletonCellTable isLoaded={isFetched}>
            {info.getValue()}
          </SkeletonCellTable>
        ),
        header: () => t("new_clients"),
        filterFn: "includesString",
      }),
      columnHelper.accessor("order_per_period", {
        cell: (info) => (
          <SkeletonCellTable isLoaded={isFetched}>
            {info.getValue()}
          </SkeletonCellTable>
        ),
        header: () => t("order_per_period"),
        filterFn: "includesString",
      }),
      columnHelper.accessor("order_count", {
        cell: (info) => (
          <SkeletonCellTable isLoaded={isFetched}>
            {info.getValue()}
          </SkeletonCellTable>
        ),
        header: () => t("order_count"),
        filterFn: "includesString",
      }),
      columnHelper.accessor("revenue_assigned", {
        cell: (info) => (
          <SkeletonCellTable isLoaded={isFetched}>
            {info.getValue() + " €"}
          </SkeletonCellTable>
        ),
        header: () => t("revenue_assigned"),
        filterFn: "includesString",
      }),
      columnHelper.accessor("revenue_per_order", {
        cell: (info) => (
          <SkeletonCellTable isLoaded={isFetched}>
            {formatToTwoDecimalPlaces(info.getValue()) + " €"}
          </SkeletonCellTable>
        ),
        header: () => t("revenue_per_order"),
        filterFn: "includesString",
      }),
      columnHelper.accessor("revenue", {
        cell: (info) => (
          <SkeletonCellTable isLoaded={isFetched}>
            {info.getValue() + " €"}
          </SkeletonCellTable>
        ),
        header: () => t("revenue"),
        filterFn: "includesString",
      }),
    ],
    [isFetched, t]
  );

  return (
    <div className="flex flex-col gap-4">
      <DefaultTable columns={columns} data={data?.data_table}></DefaultTable>
    </div>
  );
};
