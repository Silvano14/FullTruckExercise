import { DefaultSelect } from "@atoms/select/DefaultSelect";
import { MarginFilters } from "@molecules/kpi/filtersKpi/MarginFilters";
import { OrderFilters } from "@molecules/kpi/filtersKpi/OrderFilters";
import { RevenueFilters } from "@molecules/kpi/filtersKpi/RevenueFilters";
import { KpiCard } from "@molecules/kpi/KpiCard";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { DataModelBase, KPIBase, KPIsBase } from "models/data/DataType";
import { FC, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

type KpiProps = {
  data: DataModelBase;
};

export const Kpi: FC<KpiProps> = ({ data }) => {
  const { t } = useTranslation();
  const [kpiType, setKpiType] = useState<keyof KPIsBase>("carrier");
  const [revenuePrice, setRevenuePrice] = useState<number | null>(null);
  const [revenueOrder, setRevenueOrder] = useState<number | null>(null);
  const [revenuePercentage, setRevenuePercentage] = useState<number | null>(
    null
  );

  const [marginTotal, setMarginTotal] = useState<number | null>(null);
  const [marginOrder, setMarginOrder] = useState<number | null>(null);
  const [marginPercentageOnTot, setMarginPercentageOnTot] = useState<
    number | null
  >(null);
  const [marginPercentage, setMarginPercentage] = useState<number | null>(null);

  const [orderTotal, setOrderTotal] = useState<number | null>(null);
  const [orderPercentage, setOrderPercentage] = useState<number | null>(null);

  const kpiCards = useMemo(() => {
    return Object.entries(data.kpis[kpiType])
      .filter(([, v]) => isEqualToValue(v, "revenue", revenuePrice))
      .filter(([, v]) => isEqualToValue(v, "revenue_per_order", revenueOrder))
      .filter(([, v]) =>
        isEqualToValue(v, "revenue_perc_on_tot", revenuePercentage)
      )
      .filter(([, v]) => isEqualToValue(v, "margin_abs", marginTotal))
      .filter(([, v]) => isEqualToValue(v, "margin_abs_per_order", marginOrder))
      .filter(([, v]) =>
        isEqualToValue(v, "margin_abs_perc_on_tot", marginPercentageOnTot)
      )
      .filter(([, v]) => isEqualToValue(v, "margin_perc", marginPercentage))
      .filter(([, v]) => isEqualToValue(v, "order_count", orderTotal))
      .filter(([, v]) =>
        isEqualToValue(v, "order_count_perc_on_tot", orderPercentage)
      )
      .map(([k, v]) => {
        return <KpiCard key={k} data={v} />;
      });
  }, [
    data.kpis,
    kpiType,
    marginOrder,
    marginPercentage,
    marginPercentageOnTot,
    marginTotal,
    orderPercentage,
    orderTotal,
    revenueOrder,
    revenuePercentage,
    revenuePrice,
  ]);

  return (
    <>
      <div className="flex justify-center w-full">
        <Accordion
          defaultExpandedKeys={["1"]}
          variant="shadow"
          fullWidth={false}
          style={{ width: "50%" }}
        >
          <AccordionItem
            subtitle={t("expand_filter")}
            key="1"
            aria-label="Accordion 1"
          >
            <div className="flex gap-4 ">
              <div className="flex flex-1 flex-col gap-2">
                <DefaultSelect
                  selectedKeys={[kpiType]}
                  label={t("selectKpiType")}
                  items={["carrier", "client"]}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value === "carrier" || value === "client") {
                      setKpiType(value);
                    }
                  }}
                />

                <div className="flex flex-col gap-4 border-1 border-gray-400 p-4 rounded-lg">
                  <MarginFilters
                    setMarginTotal={setMarginTotal}
                    setMarginOrder={setMarginOrder}
                    setMarginPercentageOnTot={setMarginPercentageOnTot}
                    setMarginPercentage={setMarginPercentage}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <div className="flex  flex-col gap-4 border-1 border-gray-400 p-4 rounded-lg">
                  <RevenueFilters
                    setRevenuePrice={setRevenuePrice}
                    setRevenueOrder={setRevenueOrder}
                    setRevenuePercentage={setRevenuePercentage}
                  />
                </div>
                <div className="flex flex-col gap-4 border-1 border-gray-400 p-4 rounded-lg">
                  <OrderFilters
                    setOrderTotal={setOrderTotal}
                    setOrderPercentage={setOrderPercentage}
                  />
                </div>
              </div>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="flex flex-wrap gap-10 pb-4 justify-evenly">
        {kpiCards}
      </div>
    </>
  );
};

const isEqualToValue = (
  v: KPIBase,
  field: keyof KPIBase,
  target: number | null
): boolean => {
  if (target === null) {
    return true;
  }

  if (v[field] === target) {
    return true;
  }

  return false;
};
