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

export const Order: FC<KpiCardProps> = ({ data }) => {
  return (
    <>
      <DefaultTitle className="text-lg font-bold" level={2}>
        {t("order")}
      </DefaultTitle>
      <Divider />

      <div className="flex justify-between items-center">
        <DefaultTitle className="text-lg font-bold" level={2}>
          {t("totals")}
        </DefaultTitle>
        <DefaultParagraph className="text-lg font-bold">
          {data.order_count}
        </DefaultParagraph>
      </div>

      <div className="flex justify-between items-center">
        <DefaultParagraph>{t("perc_on_tot") + ":"}</DefaultParagraph>
        <DefaultParagraph title={data.revenue_perc_on_tot + ""}>
          {formatToTwoDecimalPlaces(data.order_count_perc_on_tot) + "%"}
        </DefaultParagraph>
      </div>
    </>
  );
};
