/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation LocationCreate($requestBody: LocationWriteInput!, $tenant: String!) {\n    locationCreate(requestBody: $requestBody, tenant: $tenant) {\n      ... on Error {\n        error\n        message\n      }\n      ... on LocationCommandResponse {\n        resourceID\n      }\n    }\n  }\n": types.LocationCreateDocument,
    "\n  mutation LocationUpdate(\n    $locationUpdateId: String!\n    $requestBody: LocationWriteInput!\n    $tenant: String!\n  ) {\n    locationUpdate(\n      id: $locationUpdateId\n      requestBody: $requestBody\n      tenant: $tenant\n    ) {\n      ... on LocationCommandResponse {\n        resourceID\n      }\n\n      ... on Error {\n        error\n        message\n      }\n    }\n  }\n": types.LocationUpdateDocument,
    "\n  mutation LocationRemove($locationRemoveId: String!, $tenant: String!) {\n    locationRemove(id: $locationRemoveId, tenant: $tenant) {\n      ... on LocationCommandResponse {\n        resourceID\n      }\n      ... on Error {\n        error\n        message\n      }\n    }\n  }\n": types.LocationRemoveDocument,
    "\n  mutation LocationPatch(\n    $locationPatchId: String!\n    $requestBody: LocationPatchInput!\n    $tenant: String!\n  ) {\n    locationPatch(\n      id: $locationPatchId\n      requestBody: $requestBody\n      tenant: $tenant\n    ) {\n      ... on LocationCommandResponse {\n        resourceID\n      }\n      ... on Error {\n        error\n      }\n    }\n  }\n": types.LocationPatchDocument,
    "\n  query LocationList($tenant: String!) {\n    locationList(tenant: $tenant) {\n      resources {\n        address\n        name\n        id\n        status\n        updatedAt\n        type\n        description\n      }\n    }\n  }\n": types.LocationListDocument,
    "\n  query LocationRead($locationReadId: String!, $tenant: String!) {\n    locationRead(id: $locationReadId, tenant: $tenant) {\n      resource {\n        address\n        name\n        id\n        status\n        updatedAt\n        type\n        description\n      }\n    }\n  }\n": types.LocationReadDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation LocationCreate($requestBody: LocationWriteInput!, $tenant: String!) {\n    locationCreate(requestBody: $requestBody, tenant: $tenant) {\n      ... on Error {\n        error\n        message\n      }\n      ... on LocationCommandResponse {\n        resourceID\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation LocationCreate($requestBody: LocationWriteInput!, $tenant: String!) {\n    locationCreate(requestBody: $requestBody, tenant: $tenant) {\n      ... on Error {\n        error\n        message\n      }\n      ... on LocationCommandResponse {\n        resourceID\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation LocationUpdate(\n    $locationUpdateId: String!\n    $requestBody: LocationWriteInput!\n    $tenant: String!\n  ) {\n    locationUpdate(\n      id: $locationUpdateId\n      requestBody: $requestBody\n      tenant: $tenant\n    ) {\n      ... on LocationCommandResponse {\n        resourceID\n      }\n\n      ... on Error {\n        error\n        message\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation LocationUpdate(\n    $locationUpdateId: String!\n    $requestBody: LocationWriteInput!\n    $tenant: String!\n  ) {\n    locationUpdate(\n      id: $locationUpdateId\n      requestBody: $requestBody\n      tenant: $tenant\n    ) {\n      ... on LocationCommandResponse {\n        resourceID\n      }\n\n      ... on Error {\n        error\n        message\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation LocationRemove($locationRemoveId: String!, $tenant: String!) {\n    locationRemove(id: $locationRemoveId, tenant: $tenant) {\n      ... on LocationCommandResponse {\n        resourceID\n      }\n      ... on Error {\n        error\n        message\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation LocationRemove($locationRemoveId: String!, $tenant: String!) {\n    locationRemove(id: $locationRemoveId, tenant: $tenant) {\n      ... on LocationCommandResponse {\n        resourceID\n      }\n      ... on Error {\n        error\n        message\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation LocationPatch(\n    $locationPatchId: String!\n    $requestBody: LocationPatchInput!\n    $tenant: String!\n  ) {\n    locationPatch(\n      id: $locationPatchId\n      requestBody: $requestBody\n      tenant: $tenant\n    ) {\n      ... on LocationCommandResponse {\n        resourceID\n      }\n      ... on Error {\n        error\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation LocationPatch(\n    $locationPatchId: String!\n    $requestBody: LocationPatchInput!\n    $tenant: String!\n  ) {\n    locationPatch(\n      id: $locationPatchId\n      requestBody: $requestBody\n      tenant: $tenant\n    ) {\n      ... on LocationCommandResponse {\n        resourceID\n      }\n      ... on Error {\n        error\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query LocationList($tenant: String!) {\n    locationList(tenant: $tenant) {\n      resources {\n        address\n        name\n        id\n        status\n        updatedAt\n        type\n        description\n      }\n    }\n  }\n"): (typeof documents)["\n  query LocationList($tenant: String!) {\n    locationList(tenant: $tenant) {\n      resources {\n        address\n        name\n        id\n        status\n        updatedAt\n        type\n        description\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query LocationRead($locationReadId: String!, $tenant: String!) {\n    locationRead(id: $locationReadId, tenant: $tenant) {\n      resource {\n        address\n        name\n        id\n        status\n        updatedAt\n        type\n        description\n      }\n    }\n  }\n"): (typeof documents)["\n  query LocationRead($locationReadId: String!, $tenant: String!) {\n    locationRead(id: $locationReadId, tenant: $tenant) {\n      resource {\n        address\n        name\n        id\n        status\n        updatedAt\n        type\n        description\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;