import {
  Navigate,
  Outlet,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import { CalculatorPage } from "@/pages";

const PrivateRoutes = () => {
  const { pathname } = useLocation();

  if (pathname === "/") {
    return <Navigate to="/calculator" />;
  }

  return <Outlet />;
};

export const router = createBrowserRouter([
  {
    path: "*",
    element: <div>Ошибка</div>,
  },
  {
    path: "/",
    element: <PrivateRoutes />,
    children: [
      {
        path: "calculator",
        element: <CalculatorPage />,
      },
    ],
  },
]);
