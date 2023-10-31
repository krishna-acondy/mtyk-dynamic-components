import { Navigate, useRoutes } from "react-router-dom";

import Gallery from "./pages/Gallery";
import Create from "./pages/Create";
import Components from "./pages/Components";

export default function Routes() {
  return useRoutes([
    {
      path: "gallery",
      element: <Gallery />,
    },
    {
      path: "components",
      element: <Components />,
    },
    { path: "templates/:templateId/create", element: <Create /> },
    { path: "", element: <Navigate to="/components" /> },
  ]);
}
