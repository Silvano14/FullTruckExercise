import { DefaultButton } from "@atoms/buttons/DefaultButton";
import { DefaultTable } from "@atoms/table/DefaultTable";
import { SkeletonCellTable } from "@atoms/table/SkeletonCellTable";
import { Routes } from "@shared/routes/routes";
import { createColumnHelper } from "@tanstack/react-table";
import { DataContext } from "contexts/context";
import useStatistics from "hook/useStatistics";
import { DataModelBase, DataTableEntryBase } from "models/DataType";
import { FC, useCallback, useContext, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { formatDate } from "utils/dateFormatter";
import { formatToTwoDecimalPlaces } from "utils/numberFormatter";

const columnHelper = createColumnHelper<DataTableEntryBase>();

const payload = {
  aggregateBy: "day" as const,
  timeTarget: "pickup_date" as const,
  startDate: "",
  endDate: "",
};
export const TableData: FC = () => {
  const { t } = useTranslation();
  const { fetchStatistics, isFetched } = useStatistics();
  const { data, setData } = useContext(DataContext);

  const getData = useCallback(
    () => fetchStatistics(payload),
    [fetchStatistics]
  );

  useEffect(() => {
    getData().then((res: unknown) => setData(res as DataModelBase));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            {formatDate(info.getValue())}
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
            {formatToTwoDecimalPlaces(info.getValue()) + " %"}
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
      columnHelper.accessor("order_count", {
        cell: (info) => (
          <SkeletonCellTable isLoaded={isFetched}>
            {info.getValue()}
          </SkeletonCellTable>
        ),
        header: () => t("order_count"),
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
      columnHelper.accessor("revenue", {
        cell: (info) => (
          <SkeletonCellTable isLoaded={isFetched}>
            {info.getValue()}
          </SkeletonCellTable>
        ),
        header: () => t("revenue"),
        filterFn: "includesString",
      }),
      columnHelper.accessor("revenue_assigned", {
        cell: (info) => (
          <SkeletonCellTable isLoaded={isFetched}>
            {info.getValue()}
          </SkeletonCellTable>
        ),
        header: () => t("revenue_assigned"),
        filterFn: "includesString",
      }),
      columnHelper.accessor("revenue_per_order", {
        cell: (info) => (
          <SkeletonCellTable isLoaded={isFetched}>
            {formatToTwoDecimalPlaces(info.getValue())}
          </SkeletonCellTable>
        ),
        header: () => t("revenue_per_order"),
        filterFn: "includesString",
      }),
    ],
    [isFetched, t]
  );

  const reload = (): void => {
    getData().then((res: unknown) => setData(res as DataModelBase));
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <Link to={Routes.homepage}>{t("back")}</Link>
        <DefaultButton onClick={reload}>{t("Reload data")}</DefaultButton>
        <Link to={Routes.graphs}>{t("graph")}</Link>
      </div>
      <DefaultTable columns={columns} data={data?.data_table}></DefaultTable>
    </div>
  );
};
