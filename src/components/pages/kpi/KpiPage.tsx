import DefaultTitle from "@atoms/text/DefaultTitle";
import { Kpi } from "@organisms/kpi/Kpi";
import { FC } from "react";
import { useTranslation } from "react-i18next";

export const KpiPage: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex justify-center items-center text-4xl font-bold py-4">
        <DefaultTitle>{t("kpiTitle")}</DefaultTitle>
      </div>
      <Kpi />
    </>
  );
};
