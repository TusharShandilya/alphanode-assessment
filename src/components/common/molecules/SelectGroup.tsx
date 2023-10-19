import { useId } from "react";
import Label from "../atoms/Label";
import FieldError from "../atoms/FieldError";
import Select from "../atoms/Select";

interface Props {
  label: string;
  selectProps: Omit<React.ComponentProps<typeof Select>, "options">;
  options: React.ComponentProps<typeof Select>["options"];
  error?: string;
}

const SelectGroup = ({ selectProps, label, error, options }: Props) => {
  const autoId = useId();
  const { id = autoId, required, ...restProps } = selectProps;

  return (
    <div className="flex flex-col align-top">
      <Label forRequired={required} htmlFor={id}>
        {label}
      </Label>
      <Select id={id} required={required} options={options} {...restProps} />
      {!!error && <FieldError>{error}</FieldError>}
    </div>
  );
};

export default SelectGroup;
