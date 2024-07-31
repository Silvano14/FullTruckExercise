import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import WelcomePage from "./components/pages/welcome/WelcomePage";
import { Routes } from "./shared/routes/routes";
import { MyComponent } from "@pages/welcome/Sample";

const router = createBrowserRouter([
  {
    path: Routes.homepage,
    element: <WelcomePage />,
  },
  {
    path: Routes.data,
    element: <MyComponent />,
  },
]);

const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
