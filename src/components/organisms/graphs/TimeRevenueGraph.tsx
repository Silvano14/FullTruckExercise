import { HistogramLine } from "@atoms/graphs/histograms/HistogramLine";
import { BarChartSkeleton } from "@molecules/skeleton/BarChartSkeleton";
import DefaultTitle from "@atoms/text/DefaultTitle";
import { DataContext } from "contexts/context";
import { FC, useContext, useMemo } from "react";
import { useTranslation } from "react-i18next";

export const TimeRevenueGraph: FC = () => {
  const { data, isFetched } = useContext(DataContext);
  const { t } = useTranslation();

  const [xAsisLabel, lineData, revenue] = useMemo(
    () =>
      data.histograms.time_revenue.data.reduce<[string[], number[], number[]]>(
        (acc, { date, margin_abs, revenue }) => {
          acc[0].push(date);
          acc[1].push(margin_abs);
          acc[2].push(revenue);
          return acc;
        },
        [[], [], []]
      ),
    [data.histograms.time_revenue.data]
  );

  return (
    <div>
      <DefaultTitle className="text-2xl font-bold">
        {t("time_revenue")}
      </DefaultTitle>
      {isFetched ? (
        <HistogramLine
          xAsisLabel={xAsisLabel}
          lineData={lineData}
          data={revenue}
        />
      ) : (
        <BarChartSkeleton isLoaded={false}></BarChartSkeleton>
      )}
    </div>
  );
};
