import { gql } from "@apollo/client";

export const GET_LOCATIONS = gql`
  query LocationList($tenant: String!) {
    locationList(tenant: $tenant) {
      resources {
        address
        id
        status
        description
        name
      }
    }
  }
`;
