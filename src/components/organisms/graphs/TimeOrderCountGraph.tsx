import {
  DataArray,
  HistogramScore,
} from "@atoms/graphs/histograms/HistogramScore";
import { DefaultSkeleton } from "@atoms/table/DefaultSkeleton";
import DefaultTitle from "@atoms/text/DefaultTitle";
import { DataContext } from "contexts/context";
import { FC, useContext, useMemo } from "react";
import { useTranslation } from "react-i18next";

export const TimeOrderCountGraph: FC = () => {
  const { data, isFetched } = useContext(DataContext);
  const { t } = useTranslation();

  const source = useMemo<DataArray>(
    () =>
      [
        ["score", "amount", "product"],
        ...data.histograms.time_order_count.data.map(
          ({ date, order_count }) => [order_count, order_count, date]
        ),
      ] as DataArray,
    [data.histograms.time_order_count.data]
  );

  return (
    <div>
      <DefaultTitle>{t("time_order_count")}</DefaultTitle>
      <DefaultSkeleton isLoaded={isFetched}>
        <HistogramScore source={source} />
      </DefaultSkeleton>
    </div>
  );
};
