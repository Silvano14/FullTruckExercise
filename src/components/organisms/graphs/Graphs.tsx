import Histogram from "@atoms/graphs/histograms/Histogram";
import { DataContext } from "contexts/context";
import { FC, useContext, useMemo } from "react";

export const Graphs: FC = () => {
  const { data } = useContext(DataContext);

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
  console.log(date);
  return (
    <div>
      <Histogram xAsisLabel={date} data={dataHistogram}></Histogram>
    </div>
  );
};
