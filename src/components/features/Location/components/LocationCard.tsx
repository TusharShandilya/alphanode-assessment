import { formatDistanceToNow } from "date-fns";
import { LocationData } from "../../../../types";
import Badge from "../../../common/atoms/Badge";

interface Props {
  location: LocationData;
  onClick: React.MouseEventHandler;
}

const LocationCard = ({ location, onClick }: Props) => {
  const icon = location?.type ? "📅" : "📞";

  return (
    <div
      onClick={onClick}
      className="border-2
    rounded-md py-2 px-8 border-gray-300 hover:border-gray-900 cursor-pointer"
    >
      <div className="flex align-middle justify-between mb-4">
        <div className="mr-2 flex flex-col">
          <span className="text-sm">{location?.name}</span>
          <span className="text-sm text-gray-500">{location?.description}</span>
        </div>
        <Badge
          color={
            String(location?.status).toLowerCase() === "active"
              ? "default"
              : "danger"
          }
          className="self-center"
        >
          {location?.status ?? ""}
        </Badge>
      </div>
      <div className="flex align-middle justify-between text-xs">
        <span className="flex align-middle">
          <span className="mr-1 ">{icon}</span>
          {String(location?.type)}
        </span>
        <span className=" text-gray-500">
          {location?.updatedAt
            ? formatDistanceToNow(location.updatedAt, {
                addSuffix: true,
              })
            : ""}
        </span>
      </div>
    </div>
  );
};

export default LocationCard;
