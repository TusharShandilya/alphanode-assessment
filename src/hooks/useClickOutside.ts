import React, { useCallback, useEffect } from "react";

/**
 *
 * @param ref - ref of the target outside which the trigger will take place
 * @param onOutsideClick - function that is triggered when something outside the target is clicked
 */
const useClickOutside = (
  ref: React.RefObject<any>,
  onOutsideClick: () => void
) => {
  const handleClickOutside = useCallback(
    (event: MouseEvent): any => {
      if (ref.current && !ref.current.contains(event.target)) {
        onOutsideClick();
      }
    },
    [ref, onOutsideClick]
  );

  useEffect(() => {
    const element = ref.current;

    if (element) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside, ref]);
};

export default useClickOutside;
