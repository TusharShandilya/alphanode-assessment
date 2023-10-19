import { Location, RouteObject } from "react-router-dom";

export type FeatureRoute = {
  foreground: RouteObject[];
  background?: RouteObject[];
};

export type BackgroundState = {
  backgroundLocation: Location;
};
