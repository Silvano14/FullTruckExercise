import { HistogramLine } from "@atoms/graphs/histograms/HistogramLine";
import DefaultTitle from "@atoms/text/DefaultTitle";
import { DataContext } from "contexts/context";
import { FC, useContext, useMemo } from "react";
import { useTranslation } from "react-i18next";

export const TimeRevenueGraph: FC = () => {
  const { data } = useContext(DataContext);
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
      <DefaultTitle>{t("time_revenue")}</DefaultTitle>
      <HistogramLine
        xAsisLabel={xAsisLabel}
        lineData={lineData}
        data={revenue}
      />
    </div>
  );
};
