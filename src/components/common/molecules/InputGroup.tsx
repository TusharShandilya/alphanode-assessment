import { useId } from "react";
import Input from "../atoms/Input";
import Label from "../atoms/Label";
import FieldError from "../atoms/FieldError";

interface Props {
  label: string;
  inputProps: React.ComponentProps<typeof Input>;
  error?: string;
}

const InputGroup = ({ inputProps, label, error }: Props) => {
  const autoId = useId();
  const { id = autoId, required, ...restProps } = inputProps;

  return (
    <div className="flex flex-col align-top">
      <Label forRequired={required} htmlFor={id}>
        {label}
      </Label>
      <Input id={id} required={required} {...restProps} />
      {!!error && <FieldError>{error}</FieldError>}
    </div>
  );
};

export default InputGroup;
