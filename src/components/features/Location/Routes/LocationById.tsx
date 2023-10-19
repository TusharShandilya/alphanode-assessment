import { useMutation, useQuery } from "@apollo/client";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { GET_LOCATIONS, GET_LOCATION_BY_ID } from "../api/Location.queries";
import {
  LocationPatchMutation,
  LocationReadQuery,
  LocationRemoveMutation,
} from "../../../../types/gql/graphql";
import config from "../../../../config";
import Error from "../../../common/molecules/Error";
import Loading from "../../../common/molecules/Loading";
import Badge from "../../../common/atoms/Badge";

import Button from "../../../common/atoms/Button";
import LocationProperty from "../components/LocationProperty";
import ButtonDropdown from "../../../common/molecules/ButtonDropdown";
import { generateLocData } from "../utils/generateLocData";
import { LocationPropertyData } from "../types";
import { DELETE_LOCATION, PATCH_LOCATION } from "../api/Location.mutation";

const LocationById = () => {
  const { locid } = useParams();
  const navigate = useNavigate();

  const httpLocation = useQuery<LocationReadQuery>(GET_LOCATION_BY_ID, {
    variables: {
      tenant: config.temp_vars.tenant,
      locationReadId: locid,
    },
  });

  const [httpPatchLocation, { loading }] = useMutation<LocationPatchMutation>(
    PATCH_LOCATION,
    {
      refetchQueries: [
        {
          query: GET_LOCATION_BY_ID,
          variables: {
            id: locid,
            tenant: config.temp_vars.tenant,
          },
        },
      ],
    }
  );
  const [httpDeleteLocation] = useMutation<LocationRemoveMutation>(
    DELETE_LOCATION,
    {
      refetchQueries: [
        {
          query: GET_LOCATIONS,
          variables: {
            tenant: config.temp_vars.tenant,
          },
        },
      ],
    }
  );

  const handleRefresh = async () => {
    try {
      await httpLocation.refetch();
    } catch (error) {
      alert("something has gone wrong");
    }
  };

  const handleDelete = async () => {
    try {
      await httpDeleteLocation({
        variables: {
          locationRemoveId: locid,
          tenant: config.temp_vars.tenant,
        },
        update(cache) {
          // TODO: remove this id from cache
        },
      });
      goToHome();
    } catch (error) {
      alert("something has gone wrong");
    }
  };

  const goToHome = () => {
    navigate("/");
  };

  const handlePropertyUpdate =
    (property: LocationPropertyData) => async (newValue: string) => {
      try {
        httpPatchLocation({
          variables: {
            [property.id]: newValue,
          },
        });
      } catch (error) {
        alert("something went wrong");
      }
    };

  if (httpLocation.loading) {
    return <Loading />;
  }

  if (httpLocation.error) {
    return <Error />;
  }

  const location = httpLocation.data?.locationRead?.resource;

  const locationProperties = generateLocData(location);

  return (
    <div>
      <header className="mt-7 mb-4">
        <Button onClick={handleRefresh} variant="tertiary" leadIcon="↻ ">
          Refresh
        </Button>
        <div className="w-full flex align-middle justify-between">
          <div className="flex align-middle">
            <h1
              className="text-4xl font-semibold self-center mr-4 text-gray-900"
              id="modal-title"
            >
              {location?.name}
            </h1>
            <Badge
              color={
                String(location?.status).toLowerCase() === "active"
                  ? "default"
                  : "danger"
              }
              className="self-center"
            >
              {location?.status ?? ""}
            </Badge>
          </div>
          <ButtonDropdown
            label="More"
            buttonProps={{
              variant: "secondary",
            }}
          >
            <div className="flex flex-col ">
              <Link to="edit" className="hover:bg-slate-200 p-2 w-full">
                🖊️ Go to Edit
              </Link>
              <Button
                variant="danger"
                className="m-0"
                leadIcon="🗑️ "
                onClick={handleDelete}
              >
                Delete Location
              </Button>
            </div>
          </ButtonDropdown>
        </div>
      </header>
      <div className="my-4">
        {location?.description && (
          <p className="text-lg">{location.description}</p>
        )}
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-2 my-6">
          {locationProperties.map((locProps) => (
            <LocationProperty
              key={locProps.id + locProps.label}
              data={locProps}
              loading={loading}
              onSubmit={handlePropertyUpdate(locProps)}
            />
          ))}
        </div>
      </div>

      <div className="border-2 h-96 flex justify-center items-center rounded-md bg-gray-100">
        MapBox Placeholder
      </div>

      <Outlet />
    </div>
  );
};

export default LocationById;
