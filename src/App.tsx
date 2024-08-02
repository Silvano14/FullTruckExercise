import { NextUIProvider, Spacer } from "@nextui-org/react";
import { GraphsPage } from "@pages/graphs/GraphsPage";
import Header from "@pages/header/Header";
import { ShowDataPage } from "@pages/showData/ShowDataPage";
import initialData from "components/initialDatas/initialData";
import { DataContext } from "contexts/context";
import { DataModelBase } from "models/DataType";
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
    element: <ShowDataPage />,
  },
  {
    path: Routes.graphs,
    element: <GraphsPage />,
  },
]);

const App: FC = () => {
  const [data, setData] = useState<DataModelBase>(initialData);

  const dataContext = useMemo(() => ({ data, setData }), [data]);

  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <DataContext.Provider value={dataContext}>
          <Header></Header>
          <Spacer></Spacer>
          <RouterProvider router={router} />
        </DataContext.Provider>
      </NextThemesProvider>
    </NextUIProvider>
  );
};

export default App;
