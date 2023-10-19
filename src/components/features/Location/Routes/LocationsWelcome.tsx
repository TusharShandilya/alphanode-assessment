import { Link } from "react-router-dom";
import MapImg from "../../../../assets/undraw_tourist_map.svg";
import Button from "../../../common/atoms/Button";
const LocationsWelcome = () => {
  return (
    <div className="mt-8 flex flex-col ">
      <div className="h-96 w-96 mx-auto my-6 ">
        <img src={MapImg} alt="Welcome to this app" />
      </div>
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
        Welcome
      </h1>
      <h2 className="text-lg font-bold text-center text-gray-600">
        Please select a location to continue
      </h2>
      <p className="text-md my-4 font-bold text-center text-gray-600">or</p>
      <Link to="add" className="mx-auto">
        <Button>Add a new location</Button>
      </Link>
    </div>
  );
};

export default LocationsWelcome;
