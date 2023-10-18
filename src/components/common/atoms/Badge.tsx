import clsx from "clsx";

interface Props {
  children: string;
  color?: "default" | "danger"; // extensible in the future
}

const Badge = ({ children, color = "default" }: Props) => {
  const css = clsx(
    "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium  ring-1 ring-inset ",
    {
      "text-yellow-800 ring-yellow-600/20 bg-yellow-50": color === "default",
      "text-red-800 ring-red-600/20 bg-red-50": color === "danger",
    }
  );

  return <span className={css}>{children}</span>;
};

export default Badge;
