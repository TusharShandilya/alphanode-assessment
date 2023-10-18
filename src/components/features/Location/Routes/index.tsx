import { RouteObject } from "react-router-dom";
import LocationById from "./LocationById";
import LocationEdit from "./LocationEdit";
import Locations from "./Locations";
import LocationsWelcome from "./LocationsWelcome";

// QUERY: Assuming locations page will be the home page (can be changed to "/locations")
const locationRoutes: RouteObject = {
  path: "/",
  element: <Locations />,
  children: [
    {
      index: true,
      element: <LocationsWelcome />,
    },
    {
      path: ":locid",
      element: <LocationById />,
      children: [{ path: "edit", element: <LocationEdit /> }],
    },
  ],
};

export default locationRoutes;
