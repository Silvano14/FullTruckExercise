import { PageTemplate } from "@molecules/template/PageTemplate";
import { NextUIProvider } from "@nextui-org/react";
import { GraphsPage } from "@pages/graphs/GraphsPage";
import Header from "@pages/header/Header";
import { KpiPage } from "@pages/kpi/KpiPage";
import { ShowDataPage } from "@pages/showData/ShowDataPage";
import initialData from "components/initialDatas/initialData";
import { DataContext } from "contexts/context";
import { DataModelBase } from "models/data/DataType";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { FC, useMemo, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WelcomePage from "./components/pages/welcome/WelcomePage";
import { Routes } from "./shared/routes/routes";

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
]);

const App: FC = () => {
  const [data, setData] = useState<DataModelBase>(initialData);
  const [isFetched, setIsFetched] = useState(false);

  const dataContext = useMemo(
    () => ({ data, setData, isFetched, setIsFetched }),
    [data, isFetched]
  );

  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <DataContext.Provider value={dataContext}>
          <Header></Header>
          <RouterProvider router={router} />
        </DataContext.Provider>
      </NextThemesProvider>
    </NextUIProvider>
  );
};

export default App;
