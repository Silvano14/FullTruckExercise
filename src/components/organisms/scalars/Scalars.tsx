import { DefaultCard } from "@atoms/cards/DefaultCard";
import { PolarEndAngle } from "@atoms/graphs/lines/StackedLine";
import { Totals } from "@molecules/scalars/Totals";
import { DataContext } from "contexts/context";
import { FC, useContext } from "react";
import { useTranslation } from "react-i18next";

export const Scalars: FC = () => {
  const { isFetched, data } = useContext(DataContext);
  const { t } = useTranslation();

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="w-[400px] h-[300px] ">
          <PolarEndAngle
            dataActiveElements={[
              data.scalars.active_carriers,
              data.scalars.active_clients,
            ]}
            dataNewElements={[
              data.scalars.new_carriers,
              data.scalars.new_clients,
            ]}
          ></PolarEndAngle>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <DefaultCard className="min-w-[550px]">
          <Totals scalars={data.scalars} />
        </DefaultCard>
      </div>
    </>
  );
};
