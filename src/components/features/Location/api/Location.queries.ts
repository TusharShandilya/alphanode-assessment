import { gql } from "@apollo/client";

export const GET_LOCATIONS = gql`
  query LocationList($tenant: String!) {
    locationList(tenant: $tenant) {
      resources {
        address
        name
        id
        status
        updatedAt
        type
        description
      }
    }
  }
`;

export const GET_LOCATION_BY_ID = gql`
  query LocationRead($locationReadId: String!, $tenant: String!) {
    locationRead(id: $locationReadId, tenant: $tenant) {
      resource {
        address
        name
        id
        status
        updatedAt
        type
        description
      }
    }
  }
`;
