import clsx from "clsx";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  variant?: "primary" | "secondary" | "tertiary" | "success" | "danger";
  leadIcon?: React.ReactNode;
  iconOnly?: boolean;
}

const Button = ({
  children,
  leadIcon,
  iconOnly,
  className = "",
  variant = "primary",
  disabled = false,
  ...rest
}: Props) => {
  const css = clsx(
    "ext-white hover:bg-blue-800 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none dark:focus:ring-blue-800 cursor-pointer",
    {
      "focus:ring-blue-300  dark:bg-blue-600 dark:hover:bg-blue-700 text-white  bg-blue-700":
        variant === "primary",
      "focus:ring-gray-300  dark:bg-gray-600 dark:hover:bg-gray-700 text-white  bg-gray-700":
        variant === "secondary",
      "focus:ring-green-300  dark:bg-green-600 dark:hover:bg-green-700 text-white  bg-green-700":
        variant === "success",
      "focus:ring-gray-300  dark:bg-gray-300 dark:hover:bg-gray-500 bg-gray-300 hover:text-white":
        variant === "tertiary",
      "opacity-70 cursor-not-allowed": disabled,
    },
    className
  );

  return (
    <button className={css} aria-label={children} {...rest}>
      {leadIcon && <span>{leadIcon}</span>}
      {iconOnly ? "" : children}
    </button>
  );
};

export default Button;
