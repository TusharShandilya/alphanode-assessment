import LocationById from "./LocationById";
import LocationEdit from "./LocationEdit";
import LocationLayout from "./LocationLayout";
import LocationsWelcome from "./LocationsWelcome";
import LocationAdd from "./LocationAdd";
import { FeatureRoute } from "../../../../types/application";

// QUERY: Assuming locations page will be the home page (can be changed to "/locations")
const locationRoutes: FeatureRoute = {
  foreground: [
    {
      path: "/",
      element: <LocationLayout />,
      children: [
        {
          index: true,
          element: <LocationsWelcome />,
        },

        {
          path: "l/:locid",
          element: <LocationById />,
          children: [{ path: "edit", element: <LocationEdit /> }],
        },
      ],
    },
  ],
  background: [
    {
      path: "add",
      element: <LocationAdd />,
    },
  ],
};

export default locationRoutes;
