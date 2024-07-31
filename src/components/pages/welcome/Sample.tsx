import { DefaultTable } from "@atoms/table/DefaultTable";
import { Button, Container } from "@mui/material";
import { createColumnHelper } from "@tanstack/react-table";
import useStatistics from "hook/useStatistics";
import { DataModelBase } from "models/DataType";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

const columnHelper = createColumnHelper();

export const MyComponent: FC = () => {
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
      columnHelper.accessor("id_nastro", {
        cell: (info) => info.getValue(),
        header: () => t("idTape"),
        filterFn: "includesString",
      }),
      columnHelper.accessor("tipo_attivita", {
        cell: (info) => info.getValue(),
        header: () => t("activityType"),
        filterFn: "includesString",
      }),
      columnHelper.accessor("id_corsa", {
        cell: (info) => info.getValue(),
        header: () => t("raceId"),
        filterFn: "includesString",
      }),
      columnHelper.accessor("id_punto_origine", {
        cell: (info) => info.getValue(),
        header: () => t("originPointId"),
        filterFn: "includesString",
      }),
      columnHelper.accessor("id_punto_destinazione", {
        cell: (info) => info.getValue(),
        header: () => t("destinationPointId"),
        filterFn: "includesString",
      }),
      columnHelper.accessor("orario_inizio_attivita", {
        cell: (info) => info.getValue(),
        header: () => t("activityStartTime"),
        filterFn: "includesString",
      }),
      columnHelper.accessor("orario_fine_attivita", {
        cell: (info) => info.getValue(),
        header: () => t("activityEndTime"),
        filterFn: "includesString",
      }),
      columnHelper.accessor("km", {
        cell: (info) => info.getValue(),
        header: () => t("km"),
        filterFn: "includesString",
      }),
      columnHelper.accessor("TM", {
        cell: (info) => info.getValue(),
        header: () => t("TM"),
        filterFn: "includesString",
      }),
    ],
    [t]
  );

  useEffect(() => {
    getData().then((res: unknown) => setData(res as DataModelBase));
  }, [fetchStatistics, getData]);

  const reload = (): void => {
    getData().then((res: unknown) => setData(res as DataModelBase));
    console.log(data);
  };

  return (
    <Container>
      <Button onClick={reload}>{t("Load data")}</Button>
      <DefaultTable columns={columns}></DefaultTable>
    </Container>
  );
};
