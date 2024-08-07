import { PageTitle } from "@atoms/text/PageTitle";
import { Scalars } from "@organisms/scalars/Scalars";
import { FC } from "react";
import { useTranslation } from "react-i18next";

export const ScalarsPage: FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center flex-col h-full">
      <div className="flex flex-col items-center py-4">
        <PageTitle>{t("scalarsTitle")}</PageTitle>
      </div>
      <div className="flex gap-4 h-full">
        <Scalars></Scalars>
      </div>
    </div>
  );
};
