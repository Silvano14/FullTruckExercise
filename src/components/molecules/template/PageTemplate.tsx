import { DefaultButton } from "@atoms/buttons/DefaultButton";
import { Routes } from "@shared/routes/routes";
import { getData } from "components/api/getData";
import { DataContext } from "contexts/context";
import useStatistics from "hook/useStatistics";
import { DataModelBase } from "models/DataType";
import { FC, ReactNode, useCallback, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

type PageTemplateProps = {
  children: ReactNode;
};

export const PageTemplate: FC<PageTemplateProps> = ({ children }) => {
  const { t } = useTranslation();
  const { fetchStatistics } = useStatistics();
  const { setData, isFetched, setIsFetched } = useContext(DataContext);
  const { pathname } = useLocation();

  const reload = useCallback((): void => {
    setIsFetched(false);
    getData(fetchStatistics)
      .then((res: unknown) => setData(res as DataModelBase))
      .finally(() => setIsFetched(true));
  }, [fetchStatistics, setData, setIsFetched]);

  useEffect(() => {
    if (pathname === Routes.data) {
      reload();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col gap-4 px-8">
      <div className="flex justify-between items-center">
        <Link to={Routes.homepage}>{t("back")}</Link>
        <DefaultButton isLoading={!isFetched} onClick={reload}>
          {t("Reload data")}
        </DefaultButton>
        <Link to={Routes.graphs}>{t("graph")}</Link>
      </div>
      {children}
    </div>
  );
};
