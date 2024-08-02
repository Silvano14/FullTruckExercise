import { DefaultCard } from "@atoms/card/DefaultCard";
import DefaultTitle from "@atoms/text/DefaultTitle";
import { KPIBase } from "models/DataType";
import { FC } from "react";
import { Margin } from "./Margin";
import { Order } from "./Order";
import { Revenue } from "./Revenue";

type KpiCardProps = {
  data: KPIBase;
};

const containerDataStyle =
  "border-1 border-gray-400 rounded-md w-60 p-3 flex flex-col gap-2";

export const KpiCard: FC<KpiCardProps> = ({ data }) => {
  return (
    <DefaultCard
      className="w-fit"
      header={<DefaultTitle className="text-xl">{data.label}</DefaultTitle>}
    >
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <div className={containerDataStyle}>
            <Margin data={data} />
          </div>

          <div className={containerDataStyle}>
            <Revenue data={data} />
          </div>

          <div className={containerDataStyle}>
            <Order data={data} />
          </div>
        </div>
      </div>
    </DefaultCard>
  );
};
