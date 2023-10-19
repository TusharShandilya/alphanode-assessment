import { Link, useLocation } from "react-router-dom";
import Button from "../../../common/atoms/Button";
import Modal from "../../../common/molecules/Modal";
import LocationForm, { LocationFormValues } from "../components/LocationForm";
import { LocationCreateMutation } from "../../../../types/gql/graphql";
import { useMutation } from "@apollo/client";
import { CREATE_LOCATION } from "../api/Location.mutation";
import useGoToLocation from "../../../../hooks/useGoToLocation";
import config from "../../../../config";
import { GET_LOCATIONS } from "../api/Location.queries";

const FORM_ID = "edit-form";

const LocationAdd = () => {
  const location = useLocation();

  const [httpCreateLocation, { loading }] = useMutation<LocationCreateMutation>(
    CREATE_LOCATION,
    {
      refetchQueries: [GET_LOCATIONS],
    }
  );

  const goToLocation = useGoToLocation();

  const handleSubmit = async (formValues: LocationFormValues) => {
    try {
      const response = await httpCreateLocation({
        variables: {
          tenant: config.temp_vars.tenant,
          requestBody: formValues,
        },
      });

      const data = response.data?.locationCreate;
      if (data?.__typename === "LocationCommandResponse") {
        const locId = data.resourceID;
        goToLocation(locId);
      }
    } catch (error) {
      console.error({ error });
      alert("Something went wrong");
    }
  };

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
            <LocationForm formId={FORM_ID} onSubmit={handleSubmit} />
          </div>
          <footer className="flex align-middle justify-end pt-2 border-t-2 border-gray-200">
            <Link
              to={
                location.state?.backgroundLocation
                  ? location.state?.backgroundLocation
                  : "/"
              }
            >
              <Button variant="secondary">Cancel</Button>
            </Link>
            <Button type="submit" form={FORM_ID} disabled={loading}>
              Add
            </Button>
          </footer>
        </div>
      </div>
    </Modal>
  );
};

export default LocationAdd;
