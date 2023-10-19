import { SubmitHandler, useForm } from "react-hook-form";
import InputGroup from "../../../common/molecules/InputGroup";
import { useEffect } from "react";
import LocationStatusEnum, {
  LocationStatus,
} from "../../../../constants/enums/LocationStatus";
import SelectGroup from "../../../common/molecules/SelectGroup";
import { SelectOption } from "../../../../types";
import TextareaGroup from "../../../common/molecules/TextareaGroup";

export interface LocationFormValues {
  name: string;
  status?: LocationStatus;
  description?: string;
}

interface CommonProps {
  formId?: string;
  onValidityChange?: (isValid: boolean) => void;
  onSubmit: (values: LocationFormValues) => void;
}

type ConditionalProps =
  | {
      initialValues: Partial<LocationFormValues>;
    }
  | {
      initialValues?: never;
    };

type Props = CommonProps & ConditionalProps;

const SELECT_OPTIONS: SelectOption[] = [
  {
    id: LocationStatusEnum.ACTIVE,
    label: LocationStatusEnum.ACTIVE,
    defaultChecked: true,
  },
  {
    id: LocationStatusEnum.INACTIVE,
    label: LocationStatusEnum.INACTIVE,
  },
];

const LocationForm = ({
  formId,
  initialValues,
  onSubmit,
  onValidityChange,
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<LocationFormValues>({
    defaultValues: initialValues,
  });

  useEffect(() => {
    if (onValidityChange) {
      onValidityChange(!!errors && isDirty);
    }
  }, [errors, isDirty, onValidityChange]);

  const handleFormSubmit: SubmitHandler<LocationFormValues> = (data) => {
    onSubmit(data);
  };

  return (
    <form id={formId} onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="grid grid-cols-2 gap-2 mb-4">
        <InputGroup
          inputProps={register("name", {
            required: { value: true, message: "This is a required field" },
            maxLength: { value: 50, message: "Max length 50 allowed" },
          })}
          label="Location name"
          error={errors.name?.message}
        />
        <SelectGroup
          selectProps={register("status")}
          label="Status"
          options={SELECT_OPTIONS}
          error={errors.status?.message}
        />
      </div>
      <div className="row">
        <TextareaGroup
          textareaProps={register("description")}
          label="Description"
          error={errors.description?.message}
        />
      </div>
    </form>
  );
};

export default LocationForm;
