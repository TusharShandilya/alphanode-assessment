import clsx from "clsx";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  variant?: "primary" | "secondary" | "tertiary";
  leadIcon?: React.ReactNode;
  iconOnly?: boolean;
}

const Button = ({
  children,
  leadIcon,
  iconOnly,
  className = "",
  variant = "primary",
  ...rest
}: Props) => {
  const css = clsx(
    "",
    {
      "TODO: primary classes": variant === "primary",
      "TODO: secondary classes": variant === "secondary",
      "TODO: tertiary classes": variant === "tertiary",
    },
    className
  );

  return (
    <button className={css} aria-label={children} {...rest}>
      {leadIcon && <span>{leadIcon}</span>}
      {iconOnly ? children : ""}
    </button>
  );
};

export default Button;
