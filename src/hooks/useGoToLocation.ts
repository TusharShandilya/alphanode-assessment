import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const useGoToLocation = () => {
  const navigate = useNavigate();

  const goToLocation = useCallback(
    (locationId: string) => {
      navigate({
        pathname: `/l/${locationId}`,
      });
    },
    [navigate]
  );

  return goToLocation;
};

export default useGoToLocation;
