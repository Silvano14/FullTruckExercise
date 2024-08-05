import {
  DataArray,
  HistogramScore,
} from "@atoms/graphs/histograms/HistogramScore";
import { BarChartVerticalSkeleton } from "@atoms/skeletons/BarChartVerticalSkeleton";
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
      <DefaultTitle className="text-2xl font-bold">
        {t("time_order_count")}
      </DefaultTitle>
      {isFetched ? (
        <HistogramScore source={source} />
      ) : (
        <BarChartVerticalSkeleton />
      )}
    </div>
  );
};
