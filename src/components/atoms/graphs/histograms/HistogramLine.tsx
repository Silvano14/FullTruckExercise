import ReactEcharts from "echarts-for-react";
import { FC, useMemo } from "react";
import { useTranslation } from "react-i18next";

type HistogramType = {
  xAsisLabel: string[];
  lineData: number[];
  data: number[];
};

export const HistogramLine: FC<HistogramType> = ({
  data = [1],
  lineData = [1],
  xAsisLabel = ["sample"],
}) => {
  const { t } = useTranslation();
  const options = useMemo(
    () => ({
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          crossStyle: {
            color: "#999",
          },
        },
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ["line", "bar"] },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      legend: {
        data: [t("revenue"), t("margin_abs")],
      },
      xAxis: [
        {
          type: "category",
          data: xAsisLabel,
          axisPointer: {
            type: "shadow",
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          name: t("margin_abs"),
        },
        {
          type: "value",
          name: t("revenue"),
          axisLabel: {
            formatter: "{value} €",
          },
        },
      ],
      series: [
        {
          name: t("revenue"),
          type: "bar",
          tooltip: {
            valueFormatter: function (value: number): string {
              return value + " €";
            },
          },
          data: data,
        },
        {
          name: t("margin_abs"),
          type: "line",
          yAxisIndex: 1,
          data: lineData,
        },
      ],
    }),
    [data, lineData, t, xAsisLabel]
  );

  return <ReactEcharts option={options}></ReactEcharts>;
};
