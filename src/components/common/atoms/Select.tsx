import clsx from "clsx";
import { forwardRef } from "react";
import { SelectOption } from "../../../types";

interface Props extends React.InputHTMLAttributes<HTMLSelectElement> {
  variant?: "default" | "error";
  options: SelectOption[];
}

const Select = forwardRef<HTMLSelectElement, Props>(
  ({ className, variant = "default", options, ...rest }, ref) => {
    const css = clsx(
      "block w-full rounded-md border-0 py-3 px-4 bg-white text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
      {
        ["ring-red-500"]: variant === "error",
      },
      className
    );

    return (
      <select ref={ref} className={css} {...rest}>
        {options.map(({ id, label, defaultChecked }) => (
          <option key={id} value={id} defaultChecked={defaultChecked}>
            {label}
          </option>
        ))}
      </select>
    );
  }
);

export default Select;
