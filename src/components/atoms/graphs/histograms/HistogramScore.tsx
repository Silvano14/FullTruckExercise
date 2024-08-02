import ReactEcharts from "echarts-for-react";
import { FC, useMemo } from "react";

export type DataRow = [number, number, string];

export type DataArray = [[string, string, string], ...DataRow[]];

type HistogramType = {
  source: DataArray;
};

export const HistogramScore: FC<HistogramType> = ({ source = [] }) => {
  const options = useMemo(
    () => ({
      dataset: {
        source: source,
      },
      xAxis: { name: "amount" },
      yAxis: { type: "category" },
      visualMap: {
        orient: "horizontal",
        min: 0,
        max: 50,
        text: ["High Score", "Low Score"],
        dimension: 0,
        inRange: {
          color: ["#65B581", "#FFCE34", "#FD665F"],
        },
      },
      series: [
        {
          type: "bar",
          encode: {
            // Map the "amount" column to X axis.
            x: "amount",
            // Map the "product" column to Y axis
            y: "product",
          },
        },
      ],
    }),
    [source]
  );

  return <ReactEcharts style={{height: "500px"}} option={options}></ReactEcharts>;
};
