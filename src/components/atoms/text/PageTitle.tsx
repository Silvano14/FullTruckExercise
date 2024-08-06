import { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import DefaultTitle from "./DefaultTitle";

type TitlePageProps = {
  children: ReactNode;
};

export const PageTitle: FC<TitlePageProps> = ({ children }) => {
  const { t } = useTranslation();
  return (
    <div>
      <DefaultTitle className="font-bold text-4xl">{t(children)}</DefaultTitle>
    </div>
  );
};
