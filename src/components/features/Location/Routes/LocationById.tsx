import { useQuery } from "@apollo/client";
import { Outlet, useParams } from "react-router-dom";
import { GET_LOCATION_BY_ID } from "../api/Location.queries";
import { LocationReadQuery } from "../../../../types/gql/graphql";
import config from "../../../../config";
import Error from "../../../common/molecules/Error";
import Loading from "../../../common/molecules/Loading";

const LocationById = () => {
  const { locid } = useParams();

  const location = useQuery<LocationReadQuery>(GET_LOCATION_BY_ID, {
    variables: {
      tenant: config.temp_vars.tenant,
      locationReadId: locid,
    },
  });

  if (location.loading) {
    return <Loading />;
  }

  if (location.error) {
    return <Error />;
  }

  return (
    <div>
      LocationById Page {locid} <Outlet />
    </div>
  );
};

export default LocationById;
