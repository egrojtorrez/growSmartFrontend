import { createBrowserRouter } from "react-router-dom";

import Login from "@pages/Login/Login";
import { actionLogin } from "@pages/Login/actionLogin";
import { loaderLogin } from "@pages/Login/loaderLogin";
import { Navigate } from "react-router-dom";

import Layout from "@layout/index";

import { LoginProtected } from "@src/context/LoginProtected";
import { SidebarProvider } from "@context/SidebarContext";

import Dashboard from "@pages/Dashboard/Dashboard";
import MiPlanta from "@pages/MiPlanta/MiPlanta";
import AgregarPlanta from "@pages/AgregarPlanta/AgregarPlanta";

export const router = createBrowserRouter(
  [
    {
      index: true,
      element: <Navigate to="/app" />,
    },
    {
      path: "/login",
      element: <Login />,
      action: actionLogin,
      loader: loaderLogin,
    },
    {
      path: "/app",
      element: (
        <LoginProtected>
          <SidebarProvider>
            <Layout />
          </SidebarProvider>
        </LoginProtected>
      ),
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "mi-planta",
          element: <MiPlanta />,
        },
        {
          path: "agregar-planta",
          element: <AgregarPlanta />,
        },
      ],
    },
  ],
  {
    basename: "/growSmartFrontend/",
  }
);
