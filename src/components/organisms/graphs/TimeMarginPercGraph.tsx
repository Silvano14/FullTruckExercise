import { Histogram } from "@atoms/graphs/histograms/Histogram";
import { BarChartSkeleton } from "@atoms/skeletons/BarChartSkeleton";
import { DefaultSkeleton } from "@atoms/skeletons/DefaultSkeleton";
import DefaultTitle from "@atoms/text/DefaultTitle";
import { DataContext } from "contexts/context";
import { FC, useContext, useMemo } from "react";
import { useTranslation } from "react-i18next";

export const TimeMarginPercGraph: FC = () => {
  const { data, isFetched } = useContext(DataContext);
  const { t } = useTranslation();

  const [date, dataHistogram] = useMemo(
    () =>
      data.histograms.time_margin_perc.data.reduce<[string[], number[]]>(
        (acc, { date, margin_perc }) => {
          acc[0].push(date);
          acc[1].push(margin_perc);
          return acc;
        },
        [[], []]
      ),
    [data.histograms.time_margin_perc.data]
  );

  return (
    <>
      <DefaultTitle className="text-2xl font-bold">
        {t("time_margin_perc")}
      </DefaultTitle>
      {isFetched ? (
        <Histogram xAsisLabel={date} data={dataHistogram}></Histogram>
      ) : (
        <BarChartSkeleton isLoaded={false}></BarChartSkeleton>
      )}
    </>
  );
};
