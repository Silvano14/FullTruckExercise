import DefaultParagraph from "@atoms/text/DefaultParagraph";
import { Divider } from "@nextui-org/react";
import { DataModelBase } from "models/data/DataType";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { formatToTwoDecimalPlaces } from "utils/numberFormatter";

type TotalsProps = {
  scalars: DataModelBase["scalars"];
};

const fieldStyle = "text-xl text-gray-400";
const wrapperLineTextStyle =
  "flex justify-between items-center text-nowrap gap-4";
export const Totals: FC<TotalsProps> = ({ scalars }) => {
  const { t } = useTranslation();
  return (
    <div className="flex gap-4">
      <div className="flex justify-evenly flex-col flex-1 gap-6 text-2xl">
        <div className="flex justify-between items-center">
          <DefaultParagraph className={fieldStyle}>
            {t("total_assigned_count") + ":"}
          </DefaultParagraph>
          <DefaultParagraph>{scalars.total_assigned_count}</DefaultParagraph>
        </div>
        <div className="flex justify-between items-center">
          <DefaultParagraph className={fieldStyle}>
            {t("total_margin_abs") + ":"}
          </DefaultParagraph>
          <DefaultParagraph>{scalars.total_margin_abs}</DefaultParagraph>
        </div>
        <div className="flex justify-between items-center">
          <DefaultParagraph className={fieldStyle}>
            {t("total_order_count") + ":"}
          </DefaultParagraph>
          <DefaultParagraph>{scalars.total_order_count}</DefaultParagraph>
        </div>
        <div className={wrapperLineTextStyle}>
          <DefaultParagraph className={fieldStyle}>
            {t("total_revenue") + ":"}
          </DefaultParagraph>
          <DefaultParagraph>{scalars.total_revenue + " €"}</DefaultParagraph>
        </div>
      </div>
      <Divider orientation="vertical" className="h-auto"></Divider>
      <div className="flex justify-between flex-col flex-1 gap-6 text-2xl">
        <div className={wrapperLineTextStyle}>
          <DefaultParagraph className={fieldStyle}>
            {t("average_margin_perc") + ":"}
          </DefaultParagraph>
          <DefaultParagraph>
            {formatToTwoDecimalPlaces(scalars.average_margin_perc) + " %"}
          </DefaultParagraph>
        </div>
        <div className={wrapperLineTextStyle}>
          <DefaultParagraph className={fieldStyle}>
            {t("avg_order_margin_abs") + ":"}
          </DefaultParagraph>
          <DefaultParagraph>
            {formatToTwoDecimalPlaces(scalars.avg_order_margin_abs) + " %"}
          </DefaultParagraph>
        </div>
        <div className={wrapperLineTextStyle}>
          <DefaultParagraph className={fieldStyle}>
            {t("avg_order_revenue") + ":"}
          </DefaultParagraph>
          <DefaultParagraph title={scalars.avg_order_revenue + ""}>
            {formatToTwoDecimalPlaces(scalars.avg_order_revenue) + " €"}
          </DefaultParagraph>
        </div>
      </div>
    </div>
  );
};
