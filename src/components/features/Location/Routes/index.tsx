import LocationById from "./LocationById";
import LocationEdit from "./LocationEdit";
import Locations from "./Locations";

// QUERY: Assuming locations page will be the home page (can be changed to "/locations")
const locationRoutes = {
  path: "/",
  element: <Locations />,
  children: [
    {
      path: ":locid",
      element: <LocationById />,
      children: [{ path: "edit", element: <LocationEdit /> }],
    },
  ],
};

export default locationRoutes;
