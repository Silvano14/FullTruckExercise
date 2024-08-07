import { DefaultButton } from "@atoms/buttons/DefaultButton";
import { DefaultModal } from "@atoms/modal/DefaultModal";
import GlobalFilters from "@molecules/globalFilters/GlobalFilters";
import { Divider, Spacer, useDisclosure } from "@nextui-org/react";
import { getValuesRoutes, Routes } from "@shared/routes/routes";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { DataContext } from "contexts/context";
import useStatistics, { Filters } from "hook/useStatistics";
import { DataModelBase } from "models/data/DataType";
import {
  FC,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
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
  const [filters, setFilters] = useState<Filters | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const loadData = useCallback(
    (filters: Filters | null): void => {
      setIsFetched(false);
      fetchStatistics(filters)
        .then((res: unknown) => setData(res as DataModelBase))
        .catch((err) => console.error("Error while loading data: ", err))
        .finally(() => setIsFetched(true));
    },
    [fetchStatistics, setData, setIsFetched]
  );

  useEffect(() => {
    if (
      pathname === Routes.data ||
      pathname === Routes.graphs ||
      pathname === Routes.kpis ||
      pathname === Routes.scalars
    ) {
      loadData(filters);
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
      <div className="flex flex-col gap-4 px-8 h-[calc(100vh-84px)]">
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
          <div className="flex gap-2 items-center justify-center">
            {pathname !== Routes.homepage && (
              <DefaultButton
                color="warning"
                isLoading={!isFetched}
                onClick={() => loadData(filters as Filters)}
              >
                {t("reloadData")}
              </DefaultButton>
            )}
            {pathname === Routes.data || pathname === Routes.graphs ? (
              <DefaultModal
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
                buttonTitle={t("filters")}
                modalTitle={"Filtra"}
              >
                <GlobalFilters
                  onFilterChange={function ({ startDate, endDate }): void {
                    let filters = {};
                    if (startDate) {
                      filters = {
                        startDate: startDate
                          .toDate(
                            window.Intl.DateTimeFormat().resolvedOptions()
                              .timeZone
                          )
                          .toLocaleString(),
                        ...filters,
                      };
                    }

                    if (endDate) {
                      filters = {
                        endDate: endDate
                          .toDate(
                            window.Intl.DateTimeFormat().resolvedOptions()
                              .timeZone
                          )
                          .toLocaleString(),
                        ...filters,
                      };
                    }
                    setFilters(filters as Filters);
                    loadData(filters as Filters);
                    onClose();
                  }}
                />
              </DefaultModal>
            ) : (
              <></>
            )}
          </div>
          {pathname !== Routes.scalars ? (
            <DefaultButton
              color="primary"
              onClick={() => updatePathname(getRoutes.forward)}
              endContent={<IconArrowRight />}
            >
              {t("forward")}
            </DefaultButton>
          ) : (
            <div />
          )}
        </div>
        <Divider></Divider>
        {children}
      </div>
    </>
  );
};
