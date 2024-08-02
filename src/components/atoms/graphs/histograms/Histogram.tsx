import ReactEcharts from "echarts-for-react";
import { FC, useMemo } from "react";

type HistogramType = {
  xAsisLabel: string[];
  data: number[];
};

export const Histogram: FC<HistogramType> = ({
  data = [1],
  xAsisLabel = ["sample"],
}) => {
  const options = useMemo(
    () => ({
      grid: { top: 20, right: 40, bottom: 20, left: 40 },
      xAxis: {
        type: "category",
        data: xAsisLabel,
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: data,
          type: "bar",
          smooth: true,
        },
      ],
      tooltip: {
        trigger: "axis",
      },
    }),
    [data, xAsisLabel]
  );

  return <ReactEcharts option={options}></ReactEcharts>;
};

export default Histogram;
