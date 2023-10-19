import { useEffect, useState } from "react";
import Input from "../../../common/atoms/Input";
import Button from "../../../common/atoms/Button";
import { LocationPropertyData } from "../types";

interface Props {
  onSubmit: (value: string) => void | Promise<void>;
  data: LocationPropertyData;
  loading: boolean;
}

const LocationProperty = ({
  data: { label, value, isEditable, type = "text" },
  onSubmit,
  loading,
}: Props) => {
  const [property, setProperty] = useState(value);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    setProperty(value);
  }, [value]);

  const toggleEdit = () => {
    if (isEditable) {
      setIsEdit((prev) => !prev);
    }
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setProperty(evt.target.value);
  };

  const handleSubmit = async () => {
    // TODO: add validations
    const isValid = true;
    // QUERY: for the sake of time I am assuming the values are always valid

    if (!isValid) return;

    toggleEdit();
    if (onSubmit && property) {
      await onSubmit(property);
    }
  };

  return (
    <div className="flex flex-col align-top border-2 border-transparent hover:shadow-sm hover:border-gray-300 rounded-md p-2 group ">
      <h4 className="text-md font-bold">{label}</h4>

      {isEdit && (
        <div className="flex items-center group">
          <Input type={type} value={property} onChange={handleChange} />
          <Button
            className="mr-0"
            variant="success"
            leadIcon="✓"
            iconOnly
            onClick={handleSubmit}
            disabled={loading}
          >
            Submit
          </Button>
          <Button variant="danger" leadIcon="X" iconOnly onClick={toggleEdit}>
            Close edit
          </Button>
        </div>
      )}
      {!loading && !isEdit && (
        <div className="flex items-center  ">
          <p className="text-md mb-0 text-gray-800 ">
            {property ? property : "-"}
          </p>
          {isEditable && (
            <Button
              className="opacity-0 group-hover:opacity-100 focus:opacity-100"
              variant="tertiary"
              leadIcon="🖊️"
              iconOnly
              onClick={toggleEdit}
            >
              {`Edit Property ${label}`}
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default LocationProperty;
