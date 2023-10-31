import { Navigate, useRoutes } from "react-router-dom";

import Gallery from "./pages/Gallery";
import Create from "./pages/Create";

export default function Routes() {
  return useRoutes([
    {
      path: "gallery",
      element: <Gallery />,
    },
    { path: "templates/:templateId/create", element: <Create /> },
    { path: "", element: <Navigate to="/gallery" /> },
  ]);
}
