export enum LocationStatusEnum {
  ACTIVE = "Active",
  INACTIVE = "Inactive",
}

export default LocationStatusEnum;
export type LocationStatusStrings = keyof typeof LocationStatusEnum;
export type LocationStatus = LocationStatusStrings | LocationStatusEnum;
