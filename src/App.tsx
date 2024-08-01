import { NextUIProvider } from "@nextui-org/react";
import { ShowDataPage } from "@pages/showData/ShowDataPage";
import { FC } from "react";
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
]);

const App: FC = () => {
  return (
    <div className="px-6 py-6">
      <NextUIProvider>
        <RouterProvider router={router} />
      </NextUIProvider>
    </div>
  );
};

export default App;
