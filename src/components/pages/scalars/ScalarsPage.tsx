import DefaultTitle from "@atoms/text/DefaultTitle";
import { Scalars } from "@organisms/scalars/Scalars";
import { FC } from "react";
import { useTranslation } from "react-i18next";

export const ScalarsPage: FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center flex-col h-full">
      <DefaultTitle className="font-bold text-4xl">
        {t("scalarsTitle")}
      </DefaultTitle>
      <div className="flex gap-4 h-full">
        <Scalars></Scalars>
      </div>
    </div>
  );
};
