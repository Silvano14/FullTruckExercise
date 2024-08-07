import { PageTitle } from "@atoms/text/PageTitle";
import { Scalars } from "@organisms/scalars/Scalars";
import { FC } from "react";
import { useTranslation } from "react-i18next";

export const ScalarsPage: FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center flex-col h-full">
      <PageTitle>{t("scalarsTitle")}</PageTitle>
      <div className="flex gap-4 h-full">
        <Scalars></Scalars>
      </div>
    </div>
  );
};
