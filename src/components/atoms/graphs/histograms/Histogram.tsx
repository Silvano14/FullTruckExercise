import ReactEcharts from "echarts-for-react";
import { ParamsLabelFormatter } from "models/graphTypes";
import { FC, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { formatToTwoDecimalPlaces } from "utils/numberFormatter";

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
      tooltip: {},
      legend: {
        data: [t("margin_perc")],
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
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: t("margin_perc"),
          data: data,
          type: "bar",
          smooth: true,
          label: {
            show: true,
            formatter: (val: ParamsLabelFormatter): string => {
              return formatToTwoDecimalPlaces(val.value as number) + " %";
            },
          },
        },
      ],
    }),
    [data, t, xAsisLabel]
  );

  return <ReactEcharts option={options}></ReactEcharts>;
};
