import { DefaultButton } from "@atoms/buttons/DefaultButton";
import { Spacer } from "@nextui-org/react";
import { getValuesRoutes, Routes } from "@shared/routes/routes";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { getData } from "components/api/getData";
import { DataContext } from "contexts/context";
import useStatistics from "hook/useStatistics";
import { DataModelBase } from "models/DataType";
import { FC, ReactNode, useContext, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

type PageTemplateProps = {
  children: ReactNode;
};

export const PageTemplate: FC<PageTemplateProps> = ({ children }) => {
  const { t } = useTranslation();
  const { fetchStatistics } = useStatistics();
  const { setData, isFetched, setIsFetched } = useContext(DataContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const loadData = (): void => {
    setIsFetched(false);
    getData(fetchStatistics)
      .then((res: unknown) => setData(res as DataModelBase))
      .finally(() => setIsFetched(true));
  };

  useEffect(() => {
    if (
      pathname === Routes.data ||
      pathname === Routes.graphs ||
      pathname === Routes.kpis
    ) {
      loadData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const updatePathname = (path: string): void => {
    navigate(path);
  };

  const getRoutes = useMemo(() => {
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
    <>
      <Spacer y={4} />
      <div className="flex flex-col gap-4 px-8">
        <div className="flex justify-between items-center">
          {pathname !== Routes.homepage ? (
            <DefaultButton
              color="primary"
              onClick={() => updatePathname(getRoutes.back)}
              startContent={<IconArrowLeft />}
            >
              {t("back")}
            </DefaultButton>
          ) : (
            <div />
          )}
          {pathname !== Routes.homepage && (
            <DefaultButton
              color="warning"
              isLoading={!isFetched}
              onClick={loadData}
            >
              {t("reloadData")}
            </DefaultButton>
          )}
          <DefaultButton
            color="primary"
            onClick={() => updatePathname(getRoutes.forward)}
            endContent={<IconArrowRight />}
          >
            {t("forward")}
          </DefaultButton>
        </div>
        {children}
      </div>
    </>
  );
};
