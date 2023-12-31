import clsx from "clsx";
import { forwardRef } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "error";
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, variant = "default", ...rest }, ref) => {
    const css = clsx(
      "block w-full rounded-md border-0 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
      {
        ["ring-red-500"]: variant === "error",
      },
      className
    );

    return <input ref={ref} className={css} {...rest} />;
  }
);

export default Input;
