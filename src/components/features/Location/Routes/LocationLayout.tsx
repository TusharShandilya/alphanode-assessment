import { Outlet } from "react-router-dom";
import LocationList from "../components/LocationList";

const LocationLayout = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row flex-grow overflow-hidden ">
      <div className="sm:w-1/3 md:1/4 w-full flex-shrink flex-grow-0 p-4">
        <div className=" p-4 w-full  h-[calc(100vh-32px)] overflow-y-auto">
          <LocationList />
        </div>
      </div>
      <main
        role="main"
        className="w-full h-full min-h-screen flex-grow p-3 overflow-auto"
      >
        <Outlet />
      </main>
    </div>
  );
};

export default LocationLayout;
