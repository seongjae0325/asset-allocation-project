import { Navigate, useRoutes } from "react-router-dom";
import AssetAllocation from "../pages/AssetAllocation";

function Router() {
  const routes = useRoutes([
    {
      path: "/",
      children: [
        {
          path: "/",
          element: <Navigate to="/alloc" replace />,
        },
        {
          path: "alloc",
          element: <AssetAllocation />,
        },
      ],
    },
  ]);

  return routes;
}

export default Router;
