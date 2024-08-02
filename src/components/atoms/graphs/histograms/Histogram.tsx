import ReactEcharts from "echarts-for-react";
import { FC, useMemo } from "react";
import { useTranslation } from "react-i18next";

type HistogramType = {
  xAsisLabel: string[];
  data: number[];
};

export const Histogram: FC<HistogramType> = ({
  data = [1],
  xAsisLabel = ["sample"],
}) => {
  const { t } = useTranslation();
  const options = useMemo(
    () => ({
      grid: { top: 20, right: 40, bottom: 20, left: 40 },
      yAxis: {
        type: "value",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          crossStyle: {
            color: "#999",
          },
        },
      },
      legend: {
        data: [t("revenue"), t("margin_abs")],
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ["line", "bar"] },
          restore: { show: true },
          saveAsImage: { show: true },
        },
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
      series: [
        {
          data: data,
          type: "bar",
          smooth: true,
        },
      ],
    }),
    [data, t, xAsisLabel]
  );

  return <ReactEcharts option={options}></ReactEcharts>;
};
