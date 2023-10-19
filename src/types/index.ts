import { LocationQueryListResponse } from "./gql/graphql";
import { Unpacked } from "./utils";

export type LocationData = Unpacked<LocationQueryListResponse["resources"]>;

export * from "./utils";
export * from "./form";
