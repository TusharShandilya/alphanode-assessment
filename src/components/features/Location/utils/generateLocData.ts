import { format } from "date-fns";
import { LocationData } from "../../../../types";
import { LocationPropertyData } from "../types";

export const generateLocData = (
  location: LocationData
): LocationPropertyData[] => {
  if (!location) return [];

  return [
    {
      id: "address",
      label: "Address",
      value: String(location.address),
      isEditable: true,
      type: "text",
    },
    {
      id: "type",
      label: "Type",
      value: location.type ? location.type : undefined,
      isEditable: true,
    },
    {
      id: "updatedAt",
      label: "Last updated at",
      value: location.updatedAt
        ? format(location.updatedAt, " 📆 d MMM, yyy 🕰️ K:mm aaaa")
        : undefined,
      isEditable: false,
    },
  ];
};
