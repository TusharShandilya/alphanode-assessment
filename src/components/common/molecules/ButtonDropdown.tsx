import { useId, useRef, useState } from "react";
import Button from "../atoms/Button";
import clsx from "clsx";
import useClickOutside from "../../../hooks/useClickOutside";

interface Props {
  label: string;
  children: React.ReactNode;
  id?: string;
  buttonProps?: Omit<React.ComponentProps<typeof Button>, "children" | "id">;
}

const ButtonDropdown = ({ id, label, buttonProps, children }: Props) => {
  const autoId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  const toggleDropdown = () => {
    setActive((prev) => !prev);
  };
  useClickOutside(containerRef, () => setActive(false));

  const btnId = id ? id : autoId;
  const dropdownCss = clsx(
    "absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
    { hidden: !active }
  );

  return (
    <div ref={containerRef} className="relative inline-block text-left">
      <div>
        <Button onClick={toggleDropdown} id={btnId} {...buttonProps}>
          {label}
        </Button>
      </div>

      <div
        className={dropdownCss}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby={btnId}
        tab-index="-1"
      >
        <div className="py-1" role="none">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ButtonDropdown;
