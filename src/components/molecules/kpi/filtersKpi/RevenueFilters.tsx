import { DefaultInput } from "@atoms/input/DefaultInput";
import DefaultTitle from "@atoms/text/DefaultTitle";
import { Dispatch, FC, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

type RevenueFiltersProps = {
  setRevenuePrice: Dispatch<SetStateAction<number | null>>;
  setRevenueOrder: Dispatch<SetStateAction<number | null>>;
  setRevenuePercentage: Dispatch<SetStateAction<number | null>>;
};

export const RevenueFilters: FC<RevenueFiltersProps> = ({
  setRevenuePrice,
  setRevenueOrder,
  setRevenuePercentage,
}) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-2">
      <DefaultTitle>{t("filter_revenue")}</DefaultTitle>
      <div className="flex gap-2">
        <div>
          <DefaultInput
            type="number"
            label={t("total")}
            placeholder="0.00"
            labelPlacement="inside"
            startContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-default-400 text-small">€</span>
              </div>
            }
            onChange={(value) => {
              if (
                value &&
                typeof value === "string" &&
                !isNaN(parseFloat(value))
              ) {
                setRevenuePrice(parseFloat(value));
                return;
              }
              setRevenuePrice(null);
            }}
          />
        </div>
        <div>
          <DefaultInput
            type="number"
            label={t("per_order")}
            placeholder="0"
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
                setRevenueOrder(parseFloat(value));
                return;
              }
              setRevenueOrder(null);
            }}
          />
        </div>
        <div className="flex gap-2">
          <div>
            <DefaultInput
              type="number"
              label={t("abs_perc_on_tot_short")}
              placeholder="0.00"
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
                  setRevenuePercentage(parseFloat(value));
                  return;
                }
                setRevenuePercentage(null);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
