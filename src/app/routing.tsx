import { Navigate, useRoutes } from "react-router-dom";
import locationRoutes from "../components/features/Location/Routes";

const Catch404Route = {
  path: "*",
  element: <Navigate to="/" />,
};

const Routing = () => {
  const element = useRoutes([locationRoutes, Catch404Route]);

  return element;
};

export default Routing;
