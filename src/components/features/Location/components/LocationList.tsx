import { useQuery } from "@apollo/client";
import config from "../../../../config";
import { GET_LOCATIONS } from "../api/Queries";
import { LocationListQuery } from "../../../../types/gql/graphql";
import LocationCard from "./LocationCard";
import { LocationData } from "../../../../types";

const LocationList = () => {
  const locations = useQuery<LocationListQuery>(GET_LOCATIONS, {
    variables: {
      tenant: config.temp_vars.tenant,
    },
  });

  if (locations.loading) {
    return <p>Loading...</p>;
  }
  if (locations.error) {
    return (
      <p className="text-red-800 font-bold">
        <strong>Something has gone wrong</strong>
      </p>
    );
  }

  const data = locations.data?.locationList?.resources ?? [];

  return (
    <div>
      {data.map((location) => (
        <LocationCard key={location?.id} location={location as LocationData} />
      ))}
    </div>
  );
};

export default LocationList;
