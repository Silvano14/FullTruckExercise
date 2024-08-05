import DefaultTitle from "@atoms/text/DefaultTitle";
import { Kpi } from "@organisms/kpi/Kpi";
import { DataContext } from "contexts/context";
import { FC, useContext } from "react";
import { useTranslation } from "react-i18next";

export const KpiPage: FC = () => {
  const { data } = useContext(DataContext);
  const { t } = useTranslation();
  return (
    <>
      <div className="flex justify-center items-center text-4xl font-bold py-4">
        <DefaultTitle>{t("kpiTitle")}</DefaultTitle>
      </div>
      <Kpi data={data} />
    </>
  );
};
