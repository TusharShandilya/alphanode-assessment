import { useRoutes } from "react-router-dom";
import locationRoutes from "../components/features/Location/Routes";

const Routing = () => {
  const element = useRoutes([locationRoutes]);

  return element;
};

export default Routing;
