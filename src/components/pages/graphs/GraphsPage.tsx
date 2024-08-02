import { TimeMarginPercGraph } from "@organisms/graphs/TimeMarginPercGraph";
import { TimeOrderCountGraph } from "@organisms/graphs/TimeOrderCountGraph";
import { TimeRevenueGraph } from "@organisms/graphs/TimeRevenueGraph";
import { FC } from "react";

export const GraphsPage: FC = () => {
  return (
    <div>
      <TimeMarginPercGraph></TimeMarginPercGraph>
      <TimeRevenueGraph></TimeRevenueGraph>
      <TimeOrderCountGraph></TimeOrderCountGraph>
    </div>
  );
};
