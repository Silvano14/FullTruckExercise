import { DefaultSkeleton } from "@atoms/skeletons/DefaultSkeleton";
import { DefaultTable } from "@atoms/table/DefaultTable";
import DefaultParagraph from "@atoms/text/DefaultParagraph";
import { createColumnHelper } from "@tanstack/react-table";
import { DataContext } from "contexts/context";
import { DataTableEntryBase } from "models/data/DataType";
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
          <DefaultSkeleton isLoaded={isFetched}>
            {info.getValue()}
          </DefaultSkeleton>
        ),
        header: (info) => (
          <DefaultParagraph className="truncate" title={t(info.column.id)}>
            {t(info.column.id)}
          </DefaultParagraph>
        ),
        filterFn: "includesString",
      }),
      columnHelper.accessor("active_client", {
        cell: (info) => (
          <DefaultSkeleton isLoaded={isFetched}>
            {info.getValue()}
          </DefaultSkeleton>
        ),
        header: (info) => (
          <DefaultParagraph className="truncate" title={t(info.column.id)}>
            {t(info.column.id)}
          </DefaultParagraph>
        ),
        filterFn: "includesString",
      }),
      columnHelper.accessor("aggregate_date", {
        cell: (info) => (
          <DefaultSkeleton isLoaded={isFetched}>
            {formatDate(info.getValue(), t)}
          </DefaultSkeleton>
        ),
        header: (info) => (
          <DefaultParagraph className="truncate" title={t(info.column.id)}>
            {t(info.column.id)}
          </DefaultParagraph>
        ),
        filterFn: "includesString",
      }),
      columnHelper.accessor("assigned_count", {
        cell: (info) => (
          <DefaultSkeleton isLoaded={isFetched}>
            {info.getValue()}
          </DefaultSkeleton>
        ),
        header: () => (
          <DefaultParagraph className="truncate" title={t("assigned_count")}>
            {t("assigned_count")}
          </DefaultParagraph>
        ),
        filterFn: "includesString",
      }),
      columnHelper.accessor("margin_abs", {
        cell: (info) => (
          <DefaultSkeleton isLoaded={isFetched}>
            {info.getValue()}
          </DefaultSkeleton>
        ),
        header: (info) => (
          <DefaultParagraph className="truncate" title={t(info.column.id)}>
            {t(info.column.id)}
          </DefaultParagraph>
        ),
        // filterFn: "includesString",
        meta: { filterVariant: "range" },
      }),
      columnHelper.accessor("margin_abs_per_order", {
        cell: (info) => (
          <DefaultSkeleton isLoaded={isFetched}>
            {formatToTwoDecimalPlaces(info.getValue())}
          </DefaultSkeleton>
        ),
        header: () => (
          <DefaultParagraph
            className="truncate"
            title={t("margin_abs_per_order")}
          >
            {t("margin_abs_per_order")}
          </DefaultParagraph>
        ),
        filterFn: "includesString",
      }),
      columnHelper.accessor("margin_perc", {
        cell: (info) => (
          <DefaultSkeleton isLoaded={isFetched}>
            {formatToTwoDecimalPlaces(info.getValue()) + " %"}
          </DefaultSkeleton>
        ),
        header: () => (
          <DefaultParagraph className="truncate" title={t("margin_perc")}>
            {t("margin_perc")}
          </DefaultParagraph>
        ),
        filterFn: "includesString",
      }),
      columnHelper.accessor("new_carriers", {
        cell: (info) => (
          <DefaultSkeleton isLoaded={isFetched}>
            {info.getValue()}
          </DefaultSkeleton>
        ),
        header: () => (
          <DefaultParagraph className="truncate" title={t("new_carriers")}>
            {t("new_carriers")}
          </DefaultParagraph>
        ),
        filterFn: "includesString",
      }),
      columnHelper.accessor("new_clients", {
        cell: (info) => (
          <DefaultSkeleton isLoaded={isFetched}>
            {info.getValue()}
          </DefaultSkeleton>
        ),
        header: () => (
          <DefaultParagraph className="truncate" title={t("new_clients")}>
            {t("new_clients")}
          </DefaultParagraph>
        ),
        filterFn: "includesString",
      }),
      columnHelper.accessor("order_per_period", {
        cell: (info) => (
          <DefaultSkeleton isLoaded={isFetched}>
            {info.getValue()}
          </DefaultSkeleton>
        ),
        header: (info) => (
          <DefaultParagraph className="truncate" title={t(info.column.id)}>
            {t(info.column.id)}
          </DefaultParagraph>
        ),
        filterFn: "includesString",
      }),
      columnHelper.accessor("order_count", {
        cell: (info) => (
          <DefaultSkeleton isLoaded={isFetched}>
            {info.getValue()}
          </DefaultSkeleton>
        ),
        header: (info) => (
          <DefaultParagraph className="truncate" title={t(info.column.id)}>
            {t(info.column.id)}
          </DefaultParagraph>
        ),
        filterFn: "includesString",
      }),
      columnHelper.accessor("revenue_assigned", {
        cell: (info) => (
          <DefaultSkeleton isLoaded={isFetched}>
            {info.getValue() + " €"}
          </DefaultSkeleton>
        ),
        header: (info) => (
          <DefaultParagraph className="truncate" title={t(info.column.id)}>
            {t(info.column.id)}
          </DefaultParagraph>
        ),
        filterFn: "includesString",
      }),
      columnHelper.accessor("revenue_per_order", {
        cell: (info) => (
          <DefaultSkeleton isLoaded={isFetched}>
            {formatToTwoDecimalPlaces(info.getValue()) + " €"}
          </DefaultSkeleton>
        ),
        header: (info) => (
          <DefaultParagraph className="truncate" title={t(info.column.id)}>
            {t(info.column.id)}
          </DefaultParagraph>
        ),
        filterFn: "includesString",
      }),
      columnHelper.accessor("revenue", {
        cell: (info) => (
          <DefaultSkeleton isLoaded={isFetched}>
            {info.getValue() + " €"}
          </DefaultSkeleton>
        ),
        header: (info) => (
          <DefaultParagraph className="truncate" title={t(info.column.id)}>
            {t(info.column.id)}
          </DefaultParagraph>
        ),
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
