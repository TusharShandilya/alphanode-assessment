import { Link, useParams } from "react-router-dom";
import Button from "../../../common/atoms/Button";
import Modal from "../../../common/molecules/Modal";
import LocationForm, { LocationFormValues } from "../components/LocationForm";
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_LOCATION } from "../api/Location.mutation";
import {
  LocationReadQuery,
  LocationUpdateMutation,
} from "../../../../types/gql/graphql";
import { GET_LOCATIONS, GET_LOCATION_BY_ID } from "../api/Location.queries";

import config from "../../../../config";
import useGoToLocation from "../../../../hooks/useGoToLocation";

const FORM_ID = "edit-form";

const LocationEdit = () => {
  const { locid = "" } = useParams();

  const [httpEditLocation, { loading }] = useMutation<LocationUpdateMutation>(
    UPDATE_LOCATION,
    {
      refetchQueries: [GET_LOCATIONS, GET_LOCATION_BY_ID],
      // update: (cache, { data: { locationUpdate } }) => {
      //   // TODO: modify data in cache
      //   // QUERY: not getting an updated response - I am assuming this is on purpose for now.
      // },
    }
  );

  const httpLocation = useQuery<LocationReadQuery>(GET_LOCATION_BY_ID, {
    variables: {
      tenant: config.temp_vars.tenant,
      locationReadId: locid,
    },
  });

  const goToLocation = useGoToLocation();

  const handleSubmit = async (data: LocationFormValues) => {
    try {
      await httpEditLocation({
        variables: {
          locationUpdateId: locid,
          tenant: config.temp_vars.tenant,
          requestBody: data,
        },
      });
    } catch (error) {
      console.error({ error });
      alert("Something went wrong");
    } finally {
      goToLocation(locid);
    }
  };

  const defaultValues = httpLocation.data?.locationRead?.resource;

  return (
    <Modal>
      <div className="relative transform overflow-hidden rounded-lg bg-white text-left   overflow-y-auto shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <header className="mb-4">
            <h3
              className="text-xl font-semibold leading-6  text-gray-900"
              id="modal-title"
            >
              Update Location
            </h3>
          </header>
          <div className="max-h-[calc(70vh)] overflow-y-auto my-2">
            <LocationForm
              formId={FORM_ID}
              onSubmit={handleSubmit}
              initialValues={defaultValues as Partial<LocationFormValues>}
            />
          </div>
          <footer className="flex align-middle justify-end pt-2 border-t-2 border-gray-200">
            <Link to={`/l/${locid}`}>
              <Button variant="secondary">Cancel</Button>
            </Link>
            <Button type="submit" form={FORM_ID} disabled={loading}>
              Update
            </Button>
          </footer>
        </div>
      </div>
    </Modal>
  );
};

export default LocationEdit;
