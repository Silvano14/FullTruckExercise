import ReactEcharts from "echarts-for-react";
import { ParamsLabelFormatter } from "models/graphTypes";
import { FC, useMemo } from "react";

type DataRow = [number, number, string];

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
      tooltip: {},
      xAxis: { name: "amount" },
      yAxis: { type: "category" },
      visualMap: {
        orient: "horizontal",
        min: 0,
        max: 50,
        text: ["High Score", "Low Score"],
        dimension: 0,
        inRange: {
          color: ["#FD665F", "#FFCE34", "#65B581"],
        },
      },
      series: [
        {
          type: "bar",
          encode: {
            x: "amount",
            y: "product",
          },
          label: {
            show: true,
            formatter: (val: ParamsLabelFormatter): string => {
              if (Array.isArray(val.value)) {
                return val.value[1];
              }
              return "-";
            },
          },
        },
      ],
    }),
    [source]
  );

  return <ReactEcharts option={options}></ReactEcharts>;
};
