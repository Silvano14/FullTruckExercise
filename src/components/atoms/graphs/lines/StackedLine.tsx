// https://echarts.apache.org/examples/en/editor.html?c=polar-endAngle
import ReactEcharts from "echarts-for-react";
import { FC, useMemo } from "react";
import { useTranslation } from "react-i18next";

type PolarEndAngleProps = {
  dataActiveElements: number[];
  dataNewElements: number[];
};

export const PolarEndAngle: FC<PolarEndAngleProps> = ({
  dataActiveElements = [],
  dataNewElements = [],
}) => {
  const { t } = useTranslation();

  const options = useMemo(
    () => ({
      tooltip: {},
      angleAxis: [
        {
          type: "category",
          polarIndex: 0,
          startAngle: 90,
          endAngle: 0,
          data: [t("new_carriers"), t("new_clients")],
        },
        {
          type: "category",
          polarIndex: 1,
          startAngle: -90,
          endAngle: -180,
          data: [t("active_carrier"), t("active_client")],
        },
      ],
      radiusAxis: [{ polarIndex: 0 }, { polarIndex: 1 }],
      polar: [{}, {}],
      series: [
        {
          type: "bar",
          polarIndex: 0,
          data: dataNewElements,
          coordinateSystem: "polar",
        },
        {
          type: "bar",
          polarIndex: 1,
          data: dataActiveElements,
          coordinateSystem: "polar",
        },
      ],
    }),
    [dataActiveElements, dataNewElements, t]
  );

  return <ReactEcharts option={options}></ReactEcharts>;
};
