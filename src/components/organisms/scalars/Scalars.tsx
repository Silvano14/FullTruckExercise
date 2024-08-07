import { DefaultCard } from "@atoms/cards/DefaultCard";
import { PolarEndAngle } from "@atoms/graphs/lines/StackedLine";
import { DefaultSkeleton } from "@atoms/skeleton/DefaultSkeleton";
import { Totals } from "@molecules/scalars/Totals";
import { DataContext } from "contexts/context";
import { FC, useContext } from "react";

export const Scalars: FC = () => {
  const { isFetched, data } = useContext(DataContext);

  return (
    <>
      <div className="flex items-center justify-center">
        <DefaultSkeleton isLoaded={isFetched}>
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
        </DefaultSkeleton>
      </div>
      <div className="flex items-center justify-center">
        <DefaultSkeleton isLoaded={isFetched}>
          <DefaultCard className="min-w-[550px]">
            <Totals scalars={data.scalars} />
          </DefaultCard>
        </DefaultSkeleton>
      </div>
    </>
  );
};
