import { Outlet } from "react-router-dom";
import LocationList from "../components/LocationList";

const Locations = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row flex-grow overflow-hidden ">
      <div className="sm:w-1/3 md:1/4 w-full flex-shrink flex-grow-0 p-4">
        <div className="sticky top-0 p-4 w-full ">
          <LocationList />
        </div>
      </div>
      <main role="main" className="w-full h-full flex-grow p-3 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Locations;
