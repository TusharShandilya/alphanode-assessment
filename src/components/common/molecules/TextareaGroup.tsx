import { useId } from "react";
import Label from "../atoms/Label";
import FieldError from "../atoms/FieldError";
import Textarea from "../atoms/Textarea";

interface Props {
  label: string;
  textareaProps: React.ComponentProps<typeof Textarea>;
  error?: string;
}

const TextareaGroup = ({ textareaProps, label, error }: Props) => {
  const autoId = useId();
  const { id = autoId, required, ...restProps } = textareaProps;

  return (
    <div className="flex flex-col align-top">
      <Label forRequired={required} htmlFor={id}>
        {label}
      </Label>
      <Textarea id={id} required={required} {...restProps} />
      {!!error && <FieldError>{error}</FieldError>}
    </div>
  );
};

export default TextareaGroup;
