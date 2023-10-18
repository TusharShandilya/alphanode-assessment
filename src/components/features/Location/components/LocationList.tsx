import { useQuery } from "@apollo/client";
import config from "../../../../config";
import { GET_LOCATIONS } from "../api/Queries";
import { LocationListQuery } from "../../../../types/gql/graphql";
import LocationCard from "./LocationCard";
import { useNavigate } from "react-router-dom";

const LocationList = () => {
  const navigate = useNavigate();

  const locations = useQuery<LocationListQuery>(GET_LOCATIONS, {
    variables: {
      tenant: config.temp_vars.tenant,
    },
  });

  const handleClick = (locId: string) => () => {
    goToLocationId(locId);
  };

  const goToLocationId = (id: string) => {
    navigate({
      pathname: `/${id}`,
    });
  };

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
      {data.filter(Boolean).map((location) => (
        <div className="mb-2 last:mb-0" key={location!.id}>
          <LocationCard
            location={location}
            onClick={handleClick(location!.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default LocationList;
