import clsx from "clsx";

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  forRequired?: boolean;
}

const Label = ({
  children,
  className = "",
  forRequired = false,
  ...rest
}: Props) => {
  const css = clsx(
    "text-sm text-gray-800",
    {
      "after:content-['*'] after:text-red-600": forRequired,
    },
    className
  );
  return (
    <label className={css} {...rest}>
      {children}
    </label>
  );
};

export default Label;
