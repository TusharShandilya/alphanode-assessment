import { useQuery } from "@apollo/client";
import config from "../../../../config";
import { GET_LOCATIONS } from "../api/Location.queries";
import { LocationListQuery } from "../../../../types/gql/graphql";
import LocationCard from "./LocationCard";
import Input from "../../../common/atoms/Input";
import { useEffect, useState } from "react";
import { LocationData } from "../../../../types";
import Button from "../../../common/atoms/Button";
import Error from "../../../common/molecules/Error";
import Loading from "../../../common/molecules/Loading";
import useGoToLocation from "../../../../hooks/useGoToLocation";
import { Link, useLocation } from "react-router-dom";

type LocationFilters = {
  isActive?: boolean;
  hasType?: boolean;
};

const LocationList = () => {
  const location = useLocation();

  const locations = useQuery<LocationListQuery>(GET_LOCATIONS, {
    variables: {
      tenant: config.temp_vars.tenant,
    },
  });

  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<LocationFilters>({
    isActive: false,
    hasType: false,
  });
  const [filteredList, setFilteredList] = useState<LocationData[]>([]);

  const goToLocationId = useGoToLocation();

  useEffect(() => {
    if (locations.data && locations.data.locationList) {
      setFilteredList(locations.data.locationList.resources ?? []);
    }
  }, [locations.data]);

  useEffect(() => {
    if (locations.data && locations.data.locationList) {
      setFilteredList(
        filterLocList(
          locations.data.locationList.resources ?? [],
          search,
          filters
        )
      );
    }
  }, [filters, locations.data, search]);

  const handleClick = (locId: string) => () => {
    goToLocationId(locId);
  };

  const handleSearch = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(evt.target.value);
  };

  const toggleFilters = (name: keyof LocationFilters) => () => {
    setFilters((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  if (locations.loading) {
    return <Loading />;
  }
  if (locations.error) {
    return <Error />;
  }

  return (
    <div>
      <div className="mb-4 ">
        <div className="flex justify-end">
          <Link
            to="/add"
            state={{
              backgroundLocation: location,
            }}
          >
            <Button className="mr-0" leadIcon="+ ">
              New Location
            </Button>
          </Link>
        </div>
        <Input
          placeholder="Search locations"
          value={search}
          onChange={handleSearch}
        />
        <div className="my-2 flex">
          {Object.keys(filters).map((filterName) => (
            <Button
              key={filterName}
              onClick={toggleFilters(filterName as keyof LocationFilters)}
              variant={
                filters[filterName as keyof LocationFilters]
                  ? "secondary"
                  : "tertiary"
              }
              leadIcon={
                filters[filterName as keyof LocationFilters] ? "✅ " : ""
              }
            >
              {filterName}
            </Button>
          ))}
        </div>
      </div>
      {filteredList.map((location) => (
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

const filterLocList = (
  list: LocationData[],
  search: string,
  filters?: LocationFilters
): LocationData[] => {
  if (!search && !filters) {
    return list;
  }

  return list.filter((location) => {
    if (!location) {
      return false;
    }

    if (!location!.name.toLowerCase().includes(search)) {
      // SEARCH DOES NOT MATCH
      return false;
    }

    if (!filters) {
      // SEARCH MATCHES BUT NO FILTERS
      return true;
    }

    if (filters.isActive && location?.status?.toLowerCase() !== "active") {
      // isActive FILTER DOES NOT MATCH
      return false;
    }

    if (filters.hasType && !location?.type) {
      // hasType FILTER DOES NOT MATCH
      return false;
    }

    // PASSES ALL THE FILTER & SEARCH CHECKS
    return true;
  });
};
