import clsx from "clsx";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "error";
}

const Input = ({ className, variant = "default", ...rest }: Props) => {
  const css = clsx(
    "block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
    {
      ["ring-red-500"]: variant === "error",
    },
    className
  );

  return <input className={css} {...rest} />;
};

export default Input;
