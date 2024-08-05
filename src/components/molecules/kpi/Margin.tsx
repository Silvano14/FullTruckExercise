import DefaultParagraph from "@atoms/text/DefaultParagraph";
import DefaultTitle from "@atoms/text/DefaultTitle";
import { Divider } from "@nextui-org/react";
import { t } from "i18next";
import { KPIBase } from "models/data/DataType";
import { FC } from "react";
import { formatToTwoDecimalPlaces } from "utils/numberFormatter";

type KpiCardProps = {
  data: KPIBase;
};

export const Margin: FC<KpiCardProps> = ({ data }) => {
  return (
    <>
      <DefaultTitle className="text-lg font-bold" level={2}>
        {t("margin")}
      </DefaultTitle>
      <Divider />

      <div className="flex justify-between items-center">
        <DefaultTitle className="text-lg font-bold" level={2}>
          {t("abs") + ":"}
        </DefaultTitle>
        <DefaultParagraph
          title={data.margin_abs + ""}
          className="text-lg font-bold"
        >
          {data.margin_abs}
        </DefaultParagraph>
      </div>

      <div className="flex justify-between items-center">
        <DefaultParagraph>{t("abs_per_order") + ":"}</DefaultParagraph>
        <DefaultParagraph title={data.margin_abs_per_order + ""}>
          {data.margin_abs_per_order}
        </DefaultParagraph>
      </div>

      <div className="flex justify-between items-center">
        <DefaultParagraph>{t("abs_perc_on_tot") + ":"}</DefaultParagraph>
        <DefaultParagraph title={data.margin_abs_perc_on_tot + ""}>
          {formatToTwoDecimalPlaces(data.margin_abs_perc_on_tot) + "%"}
        </DefaultParagraph>
      </div>

      <div className="flex justify-between items-center">
        <DefaultParagraph>{t("perc") + ":"}</DefaultParagraph>
        <DefaultParagraph title={data.margin_perc + ""}>
          {formatToTwoDecimalPlaces(data.margin_perc) + "%"}
        </DefaultParagraph>
      </div>
    </>
  );
};
