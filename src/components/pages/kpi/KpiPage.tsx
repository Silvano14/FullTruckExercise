import { Kpi } from "@organisms/kpi/Kpi";
import { DataContext } from "contexts/context";
import { FC, useContext } from "react";

export const KpiPage: FC = () => {
  const { data } = useContext(DataContext);
  return <Kpi data={data} />;
};
