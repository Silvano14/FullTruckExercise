import { DefaultButton } from "@atoms/buttons/DefaultButton";
import { getValuesRoutes, Routes } from "@shared/routes/routes";
import { getData } from "components/api/getData";
import { DataContext } from "contexts/context";
import useStatistics from "hook/useStatistics";
import { DataModelBase } from "models/DataType";
import {
  FC,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from "react";
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
    if (
      pathname === Routes.data ||
      pathname === Routes.graphs ||
      pathname === Routes.kpis
    ) {
      reload();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const getBackRoute = useMemo(() => {
    const routes = getValuesRoutes();
    const indexRoute: number | undefined = routes.findIndex((route) => {
      return route === pathname;
    });

    let result = {
      back: routes[0],
      forward: routes[indexRoute + 1],
    };

    if (indexRoute && indexRoute > 0) {
      result = { ...result, back: routes[indexRoute - 1] };
    }
    return result;
  }, [pathname]);

  return (
    <div className="flex flex-col gap-4 px-8">
      <div className="flex justify-between items-center">
        {pathname !== Routes.homepage ? (
          <Link replace to={getBackRoute.back}>
            {t("back")}
          </Link>
        ) : (
          <div />
        )}
        {pathname !== Routes.homepage && (
          <DefaultButton isLoading={!isFetched} onClick={reload}>
            {t("Reload data")}
          </DefaultButton>
        )}
        <Link replace to={getBackRoute.forward}>
          {t("graph")}
        </Link>
      </div>
      {children}
    </div>
  );
};
