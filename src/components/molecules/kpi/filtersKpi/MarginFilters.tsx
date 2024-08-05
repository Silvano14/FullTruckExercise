import { DefaultInput } from "@atoms/input/DefaultInput";
import DefaultTitle from "@atoms/text/DefaultTitle";
import { Dispatch, FC, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

type MarginFiltersProps = {
  setMarginTotal: Dispatch<SetStateAction<number | null>>;
  setMarginOrder: Dispatch<SetStateAction<number | null>>;
  setMarginPercentageOnTot: Dispatch<SetStateAction<number | null>>;
  setMarginPercentage: Dispatch<SetStateAction<number | null>>;
};

export const MarginFilters: FC<MarginFiltersProps> = ({
  setMarginTotal,
  setMarginOrder,
  setMarginPercentageOnTot,
  setMarginPercentage,
}) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-2">
      <DefaultTitle>{t("filter_margin")}</DefaultTitle>
      <div className="flex gap-2">
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
              setMarginTotal(parseFloat(value));
              return;
            }
            setMarginTotal(null);
          }}
        />
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
              setMarginOrder(parseFloat(value));
              return;
            }
            setMarginOrder(null);
          }}
        />
      </div>
      <div className="flex gap-2">
        <div className="flex gap-2">
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
                setMarginPercentageOnTot(parseFloat(value));
                return;
              }
              setMarginPercentageOnTot(null);
            }}
          />
          <DefaultInput
            type="number"
            label={t("margin_perc")}
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
                setMarginPercentage(parseFloat(value));
                return;
              }
              setMarginPercentage(null);
            }}
          />
        </div>
      </div>
    </div>
  );
};
