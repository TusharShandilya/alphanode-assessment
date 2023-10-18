import MapImg from "../../../../assets/undraw_tourist_map.svg";
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
    </div>
  );
};

export default LocationsWelcome;
