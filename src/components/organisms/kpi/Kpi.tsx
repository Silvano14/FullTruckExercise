import { DefaultSelect } from "@atoms/select/DefaultSelect";
import DefaultTitle from "@atoms/text/DefaultTitle";
import { KpiCard } from "@molecules/kpi/KpiCard";
import { Accordion, AccordionItem, Input } from "@nextui-org/react";
import { DataModelBase, KPIsBase } from "models/data/DataType";
import { FC, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

type KpiProps = {
  data: DataModelBase;
};

export const Kpi: FC<KpiProps> = ({ data }) => {
  const { t } = useTranslation();
  const [kpiType, setKpiType] = useState<keyof KPIsBase>("carrier");
  const [revenuePrice, setRevenuePrice] = useState<number | null>(null);

  const kpiCards = useMemo(() => {
    return Object.entries(data.kpis[kpiType])
      .filter(([, v]) => {
        if (revenuePrice === null) {
          return true;
        }
        if (v.revenue === revenuePrice) {
          return true;
        }
        return false;
      })
      .map(([k, v]) => {
        return <KpiCard key={k} data={v} />;
      });
  }, [data.kpis, kpiType, revenuePrice]);

  return (
    <>
      <div className="flex justify-center w-full">
        <Accordion variant="shadow" fullWidth={false} style={{ width: "50%" }}>
          <AccordionItem
            subtitle={t("espandi_filtri")}
            key="1"
            aria-label="Accordion 1"
          >
            <div className="flex gap-4">
              <div className="flex flex-1">
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
              </div>
              <div className="flex flex-1 flex-col gap-4 border-1 border-gray-400 p-4 rounded-lg">
                <DefaultTitle>{t("revenue_")}</DefaultTitle>
                {/* TODO: Extract to atoms */}
                <Input
                  isClearable
                  type="number"
                  label={t("total revenue")}
                  placeholder="0.00"
                  labelPlacement="inside"
                  startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">€</span>
                    </div>
                  }
                  onClear={() => setRevenuePrice(null)}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value && !isNaN(parseFloat(value))) {
                      setRevenuePrice(parseFloat(value));
                      return;
                    }
                    setRevenuePrice(null);
                  }}
                />
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
