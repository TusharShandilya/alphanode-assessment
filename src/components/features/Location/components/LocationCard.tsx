import { LocationData } from "../../../../types";
import Badge from "../../../common/atoms/Badge";

interface Props {
  location: LocationData;
}

const LocationCard = ({ location }: Props) => {
  return (
    <div>
      <Badge
        color={
          String(location?.status).toLowerCase() === "active"
            ? "default"
            : "danger"
        }
      >
        {location?.status ?? ""}
      </Badge>
    </div>
  );
};

export default LocationCard;
