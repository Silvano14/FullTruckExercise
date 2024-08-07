import { PageTemplate } from "@molecules/template/PageTemplate";
import { NextUIProvider } from "@nextui-org/react";
import { GraphsPage } from "@pages/graphs/GraphsPage";
import Header from "@pages/header/Header";
import { KpiPage } from "@pages/kpi/KpiPage";
import { ScalarsPage } from "@pages/scalars/ScalarsPage";
import { ShowDataPage } from "@pages/showData/ShowDataPage";
import initialData from "components/initialDatas/initialData";
import { DataContext, GlobalFiltersContext } from "contexts/context";
import { DataModelBase } from "models/data/DataType";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { FC, useMemo, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WelcomePage from "./components/pages/welcome/WelcomePage";
import { Routes } from "./shared/routes/routes";
import { GlobalFiltersType } from "@molecules/globalFilters/GlobalFilters";

const router = createBrowserRouter([
  {
    path: Routes.homepage,
    element: <WelcomePage />,
  },
  {
    path: Routes.data,
    element: (
      <PageTemplate>
        <ShowDataPage />
      </PageTemplate>
    ),
  },
  {
    path: Routes.graphs,
    element: (
      <PageTemplate>
        <GraphsPage />
      </PageTemplate>
    ),
  },
  {
    path: Routes.kpis,
    element: (
      <PageTemplate>
        <KpiPage />
      </PageTemplate>
    ),
  },
  {
    path: Routes.scalars,
    element: (
      <PageTemplate>
        <ScalarsPage />
      </PageTemplate>
    ),
  },
]);

const App: FC = () => {
  const [data, setData] = useState<DataModelBase>(initialData);
  const [filters, setFilters] = useState<GlobalFiltersType | null>(null);
  const [isFetched, setIsFetched] = useState(false);

  const dataContext = useMemo(
    () => ({ data, setData, isFetched, setIsFetched }),
    [data, isFetched]
  );

  const filtersContext = useMemo(() => ({ filters, setFilters }), [filters]);

  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <DataContext.Provider value={dataContext}>
          <GlobalFiltersContext.Provider value={filtersContext}>
            <Header></Header>
            <RouterProvider router={router} />
          </GlobalFiltersContext.Provider>
        </DataContext.Provider>
      </NextThemesProvider>
    </NextUIProvider>
  );
};

export default App;
