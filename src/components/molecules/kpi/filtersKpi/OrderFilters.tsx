import { DefaultInput } from "@atoms/input/DefaultInput";
import DefaultTitle from "@atoms/text/DefaultTitle";
import { Dispatch, FC, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

type OrderFiltersProps = {
  setOrderTotal: Dispatch<SetStateAction<number | null>>;
  setOrderPercentage: Dispatch<SetStateAction<number | null>>;
};

export const OrderFilters: FC<OrderFiltersProps> = ({
  setOrderTotal,
  setOrderPercentage,
}) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-2">
      <DefaultTitle>{t("filter_order")}</DefaultTitle>
      <div className="flex gap-2">
        <div>
          <DefaultInput
            type="number"
            label={t("total")}
            placeholder="0.00"
            labelPlacement="inside"
            startContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-default-400 text-small">N°</span>
              </div>
            }
            onChange={(value) => {
              if (
                value &&
                typeof value === "string" &&
                !isNaN(parseFloat(value))
              ) {
                setOrderTotal(parseFloat(value));
                return;
              }
              setOrderTotal(null);
            }}
          />
        </div>
        <div>
          <DefaultInput
            type="number"
            label={t("abs_perc_on_tot_short")}
            placeholder="0"
            labelPlacement="inside"
            startContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-default-400 text-small">%</span>
              </div>
            }
            onChange={(value) => {
              if (
                value &&
                typeof value === "string" &&
                !isNaN(parseFloat(value))
              ) {
                setOrderPercentage(parseFloat(value));
                return;
              }
              setOrderPercentage(null);
            }}
          />
        </div>
      </div>
    </div>
  );
};
