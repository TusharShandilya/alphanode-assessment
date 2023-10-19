import { Navigate, useLocation, useRoutes } from "react-router-dom";
import locationRoutes from "../components/features/Location/Routes";

const Catch404Route = {
  path: "*",
  element: <Navigate to="/" />,
};

const Routing = () => {
  const location = useLocation();
  const foregroundLocations = useRoutes(
    [...locationRoutes.foreground, Catch404Route],
    location.state?.backgroundLocation ?? location
  );

  const backgroundLocations = useRoutes([
    ...(locationRoutes.background ? locationRoutes.background : []),
  ]);

  return (
    <>
      {foregroundLocations}
      {backgroundLocations}
    </>
  );
};

export default Routing;
