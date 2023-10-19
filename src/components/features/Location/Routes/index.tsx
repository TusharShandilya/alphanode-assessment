import { RouteObject } from "react-router-dom";
import LocationById from "./LocationById";
import LocationEdit from "./LocationEdit";
import LocationLayout from "./LocationLayout";
import LocationsWelcome from "./LocationsWelcome";
import LocationAdd from "./LocationAdd";

// QUERY: Assuming locations page will be the home page (can be changed to "/locations")
const locationRoutes: RouteObject = {
  path: "/",
  element: <LocationLayout />,
  children: [
    {
      index: true,
      element: <LocationsWelcome />,
    },
    {
      path: "add",
      element: <LocationAdd />,
    },
    {
      path: "l/:locid",
      element: <LocationById />,
      children: [{ path: "edit", element: <LocationEdit /> }],
    },
  ],
};

export default locationRoutes;
