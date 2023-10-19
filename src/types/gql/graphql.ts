/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any };
};

export type Appointment = {
  __typename?: "Appointment";
  basedOn?: Maybe<Scalars["String"]["output"]>;
  bookedStamp?: Maybe<Scalars["String"]["output"]>;
  cancelationReason?: Maybe<Scalars["String"]["output"]>;
  comment?: Maybe<Scalars["String"]["output"]>;
  coverageList?: Maybe<CoverageQueryListResponse>;
  created?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  device?: Maybe<Scalars["String"]["output"]>;
  deviceRead?: Maybe<DeviceQueryReadResponse>;
  endTime?: Maybe<Scalars["String"]["output"]>;
  generated?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  location?: Maybe<Scalars["String"]["output"]>;
  locationRead?: Maybe<LocationQueryReadResponse>;
  metadata?: Maybe<AppointmentMetadata>;
  minutesDuration?: Maybe<Scalars["Float"]["output"]>;
  patient: Scalars["String"]["output"];
  patientInstruction?: Maybe<Scalars["String"]["output"]>;
  patientRead?: Maybe<PatientQueryReadResponse>;
  pendingBooking?: Maybe<AppointmentReschedule>;
  priorAuthList?: Maybe<PriorAuthQueryListResponse>;
  reasonCode?: Maybe<AppointmentReasonCode>;
  serviceCategory?: Maybe<AppointmentServiceCategory>;
  serviceType: AppointmentServiceType;
  slot?: Maybe<Scalars["String"]["output"]>;
  specialty?: Maybe<Scalars["String"]["output"]>;
  startTime?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<AppointmentStatus>;
  statusStamp?: Maybe<Scalars["String"]["output"]>;
  tag?: Maybe<Scalars["String"]["output"]>;
  tenant?: Maybe<Scalars["String"]["output"]>;
  textOutreachList?: Maybe<TextOutreachQueryListResponse>;
  updated?: Maybe<Scalars["String"]["output"]>;
  visit: Scalars["String"]["output"];
};

export type AppointmentCoverageListArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  tag?: InputMaybe<Scalars["String"]["input"]>;
  visit?: InputMaybe<Scalars["String"]["input"]>;
};

export type AppointmentTextOutreachListArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  visit?: InputMaybe<Scalars["String"]["input"]>;
};

export type AppointmentCommandResponse = {
  __typename?: "AppointmentCommandResponse";
  resourceID: Scalars["String"]["output"];
};

export type AppointmentCommandResponseOutput =
  | AppointmentCommandResponse
  | Error;

export type AppointmentHistoryQueryMetricResponse = {
  __typename?: "AppointmentHistoryQueryMetricResponse";
  resource?: Maybe<AppointmentMetrics>;
  resources?: Maybe<Array<Maybe<AppointmentMetrics>>>;
};

export type AppointmentMetadata = {
  __typename?: "AppointmentMetadata";
  authEndDate?: Maybe<Scalars["String"]["output"]>;
  authStartDate?: Maybe<Scalars["String"]["output"]>;
  authStatus?: Maybe<Scalars["String"]["output"]>;
  doNotContact?: Maybe<Scalars["Boolean"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  lastCompletedOn?: Maybe<Scalars["String"]["output"]>;
};

export type AppointmentMetadataInput = {
  authEndDate?: InputMaybe<Scalars["String"]["input"]>;
  authStartDate?: InputMaybe<Scalars["String"]["input"]>;
  authStatus?: InputMaybe<Scalars["String"]["input"]>;
  doNotContact?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  lastCompletedOn?: InputMaybe<Scalars["String"]["input"]>;
};

export type AppointmentMetrics = {
  __typename?: "AppointmentMetrics";
  date?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  location?: Maybe<Scalars["String"]["output"]>;
  locationRead?: Maybe<LocationQueryReadResponse>;
  modality?: Maybe<Scalars["String"]["output"]>;
  newAppointmentDate?: Maybe<Scalars["String"]["output"]>;
  nudgeConfirmed?: Maybe<Scalars["String"]["output"]>;
  occurrences?: Maybe<Scalars["Float"]["output"]>;
  oldAppointmentDate?: Maybe<Scalars["String"]["output"]>;
  patientId?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  tenant?: Maybe<Scalars["String"]["output"]>;
};

export type AppointmentPatchInput = {
  basedOn?: InputMaybe<Scalars["String"]["input"]>;
  bookedStamp?: InputMaybe<Scalars["String"]["input"]>;
  cancelationReason?: InputMaybe<Scalars["String"]["input"]>;
  comment?: InputMaybe<Scalars["String"]["input"]>;
  created?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  device?: InputMaybe<Scalars["String"]["input"]>;
  endTime?: InputMaybe<Scalars["String"]["input"]>;
  generated?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  metadata?: InputMaybe<AppointmentMetadataInput>;
  minutesDuration?: InputMaybe<Scalars["Float"]["input"]>;
  patient?: InputMaybe<Scalars["String"]["input"]>;
  patientInstruction?: InputMaybe<Scalars["String"]["input"]>;
  pendingBooking?: InputMaybe<AppointmentRescheduleInput>;
  reasonCode?: InputMaybe<AppointmentReasonCodeInput>;
  serviceCategory?: InputMaybe<AppointmentServiceCategoryInput>;
  serviceType?: InputMaybe<AppointmentServiceTypeInput>;
  slot?: InputMaybe<Scalars["String"]["input"]>;
  specialty?: InputMaybe<Scalars["String"]["input"]>;
  startTime?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<AppointmentStatus>;
  statusStamp?: InputMaybe<Scalars["String"]["input"]>;
  tag?: InputMaybe<Scalars["String"]["input"]>;
  tenant?: InputMaybe<Scalars["String"]["input"]>;
  updated?: InputMaybe<Scalars["String"]["input"]>;
  visit?: InputMaybe<Scalars["String"]["input"]>;
};

export type AppointmentQueryListResponse = {
  __typename?: "AppointmentQueryListResponse";
  pages: Scalars["Int"]["output"];
  resources: Array<Maybe<Appointment>>;
};

export type AppointmentQueryReadResponse = {
  __typename?: "AppointmentQueryReadResponse";
  id: Scalars["String"]["output"];
  resource: Appointment;
};

export type AppointmentReasonCode = {
  __typename?: "AppointmentReasonCode";
  coding?: Maybe<Scalars["String"]["output"]>;
  text?: Maybe<Scalars["String"]["output"]>;
};

export type AppointmentReasonCodeInput = {
  coding?: InputMaybe<Scalars["String"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
};

export type AppointmentReschedule = {
  __typename?: "AppointmentReschedule";
  appointment: Scalars["String"]["output"];
  created?: Maybe<Scalars["String"]["output"]>;
  endTime: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  note?: Maybe<Scalars["String"]["output"]>;
  oldAppointmentStartTime?: Maybe<Scalars["String"]["output"]>;
  rescheduledAppointmentId?: Maybe<Scalars["String"]["output"]>;
  startTime: Scalars["String"]["output"];
  status: AppointmentRescheduleStatus;
  tenant: Scalars["String"]["output"];
  updated?: Maybe<Scalars["String"]["output"]>;
};

export type AppointmentRescheduleActionInput = {
  note?: InputMaybe<Scalars["String"]["input"]>;
};

export type AppointmentRescheduleInput = {
  appointment: Scalars["String"]["input"];
  created?: InputMaybe<Scalars["String"]["input"]>;
  endTime: Scalars["String"]["input"];
  id: Scalars["String"]["input"];
  note?: InputMaybe<Scalars["String"]["input"]>;
  oldAppointmentStartTime?: InputMaybe<Scalars["String"]["input"]>;
  rescheduledAppointmentId?: InputMaybe<Scalars["String"]["input"]>;
  startTime: Scalars["String"]["input"];
  status: AppointmentRescheduleStatus;
  tenant: Scalars["String"]["input"];
  updated?: InputMaybe<Scalars["String"]["input"]>;
};

export type AppointmentReschedulePatchInput = {
  appointment?: InputMaybe<Scalars["String"]["input"]>;
  created?: InputMaybe<Scalars["String"]["input"]>;
  endTime?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  note?: InputMaybe<Scalars["String"]["input"]>;
  oldAppointmentStartTime?: InputMaybe<Scalars["String"]["input"]>;
  rescheduledAppointmentId?: InputMaybe<Scalars["String"]["input"]>;
  startTime?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<AppointmentRescheduleStatus>;
  tenant?: InputMaybe<Scalars["String"]["input"]>;
  updated?: InputMaybe<Scalars["String"]["input"]>;
};

export type AppointmentRescheduleQueryListResponse = {
  __typename?: "AppointmentRescheduleQueryListResponse";
  pages: Scalars["Int"]["output"];
  resources: Array<Maybe<AppointmentReschedule>>;
};

export type AppointmentRescheduleRequestInput = {
  endTime: Scalars["String"]["input"];
  startTime: Scalars["String"]["input"];
};

export enum AppointmentRescheduleStatus {
  Booked = "booked",
  Canceled = "canceled",
  Pending = "pending",
}

export type AppointmentServiceCategory = {
  __typename?: "AppointmentServiceCategory";
  coding?: Maybe<Scalars["String"]["output"]>;
  text?: Maybe<Scalars["String"]["output"]>;
};

export type AppointmentServiceCategoryInput = {
  coding?: InputMaybe<Scalars["String"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
};

export type AppointmentServiceType = {
  __typename?: "AppointmentServiceType";
  coding: Scalars["String"]["output"];
  text?: Maybe<Scalars["String"]["output"]>;
};

export type AppointmentServiceTypeInput = {
  coding: Scalars["String"]["input"];
  text?: InputMaybe<Scalars["String"]["input"]>;
};

export enum AppointmentStatus {
  Arrived = "arrived",
  Booked = "booked",
  BookingPending = "bookingPending",
  Canceled = "canceled",
  CheckedIn = "checked_in",
  Completed = "completed",
  Pending = "pending",
}

export enum AppointmentStatus2ListItem {
  Arrived = "arrived",
  Booked = "booked",
  BookingPending = "bookingPending",
  Canceled = "canceled",
  Checkedin = "checkedin",
  Completed = "completed",
  Pending = "pending",
}

export type AppointmentWriteInput = {
  basedOn?: InputMaybe<Scalars["String"]["input"]>;
  bookedStamp?: InputMaybe<Scalars["String"]["input"]>;
  cancelationReason?: InputMaybe<Scalars["String"]["input"]>;
  comment?: InputMaybe<Scalars["String"]["input"]>;
  created?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  device?: InputMaybe<Scalars["String"]["input"]>;
  endTime?: InputMaybe<Scalars["String"]["input"]>;
  generated?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  metadata?: InputMaybe<AppointmentMetadataInput>;
  minutesDuration?: InputMaybe<Scalars["Float"]["input"]>;
  patient?: InputMaybe<Scalars["String"]["input"]>;
  patientInstruction?: InputMaybe<Scalars["String"]["input"]>;
  pendingBooking?: InputMaybe<AppointmentRescheduleInput>;
  reasonCode?: InputMaybe<AppointmentReasonCodeInput>;
  serviceCategory?: InputMaybe<AppointmentServiceCategoryInput>;
  serviceType: AppointmentServiceTypeInput;
  slot?: InputMaybe<Scalars["String"]["input"]>;
  specialty?: InputMaybe<Scalars["String"]["input"]>;
  startTime?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<AppointmentStatus>;
  statusStamp?: InputMaybe<Scalars["String"]["input"]>;
  tag?: InputMaybe<Scalars["String"]["input"]>;
  tenant?: InputMaybe<Scalars["String"]["input"]>;
  updated?: InputMaybe<Scalars["String"]["input"]>;
  visit: Scalars["String"]["input"];
};

export type AthenaTokenRequestInput = {
  tenant: Scalars["String"]["input"];
};

export type AthenaTokenResponse = {
  __typename?: "AthenaTokenResponse";
  accessToken: Scalars["String"]["output"];
  expiresIn?: Maybe<Scalars["Float"]["output"]>;
  stage: AthenaTokenResponseStage;
};

export type AthenaTokenResponseOutput = AthenaTokenResponse | Error;

export enum AthenaTokenResponseStage {
  Preview = "preview",
  Production = "production",
}

export enum AuthStatusListItem {
  Actionrequired = "actionrequired",
  Complete = "complete",
  Failed = "failed",
  Pending = "pending",
  Running = "running",
}

export enum Branch {
  BlueGreen = "blue_green",
  CanaryStable = "canary_stable",
}

export type CodeSystem = {
  __typename?: "CodeSystem";
  coding?: Maybe<Array<Maybe<CodeSystemCoding>>>;
  created?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  system: Scalars["String"]["output"];
  systemType?: Maybe<Scalars["String"]["output"]>;
  tenant?: Maybe<Scalars["String"]["output"]>;
  updated?: Maybe<Scalars["String"]["output"]>;
};

export type CodeSystemCoding = {
  __typename?: "CodeSystemCoding";
  code?: Maybe<Scalars["String"]["output"]>;
  created?: Maybe<Scalars["String"]["output"]>;
  display?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  metadata?: Maybe<Scalars["JSON"]["output"]>;
  parentId?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  updated?: Maybe<Scalars["String"]["output"]>;
};

export type CodeSystemCodingInput = {
  code?: InputMaybe<Scalars["String"]["input"]>;
  created?: InputMaybe<Scalars["String"]["input"]>;
  display?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  metadata?: InputMaybe<Scalars["JSON"]["input"]>;
  parentId?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  updated?: InputMaybe<Scalars["String"]["input"]>;
};

export type CodeSystemCommandResponse = {
  __typename?: "CodeSystemCommandResponse";
  resourceID: Scalars["String"]["output"];
};

export type CodeSystemCommandResponseOutput = CodeSystemCommandResponse | Error;

export type CodeSystemInput = {
  coding?: InputMaybe<Array<InputMaybe<CodeSystemCodingInput>>>;
  created?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  system: Scalars["String"]["input"];
  systemType?: InputMaybe<Scalars["String"]["input"]>;
  tenant?: InputMaybe<Scalars["String"]["input"]>;
  updated?: InputMaybe<Scalars["String"]["input"]>;
};

export type CodeSystemQueryListResponse = {
  __typename?: "CodeSystemQueryListResponse";
  pages: Scalars["Float"]["output"];
  resources: Array<Maybe<CodeSystem>>;
};

export type CodeSystemQueryReadResponse = {
  __typename?: "CodeSystemQueryReadResponse";
  resource: CodeSystem;
};

export type CodingQueryListResponse = {
  __typename?: "CodingQueryListResponse";
  pages: Scalars["Float"]["output"];
  resources: Array<Maybe<CodeSystemCoding>>;
};

export type CodingQueryReadResponse = {
  __typename?: "CodingQueryReadResponse";
  resource: CodeSystemCoding;
};

export type Coverage2 = {
  __typename?: "Coverage2";
  beneficiary?: Maybe<Scalars["String"]["output"]>;
  benefits?: Maybe<CoverageSchemaBenefits>;
  coverageCheckedAt?: Maybe<Scalars["String"]["output"]>;
  created?: Maybe<Scalars["String"]["output"]>;
  errorMessages?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  groupNumber?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  metadata?: Maybe<CoverageMetadata>;
  order?: Maybe<Scalars["String"]["output"]>;
  organizationRead?: Maybe<OrganizationQueryReadResponse>;
  payor?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<CoverageStatus>;
  subscriberId?: Maybe<Scalars["String"]["output"]>;
  tag?: Maybe<Scalars["String"]["output"]>;
  tenant?: Maybe<Scalars["String"]["output"]>;
  updated?: Maybe<Scalars["String"]["output"]>;
  visit?: Maybe<Scalars["String"]["output"]>;
  workflows?: Maybe<Array<Maybe<CoverageWorkflow>>>;
};

export type CoverageBenefitsItem = {
  __typename?: "CoverageBenefitsItem";
  benefits?: Maybe<Scalars["JSON"]["output"]>;
  payorId?: Maybe<Scalars["String"]["output"]>;
};

export type CoverageBenefitsResponse = {
  __typename?: "CoverageBenefitsResponse";
  id?: Maybe<Scalars["String"]["output"]>;
  resource?: Maybe<CoverageBenefitsItem>;
};

export type CoverageCommandResponse = {
  __typename?: "CoverageCommandResponse";
  resourceID: Scalars["String"]["output"];
};

export type CoverageCommandResponseOutput = CoverageCommandResponse | Error;

export enum CoverageEbvInputAuthError {
  CasePending = "CasePending",
  ClinicalsRequired = "ClinicalsRequired",
  LoginError = "LoginError",
  MissingInformationError = "MissingInformationError",
  NetworkError = "NetworkError",
  UnknownError = "UnknownError",
}

export enum CoverageEbvInputAuthResult {
  CaseAuthorized = "CaseAuthorized",
  CaseDenied = "CaseDenied",
  CaseNotStarted = "CaseNotStarted",
  CaseNotSupported = "CaseNotSupported",
  CaseP2P = "CaseP2P",
}

export enum CoverageEbvInputAuthStatus {
  Complete = "complete",
  Failed = "failed",
  Pending = "pending",
  Running = "running",
}

export type CoverageEbvInputCoverageItemInput = {
  id: Scalars["String"]["input"];
};

export type CoverageEbvInputInput = {
  appointmentId?: InputMaybe<Scalars["String"]["input"]>;
  authError?: InputMaybe<CoverageEbvInputAuthError>;
  authNumber?: InputMaybe<Scalars["String"]["input"]>;
  authResult?: InputMaybe<CoverageEbvInputAuthResult>;
  authStatus?: InputMaybe<CoverageEbvInputAuthStatus>;
  coverage: Array<InputMaybe<CoverageEbvInputCoverageItemInput>>;
  endDate?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  patientId: Scalars["String"]["input"];
  practitioner?: InputMaybe<CoverageEbvInputPractitionerInput>;
  serviceType?: InputMaybe<CoverageEbvInputServiceTypeInput>;
  startDate?: InputMaybe<Scalars["String"]["input"]>;
  tag?: InputMaybe<Scalars["String"]["input"]>;
  updateStatus?: InputMaybe<CoverageEbvInputUpdateStatus>;
  visit: Scalars["String"]["input"];
};

export type CoverageEbvInputPractitionerInput = {
  id?: InputMaybe<Scalars["String"]["input"]>;
};

export type CoverageEbvInputServiceTypeInput = {
  coding: Scalars["String"]["input"];
  text?: InputMaybe<Scalars["String"]["input"]>;
};

export enum CoverageEbvInputUpdateStatus {
  Complete = "complete",
  Failed = "failed",
  None = "none",
}

export type CoverageEbvResult = {
  __typename?: "CoverageEbvResult";
  auth: CoverageEbvResultAuth;
};

export enum CoverageEbvResultAuth {
  NoPriorAuthRequired = "no_prior_auth_required",
  PriorAuthRequired = "prior_auth_required",
}

export type CoverageEbvResultOutput = CoverageEbvResult | Error;

export type CoverageEdi = {
  __typename?: "CoverageEdi";
  data?: Maybe<Scalars["JSON"]["output"]>;
  payorId?: Maybe<Scalars["String"]["output"]>;
  soapData?: Maybe<Scalars["String"]["output"]>;
};

export type CoverageEdiResponse = {
  __typename?: "CoverageEdiResponse";
  id?: Maybe<Scalars["String"]["output"]>;
  resources?: Maybe<Array<Maybe<CoverageEdi>>>;
};

export type CoverageInitiateInput = {
  forceInitiate?: InputMaybe<Scalars["Boolean"]["input"]>;
  isAvailityRest?: InputMaybe<Scalars["Boolean"]["input"]>;
  isBenefitsCheck?: InputMaybe<Scalars["Boolean"]["input"]>;
  placeOfService?: InputMaybe<Scalars["String"]["input"]>;
  serviceType?: InputMaybe<Scalars["String"]["input"]>;
  visit: Scalars["String"]["input"];
};

export type CoverageMetadata = {
  __typename?: "CoverageMetadata";
  id?: Maybe<Scalars["String"]["output"]>;
  syncLock?: Maybe<Scalars["Boolean"]["output"]>;
};

export type CoverageMetadataInput = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  syncLock?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CoverageMetrics = {
  __typename?: "CoverageMetrics";
  benefits?: Maybe<Scalars["Float"]["output"]>;
  coverageIds?: Maybe<Scalars["JSON"]["output"]>;
  date?: Maybe<Scalars["String"]["output"]>;
  error?: Maybe<Scalars["String"]["output"]>;
  occurrences?: Maybe<Scalars["Float"]["output"]>;
  organizationRead?: Maybe<OrganizationQueryReadResponse>;
  payor?: Maybe<Scalars["String"]["output"]>;
  payorNotActivated?: Maybe<Scalars["Float"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  tenant?: Maybe<Scalars["String"]["output"]>;
};

export type CoverageMetricsListResponse = {
  __typename?: "CoverageMetricsListResponse";
  resources?: Maybe<Array<Maybe<CoverageMetrics>>>;
};

export type CoveragePatchInput = {
  beneficiary?: InputMaybe<Scalars["String"]["input"]>;
  benefits?: InputMaybe<CoverageSchemaBenefitsInput>;
  coverageCheckedAt?: InputMaybe<Scalars["String"]["input"]>;
  created?: InputMaybe<Scalars["String"]["input"]>;
  errorMessages?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  groupNumber?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  metadata?: InputMaybe<CoverageMetadataInput>;
  order?: InputMaybe<Scalars["String"]["input"]>;
  payor?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<CoverageStatus>;
  subscriberId?: InputMaybe<Scalars["String"]["input"]>;
  tag?: InputMaybe<Scalars["String"]["input"]>;
  tenant?: InputMaybe<Scalars["String"]["input"]>;
  updated?: InputMaybe<Scalars["String"]["input"]>;
  visit?: InputMaybe<Scalars["String"]["input"]>;
  workflows?: InputMaybe<Array<InputMaybe<CoverageWorkflowInput>>>;
};

export type CoveragePutInput = {
  beneficiary?: InputMaybe<Scalars["String"]["input"]>;
  benefits?: InputMaybe<CoverageSchemaBenefitsInput>;
  coverageCheckedAt?: InputMaybe<Scalars["String"]["input"]>;
  created?: InputMaybe<Scalars["String"]["input"]>;
  errorMessages?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  groupNumber?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  metadata?: InputMaybe<CoverageMetadataInput>;
  order?: InputMaybe<Scalars["String"]["input"]>;
  payor?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<CoverageStatus>;
  subscriberId?: InputMaybe<Scalars["String"]["input"]>;
  tag?: InputMaybe<Scalars["String"]["input"]>;
  tenant?: InputMaybe<Scalars["String"]["input"]>;
  updated?: InputMaybe<Scalars["String"]["input"]>;
  visit?: InputMaybe<Scalars["String"]["input"]>;
  workflows?: InputMaybe<Array<InputMaybe<CoverageWorkflowInput>>>;
};

export type CoverageQueryListResponse = {
  __typename?: "CoverageQueryListResponse";
  pages: Scalars["Int"]["output"];
  resources: Array<Maybe<Coverage2>>;
};

export type CoverageQueryListTransactionResponse = {
  __typename?: "CoverageQueryListTransactionResponse";
  pages?: Maybe<Scalars["Int"]["output"]>;
  resources?: Maybe<Array<Maybe<CoverageTransactions>>>;
};

export type CoverageQueryListWorkflowHistoryResponse = {
  __typename?: "CoverageQueryListWorkflowHistoryResponse";
  pages: Scalars["Int"]["output"];
  resources: Array<Maybe<CoverageWorkflowHistory>>;
};

export type CoverageQueryListWorkflowResponse = {
  __typename?: "CoverageQueryListWorkflowResponse";
  pages: Scalars["Int"]["output"];
  resources: Array<Maybe<CoverageWorkflow>>;
};

export type CoverageQueryReadResponse = {
  __typename?: "CoverageQueryReadResponse";
  id: Scalars["String"]["output"];
  resource: Coverage2;
};

export type CoverageQueryReadTransactionResponse = {
  __typename?: "CoverageQueryReadTransactionResponse";
  id: Scalars["String"]["output"];
  resource: CoverageTransactions;
};

export type CoverageQueryReadWorkflowResponse = {
  __typename?: "CoverageQueryReadWorkflowResponse";
  id: Scalars["String"]["output"];
  resource: CoverageWorkflow;
};

export type CoverageSchemaBenefits = {
  __typename?: "CoverageSchemaBenefits";
  coInsurance?: Maybe<Scalars["Float"]["output"]>;
  coPayment?: Maybe<Scalars["Float"]["output"]>;
  estimatedDeductibles?: Maybe<Scalars["Float"]["output"]>;
  estimatedOutOfPocket?: Maybe<Scalars["Float"]["output"]>;
  totalDeductibles?: Maybe<Scalars["Float"]["output"]>;
  totalOutOfPocket?: Maybe<Scalars["Float"]["output"]>;
};

export type CoverageSchemaBenefitsInput = {
  coInsurance?: InputMaybe<Scalars["Float"]["input"]>;
  coPayment?: InputMaybe<Scalars["Float"]["input"]>;
  estimatedDeductibles?: InputMaybe<Scalars["Float"]["input"]>;
  estimatedOutOfPocket?: InputMaybe<Scalars["Float"]["input"]>;
  totalDeductibles?: InputMaybe<Scalars["Float"]["input"]>;
  totalOutOfPocket?: InputMaybe<Scalars["Float"]["input"]>;
};

export enum CoverageStatus {
  ActiveCoverage = "ActiveCoverage",
  Error = "Error",
  InTransition = "InTransition",
  NoCoverage = "NoCoverage",
  PayorChanged = "PayorChanged",
  PayorNotActivated = "PayorNotActivated",
  Pending = "Pending",
}

export enum CoverageStatus2 {
  ActiveCoverage = "ActiveCoverage",
  Error = "Error",
  InTransition = "InTransition",
  NoCoverage = "NoCoverage",
  PayorChanged = "PayorChanged",
  PayorNotActivated = "PayorNotActivated",
  Pending = "Pending",
}

export type CoverageTransactions = {
  __typename?: "CoverageTransactions";
  coverageId?: Maybe<Scalars["String"]["output"]>;
  created?: Maybe<Scalars["String"]["output"]>;
  errorMessages?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  id: Scalars["String"]["output"];
  initiatedBy?: Maybe<Scalars["String"]["output"]>;
  payor?: Maybe<Scalars["String"]["output"]>;
  payorId?: Maybe<Scalars["String"]["output"]>;
  requestJson?: Maybe<Scalars["JSON"]["output"]>;
  responseEdi?: Maybe<Scalars["JSON"]["output"]>;
  responseJson?: Maybe<Scalars["JSON"]["output"]>;
  serviceType?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  status?: Maybe<CoverageStatus>;
  updated?: Maybe<Scalars["String"]["output"]>;
  visit?: Maybe<Scalars["String"]["output"]>;
};

export type CoverageVisit = {
  __typename?: "CoverageVisit";
  beneficiary?: Maybe<Scalars["String"]["output"]>;
  benefits?: Maybe<CoverageSchemaBenefits>;
  coverageCheckedAt?: Maybe<Scalars["String"]["output"]>;
  coverageId: Scalars["String"]["output"];
  created?: Maybe<Scalars["String"]["output"]>;
  errorMessages?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  groupNumber?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  metadata?: Maybe<CoverageMetadata>;
  order?: Maybe<Scalars["String"]["output"]>;
  organizationRead?: Maybe<OrganizationQueryReadResponse>;
  payor?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<CoverageStatus>;
  subscriberId?: Maybe<Scalars["String"]["output"]>;
  tag?: Maybe<Scalars["String"]["output"]>;
  tenant?: Maybe<Scalars["String"]["output"]>;
  updated?: Maybe<Scalars["String"]["output"]>;
  visit: Scalars["String"]["output"];
  workflows?: Maybe<Array<Maybe<CoverageWorkflow>>>;
};

export type CoverageVisitQueryReadResponse = {
  __typename?: "CoverageVisitQueryReadResponse";
  id: Scalars["String"]["output"];
  resource: CoverageVisit;
};

export type CoverageWorkflow = {
  __typename?: "CoverageWorkflow";
  appointmentId: Scalars["String"]["output"];
  coverageId: Scalars["String"]["output"];
  coverageReadTransactions?: Maybe<CoverageQueryReadTransactionResponse>;
  created?: Maybe<Scalars["String"]["output"]>;
  executionId?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  lastTransactionId?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<CoverageStatus>;
  tenant?: Maybe<Scalars["String"]["output"]>;
  updated?: Maybe<Scalars["String"]["output"]>;
  workflowStatus?: Maybe<CoverageWorkflowStatus>;
};

export type CoverageWorkflowActionInput = {
  comments?: InputMaybe<Scalars["String"]["input"]>;
};

export type CoverageWorkflowHistory = {
  __typename?: "CoverageWorkflowHistory";
  comments?: Maybe<Scalars["String"]["output"]>;
  created?: Maybe<Scalars["String"]["output"]>;
  currentWorkflowStatus?: Maybe<CoverageWorkflowStatusCurrent>;
  id: Scalars["String"]["output"];
  previousWorkflowStatus?: Maybe<CoverageWorkflowStatusPrevious>;
  transactionId?: Maybe<Scalars["String"]["output"]>;
  transitionBy?: Maybe<Scalars["String"]["output"]>;
  workflowId?: Maybe<Scalars["String"]["output"]>;
};

export type CoverageWorkflowInitInput = {
  comments?: InputMaybe<Scalars["String"]["input"]>;
  forceStart?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CoverageWorkflowInput = {
  appointmentId: Scalars["String"]["input"];
  coverageId: Scalars["String"]["input"];
  created?: InputMaybe<Scalars["String"]["input"]>;
  executionId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["String"]["input"];
  lastTransactionId?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<CoverageStatus>;
  tenant?: InputMaybe<Scalars["String"]["input"]>;
  updated?: InputMaybe<Scalars["String"]["input"]>;
  workflowStatus?: InputMaybe<CoverageWorkflowStatus>;
};

export enum CoverageWorkflowInputStatus {
  ActiveCoverage = "ActiveCoverage",
  Error = "Error",
  InTransition = "InTransition",
  NoCoverage = "NoCoverage",
  PayorChanged = "PayorChanged",
  PayorNotActivated = "PayorNotActivated",
  Pending = "Pending",
}

export type CoverageWorkflowReviewInput = {
  comments?: InputMaybe<Scalars["String"]["input"]>;
  status: CoverageWorkflowInputStatus;
};

export type CoverageWorkflowStartByVisitInput = {
  appointmentId?: InputMaybe<Scalars["String"]["input"]>;
  visit: Scalars["String"]["input"];
};

export enum CoverageWorkflowStatus {
  AutoProcessing = "AutoProcessing",
  AutomationPaused = "AutomationPaused",
  AwaitingStart = "AwaitingStart",
  Completed = "Completed",
  HumanReview = "HumanReview",
  Terminated = "Terminated",
}

export enum CoverageWorkflowStatus2 {
  AutoProcessing = "AutoProcessing",
  AutomationPaused = "AutomationPaused",
  AwaitingStart = "AwaitingStart",
  Completed = "Completed",
  HumanReview = "HumanReview",
  Terminated = "Terminated",
}

export enum CoverageWorkflowStatusCurrent {
  AutoProcessing = "AutoProcessing",
  AutomationPaused = "AutomationPaused",
  AwaitingStart = "AwaitingStart",
  Completed = "Completed",
  HumanReview = "HumanReview",
  Terminated = "Terminated",
}

export enum CoverageWorkflowStatusPrevious {
  AutoProcessing = "AutoProcessing",
  AutomationPaused = "AutomationPaused",
  AwaitingStart = "AwaitingStart",
  Completed = "Completed",
  HumanReview = "HumanReview",
  Terminated = "Terminated",
}

export type Device = {
  __typename?: "Device";
  id: Scalars["String"]["output"];
  location?: Maybe<Scalars["String"]["output"]>;
  locationRead?: Maybe<LocationQueryReadResponse>;
  manufacturer?: Maybe<Scalars["String"]["output"]>;
  metadata?: Maybe<DeviceMetadata>;
  name: DeviceName;
  note?: Maybe<Scalars["String"]["output"]>;
  owner?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<DeviceStatus>;
  statusReason?: Maybe<Scalars["String"]["output"]>;
  tag?: Maybe<Scalars["String"]["output"]>;
  tenant?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["Float"]["output"]>;
};

export type DeviceCommandResponse = {
  __typename?: "DeviceCommandResponse";
  resourceID: Scalars["String"]["output"];
};

export type DeviceCommandResponseOutput = DeviceCommandResponse | Error;

export type DeviceMetadata = {
  __typename?: "DeviceMetadata";
  defaultDurationMinutes?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  modality?: Maybe<Scalars["String"]["output"]>;
  nudgeable?: Maybe<Scalars["Boolean"]["output"]>;
};

export type DeviceMetadataInput = {
  defaultDurationMinutes?: InputMaybe<Scalars["Float"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  modality?: InputMaybe<Scalars["String"]["input"]>;
  nudgeable?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type DeviceName = {
  __typename?: "DeviceName";
  name: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
};

export type DeviceNameInput = {
  name: Scalars["String"]["input"];
  type: Scalars["String"]["input"];
};

export type DevicePatchInput = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  manufacturer?: InputMaybe<Scalars["String"]["input"]>;
  metadata?: InputMaybe<DeviceMetadataInput>;
  name?: InputMaybe<DeviceNameInput>;
  note?: InputMaybe<Scalars["String"]["input"]>;
  owner?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<DeviceStatus>;
  statusReason?: InputMaybe<Scalars["String"]["input"]>;
  tag?: InputMaybe<Scalars["String"]["input"]>;
  tenant?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Float"]["input"]>;
};

export type DeviceQueryListResponse = {
  __typename?: "DeviceQueryListResponse";
  pages?: Maybe<Scalars["Float"]["output"]>;
  resources?: Maybe<Array<Maybe<Device>>>;
};

export type DeviceQueryReadResponse = {
  __typename?: "DeviceQueryReadResponse";
  id: Scalars["String"]["output"];
  resource: Device;
};

export type DeviceServiceDuration = {
  __typename?: "DeviceServiceDuration";
  created?: Maybe<Scalars["String"]["output"]>;
  durationMinutes: Scalars["Int"]["output"];
  id: Scalars["String"]["output"];
  isAvailable?: Maybe<Scalars["Boolean"]["output"]>;
  nudgeEligible?: Maybe<Scalars["Boolean"]["output"]>;
  parentId: Scalars["String"]["output"];
  serviceCategory?: Maybe<Scalars["String"]["output"]>;
  serviceTypeCode: Scalars["String"]["output"];
  updated?: Maybe<Scalars["String"]["output"]>;
};

export type DeviceServiceDurationCreateInput = {
  created?: InputMaybe<Scalars["String"]["input"]>;
  durationMinutes: Scalars["Int"]["input"];
  id?: InputMaybe<Scalars["String"]["input"]>;
  isAvailable?: InputMaybe<Scalars["Boolean"]["input"]>;
  nudgeEligible?: InputMaybe<Scalars["Boolean"]["input"]>;
  parentId?: InputMaybe<Scalars["String"]["input"]>;
  serviceCategory?: InputMaybe<Scalars["String"]["input"]>;
  serviceTypeCode: Scalars["String"]["input"];
  updated?: InputMaybe<Scalars["String"]["input"]>;
};

export type DeviceServiceDurationPatchInput = {
  created?: InputMaybe<Scalars["String"]["input"]>;
  durationMinutes?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  isAvailable?: InputMaybe<Scalars["Boolean"]["input"]>;
  nudgeEligible?: InputMaybe<Scalars["Boolean"]["input"]>;
  parentId: Scalars["String"]["input"];
  serviceCategory?: InputMaybe<Scalars["String"]["input"]>;
  serviceTypeCode: Scalars["String"]["input"];
  updated?: InputMaybe<Scalars["String"]["input"]>;
};

export type DeviceServiceDurationQueryListResponse = {
  __typename?: "DeviceServiceDurationQueryListResponse";
  pages?: Maybe<Scalars["Float"]["output"]>;
  resources?: Maybe<Array<Maybe<DeviceServiceDuration>>>;
};

export type DeviceServiceDurationQueryReadResponse = {
  __typename?: "DeviceServiceDurationQueryReadResponse";
  resource: DeviceServiceDuration;
  serviceTypeCode: Scalars["String"]["output"];
};

export enum DeviceStatus {
  Active = "active",
  EnteredInError = "entered_in_error",
  Inactive = "inactive",
  Unknown = "unknown",
}

export type DeviceWriteInput = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  manufacturer?: InputMaybe<Scalars["String"]["input"]>;
  metadata?: InputMaybe<DeviceMetadataInput>;
  name: DeviceNameInput;
  note?: InputMaybe<Scalars["String"]["input"]>;
  owner?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<DeviceStatus>;
  statusReason?: InputMaybe<Scalars["String"]["input"]>;
  tag?: InputMaybe<Scalars["String"]["input"]>;
  tenant?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Float"]["input"]>;
};

export enum DimensionDate {
  AppointmentStart = "appointmentStart",
  Initiated = "initiated",
}

export type Document = {
  __typename?: "Document";
  actionRequired?: Maybe<Scalars["Boolean"]["output"]>;
  appointment?: Maybe<Scalars["String"]["output"]>;
  category?: Maybe<MlDocumentCategory>;
  created?: Maybe<Scalars["String"]["output"]>;
  documentType?: Maybe<Scalars["String"]["output"]>;
  extractFile?: Maybe<Scalars["String"]["output"]>;
  extractStatus?: Maybe<Scalars["String"]["output"]>;
  extractText?: Maybe<Scalars["String"]["output"]>;
  file: Scalars["String"]["output"];
  fileName: Scalars["String"]["output"];
  fileType?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  outboundFaxes?: Maybe<Array<Maybe<DocumentOutboundFaxes>>>;
  patient?: Maybe<Scalars["String"]["output"]>;
  patientBirthDate?: Maybe<Scalars["String"]["output"]>;
  patientFirstName?: Maybe<Scalars["String"]["output"]>;
  patientLastName?: Maybe<Scalars["String"]["output"]>;
  patientPhoneNumber?: Maybe<Scalars["String"]["output"]>;
  source?: Maybe<Scalars["String"]["output"]>;
  tag?: Maybe<Scalars["String"]["output"]>;
  tenant?: Maybe<Scalars["String"]["output"]>;
  updated?: Maybe<Scalars["String"]["output"]>;
  visit?: Maybe<Scalars["String"]["output"]>;
};

export type DocumentCommandResponse = {
  __typename?: "DocumentCommandResponse";
  resourceID: Scalars["String"]["output"];
};

export type DocumentCommandResponseOutput = DocumentCommandResponse | Error;

export type DocumentCreateInput = {
  actionRequired?: InputMaybe<Scalars["Boolean"]["input"]>;
  appointment?: InputMaybe<Scalars["String"]["input"]>;
  category?: InputMaybe<MlDocumentCategory>;
  created?: InputMaybe<Scalars["String"]["input"]>;
  documentType?: InputMaybe<Scalars["String"]["input"]>;
  extractFile?: InputMaybe<Scalars["String"]["input"]>;
  extractStatus?: InputMaybe<Scalars["String"]["input"]>;
  extractText?: InputMaybe<Scalars["String"]["input"]>;
  file: Scalars["String"]["input"];
  fileName: Scalars["String"]["input"];
  fileType?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  outboundFaxes?: InputMaybe<Array<InputMaybe<DocumentOutboundFaxesInput>>>;
  patient?: InputMaybe<Scalars["String"]["input"]>;
  patientBirthDate?: InputMaybe<Scalars["String"]["input"]>;
  patientFirstName?: InputMaybe<Scalars["String"]["input"]>;
  patientLastName?: InputMaybe<Scalars["String"]["input"]>;
  patientPhoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  source?: InputMaybe<Scalars["String"]["input"]>;
  tag?: InputMaybe<Scalars["String"]["input"]>;
  tenant?: InputMaybe<Scalars["String"]["input"]>;
  updated?: InputMaybe<Scalars["String"]["input"]>;
  visit?: InputMaybe<Scalars["String"]["input"]>;
};

export type DocumentFaxInput = {
  comments?: InputMaybe<Scalars["String"]["input"]>;
  created?: InputMaybe<Scalars["String"]["input"]>;
  document?: InputMaybe<DocumentInput>;
  documentId: Scalars["String"]["input"];
  faxNumber: Scalars["String"]["input"];
  faxReferenceId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["String"]["input"];
  mockScenarioId?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<DocumentFaxStatus>;
  updated?: InputMaybe<Scalars["String"]["input"]>;
};

export type DocumentFaxResponse = {
  __typename?: "DocumentFaxResponse";
  resourceID?: Maybe<Scalars["String"]["output"]>;
};

export type DocumentFaxResponseOutput = DocumentFaxResponse | Error;

export enum DocumentFaxStatus {
  Failed = "failed",
  Initiated = "initiated",
  Success = "success",
  Transmitting = "transmitting",
}

export type DocumentInput = {
  actionRequired?: InputMaybe<Scalars["Boolean"]["input"]>;
  appointment?: InputMaybe<Scalars["String"]["input"]>;
  category?: InputMaybe<MlDocumentCategory>;
  created?: InputMaybe<Scalars["String"]["input"]>;
  documentType?: InputMaybe<Scalars["String"]["input"]>;
  extractFile?: InputMaybe<Scalars["String"]["input"]>;
  extractStatus?: InputMaybe<Scalars["String"]["input"]>;
  extractText?: InputMaybe<Scalars["String"]["input"]>;
  file: Scalars["String"]["input"];
  fileName: Scalars["String"]["input"];
  fileType?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["String"]["input"];
  outboundFaxes?: InputMaybe<Array<InputMaybe<DocumentOutboundFaxesInput>>>;
  patient?: InputMaybe<Scalars["String"]["input"]>;
  patientBirthDate?: InputMaybe<Scalars["String"]["input"]>;
  patientFirstName?: InputMaybe<Scalars["String"]["input"]>;
  patientLastName?: InputMaybe<Scalars["String"]["input"]>;
  patientPhoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  source?: InputMaybe<Scalars["String"]["input"]>;
  tag?: InputMaybe<Scalars["String"]["input"]>;
  tenant?: InputMaybe<Scalars["String"]["input"]>;
  updated?: InputMaybe<Scalars["String"]["input"]>;
  visit?: InputMaybe<Scalars["String"]["input"]>;
};

export type DocumentOutboundFaxes = {
  __typename?: "DocumentOutboundFaxes";
  comments?: Maybe<Scalars["String"]["output"]>;
  created?: Maybe<Scalars["String"]["output"]>;
  documentId?: Maybe<Scalars["String"]["output"]>;
  faxNumber?: Maybe<Scalars["String"]["output"]>;
  faxReferenceId?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<DocumentOutboundFaxesStatus>;
  updated?: Maybe<Scalars["String"]["output"]>;
};

export type DocumentOutboundFaxesInput = {
  comments?: InputMaybe<Scalars["String"]["input"]>;
  created?: InputMaybe<Scalars["String"]["input"]>;
  documentId?: InputMaybe<Scalars["String"]["input"]>;
  faxNumber?: InputMaybe<Scalars["String"]["input"]>;
  faxReferenceId?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<DocumentOutboundFaxesStatus>;
  updated?: InputMaybe<Scalars["String"]["input"]>;
};

export enum DocumentOutboundFaxesStatus {
  Failed = "failed",
  Initiated = "initiated",
  Success = "success",
  Transmitting = "transmitting",
}

export type DocumentPatchInput = {
  actionRequired?: InputMaybe<Scalars["Boolean"]["input"]>;
  appointment?: InputMaybe<Scalars["String"]["input"]>;
  category?: InputMaybe<MlDocumentCategory>;
  created?: InputMaybe<Scalars["String"]["input"]>;
  documentType?: InputMaybe<Scalars["String"]["input"]>;
  extractFile?: InputMaybe<Scalars["String"]["input"]>;
  extractStatus?: InputMaybe<Scalars["String"]["input"]>;
  extractText?: InputMaybe<Scalars["String"]["input"]>;
  file?: InputMaybe<Scalars["String"]["input"]>;
  fileName?: InputMaybe<Scalars["String"]["input"]>;
  fileType?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  outboundFaxes?: InputMaybe<Array<InputMaybe<DocumentOutboundFaxesInput>>>;
  patient?: InputMaybe<Scalars["String"]["input"]>;
  patientBirthDate?: InputMaybe<Scalars["String"]["input"]>;
  patientFirstName?: InputMaybe<Scalars["String"]["input"]>;
  patientLastName?: InputMaybe<Scalars["String"]["input"]>;
  patientPhoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  source?: InputMaybe<Scalars["String"]["input"]>;
  tag?: InputMaybe<Scalars["String"]["input"]>;
  tenant?: InputMaybe<Scalars["String"]["input"]>;
  updated?: InputMaybe<Scalars["String"]["input"]>;
  visit?: InputMaybe<Scalars["String"]["input"]>;
};

export type DocumentQueryListResponse = {
  __typename?: "DocumentQueryListResponse";
  pages: Scalars["Int"]["output"];
  resources: Array<Maybe<Document>>;
};

export type DocumentQueryReadImage = {
  __typename?: "DocumentQueryReadImage";
  resource: Scalars["String"]["output"];
};

export type DocumentQueryReadResponse = {
  __typename?: "DocumentQueryReadResponse";
  id: Scalars["String"]["output"];
  resource: Document;
};

export type DocumentQueryReadTextResponse = {
  __typename?: "DocumentQueryReadTextResponse";
  id: Scalars["String"]["output"];
  status: MlDocumentStatus;
  text?: Maybe<Scalars["String"]["output"]>;
};

export type DownloadDesktop = {
  __typename?: "DownloadDesktop";
  date: Scalars["String"]["output"];
  sha512: Scalars["String"]["output"];
  size: Scalars["Float"]["output"];
  url: Scalars["String"]["output"];
  version: Scalars["String"]["output"];
};

export type EpicTokenResponse = {
  __typename?: "EpicTokenResponse";
  accessToken: Scalars["String"]["output"];
  expiresIn: Scalars["Float"]["output"];
  scope: Scalars["String"]["output"];
};

export type EpicTokenResponseOutput = EpicTokenResponse | Error;

export type Error = {
  __typename?: "Error";
  error: Scalars["String"]["output"];
  message: Scalars["String"]["output"];
  statusCode: Scalars["Int"]["output"];
};

export type Estimate = {
  __typename?: "Estimate";
  coverage?: Maybe<Array<Maybe<EstimateCoverage>>>;
  created?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  patientResponsibility?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  totalAllowedAmount?: Maybe<Scalars["Int"]["output"]>;
  updated?: Maybe<Scalars["String"]["output"]>;
  user?: Maybe<Scalars["String"]["output"]>;
  visit: Scalars["String"]["output"];
};

export type EstimateBenefits = {
  __typename?: "EstimateBenefits";
  coinsurance?: Maybe<Scalars["Float"]["output"]>;
  copayment?: Maybe<Scalars["Int"]["output"]>;
  coverageOrder?: Maybe<EstimateCoverageOrder>;
  deductibleRemaining?: Maybe<Scalars["Int"]["output"]>;
  network?: Maybe<Scalars["String"]["output"]>;
  outOfPocketRemaining?: Maybe<Scalars["Int"]["output"]>;
};

export type EstimateBenefitsInput = {
  coinsurance?: InputMaybe<Scalars["Float"]["input"]>;
  copayment?: InputMaybe<Scalars["Int"]["input"]>;
  coverageOrder?: InputMaybe<EstimateCoverageOrder>;
  deductibleRemaining?: InputMaybe<Scalars["Int"]["input"]>;
  network?: InputMaybe<Scalars["String"]["input"]>;
  outOfPocketRemaining?: InputMaybe<Scalars["Int"]["input"]>;
};

export type EstimateCommandResponse = {
  __typename?: "EstimateCommandResponse";
  resourceID: Scalars["String"]["output"];
};

export type EstimateCommandResponseOutput = Error | EstimateCommandResponse;

export type EstimateCoverage = {
  __typename?: "EstimateCoverage";
  benefits?: Maybe<EstimateBenefits>;
  coverageId: Scalars["String"]["output"];
  fees?: Maybe<Array<Maybe<EstimateFees>>>;
  id?: Maybe<Scalars["String"]["output"]>;
  visit?: Maybe<Scalars["String"]["output"]>;
};

export type EstimateCoverageInput = {
  benefits?: InputMaybe<EstimateBenefitsInput>;
  coverageId: Scalars["String"]["input"];
  fees?: InputMaybe<Array<InputMaybe<EstimateFeesInput>>>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  visit?: InputMaybe<Scalars["String"]["input"]>;
};

export enum EstimateCoverageOrder {
  Primary = "primary",
  Secondary = "secondary",
  Tertiary = "tertiary",
}

export type EstimateFees = {
  __typename?: "EstimateFees";
  allowedAmount?: Maybe<Scalars["Int"]["output"]>;
  appointmentId: Scalars["String"]["output"];
  id?: Maybe<Scalars["String"]["output"]>;
  location?: Maybe<Scalars["String"]["output"]>;
  serviceType?: Maybe<EstimateFeesServiceType>;
};

export type EstimateFeesInput = {
  allowedAmount?: InputMaybe<Scalars["Int"]["input"]>;
  appointmentId: Scalars["String"]["input"];
  id?: InputMaybe<Scalars["String"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  serviceType?: InputMaybe<EstimateFeesServiceTypeInput>;
};

export type EstimateFeesServiceType = {
  __typename?: "EstimateFeesServiceType";
  coding: Scalars["String"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
};

export type EstimateFeesServiceTypeInput = {
  coding: Scalars["String"]["input"];
  description?: InputMaybe<Scalars["String"]["input"]>;
};

export type EstimateHistory = {
  __typename?: "EstimateHistory";
  allowedAmounts?: Maybe<Array<Maybe<EstimateHistoryAllowedAmounts>>>;
  benefits?: Maybe<EstimateBenefits>;
  created?: Maybe<Scalars["String"]["output"]>;
  event: EstimateHistoryEvent;
  id: Scalars["String"]["output"];
  patientResponsibility?: Maybe<Scalars["Int"]["output"]>;
  user?: Maybe<Scalars["String"]["output"]>;
  visit: Scalars["String"]["output"];
};

export type EstimateHistoryAllowedAmounts = {
  __typename?: "EstimateHistoryAllowedAmounts";
  allowedAmount?: Maybe<Scalars["Int"]["output"]>;
  serviceType?: Maybe<EstimateHistoryServiceType>;
};

export enum EstimateHistoryEvent {
  Deleted = "deleted",
  Draft = "draft",
  Error = "error",
  Final = "final",
  Pending = "pending",
}

export type EstimateHistoryQueryListResponse = {
  __typename?: "EstimateHistoryQueryListResponse";
  pages: Scalars["Int"]["output"];
  resources: Array<Maybe<EstimateHistory>>;
};

export type EstimateHistoryServiceType = {
  __typename?: "EstimateHistoryServiceType";
  coding: Scalars["String"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
};

export type EstimateInput = {
  coverage?: InputMaybe<Array<InputMaybe<EstimateCoverageInput>>>;
  created?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  patientResponsibility?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  totalAllowedAmount?: InputMaybe<Scalars["Int"]["input"]>;
  updated?: InputMaybe<Scalars["String"]["input"]>;
  user?: InputMaybe<Scalars["String"]["input"]>;
  visit: Scalars["String"]["input"];
};

export type EstimateMetric = {
  __typename?: "EstimateMetric";
  date: Scalars["String"]["output"];
  occurrences: Scalars["Int"]["output"];
  status: EstimateMetricStatus;
};

export type EstimateMetricListResponse = {
  __typename?: "EstimateMetricListResponse";
  resources: Array<Maybe<EstimateMetric>>;
};

export enum EstimateMetricStatus {
  Deleted = "deleted",
  Draft = "draft",
  Error = "error",
  Final = "final",
  Pending = "pending",
}

export type EstimateQueryListResponse = {
  __typename?: "EstimateQueryListResponse";
  pages: Scalars["Int"]["output"];
  resources: Array<Maybe<Estimate>>;
};

export type EstimateQueryReadResponse = {
  __typename?: "EstimateQueryReadResponse";
  id: Scalars["String"]["output"];
  resource: Estimate;
};

export type FaxOutreach = {
  __typename?: "FaxOutreach";
  caller: Scalars["String"]["output"];
  created?: Maybe<Scalars["String"]["output"]>;
  error?: Maybe<FaxOutreachError>;
  errorDetails?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  intent: FaxOutreachIntent;
  payload?: Maybe<FaxOutreachPayload>;
  practitioner: Scalars["String"]["output"];
  status: FaxOutreachStatus;
  target: Scalars["String"]["output"];
  taskToken?: Maybe<Scalars["String"]["output"]>;
  template: Scalars["String"]["output"];
  tenant: Scalars["String"]["output"];
  updated?: Maybe<Scalars["String"]["output"]>;
  user?: Maybe<Scalars["String"]["output"]>;
  userReadById?: Maybe<UserQueryReadResponse>;
  visit: Scalars["String"]["output"];
};

export type FaxOutreachCommandResponse = {
  __typename?: "FaxOutreachCommandResponse";
  resourceID: Scalars["String"]["output"];
};

export type FaxOutreachCommandResponseOutput =
  | Error
  | FaxOutreachCommandResponse;

export enum FaxOutreachError {
  BlockError = "BlockError",
  CommunicationError = "CommunicationError",
  InputError = "InputError",
  UnknownError = "UnknownError",
}

export enum FaxOutreachIntent {
  RequestForClinicals = "RequestForClinicals",
  RequestForOrder = "RequestForOrder",
  RequestToInitiate = "RequestToInitiate",
}

export type FaxOutreachMetric = {
  __typename?: "FaxOutreachMetric";
  date: Scalars["String"]["output"];
  intent?: Maybe<FaxOutreachMetricIntent>;
  occurrences: Scalars["Int"]["output"];
  status: FaxOutreachMetricStatus;
};

export enum FaxOutreachMetricIntent {
  RequestForClinicals = "RequestForClinicals",
  RequestForOrder = "RequestForOrder",
  RequestToInitiate = "RequestToInitiate",
}

export type FaxOutreachMetricListResponse = {
  __typename?: "FaxOutreachMetricListResponse";
  resources: Array<Maybe<FaxOutreachMetric>>;
};

export enum FaxOutreachMetricStatus {
  Failure = "failure",
  Pending = "pending",
  Success = "success",
}

export type FaxOutreachPayload = {
  __typename?: "FaxOutreachPayload";
  patientFirstName?: Maybe<Scalars["String"]["output"]>;
  patientLastName?: Maybe<Scalars["String"]["output"]>;
};

export type FaxOutreachQueryListResponse = {
  __typename?: "FaxOutreachQueryListResponse";
  pages: Scalars["Int"]["output"];
  resources: Array<Maybe<FaxOutreach>>;
};

export type FaxOutreachQueryReadResponse = {
  __typename?: "FaxOutreachQueryReadResponse";
  id: Scalars["String"]["output"];
  resource: FaxOutreach;
};

export type FaxOutreachRequestInput = {
  comment?: InputMaybe<Scalars["String"]["input"]>;
  intent: FaxOutreachIntent;
  practitioner?: InputMaybe<Scalars["String"]["input"]>;
  taskToken?: InputMaybe<Scalars["String"]["input"]>;
  visit: Scalars["String"]["input"];
};

export type FaxOutreachRule = {
  __typename?: "FaxOutreachRule";
  created?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  intent: FaxOutreachIntent;
  practitioner: Scalars["String"]["output"];
  tenant: Scalars["String"]["output"];
  updated?: Maybe<Scalars["String"]["output"]>;
};

export enum FaxOutreachRuleIntent {
  RequestForClinicals = "RequestForClinicals",
  RequestForOrder = "RequestForOrder",
  RequestToInitiate = "RequestToInitiate",
}

export type FaxOutreachRuleQueryListResponse = {
  __typename?: "FaxOutreachRuleQueryListResponse";
  pages: Scalars["Int"]["output"];
  resources: Array<Maybe<FaxOutreachRule>>;
};

export type FaxOutreachRuleRequestInput = {
  intent: FaxOutreachRuleIntent;
  practitioner: Scalars["String"]["input"];
};

export enum FaxOutreachStatus {
  Failure = "failure",
  Pending = "pending",
  Success = "success",
}

export type FeeSchedule = {
  __typename?: "FeeSchedule";
  created?: Maybe<Scalars["String"]["output"]>;
  fees?: Maybe<Array<Maybe<FeeScheduleFees>>>;
  id: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  tenant?: Maybe<Scalars["String"]["output"]>;
  updated?: Maybe<Scalars["String"]["output"]>;
};

export type FeeScheduleCommandResponse = {
  __typename?: "FeeScheduleCommandResponse";
  resourceID: Scalars["String"]["output"];
};

export type FeeScheduleCommandResponseOutput =
  | Error
  | FeeScheduleCommandResponse;

export type FeeScheduleFees = {
  __typename?: "FeeScheduleFees";
  amount: Scalars["Float"]["output"];
  created?: Maybe<Scalars["String"]["output"]>;
  effectiveDate?: Maybe<Scalars["String"]["output"]>;
  feeScheduleId?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  serviceTypeCode: Scalars["String"]["output"];
  tenant?: Maybe<Scalars["String"]["output"]>;
  updated?: Maybe<Scalars["String"]["output"]>;
};

export type FeeScheduleFeesInput = {
  amount: Scalars["Float"]["input"];
  created?: InputMaybe<Scalars["String"]["input"]>;
  effectiveDate?: InputMaybe<Scalars["String"]["input"]>;
  feeScheduleId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["String"]["input"];
  serviceTypeCode: Scalars["String"]["input"];
  tenant?: InputMaybe<Scalars["String"]["input"]>;
  updated?: InputMaybe<Scalars["String"]["input"]>;
};

export type FeeScheduleFeesQueryListResponse = {
  __typename?: "FeeScheduleFeesQueryListResponse";
  pages: Scalars["Int"]["output"];
  resources: Array<Maybe<FeeScheduleFees>>;
};

export type FeeScheduleFeesQueryReadResponse = {
  __typename?: "FeeScheduleFeesQueryReadResponse";
  id: Scalars["String"]["output"];
  resource: FeeScheduleFees;
};

export type FeeScheduleFeesWriteInput = {
  amount: Scalars["Float"]["input"];
  created?: InputMaybe<Scalars["String"]["input"]>;
  effectiveDate?: InputMaybe<Scalars["String"]["input"]>;
  feeScheduleId?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  serviceTypeCode: Scalars["String"]["input"];
  tenant?: InputMaybe<Scalars["String"]["input"]>;
  updated?: InputMaybe<Scalars["String"]["input"]>;
};

export type FeeScheduleQueryListResponse = {
  __typename?: "FeeScheduleQueryListResponse";
  pages: Scalars["Int"]["output"];
  resources: Array<Maybe<FeeSchedule>>;
};

export type FeeScheduleQueryReadResponse = {
  __typename?: "FeeScheduleQueryReadResponse";
  id: Scalars["String"]["output"];
  resource: FeeSchedule;
};

export type FeeScheduleWriteInput = {
  created?: InputMaybe<Scalars["String"]["input"]>;
  fees?: InputMaybe<Array<InputMaybe<FeeScheduleFeesInput>>>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  tenant?: InputMaybe<Scalars["String"]["input"]>;
  updated?: InputMaybe<Scalars["String"]["input"]>;
};

export type Flow = {
  __typename?: "Flow";
  appointmentId?: Maybe<Scalars["String"]["output"]>;
  appointmentStart?: Maybe<Scalars["String"]["output"]>;
  appointmentStatus?: Maybe<AppointmentStatus>;
  created?: Maybe<Scalars["String"]["output"]>;
  deviceId?: Maybe<Scalars["String"]["output"]>;
  doNotContact?: Maybe<Scalars["Boolean"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  modified?: Maybe<Scalars["String"]["output"]>;
  patientId?: Maybe<Scalars["String"]["output"]>;
  priorAuthEnd?: Maybe<Scalars["String"]["output"]>;
  priorAuthStart?: Maybe<Scalars["String"]["output"]>;
  priorAuthStatus?: Maybe<Scalars["String"]["output"]>;
  serviceCategory?: Maybe<AppointmentServiceCategory>;
  serviceType?: Maybe<AppointmentServiceType>;
  tenant?: Maybe<Scalars["String"]["output"]>;
  visitId?: Maybe<Scalars["String"]["output"]>;
};

export type FlowCommandResponse = {
  __typename?: "FlowCommandResponse";
  resourceID: Scalars["String"]["output"];
};

export type FlowCommandResponseOutput = Error | FlowCommandResponse;

export type FlowQueryListResponse = {
  __typename?: "FlowQueryListResponse";
  pages: Scalars["Int"]["output"];
  resources: Array<Maybe<Flow>>;
};

export type FlowQueryReadResponse = {
  __typename?: "FlowQueryReadResponse";
  id: Scalars["String"]["output"];
  resource: Flow;
};

export type FlowWriteInput = {
  appointmentId?: InputMaybe<Scalars["String"]["input"]>;
  appointmentStart?: InputMaybe<Scalars["String"]["input"]>;
  appointmentStatus?: InputMaybe<AppointmentStatus>;
  created?: InputMaybe<Scalars["String"]["input"]>;
  deviceId?: InputMaybe<Scalars["String"]["input"]>;
  doNotContact?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  modified?: InputMaybe<Scalars["String"]["input"]>;
  patientId?: InputMaybe<Scalars["String"]["input"]>;
  priorAuthEnd?: InputMaybe<Scalars["String"]["input"]>;
  priorAuthStart?: InputMaybe<Scalars["String"]["input"]>;
  priorAuthStatus?: InputMaybe<Scalars["String"]["input"]>;
  serviceCategory?: InputMaybe<AppointmentServiceCategoryInput>;
  serviceType?: InputMaybe<AppointmentServiceTypeInput>;
  tenant?: InputMaybe<Scalars["String"]["input"]>;
  visitId?: InputMaybe<Scalars["String"]["input"]>;
};

export enum Intent {
  RequestForClinicals = "RequestForClinicals",
  RequestForOrder = "RequestForOrder",
  RequestToInitiate = "RequestToInitiate",
}

export enum Intent2 {
  RequestForClinicals = "RequestForClinicals",
  RequestForOrder = "RequestForOrder",
  RequestToInitiate = "RequestToInitiate",
}

export type Location = {
  __typename?: "Location";
  address?: Maybe<Scalars["String"]["output"]>;
  alias?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  managingOrganization?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  npi?: Maybe<Scalars["String"]["output"]>;
  partOf?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  tag?: Maybe<Scalars["String"]["output"]>;
  taxId?: Maybe<Scalars["String"]["output"]>;
  telecom?: Maybe<Array<Maybe<LocationTelecom>>>;
  tenant?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["Float"]["output"]>;
};

export type LocationCommandResponse = {
  __typename?: "LocationCommandResponse";
  resourceID: Scalars["String"]["output"];
};

export type LocationCommandResponseOutput = Error | LocationCommandResponse;

export type LocationPatchInput = {
  address?: InputMaybe<Scalars["String"]["input"]>;
  alias?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  managingOrganization?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  npi?: InputMaybe<Scalars["String"]["input"]>;
  partOf?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  tag?: InputMaybe<Scalars["String"]["input"]>;
  taxId?: InputMaybe<Scalars["String"]["input"]>;
  telecom?: InputMaybe<Array<InputMaybe<LocationTelecomInput>>>;
  tenant?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Float"]["input"]>;
};

export type LocationQueryListResponse = {
  __typename?: "LocationQueryListResponse";
  pages: Scalars["Float"]["output"];
  resources?: Maybe<Array<Maybe<Location>>>;
};

export type LocationQueryReadResponse = {
  __typename?: "LocationQueryReadResponse";
  id: Scalars["String"]["output"];
  resource: Location;
};

export type LocationTelecom = {
  __typename?: "LocationTelecom";
  rank?: Maybe<Scalars["Float"]["output"]>;
  system?: Maybe<Scalars["String"]["output"]>;
  use?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["String"]["output"]>;
};

export type LocationTelecomInput = {
  rank?: InputMaybe<Scalars["Float"]["input"]>;
  system?: InputMaybe<Scalars["String"]["input"]>;
  use?: InputMaybe<Scalars["String"]["input"]>;
  value?: InputMaybe<Scalars["String"]["input"]>;
};

export type LocationWriteInput = {
  address?: InputMaybe<Scalars["String"]["input"]>;
  alias?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  managingOrganization?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  npi?: InputMaybe<Scalars["String"]["input"]>;
  partOf?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  tag?: InputMaybe<Scalars["String"]["input"]>;
  taxId?: InputMaybe<Scalars["String"]["input"]>;
  telecom?: InputMaybe<Array<InputMaybe<LocationTelecomInput>>>;
  tenant?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Float"]["input"]>;
};

export type LookupAuthRequirement = {
  __typename?: "LookupAuthRequirement";
  created?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  ediId?: Maybe<Scalars["String"]["output"]>;
  exclusions?: Maybe<Array<Maybe<LookupAuthRequirementExclusions>>>;
  groupNumber?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  isAuthRequired: Scalars["Boolean"]["output"];
  organizationName?: Maybe<Scalars["String"]["output"]>;
  ruleType?: Maybe<LookupRuleType>;
  serviceType: LookupAuthRequirementServiceType;
  subscriberPrefix?: Maybe<Scalars["String"]["output"]>;
  susanOutput?: Maybe<Scalars["String"]["output"]>;
  updated?: Maybe<Scalars["String"]["output"]>;
};

export type LookupAuthRequirementCommandResponse = {
  __typename?: "LookupAuthRequirementCommandResponse";
  resourceID: Scalars["String"]["output"];
};

export type LookupAuthRequirementCommandResponseOutput =
  | Error
  | LookupAuthRequirementCommandResponse;

export type LookupAuthRequirementExclusions = {
  __typename?: "LookupAuthRequirementExclusions";
  excludeEdiId?: Maybe<Scalars["String"]["output"]>;
  excludeGroupNumber?: Maybe<Scalars["String"]["output"]>;
  excludeOrganizationName?: Maybe<Scalars["String"]["output"]>;
  excludeServiceTypeCoding?: Maybe<Scalars["String"]["output"]>;
  excludeSubscriberPrefix?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  parentId?: Maybe<Scalars["String"]["output"]>;
};

export type LookupAuthRequirementExclusionsInput = {
  excludeEdiId?: InputMaybe<Scalars["String"]["input"]>;
  excludeGroupNumber?: InputMaybe<Scalars["String"]["input"]>;
  excludeOrganizationName?: InputMaybe<Scalars["String"]["input"]>;
  excludeServiceTypeCoding?: InputMaybe<Scalars["String"]["input"]>;
  excludeSubscriberPrefix?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  parentId?: InputMaybe<Scalars["String"]["input"]>;
};

export type LookupAuthRequirementServiceType = {
  __typename?: "LookupAuthRequirementServiceType";
  coding: Scalars["String"]["output"];
  text?: Maybe<Scalars["String"]["output"]>;
};

export type LookupAuthRequirementServiceTypeInput = {
  coding: Scalars["String"]["input"];
  text?: InputMaybe<Scalars["String"]["input"]>;
};

export type LookupQueryListAuthRequirementResponse = {
  __typename?: "LookupQueryListAuthRequirementResponse";
  pages: Scalars["Int"]["output"];
  resources?: Maybe<Array<Maybe<LookupAuthRequirement>>>;
};

export type LookupQueryReadAuthRequrimentResponse = {
  __typename?: "LookupQueryReadAuthRequrimentResponse";
  resource: LookupAuthRequirement;
};

export enum LookupRuleType {
  Global = "global",
  Local = "local",
}

export type LookupWriteInput = {
  created?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  ediId?: InputMaybe<Scalars["String"]["input"]>;
  exclusions?: InputMaybe<
    Array<InputMaybe<LookupAuthRequirementExclusionsInput>>
  >;
  groupNumber?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  isAuthRequired: Scalars["Boolean"]["input"];
  organizationName?: InputMaybe<Scalars["String"]["input"]>;
  ruleType?: InputMaybe<LookupRuleType>;
  serviceType: LookupAuthRequirementServiceTypeInput;
  subscriberPrefix?: InputMaybe<Scalars["String"]["input"]>;
  susanOutput?: InputMaybe<Scalars["String"]["input"]>;
  updated?: InputMaybe<Scalars["String"]["input"]>;
};

export type LookupauthRequirementValidation = {
  __typename?: "LookupauthRequirementValidation";
  description?: Maybe<Scalars["String"]["output"]>;
  isAuthRequired?: Maybe<Scalars["Boolean"]["output"]>;
};

export type LookupqueryAuthRequirementValidationResponse = {
  __typename?: "LookupqueryAuthRequirementValidationResponse";
  resource: LookupauthRequirementValidation;
};

export enum MlDocumentCategory {
  Identification = "identification",
  InsuranceCard = "insurance_card",
  LabReport = "lab_report",
  None = "none",
  Order = "order",
  PriorAuth = "prior_auth",
  ProgressNote = "progress_note",
}

export enum MlDocumentStatus {
  Failed = "failed",
  Parsed = "parsed",
  Processing = "processing",
}

export type ModmedAuthRequestInput = {
  apiKey: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  prefix: Scalars["String"]["input"];
  stage: ModmedAuthRequestStage;
  tenant: Scalars["String"]["input"];
  username: Scalars["String"]["input"];
};

export enum ModmedAuthRequestStage {
  Practice = "practice",
  Production = "production",
  Sandbox = "sandbox",
}

export type ModmedAuthResponse = {
  __typename?: "ModmedAuthResponse";
  scope: Scalars["String"]["output"];
};

export type ModmedAuthResponseOutput = Error | ModmedAuthResponse;

export type ModmedTokenRequestInput = {
  tenant: Scalars["String"]["input"];
};

export type ModmedTokenResponse = {
  __typename?: "ModmedTokenResponse";
  accessToken: Scalars["String"]["output"];
  apiKey: Scalars["String"]["output"];
  expiresIn?: Maybe<Scalars["Float"]["output"]>;
  prefix: Scalars["String"]["output"];
  scope: Scalars["String"]["output"];
  stage: ModmedTokenResponseStage;
};

export type ModmedTokenResponseOutput = Error | ModmedTokenResponse;

export enum ModmedTokenResponseStage {
  Practice = "practice",
  Production = "production",
  Sandbox = "sandbox",
}

export type Mutation = {
  __typename?: "Mutation";
  /**
   * Create a new entity.
   *
   * Equivalent to POST /{tenant}/appointment/
   */
  appointmentCreate?: Maybe<AppointmentCommandResponseOutput>;
  /**
   * Delete an entity.
   *
   * Equivalent to DELETE /{tenant}/appointment/{id}
   */
  appointmentDelete?: Maybe<AppointmentCommandResponseOutput>;
  /**
   * Create a new or patch an existing entity.
   *
   * Equivalent to PATCH /{tenant}/appointment/{id}
   */
  appointmentPatch?: Maybe<AppointmentCommandResponseOutput>;
  /**
   * Request appointment reschedule.
   *
   * Equivalent to PUT /{tenant}/appointment/{id}/reschedule
   */
  appointmentReschedule?: Maybe<AppointmentCommandResponseOutput>;
  /**
   * Cancel appointment reschedule.
   *
   * Equivalent to POST /{tenant}/appointment/reschedule/{id}/cancel
   */
  appointmentRescheduleCancel?: Maybe<AppointmentCommandResponseOutput>;
  /**
   * Confirm appointment reschedule.
   *
   * Equivalent to POST /{tenant}/appointment/reschedule/{id}/confirm
   */
  appointmentRescheduleConfirm?: Maybe<AppointmentCommandResponseOutput>;
  /**
   * Patch an existing entity.
   *
   * Equivalent to PATCH /{tenant}/appointment/{id}/reschedule/{rescheduleId}
   */
  appointmentReschedulePatch?: Maybe<AppointmentCommandResponseOutput>;
  /**
   * Create a new or update an existing entity.
   *
   * Equivalent to PUT /{tenant}/appointment/{id}
   */
  appointmentUpdate?: Maybe<AppointmentCommandResponseOutput>;
  /**
   * Authenticate with ModMedical API.
   *
   * Equivalent to POST /oauth/modmed/authenticate
   */
  authenticateModmed?: Maybe<ModmedAuthResponseOutput>;
  /**
   * Create a new entity.
   *
   * Equivalent to POST /codeSystem/
   */
  codeSystemCreate?: Maybe<CodeSystemCommandResponseOutput>;
  /**
   * Delete an entity.
   *
   * Equivalent to DELETE /codeSystem/{id}
   */
  codeSystemDelete?: Maybe<CodeSystemCommandResponseOutput>;
  /**
   * Create a new or update an existing entity.
   *
   * Equivalent to PUT /codeSystem/{id}
   */
  codeSystemUpdate?: Maybe<CodeSystemCommandResponseOutput>;
  /**
   * Create a new coding.
   *
   * Equivalent to POST /codeSystem/{id}/coding
   */
  codingCreate?: Maybe<CodeSystemCommandResponseOutput>;
  /**
   * Delete an entity.
   *
   * Equivalent to DELETE /codeSystem/{id}/coding/{coding_id}
   */
  codingDelete?: Maybe<CodeSystemCommandResponseOutput>;
  /**
   * Create a new or update an existing entity.
   *
   * Equivalent to PUT /codeSystem/{id}/coding/{coding_id}
   */
  codingUpdate?: Maybe<CodeSystemCommandResponseOutput>;
  /**
   * Clear sync lock.
   *
   * Equivalent to POST /{tenant}/coverage/{id}/clearSyncLock
   */
  coverageClearSyncLock?: Maybe<CoverageCommandResponseOutput>;
  /**
   * Create a new entity.
   *
   * Equivalent to POST /{tenant}/coverage/
   */
  coverageCreate?: Maybe<CoverageCommandResponseOutput>;
  /**
   * Eligibility and benefits verification.
   *
   * Equivalent to POST /{tenant}/coverage/ebv
   */
  coverageEbv?: Maybe<CoverageEbvResultOutput>;
  /**
   * Initiate Coverage API for a given id
   *
   * Equivalent to POST /{tenant}/coverage/{id}/initiate
   */
  coverageInitiate?: Maybe<CoverageCommandResponseOutput>;
  /**
   * Create a new or patch an existing entity.
   *
   * Equivalent to PATCH /{tenant}/coverage/{id}
   */
  coveragePatch?: Maybe<CoverageCommandResponseOutput>;
  /**
   * Delete an entity.
   *
   * Equivalent to DELETE /{tenant}/coverage/{id}
   */
  coverageRemove?: Maybe<CoverageCommandResponseOutput>;
  /**
   * Create a new or update an existing entity.
   *
   * Equivalent to PUT /{tenant}/coverage/{id}
   */
  coverageUpdate?: Maybe<CoverageCommandResponseOutput>;
  /**
   * Complete Coverage Workflow for a given id
   *
   * Equivalent to POST /{tenant}/coverage/workflow/{workflowId}/complete
   */
  coverageWorkflowComplete?: Maybe<CoverageCommandResponseOutput>;
  /**
   * Pause Coverage Workflow for a given id
   *
   * Equivalent to POST /{tenant}/coverage/workflow/{workflowId}/pause
   */
  coverageWorkflowPause?: Maybe<CoverageCommandResponseOutput>;
  /**
   * Restart Coverage Workflow for a given id
   *
   * Equivalent to POST /{tenant}/coverage/workflow/{workflowId}/restart
   */
  coverageWorkflowRestart?: Maybe<CoverageCommandResponseOutput>;
  /**
   * Resume Coverage Workflow for a given id
   *
   * Equivalent to POST /{tenant}/coverage/workflow/{workflowId}/resume
   */
  coverageWorkflowResume?: Maybe<CoverageCommandResponseOutput>;
  /**
   * Review Coverage Workflow for a given id
   *
   * Equivalent to POST /{tenant}/coverage/workflow/{workflowId}/review
   */
  coverageWorkflowReview?: Maybe<CoverageCommandResponseOutput>;
  /**
   * Start Coverage Workflow for a given id
   *
   * Equivalent to POST /{tenant}/coverage/workflow/{workflowId}/start
   */
  coverageWorkflowStart?: Maybe<CoverageCommandResponseOutput>;
  /**
   * Start Coverage Workflow for a given visit or appointment id
   *
   * Equivalent to POST /{tenant}/coverage/{id}/workflow/start
   */
  coverageWorkflowStartByVisit?: Maybe<CoverageCommandResponseOutput>;
  /**
   * Terminate Coverage Workflow for a given id
   *
   * Equivalent to POST /{tenant}/coverage/workflow/{workflowId}/terminate
   */
  coverageWorkflowTerminate?: Maybe<CoverageCommandResponseOutput>;
  /**
   * Create a new entity.
   *
   * Equivalent to POST /{tenant}/device/
   */
  deviceCreate?: Maybe<DeviceCommandResponseOutput>;
  /**
   * Create a new or patch an existing entity.
   *
   * Equivalent to PATCH /{tenant}/device/{id}
   */
  devicePatch?: Maybe<DeviceCommandResponseOutput>;
  /**
   * Delete an entity.
   *
   * Equivalent to DELETE /{tenant}/device/{id}
   */
  deviceRemove?: Maybe<DeviceCommandResponseOutput>;
  /**
   * Create a new device service duration.
   *
   * Equivalent to POST /{tenant}/device/{id}/serviceDuration
   */
  deviceServiceDurationCreate?: Maybe<DeviceCommandResponseOutput>;
  /**
   * Create a new or patch an existing device service duration by serviceTypeCode.
   *
   * Equivalent to PATCH /{tenant}/device/{id}/serviceDuration/{serviceTypeCode}
   */
  deviceServiceDurationPatch?: Maybe<DeviceCommandResponseOutput>;
  /**
   * Delete an device service duration by serviceTypeCode.
   *
   * Equivalent to DELETE /{tenant}/device/{id}/serviceDuration/{serviceTypeCode}
   */
  deviceServiceDurationRemove?: Maybe<DeviceCommandResponseOutput>;
  /**
   * Create a new or update an existing entity.
   *
   * Equivalent to PUT /{tenant}/device/{id}
   */
  deviceUpdate?: Maybe<DeviceCommandResponseOutput>;
  /**
   * Create a new entity.
   *
   * Equivalent to POST /{tenant}/document/
   */
  documentCreate?: Maybe<DocumentCommandResponseOutput>;
  /**
   * Delete an entity.
   *
   * Equivalent to DELETE /{tenant}/document/{id}
   */
  documentDelete?: Maybe<DocumentCommandResponseOutput>;
  /**
   * Extract the data by ID.
   *
   * Equivalent to POST /{tenant}/document/{id}/extract
   */
  documentExtractDataFromDocument?: Maybe<Scalars["JSON"]["output"]>;
  /**
   * Send Fax using document id
   *
   * Equivalent to POST /{tenant}/document/{id}/sendFax
   */
  documentFaxSend?: Maybe<DocumentFaxResponseOutput>;
  /**
   * Create a new or update an existing entity.
   *
   * Equivalent to PATCH /{tenant}/document/{id}
   */
  documentUpdate?: Maybe<DocumentCommandResponseOutput>;
  /**
   * Create a new entity.
   *
   * Equivalent to POST /{tenant}/estimate/
   */
  estimateCreate?: Maybe<EstimateCommandResponseOutput>;
  /**
   * Delete an entity.
   *
   * Equivalent to DELETE /{tenant}/estimate/{id}
   */
  estimateDelete?: Maybe<EstimateCommandResponseOutput>;
  /**
   * Create a new or update an existing entity.
   *
   * Equivalent to PUT /{tenant}/estimate/{id}
   */
  estimateUpdate?: Maybe<EstimateCommandResponseOutput>;
  /**
   * Create a new fax outreach.
   *
   * Equivalent to POST /{tenant}/faxOutreach/
   */
  faxOutreachCreate?: Maybe<FaxOutreachCommandResponseOutput>;
  /**
   * Create a new fax outreach rule.
   *
   * Equivalent to POST /{tenant}/faxOutreach/rule
   */
  faxOutreachRuleCreate?: Maybe<FaxOutreachCommandResponseOutput>;
  /**
   * Remove a fax outreach rule.
   *
   * Equivalent to DELETE /{tenant}/faxOutreach/rule/{id}
   */
  faxOutreachRuleRemove?: Maybe<FaxOutreachCommandResponseOutput>;
  /**
   * Create a new entity.
   *
   * Equivalent to POST /{tenant}/feeSchedule/
   */
  feeScheduleCreate?: Maybe<FeeScheduleCommandResponseOutput>;
  /**
   * Delete an entity.
   *
   * Equivalent to DELETE /{tenant}/feeSchedule/{id}
   */
  feeScheduleDelete?: Maybe<FeeScheduleCommandResponseOutput>;
  /**
   * Create a new entity.
   *
   * Equivalent to POST /{tenant}/feeSchedule/{id}/fees
   */
  feeScheduleFeesCreate?: Maybe<FeeScheduleCommandResponseOutput>;
  /**
   * Delete an entity.
   *
   * Equivalent to DELETE /{tenant}/feeSchedule/{id}/fees/{feeId}
   */
  feeScheduleFeesDelete?: Maybe<FeeScheduleCommandResponseOutput>;
  /**
   * Create a new or update an existing Fees entity.
   *
   * Equivalent to PUT /{tenant}/feeSchedule/{id}/fees/{feeId}
   */
  feeScheduleFeesUpdate?: Maybe<FeeScheduleCommandResponseOutput>;
  /**
   * Create a new or update an existing entity.
   *
   * Equivalent to PUT /{tenant}/feeSchedule/{id}
   */
  feeScheduleUpdate?: Maybe<FeeScheduleCommandResponseOutput>;
  /**
   * Provide an access token for AthenaHealth API.
   *
   * Equivalent to POST /oauth/athena/token
   */
  fetchAthenaToken?: Maybe<AthenaTokenResponseOutput>;
  /**
   * Provide an access token for Epic API.
   *
   * Equivalent to POST /oauth/epic/token
   */
  fetchEpicToken?: Maybe<EpicTokenResponseOutput>;
  /**
   * Provide an access token for ModMed API.
   *
   * Equivalent to POST /oauth/modmed/token
   */
  fetchModmedToken?: Maybe<ModmedTokenResponseOutput>;
  /**
   * Create a new entity.
   *
   * Equivalent to POST /{tenant}/flow/
   */
  flowCreate?: Maybe<FlowCommandResponseOutput>;
  /**
   * Delete an entity.
   *
   * Equivalent to DELETE /{tenant}/flow/{id}
   */
  flowDelete?: Maybe<FlowCommandResponseOutput>;
  /**
   * Create a new or update an existing entity.
   *
   * Equivalent to PUT /{tenant}/flow/{id}
   */
  flowUpdate?: Maybe<FlowCommandResponseOutput>;
  /**
   * Create a new entity.
   *
   * Equivalent to POST /{tenant}/location/
   */
  locationCreate?: Maybe<LocationCommandResponseOutput>;
  /**
   * Create a new or patch an existing entity.
   *
   * Equivalent to PATCH /{tenant}/location/{id}
   */
  locationPatch?: Maybe<LocationCommandResponseOutput>;
  /**
   * Delete an entity.
   *
   * Equivalent to DELETE /{tenant}/location/{id}
   */
  locationRemove?: Maybe<LocationCommandResponseOutput>;
  /**
   * Create a new or update an existing entity.
   *
   * Equivalent to PUT /{tenant}/location/{id}
   */
  locationUpdate?: Maybe<LocationCommandResponseOutput>;
  /**
   * Create a new entity.
   *
   * Equivalent to POST /{tenant}/lookup/authRequirement
   */
  lookupCreate?: Maybe<LookupAuthRequirementCommandResponseOutput>;
  /**
   * Delete an entity.
   *
   * Equivalent to DELETE /{tenant}/lookup/authRequirement/{id}
   */
  lookupDelete?: Maybe<LookupAuthRequirementCommandResponseOutput>;
  /**
   * Create a new or update an existing entity.
   *
   * Equivalent to PUT /{tenant}/lookup/authRequirement/{id}
   */
  lookupUpdate?: Maybe<LookupAuthRequirementCommandResponseOutput>;
  /**
   * Create a new entity.
   *
   * Equivalent to POST /{tenant}/order/
   */
  orderCreate?: Maybe<OrderCommandResponseOutput>;
  /**
   * Delete an entity by ID.
   *
   * Equivalent to DELETE /{tenant}/order/{id}
   */
  orderDelete?: Maybe<OrderCommandResponseOutput>;
  /**
   * Ingest resource
   *
   * Equivalent to POST /{tenant}/order/ingest
   */
  orderIngest?: Maybe<OrderIngestResponseOutput>;
  /**
   * Subscribe to resource events.
   *
   * Equivalent to POST /{tenant}/order/subscription
   */
  orderSubscriptionCreate?: Maybe<OrderCommandResponseOutput>;
  /**
   * Unsubscribe from resource events.
   *
   * Equivalent to DELETE /{tenant}/order/subscription/{id}
   */
  orderSubscriptionDelete?: Maybe<OrderCommandResponseOutput>;
  /**
   * Create a new contract.
   *
   * Equivalent to POST /{tenant}/organization/{id}/contract
   */
  organizationContractCreate?: Maybe<OrganizationCommandResponseOutput>;
  /**
   * Create Or Patch contract.
   *
   * Equivalent to PATCH /{tenant}/organization/{id}/contract/{contractId}
   */
  organizationContractPatch?: Maybe<OrganizationCommandResponseOutput>;
  /**
   * Delete an entity.
   *
   * Equivalent to DELETE /{tenant}/organization/{id}/contract/{contractId}
   */
  organizationContractRemove?: Maybe<OrganizationCommandResponseOutput>;
  /**
   * Create a new entity.
   *
   * Equivalent to POST /{tenant}/organization/
   */
  organizationCreate?: Maybe<OrganizationCommandResponseOutput>;
  /**
   * Create a new fee schedule.
   *
   * Equivalent to POST /{tenant}/organization/{id}/feeSchedule
   */
  organizationFeeScheduleCreate?: Maybe<OrganizationCommandResponseOutput>;
  /**
   * Create a new or patch an existing entity.
   *
   * Equivalent to PATCH /{tenant}/organization/{id}/feeSchedule/{feeSchedule}
   */
  organizationFeeSchedulePatch?: Maybe<OrganizationCommandResponseOutput>;
  /**
   * Delete an entity.
   *
   * Equivalent to DELETE /{tenant}/organization/{id}/feeSchedule/{feeSchedule}
   */
  organizationFeeScheduleRemove?: Maybe<OrganizationCommandResponseOutput>;
  /**
   * Create a new or update an existing entity.
   *
   * Equivalent to PUT /{tenant}/organization/{id}/feeSchedule/{feeSchedule}
   */
  organizationFeeScheduleUpdatedUpdate?: Maybe<OrganizationCommandResponseOutput>;
  /**
   * Import entities from EDI List.
   *
   * Equivalent to POST /{tenant}/organization/importEDIList
   */
  organizationImportEDIList?: Maybe<OrganizationImportEdiListResponseOutput>;
  /**
   * Create a new or patch an existing entity.
   *
   * Equivalent to PATCH /{tenant}/organization/{id}
   */
  organizationPatch?: Maybe<OrganizationCommandResponseOutput>;
  /**
   * Delete an entity.
   *
   * Equivalent to DELETE /{tenant}/organization/{id}
   */
  organizationRemove?: Maybe<OrganizationCommandResponseOutput>;
  /**
   * Create a new or update an existing entity.
   *
   * Equivalent to PUT /{tenant}/organization/{id}
   */
  organizationUpdate?: Maybe<OrganizationCommandResponseOutput>;
  /**
   * Clear sync lock.
   *
   * Equivalent to POST /{tenant}/patient/{id}/clearSyncLock
   */
  patientClearSyncLock?: Maybe<PatientCommandResponseOutput>;
  /**
   * Create a new entity.
   *
   * Equivalent to POST /{tenant}/patient/
   */
  patientCreate?: Maybe<PatientCommandResponseOutput>;
  /**
   * Create a new or patch an existing entity.
   *
   * Equivalent to PATCH /{tenant}/patient/{id}
   */
  patientPatch?: Maybe<PatientCommandResponseOutput>;
  /**
   * Delete an entity.
   *
   * Equivalent to DELETE /{tenant}/patient/{id}
   */
  patientRemove?: Maybe<PatientCommandResponseOutput>;
  /**
   * Create a new or update an existing entity.
   *
   * Equivalent to PUT /{tenant}/patient/{id}
   */
  patientUpdate?: Maybe<PatientCommandResponseOutput>;
  /**
   * Create a new entity.
   *
   * Equivalent to POST /{tenant}/practitioner/
   */
  practitionerCreate?: Maybe<PractitionerCommandResponseOutput>;
  /**
   * Create a new or patch an existing entity.
   *
   * Equivalent to PATCH /{tenant}/practitioner/{id}
   */
  practitionerPatch?: Maybe<PractitionerCommandResponseOutput>;
  /**
   * Delete an entity.
   *
   * Equivalent to DELETE /{tenant}/practitioner/{id}
   */
  practitionerRemove?: Maybe<PractitionerCommandResponseOutput>;
  /**
   * Create a new or update an existing entity.
   *
   * Equivalent to PUT /{tenant}/practitioner/{id}
   */
  practitionerUpdate?: Maybe<PractitionerCommandResponseOutput>;
  /**
   * Indicate that the prior auth APAS bot state information was added.
   *
   * Equivalent to POST /{tenant}/priorAuth/{id}/coverage/{coverage}/apas/{apas}/botState
   */
  priorAuthApasBotStateInformationAdded?: Maybe<PriorAuthCommandResponseOutput>;
  /**
   * Indicate that the prior auth APAS trigger information was added.
   *
   * Equivalent to POST /{tenant}/priorAuth/{id}/coverage/{coverage}/triggerAPAS
   */
  priorAuthApasTriggerInformationAdded?: Maybe<PriorAuthCommandResponseOutput>;
  /**
   * update a prior auth to get auth Requirement
   *
   * Equivalent to POST /{tenant}/priorAuth/{id}/coverage/{coverage}/authRequirement
   */
  priorAuthAuthRequirementInitiate?: Maybe<PriorAuthCommandResponseOutput>;
  /**
   * Initiate a prior auth to get auth status
   *
   * Equivalent to POST /{tenant}/priorAuth/{id}/coverage/{coverage}/authStatus
   */
  priorAuthAuthStatusInitiate?: Maybe<PriorAuthCommandResponseOutput>;
  /**
   * Patch a coverage.
   *
   * Equivalent to PATCH /{tenant}/priorAuth/{id}/coverage/{coverage}
   */
  priorAuthCoveragePatch?: Maybe<PriorAuthCommandResponseOutput>;
  /**
   * Create a new entity.
   *
   * Equivalent to POST /{tenant}/priorAuth/
   */
  priorAuthCreate?: Maybe<PriorAuthCommandResponseOutput>;
  /**
   * Delete an entity.
   *
   * Equivalent to DELETE /{tenant}/priorAuth/{id}
   */
  priorAuthDelete?: Maybe<PriorAuthCommandResponseOutput>;
  /**
   * Indicate that the prior auth information was added.
   *
   * Equivalent to POST /{tenant}/priorAuth/{id}/information-added
   */
  priorAuthInformationAdded?: Maybe<PriorAuthCommandResponseOutput>;
  /**
   * Initiate a prior auth.
   *
   * Equivalent to POST /{tenant}/priorAuth/{id}/initiate
   */
  priorAuthInitiate?: Maybe<PriorAuthCommandResponseOutput>;
  /**
   * Create a new or patch an existing entity.
   *
   * Equivalent to PATCH /{tenant}/priorAuth/{id}
   */
  priorAuthPatch?: Maybe<PriorAuthCommandResponseOutput>;
  /**
   * Create a new entity.
   *
   * Equivalent to POST /{tenant}/schedule/
   */
  scheduleCreate?: Maybe<ScheduleCommandResponseOutput>;
  /**
   * Delete an entity.
   *
   * Equivalent to DELETE /{tenant}/schedule/{id}
   */
  scheduleDelete?: Maybe<ScheduleCommandResponseOutput>;
  /**
   * Create a new slots entity.
   *
   * Equivalent to POST /{tenant}/schedule/slots
   */
  scheduleSlotsCreate?: Maybe<ScheduleCommandResponseOutput>;
  /**
   * Creates a new or updates existing slots entity.
   *
   * Equivalent to PUT /{tenant}/schedule/slots/{id}
   */
  scheduleSlotsUpdate?: Maybe<ScheduleCommandResponseOutput>;
  /**
   * Create a new or update an existing entity.
   *
   * Equivalent to PUT /{tenant}/schedule/{id}
   */
  scheduleUpdate?: Maybe<ScheduleCommandResponseOutput>;
  /**
   * Create a new entity.
   *
   * Equivalent to POST /{tenant}/sync/
   */
  syncCreate?: Maybe<SyncCommandResponseOutput>;
  /**
   * Delete an entity.
   *
   * Equivalent to DELETE /{tenant}/sync/{id}
   */
  syncDelete?: Maybe<SyncCommandResponseOutput>;
  /**
   * Create or Patch entity.
   *
   * Equivalent to PATCH /{tenant}/sync/{id}
   */
  syncPatch?: Maybe<SyncCommandResponseOutput>;
  /**
   * Create a new or update an existing entity.
   *
   * Equivalent to PUT /{tenant}/sync/{id}
   */
  syncUpdate?: Maybe<SyncCommandResponseOutput>;
  /**
   * Send Appointment Confirmation Outreach
   *
   * Equivalent to POST /{tenant}/textOutreach/appointmentConfirmation
   */
  textOutreachAppointmentConfirmation?: Maybe<TextOutreachCommandResponseOutput>;
  /**
   * Send Appointment Reminder Outreach
   *
   * Equivalent to POST /{tenant}/textOutreach/appointmentReminder
   */
  textOutreachAppointmentReminder?: Maybe<TextOutreachCommandResponseOutput>;
  /**
   * Send Nudge Outreach
   *
   * Equivalent to POST /{tenant}/textOutreach/nudge
   */
  textOutreachNudge?: Maybe<TextOutreachCommandResponseOutput>;
  /**
   * Send Reschedule Failed Outreach
   *
   * Equivalent to POST /{tenant}/textOutreach/rescheduleFailed
   */
  textOutreachRescheduleFailed?: Maybe<TextOutreachCommandResponseOutput>;
  /**
   * Send Reschedule Success Outreach
   *
   * Equivalent to POST /{tenant}/textOutreach/rescheduleSuccess
   */
  textOutreachRescheduleSuccess?: Maybe<TextOutreachCommandResponseOutput>;
  /**
   * Create a new nudge URL.
   *
   * Equivalent to POST /url/
   */
  urlCreate?: Maybe<UrlCommandResponseOutput>;
  /**
   * Delete a URL.
   *
   * Equivalent to DELETE /url/{id}
   */
  urlDelete?: Maybe<UrlCommandResponseOutput>;
  /**
   * Create a new or Patch an existing URL.
   *
   * Equivalent to PATCH /url/{id}
   */
  urlPatch?: Maybe<UrlCommandResponseOutput>;
  /**
   * Create a new or update an existing URL.
   *
   * Equivalent to PUT /url/{id}
   */
  urlUpdate?: Maybe<UrlCommandResponseOutput>;
  /**
   * Create a new user.
   *
   * Equivalent to POST /{tenant}/user/
   */
  userCreate?: Maybe<UserCommandResponseOutput>;
  /**
   * Create temporary AWS credentials.
   *
   * Equivalent to POST /{tenant}/user/credentials
   */
  userCreateCredentials?: Maybe<UserCreateCredentialsResponseOutput>;
  /**
   * Delete an entity.
   *
   * Equivalent to DELETE /{tenant}/user/{username}
   */
  userDelete?: Maybe<UserCommandResponseOutput>;
  /**
   * Update an existing user.
   *
   * Equivalent to PUT /{tenant}/user/{username}
   */
  userUpdate?: Maybe<UserCommandResponseOutput>;
  /**
   * Create a new entity.
   *
   * Equivalent to POST /{tenant}/voiceOutreach/
   */
  voiceOutreachCreate?: Maybe<VoiceOutreachCommandResponseOutput>;
  /**
   * Send Nudge Outreach
   *
   * Equivalent to POST /{tenant}/voiceOutreach/nudge
   */
  voiceOutreachNudge?: Maybe<VoiceOutreachCommandResponseOutput>;
};

export type MutationAppointmentCreateArgs = {
  requestBody: AppointmentWriteInput;
  tenant: Scalars["String"]["input"];
};

export type MutationAppointmentDeleteArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type MutationAppointmentPatchArgs = {
  id: Scalars["String"]["input"];
  requestBody: AppointmentPatchInput;
  tenant: Scalars["String"]["input"];
};

export type MutationAppointmentRescheduleArgs = {
  id: Scalars["String"]["input"];
  requestBody: AppointmentRescheduleRequestInput;
  tenant: Scalars["String"]["input"];
};

export type MutationAppointmentRescheduleCancelArgs = {
  id: Scalars["String"]["input"];
  requestBody: AppointmentRescheduleActionInput;
  tenant: Scalars["String"]["input"];
};

export type MutationAppointmentRescheduleConfirmArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type MutationAppointmentReschedulePatchArgs = {
  id: Scalars["String"]["input"];
  requestBody: AppointmentReschedulePatchInput;
  rescheduleId: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type MutationAppointmentUpdateArgs = {
  id: Scalars["String"]["input"];
  requestBody: AppointmentWriteInput;
  tenant: Scalars["String"]["input"];
};

export type MutationAuthenticateModmedArgs = {
  requestBody: ModmedAuthRequestInput;
};

export type MutationCodeSystemCreateArgs = {
  requestBody: CodeSystemInput;
};

export type MutationCodeSystemDeleteArgs = {
  id: Scalars["String"]["input"];
};

export type MutationCodeSystemUpdateArgs = {
  id: Scalars["String"]["input"];
  requestBody: CodeSystemInput;
};

export type MutationCodingCreateArgs = {
  id: Scalars["String"]["input"];
  requestBody: CodeSystemCodingInput;
};

export type MutationCodingDeleteArgs = {
  codingId: Scalars["String"]["input"];
  id: Scalars["String"]["input"];
};

export type MutationCodingUpdateArgs = {
  codingId: Scalars["String"]["input"];
  id: Scalars["String"]["input"];
  requestBody: CodeSystemCodingInput;
};

export type MutationCoverageClearSyncLockArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type MutationCoverageCreateArgs = {
  requestBody: CoveragePutInput;
  tenant: Scalars["String"]["input"];
};

export type MutationCoverageEbvArgs = {
  requestBody: CoverageEbvInputInput;
  tenant: Scalars["String"]["input"];
};

export type MutationCoverageInitiateArgs = {
  id: Scalars["String"]["input"];
  requestBody: CoverageInitiateInput;
  tenant: Scalars["String"]["input"];
};

export type MutationCoveragePatchArgs = {
  id: Scalars["String"]["input"];
  requestBody: CoveragePatchInput;
  tenant: Scalars["String"]["input"];
};

export type MutationCoverageRemoveArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type MutationCoverageUpdateArgs = {
  id: Scalars["String"]["input"];
  requestBody: CoveragePutInput;
  tenant: Scalars["String"]["input"];
};

export type MutationCoverageWorkflowCompleteArgs = {
  requestBody: CoverageWorkflowActionInput;
  tenant: Scalars["String"]["input"];
  workflowId: Scalars["String"]["input"];
};

export type MutationCoverageWorkflowPauseArgs = {
  requestBody: CoverageWorkflowActionInput;
  tenant: Scalars["String"]["input"];
  workflowId: Scalars["String"]["input"];
};

export type MutationCoverageWorkflowRestartArgs = {
  requestBody: CoverageWorkflowInitInput;
  tenant: Scalars["String"]["input"];
  workflowId: Scalars["String"]["input"];
};

export type MutationCoverageWorkflowResumeArgs = {
  requestBody: CoverageWorkflowActionInput;
  tenant: Scalars["String"]["input"];
  workflowId: Scalars["String"]["input"];
};

export type MutationCoverageWorkflowReviewArgs = {
  requestBody: CoverageWorkflowReviewInput;
  tenant: Scalars["String"]["input"];
  workflowId: Scalars["String"]["input"];
};

export type MutationCoverageWorkflowStartArgs = {
  tenant: Scalars["String"]["input"];
  workflowId: Scalars["String"]["input"];
};

export type MutationCoverageWorkflowStartByVisitArgs = {
  id: Scalars["String"]["input"];
  requestBody: CoverageWorkflowStartByVisitInput;
  tenant: Scalars["String"]["input"];
};

export type MutationCoverageWorkflowTerminateArgs = {
  requestBody: CoverageWorkflowActionInput;
  tenant: Scalars["String"]["input"];
  workflowId: Scalars["String"]["input"];
};

export type MutationDeviceCreateArgs = {
  requestBody: DeviceWriteInput;
  tenant: Scalars["String"]["input"];
};

export type MutationDevicePatchArgs = {
  id: Scalars["String"]["input"];
  requestBody: DevicePatchInput;
  tenant: Scalars["String"]["input"];
};

export type MutationDeviceRemoveArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type MutationDeviceServiceDurationCreateArgs = {
  id: Scalars["String"]["input"];
  requestBody: DeviceServiceDurationCreateInput;
  tenant: Scalars["String"]["input"];
};

export type MutationDeviceServiceDurationPatchArgs = {
  id: Scalars["String"]["input"];
  requestBody: DeviceServiceDurationPatchInput;
  serviceTypeCode: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type MutationDeviceServiceDurationRemoveArgs = {
  id: Scalars["String"]["input"];
  serviceTypeCode: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type MutationDeviceUpdateArgs = {
  id: Scalars["String"]["input"];
  requestBody: DeviceWriteInput;
  tenant: Scalars["String"]["input"];
};

export type MutationDocumentCreateArgs = {
  requestBody: DocumentCreateInput;
  tenant: Scalars["String"]["input"];
};

export type MutationDocumentDeleteArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type MutationDocumentExtractDataFromDocumentArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type MutationDocumentFaxSendArgs = {
  id: Scalars["String"]["input"];
  requestBody: DocumentFaxInput;
  tenant: Scalars["String"]["input"];
};

export type MutationDocumentUpdateArgs = {
  id: Scalars["String"]["input"];
  requestBody: DocumentPatchInput;
  tenant: Scalars["String"]["input"];
};

export type MutationEstimateCreateArgs = {
  requestBody: EstimateInput;
  tenant: Scalars["String"]["input"];
};

export type MutationEstimateDeleteArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type MutationEstimateUpdateArgs = {
  id: Scalars["String"]["input"];
  requestBody: EstimateInput;
  tenant: Scalars["String"]["input"];
};

export type MutationFaxOutreachCreateArgs = {
  requestBody: FaxOutreachRequestInput;
  tenant: Scalars["String"]["input"];
};

export type MutationFaxOutreachRuleCreateArgs = {
  requestBody: FaxOutreachRuleRequestInput;
  tenant: Scalars["String"]["input"];
};

export type MutationFaxOutreachRuleRemoveArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type MutationFeeScheduleCreateArgs = {
  requestBody: FeeScheduleWriteInput;
  tenant: Scalars["String"]["input"];
};

export type MutationFeeScheduleDeleteArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type MutationFeeScheduleFeesCreateArgs = {
  id: Scalars["String"]["input"];
  requestBody: FeeScheduleFeesWriteInput;
  tenant: Scalars["String"]["input"];
};

export type MutationFeeScheduleFeesDeleteArgs = {
  feeId: Scalars["String"]["input"];
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type MutationFeeScheduleFeesUpdateArgs = {
  feeId: Scalars["String"]["input"];
  id: Scalars["String"]["input"];
  requestBody: FeeScheduleFeesWriteInput;
  tenant: Scalars["String"]["input"];
};

export type MutationFeeScheduleUpdateArgs = {
  id: Scalars["String"]["input"];
  requestBody: FeeScheduleWriteInput;
  tenant: Scalars["String"]["input"];
};

export type MutationFetchAthenaTokenArgs = {
  requestBody: AthenaTokenRequestInput;
};

export type MutationFetchModmedTokenArgs = {
  requestBody: ModmedTokenRequestInput;
};

export type MutationFlowCreateArgs = {
  requestBody: FlowWriteInput;
  tenant: Scalars["String"]["input"];
};

export type MutationFlowDeleteArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type MutationFlowUpdateArgs = {
  id: Scalars["String"]["input"];
  requestBody: FlowWriteInput;
  tenant: Scalars["String"]["input"];
};

export type MutationLocationCreateArgs = {
  requestBody: LocationWriteInput;
  tenant: Scalars["String"]["input"];
};

export type MutationLocationPatchArgs = {
  id: Scalars["String"]["input"];
  requestBody: LocationPatchInput;
  tenant: Scalars["String"]["input"];
};

export type MutationLocationRemoveArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type MutationLocationUpdateArgs = {
  id: Scalars["String"]["input"];
  requestBody: LocationWriteInput;
  tenant: Scalars["String"]["input"];
};

export type MutationLookupCreateArgs = {
  requestBody: LookupWriteInput;
  tenant: Scalars["String"]["input"];
};

export type MutationLookupDeleteArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type MutationLookupUpdateArgs = {
  id: Scalars["String"]["input"];
  requestBody: LookupWriteInput;
  tenant: Scalars["String"]["input"];
};

export type MutationOrderCreateArgs = {
  requestBody: OrderWriteInput;
  tenant: Scalars["String"]["input"];
};

export type MutationOrderDeleteArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type MutationOrderIngestArgs = {
  requestBody: OrderIngestInput;
  tenant: Scalars["String"]["input"];
};

export type MutationOrderSubscriptionCreateArgs = {
  requestBody: OrderSubscribeInput;
  tenant: Scalars["String"]["input"];
};

export type MutationOrderSubscriptionDeleteArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type MutationOrganizationContractCreateArgs = {
  id: Scalars["String"]["input"];
  requestBody: OrganizationContractWriteInput;
  tenant: Scalars["String"]["input"];
};

export type MutationOrganizationContractPatchArgs = {
  contractId: Scalars["String"]["input"];
  id: Scalars["String"]["input"];
  requestBody: OrganizationContractPatchInput;
  tenant: Scalars["String"]["input"];
};

export type MutationOrganizationContractRemoveArgs = {
  contractId: Scalars["String"]["input"];
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type MutationOrganizationCreateArgs = {
  requestBody: OrganizationWriteInput;
  tenant: Scalars["String"]["input"];
};

export type MutationOrganizationFeeScheduleCreateArgs = {
  id: Scalars["String"]["input"];
  requestBody: OrganizationFeeScheduleWriteInput;
  tenant: Scalars["String"]["input"];
};

export type MutationOrganizationFeeSchedulePatchArgs = {
  feeSchedule: Scalars["String"]["input"];
  id: Scalars["String"]["input"];
  requestBody: OrganizationFeeSchedulePatchInput;
  tenant: Scalars["String"]["input"];
};

export type MutationOrganizationFeeScheduleRemoveArgs = {
  feeSchedule: Scalars["String"]["input"];
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type MutationOrganizationFeeScheduleUpdatedUpdateArgs = {
  feeSchedule: Scalars["String"]["input"];
  id: Scalars["String"]["input"];
  requestBody: OrganizationFeeScheduleWriteInput;
  tenant: Scalars["String"]["input"];
};

export type MutationOrganizationImportEdiListArgs = {
  tenant: Scalars["String"]["input"];
};

export type MutationOrganizationPatchArgs = {
  id: Scalars["String"]["input"];
  requestBody: OrganizationPatchInput;
  tenant: Scalars["String"]["input"];
};

export type MutationOrganizationRemoveArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type MutationOrganizationUpdateArgs = {
  id: Scalars["String"]["input"];
  requestBody: OrganizationWriteInput;
  tenant: Scalars["String"]["input"];
};

export type MutationPatientClearSyncLockArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type MutationPatientCreateArgs = {
  requestBody: PatientWriteInput;
  tenant: Scalars["String"]["input"];
};

export type MutationPatientPatchArgs = {
  id: Scalars["String"]["input"];
  requestBody: PatientPatchInput;
  tenant: Scalars["String"]["input"];
};

export type MutationPatientRemoveArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type MutationPatientUpdateArgs = {
  id: Scalars["String"]["input"];
  requestBody: PatientWriteInput;
  tenant: Scalars["String"]["input"];
};

export type MutationPractitionerCreateArgs = {
  requestBody: PractitionerWriteInput;
  tenant: Scalars["String"]["input"];
};

export type MutationPractitionerPatchArgs = {
  id: Scalars["String"]["input"];
  requestBody: PractitionerPatchInput;
  tenant: Scalars["String"]["input"];
};

export type MutationPractitionerRemoveArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type MutationPractitionerUpdateArgs = {
  id: Scalars["String"]["input"];
  requestBody: PractitionerWriteInput;
  tenant: Scalars["String"]["input"];
};

export type MutationPriorAuthApasBotStateInformationAddedArgs = {
  apas: Scalars["String"]["input"];
  coverage: Scalars["String"]["input"];
  id: Scalars["String"]["input"];
  requestBody: PriorAuthApasBotStateInitiateInput;
  tenant: Scalars["String"]["input"];
};

export type MutationPriorAuthApasTriggerInformationAddedArgs = {
  coverage: Scalars["String"]["input"];
  id: Scalars["String"]["input"];
  requestBody: PriorAuthApasTriggerInitiateInput;
  tenant: Scalars["String"]["input"];
};

export type MutationPriorAuthAuthRequirementInitiateArgs = {
  coverage: Scalars["String"]["input"];
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type MutationPriorAuthAuthStatusInitiateArgs = {
  coverage: Scalars["String"]["input"];
  id: Scalars["String"]["input"];
  requestBody: PriorAuthAuthstatusInitiateInput;
  tenant: Scalars["String"]["input"];
};

export type MutationPriorAuthCoveragePatchArgs = {
  coverage: Scalars["String"]["input"];
  id: Scalars["String"]["input"];
  requestBody: PriorAuthCoveragePatchInput;
  tenant: Scalars["String"]["input"];
};

export type MutationPriorAuthCreateArgs = {
  requestBody: PriorAuthWriteInput;
  tenant: Scalars["String"]["input"];
};

export type MutationPriorAuthDeleteArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type MutationPriorAuthInformationAddedArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type MutationPriorAuthInitiateArgs = {
  id: Scalars["String"]["input"];
  requestBody: PriorAuthInitiateInput;
  tenant: Scalars["String"]["input"];
};

export type MutationPriorAuthPatchArgs = {
  id: Scalars["String"]["input"];
  requestBody: PriorAuthPatchInput;
  tenant: Scalars["String"]["input"];
};

export type MutationScheduleCreateArgs = {
  requestBody: ScheduleWriteInput;
  tenant: Scalars["String"]["input"];
};

export type MutationScheduleDeleteArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type MutationScheduleSlotsCreateArgs = {
  requestBody: ScheduleSlotsInput;
  tenant: Scalars["String"]["input"];
};

export type MutationScheduleSlotsUpdateArgs = {
  id: Scalars["String"]["input"];
  requestBody: ScheduleSlotsInput;
  tenant: Scalars["String"]["input"];
};

export type MutationScheduleUpdateArgs = {
  id: Scalars["String"]["input"];
  requestBody: ScheduleWriteInput;
  tenant: Scalars["String"]["input"];
};

export type MutationSyncCreateArgs = {
  requestBody: SyncWriteInput;
  tenant: Scalars["String"]["input"];
};

export type MutationSyncDeleteArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type MutationSyncPatchArgs = {
  id: Scalars["String"]["input"];
  requestBody: SyncPatchInput;
  tenant: Scalars["String"]["input"];
};

export type MutationSyncUpdateArgs = {
  id: Scalars["String"]["input"];
  requestBody: SyncWriteInput;
  tenant: Scalars["String"]["input"];
};

export type MutationTextOutreachAppointmentConfirmationArgs = {
  requestBody: TextOutreachCommandInput;
  tenant: Scalars["String"]["input"];
};

export type MutationTextOutreachAppointmentReminderArgs = {
  requestBody: TextOutreachCommandInput;
  tenant: Scalars["String"]["input"];
};

export type MutationTextOutreachNudgeArgs = {
  requestBody: TextOutreachCommandInput;
  tenant: Scalars["String"]["input"];
};

export type MutationTextOutreachRescheduleFailedArgs = {
  requestBody: TextOutreachCommandInput;
  tenant: Scalars["String"]["input"];
};

export type MutationTextOutreachRescheduleSuccessArgs = {
  requestBody: TextOutreachCommandInput;
  tenant: Scalars["String"]["input"];
};

export type MutationUrlCreateArgs = {
  requestBody: UrlInput;
};

export type MutationUrlDeleteArgs = {
  id: Scalars["String"]["input"];
};

export type MutationUrlPatchArgs = {
  id: Scalars["String"]["input"];
  requestBody: UrlInput;
};

export type MutationUrlUpdateArgs = {
  id: Scalars["String"]["input"];
  requestBody: UrlInput;
};

export type MutationUserCreateArgs = {
  requestBody: UserCreateInput;
  tenant: Scalars["String"]["input"];
};

export type MutationUserCreateCredentialsArgs = {
  requestBody: UserCreateCredentialsInput;
  tenant: Scalars["String"]["input"];
};

export type MutationUserDeleteArgs = {
  tenant: Scalars["String"]["input"];
  username: Scalars["String"]["input"];
};

export type MutationUserUpdateArgs = {
  requestBody: UserUpdateInput;
  tenant: Scalars["String"]["input"];
  username: Scalars["String"]["input"];
};

export type MutationVoiceOutreachCreateArgs = {
  requestBody: VoiceOutreachInput;
  tenant: Scalars["String"]["input"];
};

export type MutationVoiceOutreachNudgeArgs = {
  requestBody: VoiceOutreachCommandInput;
  tenant: Scalars["String"]["input"];
};

export type Order = {
  __typename?: "Order";
  appointment?: Maybe<Scalars["String"]["output"]>;
  callbackUrl?: Maybe<Scalars["String"]["output"]>;
  coverage?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  created: Scalars["String"]["output"];
  device?: Maybe<Scalars["String"]["output"]>;
  documentId?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  location?: Maybe<Scalars["String"]["output"]>;
  patient?: Maybe<Scalars["String"]["output"]>;
  practitioner?: Maybe<Scalars["String"]["output"]>;
  priorAuth: Scalars["String"]["output"];
  runCoverage?: Maybe<Scalars["Boolean"]["output"]>;
  runPriorAuthCheck?: Maybe<Scalars["Boolean"]["output"]>;
  runPriorAuthConfirmation?: Maybe<Scalars["Boolean"]["output"]>;
  runPriorAuthSubmission?: Maybe<Scalars["Boolean"]["output"]>;
  tenant: Scalars["String"]["output"];
  updated: Scalars["String"]["output"];
  visit?: Maybe<Scalars["String"]["output"]>;
};

export enum Order2 {
  Asc = "asc",
  Desc = "desc",
}

export enum Order3 {
  Asc = "asc",
  Desc = "desc",
}

export enum Order4 {
  Asc = "asc",
  Desc = "desc",
}

export enum Order5 {
  Asc = "asc",
  Desc = "desc",
}

export enum Order6 {
  Asc = "asc",
  Desc = "desc",
}

export enum Order7 {
  Asc = "asc",
  Desc = "desc",
}

export enum Order8 {
  Asc = "asc",
  Desc = "desc",
}

export enum Order9 {
  Asc = "asc",
  Desc = "desc",
}

export enum Order10 {
  Asc = "asc",
  Desc = "desc",
}

export enum Order11 {
  Asc = "asc",
  Desc = "desc",
}

export enum Order12 {
  Asc = "asc",
  Desc = "desc",
}

export enum Order13 {
  Asc = "asc",
  Desc = "desc",
}

export enum Order14 {
  Asc = "asc",
  Desc = "desc",
}

export enum Order15 {
  Asc = "asc",
  Desc = "desc",
}

export enum Order16 {
  Asc = "asc",
  Desc = "desc",
}

export enum Order17 {
  Asc = "asc",
  Desc = "desc",
}

export enum Order18 {
  Asc = "asc",
  Desc = "desc",
}

export enum Order19 {
  Asc = "asc",
  Desc = "desc",
}

export enum Order20 {
  Asc = "asc",
  Desc = "desc",
}

export enum Order21 {
  Asc = "asc",
  Desc = "desc",
}

export enum Order22 {
  Asc = "asc",
  Desc = "desc",
}

export enum Order23 {
  Asc = "asc",
  Desc = "desc",
}

export enum OrderBy {
  Created = "created",
  StartTime = "startTime",
  Updated = "updated",
}

export enum OrderBy2 {
  Created = "created",
  StartTime = "startTime",
}

export enum OrderBy3 {
  Created = "created",
  Updated = "updated",
}

export enum OrderBy4 {
  Created = "created",
  Updated = "updated",
}

export enum OrderBy5 {
  Created = "created",
  Updated = "updated",
}

export enum OrderBy6 {
  Created = "created",
  Updated = "updated",
}

export enum OrderBy7 {
  Created = "created",
  Updated = "updated",
}

export enum OrderBy8 {
  Created = "created",
  Updated = "updated",
}

export enum OrderBy9 {
  Created = "created",
}

export enum OrderBy10 {
  Created = "created",
  Updated = "updated",
}

export enum OrderBy11 {
  Created = "created",
  Modified = "modified",
}

export enum OrderBy12 {
  Created = "created",
  Updated = "updated",
}

export enum OrderBy13 {
  Created = "created",
  Updated = "updated",
}

export enum OrderBy14 {
  Created = "created",
  Updated = "updated",
}

export enum OrderBy15 {
  Created = "created",
  Updated = "updated",
}

export enum OrderBy16 {
  Created = "created",
  Updated = "updated",
}

export enum OrderBy17 {
  Created = "created",
  Updated = "updated",
}

export enum OrderBy18 {
  Created = "created",
  Updated = "updated",
}

export enum OrderBy19 {
  AppointmentStart = "appointmentStart",
  AppointmentStatus = "appointmentStatus",
  AuthStatus = "authStatus",
  Created = "created",
  Updated = "updated",
}

export enum OrderBy20 {
  Created = "created",
  Updated = "updated",
}

export enum OrderBy21 {
  Created = "created",
  Updated = "updated",
}

export enum OrderBy22 {
  Created = "Created",
  Updated = "Updated",
}

export type OrderCommandResponse = {
  __typename?: "OrderCommandResponse";
  resourceID: Scalars["String"]["output"];
};

export type OrderCommandResponseOutput = Error | OrderCommandResponse;

export type OrderIngestInput = {
  file: Scalars["String"]["input"];
  fileName?: InputMaybe<Scalars["String"]["input"]>;
  fileType?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["String"]["input"];
  tenant?: InputMaybe<Scalars["String"]["input"]>;
};

export type OrderIngestResponse = {
  __typename?: "OrderIngestResponse";
  id: Scalars["String"]["output"];
  resources: Array<Maybe<OrderIngestResponseResource>>;
};

export type OrderIngestResponseOutput = Error | OrderIngestResponse;

export type OrderIngestResponseResource = {
  __typename?: "OrderIngestResponseResource";
  appointmentId?: Maybe<Scalars["String"]["output"]>;
  review?: Maybe<Scalars["String"]["output"]>;
  rowNumber?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<OrderIngestResponseRowStatus>;
};

export enum OrderIngestResponseRowStatus {
  Failed = "failed",
  Succeeded = "succeeded",
  Warning = "warning",
}

export type OrderInputAppointmentInput = {
  endTime?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["String"]["input"];
  metadata?: InputMaybe<OrderInputAppointmentMetadataInput>;
  minutesDuration?: InputMaybe<Scalars["Float"]["input"]>;
  patient: Scalars["String"]["input"];
  reasonCode?: InputMaybe<AppointmentReasonCodeInput>;
  serviceCategory?: InputMaybe<AppointmentServiceCategoryInput>;
  serviceType: AppointmentServiceTypeInput;
  startTime?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<OrderInputAppointmentStatus>;
  visit: Scalars["String"]["input"];
};

export type OrderInputAppointmentMetadataInput = {
  authEndDate?: InputMaybe<Scalars["String"]["input"]>;
  authStartDate?: InputMaybe<Scalars["String"]["input"]>;
  authStatus?: InputMaybe<Scalars["String"]["input"]>;
  doNotContact?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export enum OrderInputAppointmentStatus {
  Arrived = "arrived",
  Booked = "booked",
  BookingPending = "bookingPending",
  Canceled = "canceled",
  CheckedIn = "checked_in",
  Completed = "completed",
  Pending = "pending",
}

export type OrderInputCoverageInput = {
  beneficiary?: InputMaybe<Scalars["String"]["input"]>;
  groupNumber?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["String"]["input"];
  order?: InputMaybe<Scalars["String"]["input"]>;
  payorAddress?: InputMaybe<Scalars["String"]["input"]>;
  payorId?: InputMaybe<Scalars["String"]["input"]>;
  payorName?: InputMaybe<Scalars["String"]["input"]>;
  payorTelecom?: InputMaybe<Scalars["String"]["input"]>;
  subscriberId?: InputMaybe<Scalars["String"]["input"]>;
};

export type OrderInputDeviceInput = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type OrderInputLocationInput = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  telecom?: InputMaybe<Array<InputMaybe<LocationTelecomInput>>>;
};

export type OrderInputPatientInput = {
  address?: InputMaybe<Scalars["String"]["input"]>;
  birthDate?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  gender?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["String"]["input"];
  language?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  middleName?: InputMaybe<Scalars["String"]["input"]>;
  tag?: InputMaybe<Scalars["String"]["input"]>;
  telecom?: InputMaybe<Array<InputMaybe<PatientTelecomInput>>>;
};

export type OrderInputPractitionerInput = {
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  npi?: InputMaybe<Scalars["String"]["input"]>;
  telecom?: InputMaybe<Array<InputMaybe<PractitionerTelecomInput>>>;
};

export type OrderQueryListResponse = {
  __typename?: "OrderQueryListResponse";
  pages: Scalars["Float"]["output"];
  resources?: Maybe<Array<Maybe<Order>>>;
};

export type OrderQueryReadResponse = {
  __typename?: "OrderQueryReadResponse";
  id: Scalars["String"]["output"];
  resource: Order;
};

export type OrderSubscribeInput = {
  eventNames?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  queueArn?: InputMaybe<Scalars["String"]["input"]>;
  type: OrderSubscriptionType;
  url?: InputMaybe<Scalars["String"]["input"]>;
};

export enum OrderSubscriptionType {
  Sqs = "sqs",
  Url = "url",
}

export type OrderWriteInput = {
  appointment?: InputMaybe<OrderInputAppointmentInput>;
  callbackUrl?: InputMaybe<Scalars["String"]["input"]>;
  coverage?: InputMaybe<Array<InputMaybe<OrderInputCoverageInput>>>;
  device?: InputMaybe<OrderInputDeviceInput>;
  documentId?: InputMaybe<Scalars["String"]["input"]>;
  generated?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  location?: InputMaybe<OrderInputLocationInput>;
  patient?: InputMaybe<OrderInputPatientInput>;
  practitioner?: InputMaybe<OrderInputPractitionerInput>;
  review?: InputMaybe<Scalars["String"]["input"]>;
  runCoverage?: InputMaybe<Scalars["Boolean"]["input"]>;
  runPriorAuthCheck?: InputMaybe<Scalars["Boolean"]["input"]>;
  runPriorAuthConfirmation?: InputMaybe<Scalars["Boolean"]["input"]>;
  runPriorAuthSubmission?: InputMaybe<Scalars["Boolean"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  tenant?: InputMaybe<Scalars["String"]["input"]>;
};

export type Organization = {
  __typename?: "Organization";
  active?: Maybe<Scalars["Boolean"]["output"]>;
  address?: Maybe<Scalars["String"]["output"]>;
  alias?: Maybe<Scalars["String"]["output"]>;
  contact?: Maybe<OrganizationContact>;
  contract?: Maybe<Array<Maybe<OrganizationContract>>>;
  id: Scalars["String"]["output"];
  identifiers?: Maybe<Array<Maybe<OrganizationIdentifier>>>;
  inNetwork?: Maybe<Scalars["Boolean"]["output"]>;
  isGravityAuthSupported?: Maybe<Scalars["Boolean"]["output"]>;
  metadata?: Maybe<OrganizationMetadata>;
  name: Scalars["String"]["output"];
  partOf?: Maybe<Scalars["String"]["output"]>;
  tag?: Maybe<Scalars["String"]["output"]>;
  telecom?: Maybe<Scalars["String"]["output"]>;
  tenant?: Maybe<Scalars["String"]["output"]>;
  type: Scalars["String"]["output"];
  updatedAt?: Maybe<Scalars["Float"]["output"]>;
};

export type OrganizationCommandResponse = {
  __typename?: "OrganizationCommandResponse";
  resourceID: Scalars["String"]["output"];
};

export type OrganizationCommandResponseOutput =
  | Error
  | OrganizationCommandResponse;

export type OrganizationContact = {
  __typename?: "OrganizationContact";
  name?: Maybe<Scalars["String"]["output"]>;
  telecom?: Maybe<Scalars["String"]["output"]>;
};

export type OrganizationContactInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  telecom?: InputMaybe<Scalars["String"]["input"]>;
};

export type OrganizationContract = {
  __typename?: "OrganizationContract";
  created?: Maybe<Scalars["String"]["output"]>;
  feeSchedule: Scalars["String"]["output"];
  feeScheduleRead?: Maybe<FeeScheduleQueryReadResponse>;
  id?: Maybe<Scalars["String"]["output"]>;
  location: Scalars["String"]["output"];
  locationRead?: Maybe<LocationQueryReadResponse>;
  multiplier: Scalars["Float"]["output"];
  organization?: Maybe<Scalars["String"]["output"]>;
  tenant?: Maybe<Scalars["String"]["output"]>;
  updated?: Maybe<Scalars["String"]["output"]>;
};

export type OrganizationContractInput = {
  created?: InputMaybe<Scalars["String"]["input"]>;
  feeSchedule: Scalars["String"]["input"];
  id?: InputMaybe<Scalars["String"]["input"]>;
  location: Scalars["String"]["input"];
  multiplier: Scalars["Float"]["input"];
  organization?: InputMaybe<Scalars["String"]["input"]>;
  tenant?: InputMaybe<Scalars["String"]["input"]>;
  updated?: InputMaybe<Scalars["String"]["input"]>;
};

export type OrganizationContractPatchInput = {
  created?: InputMaybe<Scalars["String"]["input"]>;
  feeSchedule?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  multiplier?: InputMaybe<Scalars["Float"]["input"]>;
  organization?: InputMaybe<Scalars["String"]["input"]>;
  tenant?: InputMaybe<Scalars["String"]["input"]>;
  updated?: InputMaybe<Scalars["String"]["input"]>;
};

export type OrganizationContractQueryListResponse = {
  __typename?: "OrganizationContractQueryListResponse";
  pages: Scalars["Float"]["output"];
  resources: Array<Maybe<OrganizationContract>>;
};

export type OrganizationContractQueryReadResponse = {
  __typename?: "OrganizationContractQueryReadResponse";
  id: Scalars["String"]["output"];
  resource: OrganizationContract;
};

export type OrganizationContractWriteInput = {
  created?: InputMaybe<Scalars["String"]["input"]>;
  feeSchedule?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  multiplier?: InputMaybe<Scalars["Float"]["input"]>;
  organization?: InputMaybe<Scalars["String"]["input"]>;
  tenant?: InputMaybe<Scalars["String"]["input"]>;
  updated?: InputMaybe<Scalars["String"]["input"]>;
};

export type OrganizationFeeSchedule = {
  __typename?: "OrganizationFeeSchedule";
  amount: Scalars["String"]["output"];
  created?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  location?: Maybe<Scalars["String"]["output"]>;
  locationName?: Maybe<Scalars["String"]["output"]>;
  organization: Scalars["String"]["output"];
  serviceType: Scalars["String"]["output"];
  updated?: Maybe<Scalars["String"]["output"]>;
};

export type OrganizationFeeSchedulePatchInput = {
  amount?: InputMaybe<Scalars["String"]["input"]>;
  created?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  locationName?: InputMaybe<Scalars["String"]["input"]>;
  organization?: InputMaybe<Scalars["String"]["input"]>;
  serviceType?: InputMaybe<Scalars["String"]["input"]>;
  updated?: InputMaybe<Scalars["String"]["input"]>;
};

export type OrganizationFeeScheduleQueryListResponse = {
  __typename?: "OrganizationFeeScheduleQueryListResponse";
  pages: Scalars["Float"]["output"];
  resources: Array<Maybe<OrganizationFeeSchedule>>;
};

export type OrganizationFeeScheduleWriteInput = {
  amount?: InputMaybe<Scalars["String"]["input"]>;
  created?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  locationName?: InputMaybe<Scalars["String"]["input"]>;
  organization?: InputMaybe<Scalars["String"]["input"]>;
  serviceType?: InputMaybe<Scalars["String"]["input"]>;
  updated?: InputMaybe<Scalars["String"]["input"]>;
};

export type OrganizationIdentifier = {
  __typename?: "OrganizationIdentifier";
  assigner?: Maybe<Scalars["String"]["output"]>;
  period?: Maybe<OrganizationIdentifierPeriod>;
  system: Scalars["String"]["output"];
  type?: Maybe<Scalars["String"]["output"]>;
  use?: Maybe<Scalars["String"]["output"]>;
  value: Scalars["String"]["output"];
};

export type OrganizationIdentifierInput = {
  assigner?: InputMaybe<Scalars["String"]["input"]>;
  period?: InputMaybe<OrganizationIdentifierPeriodInput>;
  system: Scalars["String"]["input"];
  type?: InputMaybe<Scalars["String"]["input"]>;
  use?: InputMaybe<Scalars["String"]["input"]>;
  value: Scalars["String"]["input"];
};

export type OrganizationIdentifierPeriod = {
  __typename?: "OrganizationIdentifierPeriod";
  end?: Maybe<Scalars["String"]["output"]>;
  start?: Maybe<Scalars["String"]["output"]>;
};

export type OrganizationIdentifierPeriodInput = {
  end?: InputMaybe<Scalars["String"]["input"]>;
  start?: InputMaybe<Scalars["String"]["input"]>;
};

export type OrganizationImportEdiListResponse = {
  __typename?: "OrganizationImportEdiListResponse";
  count?: Maybe<Scalars["Float"]["output"]>;
  resourceIDs: Array<Maybe<Scalars["String"]["output"]>>;
};

export type OrganizationImportEdiListResponseOutput =
  | Error
  | OrganizationImportEdiListResponse;

export type OrganizationMetadata = {
  __typename?: "OrganizationMetadata";
  selfPay?: Maybe<Scalars["Boolean"]["output"]>;
};

export type OrganizationMetadataInput = {
  selfPay?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type OrganizationPatchInput = {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  address?: InputMaybe<Scalars["String"]["input"]>;
  alias?: InputMaybe<Scalars["String"]["input"]>;
  contact?: InputMaybe<OrganizationContactInput>;
  contract?: InputMaybe<Array<InputMaybe<OrganizationContractInput>>>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  identifiers?: InputMaybe<Array<InputMaybe<OrganizationIdentifierInput>>>;
  inNetwork?: InputMaybe<Scalars["Boolean"]["input"]>;
  isGravityAuthSupported?: InputMaybe<Scalars["Boolean"]["input"]>;
  metadata?: InputMaybe<OrganizationMetadataInput>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  partOf?: InputMaybe<Scalars["String"]["input"]>;
  tag?: InputMaybe<Scalars["String"]["input"]>;
  telecom?: InputMaybe<Scalars["String"]["input"]>;
  tenant?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Float"]["input"]>;
};

export type OrganizationQueryListResponse = {
  __typename?: "OrganizationQueryListResponse";
  pages: Scalars["Float"]["output"];
  resources?: Maybe<Array<Maybe<Organization>>>;
};

export type OrganizationQueryReadResponse = {
  __typename?: "OrganizationQueryReadResponse";
  id: Scalars["String"]["output"];
  resource: Organization;
};

export type OrganizationWriteInput = {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  address?: InputMaybe<Scalars["String"]["input"]>;
  alias?: InputMaybe<Scalars["String"]["input"]>;
  contact?: InputMaybe<OrganizationContactInput>;
  contract?: InputMaybe<Array<InputMaybe<OrganizationContractInput>>>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  identifiers?: InputMaybe<Array<InputMaybe<OrganizationIdentifierInput>>>;
  inNetwork?: InputMaybe<Scalars["Boolean"]["input"]>;
  isGravityAuthSupported?: InputMaybe<Scalars["Boolean"]["input"]>;
  metadata?: InputMaybe<OrganizationMetadataInput>;
  name: Scalars["String"]["input"];
  partOf?: InputMaybe<Scalars["String"]["input"]>;
  tag?: InputMaybe<Scalars["String"]["input"]>;
  telecom?: InputMaybe<Scalars["String"]["input"]>;
  tenant?: InputMaybe<Scalars["String"]["input"]>;
  type: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Patient = {
  __typename?: "Patient";
  address?: Maybe<Scalars["String"]["output"]>;
  birthDate?: Maybe<Scalars["String"]["output"]>;
  coverageList?: Maybe<CoverageQueryListResponse>;
  doNotContact?: Maybe<Scalars["Boolean"]["output"]>;
  firstName?: Maybe<Scalars["String"]["output"]>;
  gender?: Maybe<Scalars["String"]["output"]>;
  generatedAt?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  language?: Maybe<Scalars["String"]["output"]>;
  lastName?: Maybe<Scalars["String"]["output"]>;
  link?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  metadata?: Maybe<PatientMetadata>;
  middleName?: Maybe<Scalars["String"]["output"]>;
  tag?: Maybe<Scalars["String"]["output"]>;
  telecom?: Maybe<Array<Maybe<PatientTelecom>>>;
  tenant?: Maybe<Scalars["String"]["output"]>;
  updated?: Maybe<Scalars["String"]["output"]>;
};

export type PatientCoverageListArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  tag?: InputMaybe<Scalars["String"]["input"]>;
  visit?: InputMaybe<Scalars["String"]["input"]>;
};

export type PatientCommandResponse = {
  __typename?: "PatientCommandResponse";
  resourceID: Scalars["String"]["output"];
};

export type PatientCommandResponseOutput = Error | PatientCommandResponse;

export type PatientMetadata = {
  __typename?: "PatientMetadata";
  id?: Maybe<Scalars["String"]["output"]>;
  syncLock?: Maybe<Scalars["Boolean"]["output"]>;
};

export type PatientMetadataInput = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  syncLock?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PatientPatchInput = {
  address?: InputMaybe<Scalars["String"]["input"]>;
  birthDate?: InputMaybe<Scalars["String"]["input"]>;
  doNotContact?: InputMaybe<Scalars["Boolean"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  gender?: InputMaybe<Scalars["String"]["input"]>;
  generatedAt?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  language?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  link?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  metadata?: InputMaybe<PatientMetadataInput>;
  middleName?: InputMaybe<Scalars["String"]["input"]>;
  tag?: InputMaybe<Scalars["String"]["input"]>;
  telecom?: InputMaybe<Array<InputMaybe<PatientTelecomInput>>>;
  tenant?: InputMaybe<Scalars["String"]["input"]>;
  updated?: InputMaybe<Scalars["String"]["input"]>;
};

export type PatientQueryListResponse = {
  __typename?: "PatientQueryListResponse";
  pages: Scalars["Float"]["output"];
  resources?: Maybe<Array<Maybe<Patient>>>;
};

export type PatientQueryReadResponse = {
  __typename?: "PatientQueryReadResponse";
  id: Scalars["String"]["output"];
  resource: Patient;
};

export type PatientTelecom = {
  __typename?: "PatientTelecom";
  rank?: Maybe<Scalars["Float"]["output"]>;
  system?: Maybe<Scalars["String"]["output"]>;
  use?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["String"]["output"]>;
};

export type PatientTelecomInput = {
  rank?: InputMaybe<Scalars["Float"]["input"]>;
  system?: InputMaybe<Scalars["String"]["input"]>;
  use?: InputMaybe<Scalars["String"]["input"]>;
  value?: InputMaybe<Scalars["String"]["input"]>;
};

export type PatientWriteInput = {
  address?: InputMaybe<Scalars["String"]["input"]>;
  birthDate?: InputMaybe<Scalars["String"]["input"]>;
  doNotContact?: InputMaybe<Scalars["Boolean"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  gender?: InputMaybe<Scalars["String"]["input"]>;
  generatedAt?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  language?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  link?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  metadata?: InputMaybe<PatientMetadataInput>;
  middleName?: InputMaybe<Scalars["String"]["input"]>;
  tag?: InputMaybe<Scalars["String"]["input"]>;
  telecom?: InputMaybe<Array<InputMaybe<PatientTelecomInput>>>;
  tenant?: InputMaybe<Scalars["String"]["input"]>;
  updated?: InputMaybe<Scalars["String"]["input"]>;
};

export enum Permission {
  Analyze = "analyze",
  Command = "command",
  Delete = "delete",
  Manage = "manage",
  Operate = "operate",
  Read = "read",
  Write = "write",
}

export type Practitioner = {
  __typename?: "Practitioner";
  address?: Maybe<Scalars["String"]["output"]>;
  doNotContact?: Maybe<Scalars["Boolean"]["output"]>;
  firstName: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  isPriorAuthSubmissionEnabled?: Maybe<Scalars["Boolean"]["output"]>;
  lastName: Scalars["String"]["output"];
  metadata?: Maybe<PractitionerMetadata>;
  npi?: Maybe<Scalars["String"]["output"]>;
  speciality?: Maybe<Scalars["String"]["output"]>;
  tag?: Maybe<Scalars["String"]["output"]>;
  telecom?: Maybe<Array<Maybe<PractitionerTelecom>>>;
  updatedAt?: Maybe<Scalars["Float"]["output"]>;
};

export type PractitionerCommandResponse = {
  __typename?: "PractitionerCommandResponse";
  resourceID: Scalars["String"]["output"];
};

export type PractitionerCommandResponseOutput =
  | Error
  | PractitionerCommandResponse;

export type PractitionerMetadata = {
  __typename?: "PractitionerMetadata";
  id?: Maybe<Scalars["String"]["output"]>;
  nudgeable?: Maybe<Scalars["Boolean"]["output"]>;
};

export type PractitionerMetadataInput = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  nudgeable?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PractitionerPatchInput = {
  address?: InputMaybe<Scalars["String"]["input"]>;
  doNotContact?: InputMaybe<Scalars["Boolean"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  isPriorAuthSubmissionEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  metadata?: InputMaybe<PractitionerMetadataInput>;
  npi?: InputMaybe<Scalars["String"]["input"]>;
  speciality?: InputMaybe<Scalars["String"]["input"]>;
  tag?: InputMaybe<Scalars["String"]["input"]>;
  telecom?: InputMaybe<Array<InputMaybe<PractitionerTelecomInput>>>;
  updatedAt?: InputMaybe<Scalars["Float"]["input"]>;
};

export type PractitionerQueryListResponse = {
  __typename?: "PractitionerQueryListResponse";
  pages: Scalars["Float"]["output"];
  resources?: Maybe<Array<Maybe<Practitioner>>>;
};

export type PractitionerQueryReadResponse = {
  __typename?: "PractitionerQueryReadResponse";
  id: Scalars["String"]["output"];
  resource: Practitioner;
};

export type PractitionerTelecom = {
  __typename?: "PractitionerTelecom";
  rank?: Maybe<Scalars["Float"]["output"]>;
  system?: Maybe<Scalars["String"]["output"]>;
  use?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["String"]["output"]>;
};

export type PractitionerTelecomInput = {
  rank?: InputMaybe<Scalars["Float"]["input"]>;
  system?: InputMaybe<Scalars["String"]["input"]>;
  use?: InputMaybe<Scalars["String"]["input"]>;
  value?: InputMaybe<Scalars["String"]["input"]>;
};

export type PractitionerWriteInput = {
  address?: InputMaybe<Scalars["String"]["input"]>;
  doNotContact?: InputMaybe<Scalars["Boolean"]["input"]>;
  firstName: Scalars["String"]["input"];
  id?: InputMaybe<Scalars["String"]["input"]>;
  isPriorAuthSubmissionEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  lastName: Scalars["String"]["input"];
  metadata?: InputMaybe<PractitionerMetadataInput>;
  npi?: InputMaybe<Scalars["String"]["input"]>;
  speciality?: InputMaybe<Scalars["String"]["input"]>;
  tag?: InputMaybe<Scalars["String"]["input"]>;
  telecom?: InputMaybe<Array<InputMaybe<PractitionerTelecomInput>>>;
  updatedAt?: InputMaybe<Scalars["Float"]["input"]>;
};

export type PriorAuth = {
  __typename?: "PriorAuth";
  appointmentId?: Maybe<Scalars["String"]["output"]>;
  appointmentRead?: Maybe<AppointmentQueryReadResponse>;
  appointmentStart?: Maybe<Scalars["String"]["output"]>;
  appointmentStatus?: Maybe<PriorAuthAppointmentStatus>;
  authStatus?: Maybe<PriorAuthAuthStatus>;
  coverage?: Maybe<Array<Maybe<PriorAuthCoverage>>>;
  device?: Maybe<Scalars["String"]["output"]>;
  documentList?: Maybe<DocumentQueryListResponse>;
  forceInitiate?: Maybe<Scalars["Boolean"]["output"]>;
  generated?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  isDocumentAttached?: Maybe<Scalars["Boolean"]["output"]>;
  isPriorAuthSubmissionEnabled?: Maybe<Scalars["Boolean"]["output"]>;
  location?: Maybe<Scalars["String"]["output"]>;
  metadata?: Maybe<PriorAuthMetadata>;
  mockScenarioId?: Maybe<Scalars["String"]["output"]>;
  patientId?: Maybe<Scalars["String"]["output"]>;
  patientRead?: Maybe<PatientQueryReadResponse>;
  practitioner?: Maybe<PriorAuthPractitioner>;
  practitionerRead?: Maybe<PractitionerQueryReadResponse>;
  serviceCategory?: Maybe<PriorAuthServiceCategory>;
  serviceType?: Maybe<PriorAuthServiceType>;
  tag?: Maybe<Scalars["String"]["output"]>;
  tenant?: Maybe<Scalars["String"]["output"]>;
  updated?: Maybe<Scalars["String"]["output"]>;
  useCanary?: Maybe<Scalars["Boolean"]["output"]>;
  visit?: Maybe<Scalars["String"]["output"]>;
};

export type PriorAuthApasBotStateInitiateInput = {
  status: Scalars["String"]["input"];
};

export type PriorAuthApasTrigger = {
  __typename?: "PriorAuthApasTrigger";
  botName?: Maybe<Scalars["String"]["output"]>;
  coverageId?: Maybe<Scalars["String"]["output"]>;
  created?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  parentId?: Maybe<Scalars["String"]["output"]>;
  tenant?: Maybe<Scalars["String"]["output"]>;
  updated?: Maybe<Scalars["String"]["output"]>;
  userId?: Maybe<Scalars["String"]["output"]>;
};

export type PriorAuthApasTriggerInitiateInput = {
  botName: Scalars["String"]["input"];
};

export enum PriorAuthAppointmentStatus {
  Arrived = "arrived",
  Booked = "booked",
  BookingPending = "bookingPending",
  Canceled = "canceled",
  CheckedIn = "checked_in",
  Completed = "completed",
  Pending = "pending",
}

export enum PriorAuthAuthStatus {
  ActionRequired = "action_required",
  Complete = "complete",
  Failed = "failed",
  Pending = "pending",
  Running = "running",
}

export enum PriorAuthAuthstatusInitiateBotName {
  Aim = "AIM",
  Availity = "Availity",
  Carecore = "Carecore",
  Medsolutions = "Medsolutions",
  Nia = "NIA",
}

export type PriorAuthAuthstatusInitiateInput = {
  botName?: InputMaybe<Array<InputMaybe<PriorAuthAuthstatusInitiateBotName>>>;
};

export type PriorAuthCommandResponse = {
  __typename?: "PriorAuthCommandResponse";
  resourceID: Scalars["String"]["output"];
};

export type PriorAuthCommandResponseOutput = Error | PriorAuthCommandResponse;

export type PriorAuthCoverage = {
  __typename?: "PriorAuthCoverage";
  actionRequired?: Maybe<Scalars["Boolean"]["output"]>;
  actionRequiredType?: Maybe<PriorAuthCoverageActionRequiredType>;
  authError?: Maybe<PriorAuthCoverageAuthError>;
  authErrorCause?: Maybe<Scalars["String"]["output"]>;
  authNumber?: Maybe<Scalars["String"]["output"]>;
  authRequirement?: Maybe<PriorAuthCoverageActionRequirement>;
  authResult?: Maybe<PriorAuthCoverageAuthResult>;
  authRuleDescription?: Maybe<Scalars["String"]["output"]>;
  botName?: Maybe<Scalars["String"]["output"]>;
  caseReferenceNumber?: Maybe<Scalars["String"]["output"]>;
  clinicalsAvailable?: Maybe<Scalars["Boolean"]["output"]>;
  completed?: Maybe<Scalars["String"]["output"]>;
  coverageId: Scalars["String"]["output"];
  coverageRead?: Maybe<CoverageQueryReadResponse>;
  coverageStatus?: Maybe<PriorAuthCoverageStatus>;
  coverageVisitRead?: Maybe<CoverageVisitQueryReadResponse>;
  coverageWorkflowStatus?: Maybe<PriorAuthCoverageWorkflowStatus>;
  created?: Maybe<Scalars["String"]["output"]>;
  endDate?: Maybe<Scalars["String"]["output"]>;
  execution?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  initiated?: Maybe<Scalars["String"]["output"]>;
  lastStatusCheckedAt?: Maybe<Scalars["String"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  order?: Maybe<Scalars["String"]["output"]>;
  organizationId?: Maybe<Scalars["String"]["output"]>;
  priorAuthCoverageLinkId?: Maybe<Scalars["String"]["output"]>;
  retrievedByGravity?: Maybe<Scalars["Boolean"]["output"]>;
  startDate?: Maybe<Scalars["String"]["output"]>;
  submitted?: Maybe<Scalars["String"]["output"]>;
  submittedBy?: Maybe<Scalars["String"]["output"]>;
  submittedByGravity?: Maybe<Scalars["Boolean"]["output"]>;
  tenant?: Maybe<Scalars["String"]["output"]>;
  updated?: Maybe<Scalars["String"]["output"]>;
  visit?: Maybe<Scalars["String"]["output"]>;
};

export enum PriorAuthCoverageActionRequiredType {
  ClinicalsRequired = "ClinicalsRequired",
  ConfirmAuthRequirement = "ConfirmAuthRequirement",
  IncorrectOrMissingInfo = "IncorrectOrMissingInfo",
}

export enum PriorAuthCoverageActionRequirement {
  ConfirmAuthRequirement = "ConfirmAuthRequirement",
  Fetching = "Fetching",
  NotRequired = "NotRequired",
  Required = "Required",
  Unknown = "Unknown",
}

export enum PriorAuthCoverageAuthError {
  ClinicalsRequired = "ClinicalsRequired",
  ConfirmAuthRequirement = "ConfirmAuthRequirement",
  FaxError = "FaxError",
  LoginError = "LoginError",
  MissingInformationError = "MissingInformationError",
  NetworkError = "NetworkError",
  UnknownError = "UnknownError",
  WorkflowTerminated = "WorkflowTerminated",
}

export enum PriorAuthCoverageAuthResult {
  CaseAuthorized = "CaseAuthorized",
  CaseAuthorizedDifferentFacility = "CaseAuthorizedDifferentFacility",
  CaseDenied = "CaseDenied",
  CaseNotStarted = "CaseNotStarted",
  CaseNotSupported = "CaseNotSupported",
  CaseP2P = "CaseP2P",
  CasePending = "CasePending",
  CoverageNoAuthRequired = "CoverageNoAuthRequired",
  PatientNotFound = "PatientNotFound",
}

export type PriorAuthCoverageInput = {
  actionRequired?: InputMaybe<Scalars["Boolean"]["input"]>;
  actionRequiredType?: InputMaybe<PriorAuthCoverageActionRequiredType>;
  authError?: InputMaybe<PriorAuthCoverageAuthError>;
  authErrorCause?: InputMaybe<Scalars["String"]["input"]>;
  authNumber?: InputMaybe<Scalars["String"]["input"]>;
  authRequirement?: InputMaybe<PriorAuthCoverageActionRequirement>;
  authResult?: InputMaybe<PriorAuthCoverageAuthResult>;
  authRuleDescription?: InputMaybe<Scalars["String"]["input"]>;
  botName?: InputMaybe<Scalars["String"]["input"]>;
  caseReferenceNumber?: InputMaybe<Scalars["String"]["input"]>;
  clinicalsAvailable?: InputMaybe<Scalars["Boolean"]["input"]>;
  completed?: InputMaybe<Scalars["String"]["input"]>;
  coverageId: Scalars["String"]["input"];
  coverageStatus?: InputMaybe<PriorAuthCoverageStatus>;
  coverageWorkflowStatus?: InputMaybe<PriorAuthCoverageWorkflowStatus>;
  created?: InputMaybe<Scalars["String"]["input"]>;
  endDate?: InputMaybe<Scalars["String"]["input"]>;
  execution?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["String"]["input"];
  initiated?: InputMaybe<Scalars["String"]["input"]>;
  lastStatusCheckedAt?: InputMaybe<Scalars["String"]["input"]>;
  message?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Scalars["String"]["input"]>;
  organizationId?: InputMaybe<Scalars["String"]["input"]>;
  priorAuthCoverageLinkId?: InputMaybe<Scalars["String"]["input"]>;
  retrievedByGravity?: InputMaybe<Scalars["Boolean"]["input"]>;
  startDate?: InputMaybe<Scalars["String"]["input"]>;
  submitted?: InputMaybe<Scalars["String"]["input"]>;
  submittedBy?: InputMaybe<Scalars["String"]["input"]>;
  submittedByGravity?: InputMaybe<Scalars["Boolean"]["input"]>;
  tenant?: InputMaybe<Scalars["String"]["input"]>;
  updated?: InputMaybe<Scalars["String"]["input"]>;
  visit?: InputMaybe<Scalars["String"]["input"]>;
};

export type PriorAuthCoveragePatchInput = {
  authError?: InputMaybe<PriorAuthCoverageAuthError>;
  authErrorCause?: InputMaybe<Scalars["String"]["input"]>;
  authNumber?: InputMaybe<Scalars["String"]["input"]>;
  authRequirement?: InputMaybe<PriorAuthCoverageActionRequirement>;
  authResult?: InputMaybe<PriorAuthCoverageAuthResult>;
  authRuleDescription?: InputMaybe<Scalars["String"]["input"]>;
  botName?: InputMaybe<Scalars["String"]["input"]>;
  caseReferenceNumber?: InputMaybe<Scalars["String"]["input"]>;
  clinicalsAvailable?: InputMaybe<Scalars["Boolean"]["input"]>;
  coverageStatus?: InputMaybe<PriorAuthCoverageStatus>;
  created?: InputMaybe<Scalars["String"]["input"]>;
  endDate?: InputMaybe<Scalars["String"]["input"]>;
  initiated?: InputMaybe<Scalars["String"]["input"]>;
  lastStatusCheckedAt?: InputMaybe<Scalars["String"]["input"]>;
  message?: InputMaybe<Scalars["String"]["input"]>;
  retrievedByGravity?: InputMaybe<Scalars["Boolean"]["input"]>;
  startDate?: InputMaybe<Scalars["String"]["input"]>;
  submitted?: InputMaybe<Scalars["String"]["input"]>;
  submittedBy?: InputMaybe<Scalars["String"]["input"]>;
  submittedByGravity?: InputMaybe<Scalars["Boolean"]["input"]>;
  updated?: InputMaybe<Scalars["String"]["input"]>;
};

export type PriorAuthCoverageQueryReadResponse = {
  __typename?: "PriorAuthCoverageQueryReadResponse";
  resource: PriorAuthCoverage;
};

export enum PriorAuthCoverageStatus {
  ActiveCoverage = "ActiveCoverage",
  Error = "Error",
  InTransition = "InTransition",
  NoCoverage = "NoCoverage",
  PayorChanged = "PayorChanged",
  PayorNotActivated = "PayorNotActivated",
  Pending = "Pending",
}

export enum PriorAuthCoverageWorkflowStatus {
  AutoProcessing = "AutoProcessing",
  AutomationPaused = "AutomationPaused",
  AwaitingStart = "AwaitingStart",
  Completed = "Completed",
  HumanReview = "HumanReview",
  Terminated = "Terminated",
}

export type PriorAuthHistory = {
  __typename?: "PriorAuthHistory";
  coverage?: Maybe<Scalars["String"]["output"]>;
  event: PriorAuthHistoryEvent;
  id: Scalars["String"]["output"];
  parent: Scalars["String"]["output"];
  time: Scalars["String"]["output"];
};

export enum PriorAuthHistoryEvent {
  CaseAuthorized = "CaseAuthorized",
  CaseAuthorizedDifferentFacility = "CaseAuthorizedDifferentFacility",
  CaseDenied = "CaseDenied",
  CaseNotStarted = "CaseNotStarted",
  CaseNotSupported = "CaseNotSupported",
  CaseP2P = "CaseP2P",
  CasePending = "CasePending",
  ClinicalsRequired = "ClinicalsRequired",
  ConfirmAuthRequirement = "ConfirmAuthRequirement",
  CoverageActive = "CoverageActive",
  CoverageAuthRequired = "CoverageAuthRequired",
  CoverageAuthRequirementUnknown = "CoverageAuthRequirementUnknown",
  CoverageError = "CoverageError",
  CoverageInitiated = "CoverageInitiated",
  CoverageNoAuthRequired = "CoverageNoAuthRequired",
  CoverageNotActive = "CoverageNotActive",
  CoverageNotSupported = "CoverageNotSupported",
  FaxError = "FaxError",
  InputUpdated = "InputUpdated",
  LoginError = "LoginError",
  MissingInformationError = "MissingInformationError",
  NetworkError = "NetworkError",
  PatientNotFound = "PatientNotFound",
  PriorAuthHistoryDaysOut = "PriorAuthHistoryDaysOut",
  PriorAuthInitiated = "PriorAuthInitiated",
  PriorAuthQueued = "PriorAuthQueued",
  SyncAcknowledged = "SyncAcknowledged",
  SyncFailed = "SyncFailed",
  UnknownError = "UnknownError",
  WorkflowTerminated = "WorkflowTerminated",
}

export type PriorAuthHistoryQueryListResponse = {
  __typename?: "PriorAuthHistoryQueryListResponse";
  resources: Array<Maybe<PriorAuthHistory>>;
};

export type PriorAuthHistoryQueryMetricResponse = {
  __typename?: "PriorAuthHistoryQueryMetricResponse";
  resource?: Maybe<Scalars["JSON"]["output"]>;
  resources?: Maybe<Array<Maybe<PriorAuthMetrics>>>;
};

export type PriorAuthInitiateInput = {
  forceInitiate?: InputMaybe<Scalars["Boolean"]["input"]>;
  isPriorAuthSubmissionEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  useCanary?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PriorAuthMetadata = {
  __typename?: "PriorAuthMetadata";
  gravityAuthEnabled?: Maybe<Scalars["Boolean"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  toReview?: Maybe<Scalars["Boolean"]["output"]>;
};

export type PriorAuthMetadataInput = {
  gravityAuthEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  toReview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PriorAuthMetrics = {
  __typename?: "PriorAuthMetrics";
  appointmentId?: Maybe<Scalars["String"]["output"]>;
  authError?: Maybe<Scalars["JSON"]["output"]>;
  authRequirement?: Maybe<Scalars["String"]["output"]>;
  authResult?: Maybe<Scalars["JSON"]["output"]>;
  authStatus?: Maybe<Scalars["String"]["output"]>;
  botName?: Maybe<Scalars["JSON"]["output"]>;
  caseNotSupported?: Maybe<Scalars["JSON"]["output"]>;
  caseReferenceNumber?: Maybe<Scalars["String"]["output"]>;
  clinicalsAvailable?: Maybe<Scalars["Boolean"]["output"]>;
  completed?: Maybe<Scalars["String"]["output"]>;
  coverageId?: Maybe<Scalars["String"]["output"]>;
  coverageStatus?: Maybe<PriorAuthMetricsCoverageStatus>;
  date?: Maybe<Scalars["String"]["output"]>;
  device?: Maybe<Scalars["String"]["output"]>;
  deviceRead?: Maybe<DeviceQueryReadResponse>;
  initiated?: Maybe<Scalars["String"]["output"]>;
  location?: Maybe<Scalars["String"]["output"]>;
  locationRead?: Maybe<LocationQueryReadResponse>;
  loginSuccessOccurrences?: Maybe<Scalars["String"]["output"]>;
  occurrences?: Maybe<Scalars["String"]["output"]>;
  organizationId?: Maybe<Scalars["String"]["output"]>;
  organizationRead?: Maybe<OrganizationQueryReadResponse>;
  patientId?: Maybe<Scalars["String"]["output"]>;
  priorAuthCoverageLinkId?: Maybe<Scalars["JSON"]["output"]>;
  retrievedByGravity?: Maybe<Scalars["Boolean"]["output"]>;
  submittedBy?: Maybe<Scalars["String"]["output"]>;
  submittedByGravity?: Maybe<Scalars["Boolean"]["output"]>;
  tenant?: Maybe<Scalars["String"]["output"]>;
  userList?: Maybe<UserQueryListResponse>;
  visit?: Maybe<Scalars["String"]["output"]>;
};

export enum PriorAuthMetricsCoverageStatus {
  ActiveCoverage = "ActiveCoverage",
  Error = "Error",
  InTransition = "InTransition",
  NoCoverage = "NoCoverage",
  PayorChanged = "PayorChanged",
  PayorNotActivated = "PayorNotActivated",
  Pending = "Pending",
}

export type PriorAuthPatchInput = {
  appointmentId?: InputMaybe<Scalars["String"]["input"]>;
  appointmentStart?: InputMaybe<Scalars["String"]["input"]>;
  appointmentStatus?: InputMaybe<PriorAuthAppointmentStatus>;
  authStatus?: InputMaybe<PriorAuthAuthStatus>;
  coverage?: InputMaybe<Array<InputMaybe<PriorAuthCoverageInput>>>;
  device?: InputMaybe<Scalars["String"]["input"]>;
  forceInitiate?: InputMaybe<Scalars["Boolean"]["input"]>;
  generated?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  isDocumentAttached?: InputMaybe<Scalars["Boolean"]["input"]>;
  isPriorAuthSubmissionEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  metadata?: InputMaybe<PriorAuthMetadataInput>;
  mockScenarioId?: InputMaybe<Scalars["String"]["input"]>;
  patientId?: InputMaybe<Scalars["String"]["input"]>;
  practitioner?: InputMaybe<PriorAuthPractitionerInput>;
  serviceCategory?: InputMaybe<PriorAuthServiceCategoryInput>;
  serviceType?: InputMaybe<PriorAuthServiceTypeInput>;
  tag?: InputMaybe<Scalars["String"]["input"]>;
  tenant?: InputMaybe<Scalars["String"]["input"]>;
  updated?: InputMaybe<Scalars["String"]["input"]>;
  useCanary?: InputMaybe<Scalars["Boolean"]["input"]>;
  visit?: InputMaybe<Scalars["String"]["input"]>;
};

export type PriorAuthPractitioner = {
  __typename?: "PriorAuthPractitioner";
  id?: Maybe<Scalars["String"]["output"]>;
};

export type PriorAuthPractitionerInput = {
  id?: InputMaybe<Scalars["String"]["input"]>;
};

export type PriorAuthQueryListResponse = {
  __typename?: "PriorAuthQueryListResponse";
  pages: Scalars["Float"]["output"];
  resources: Array<Maybe<PriorAuth>>;
};

export type PriorAuthQueryReadResponse = {
  __typename?: "PriorAuthQueryReadResponse";
  id: Scalars["String"]["output"];
  resource: PriorAuth;
};

export type PriorAuthServiceCategory = {
  __typename?: "PriorAuthServiceCategory";
  coding?: Maybe<Scalars["String"]["output"]>;
  text?: Maybe<Scalars["String"]["output"]>;
};

export type PriorAuthServiceCategoryInput = {
  coding?: InputMaybe<Scalars["String"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
};

export type PriorAuthServiceType = {
  __typename?: "PriorAuthServiceType";
  coding: Scalars["String"]["output"];
  text?: Maybe<Scalars["String"]["output"]>;
};

export type PriorAuthServiceTypeInput = {
  coding: Scalars["String"]["input"];
  text?: InputMaybe<Scalars["String"]["input"]>;
};

export enum PriorAuthStatusListItem {
  CaseAuthorized = "CaseAuthorized",
  CaseAuthorizedDifferentFacility = "CaseAuthorizedDifferentFacility",
  CaseDenied = "CaseDenied",
  CaseNotStarted = "CaseNotStarted",
  CaseNotSupported = "CaseNotSupported",
  CaseP2P = "CaseP2P",
  CasePending = "CasePending",
  ClinicalsRequired = "ClinicalsRequired",
  ConfirmAuthRequirement = "ConfirmAuthRequirement",
  CoverageNoAuthRequired = "CoverageNoAuthRequired",
  FaxError = "FaxError",
  LoginError = "LoginError",
  MissingInformationError = "MissingInformationError",
  NetworkError = "NetworkError",
  PatientNotFound = "PatientNotFound",
  UnknownError = "UnknownError",
  WorkflowTerminated = "WorkflowTerminated",
}

export type PriorAuthWriteInput = {
  appointmentId?: InputMaybe<Scalars["String"]["input"]>;
  appointmentStart?: InputMaybe<Scalars["String"]["input"]>;
  appointmentStatus?: InputMaybe<PriorAuthAppointmentStatus>;
  authStatus?: InputMaybe<PriorAuthAuthStatus>;
  coverage?: InputMaybe<Array<InputMaybe<PriorAuthCoverageInput>>>;
  device?: InputMaybe<Scalars["String"]["input"]>;
  forceInitiate?: InputMaybe<Scalars["Boolean"]["input"]>;
  generated?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  isDocumentAttached?: InputMaybe<Scalars["Boolean"]["input"]>;
  isPriorAuthSubmissionEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  metadata?: InputMaybe<PriorAuthMetadataInput>;
  mockScenarioId?: InputMaybe<Scalars["String"]["input"]>;
  patientId?: InputMaybe<Scalars["String"]["input"]>;
  practitioner?: InputMaybe<PriorAuthPractitionerInput>;
  serviceCategory?: InputMaybe<PriorAuthServiceCategoryInput>;
  serviceType?: InputMaybe<PriorAuthServiceTypeInput>;
  tag?: InputMaybe<Scalars["String"]["input"]>;
  tenant?: InputMaybe<Scalars["String"]["input"]>;
  updated?: InputMaybe<Scalars["String"]["input"]>;
  useCanary?: InputMaybe<Scalars["Boolean"]["input"]>;
  visit?: InputMaybe<Scalars["String"]["input"]>;
};

export type Query = {
  __typename?: "Query";
  /**
   * Fetch results for DB
   *
   * Equivalent to GET /{tenant}/analytics/textDBQuery
   */
  analyticsTextDBQuery?: Maybe<TextDbQueryListResponse>;
  /**
   * Get a list of entities.
   *
   * Equivalent to GET /{tenant}/appointment/
   */
  appointmentList?: Maybe<AppointmentQueryListResponse>;
  /**
   * Get appointment metrics based on a given type
   *
   * Equivalent to GET /{tenant}/appointment/metrics/{type}
   */
  appointmentMetricsRead?: Maybe<AppointmentHistoryQueryMetricResponse>;
  /**
   * Get a list of nudge Eligible visits.
   *
   * Equivalent to GET /{tenant}/appointment/nudgeEligible
   */
  appointmentNudgeEligibleList?: Maybe<AppointmentQueryListResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/appointment/{id}
   */
  appointmentRead?: Maybe<AppointmentQueryReadResponse>;
  /**
   * Get a list of reschedule requests.
   *
   * Equivalent to GET /{tenant}/appointment/reschedule
   */
  appointmentRescheduleList?: Maybe<AppointmentRescheduleQueryListResponse>;
  /**
   * Get a list of entities.
   *
   * Equivalent to GET /codeSystem/
   */
  codeSystemList?: Maybe<CodeSystemQueryListResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /codeSystem/{id}
   */
  codeSystemRead?: Maybe<CodeSystemQueryReadResponse>;
  /**
   * Get a list of entities.
   *
   * Equivalent to GET /codeSystem/{id}/coding
   */
  codingList?: Maybe<CodingQueryListResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /codeSystem/{id}/coding/{coding_id}
   */
  codingRead?: Maybe<CodingQueryReadResponse>;
  /**
   * Get a list of entities.
   *
   * Equivalent to GET /{tenant}/coverage/
   */
  coverageList?: Maybe<CoverageQueryListResponse>;
  /**
   * Get List of Coverage availity transactions.
   *
   * Equivalent to GET /{tenant}/coverage/{coverageid}/transactions
   */
  coverageListTransactions?: Maybe<CoverageQueryListTransactionResponse>;
  /**
   * Get List of Coverage Workflow History.
   *
   * Equivalent to GET /{tenant}/coverage/workflow/{workflowId}/history
   */
  coverageListWorkflowHistory?: Maybe<CoverageQueryListWorkflowHistoryResponse>;
  /**
   * Get Metrics for a given metric type.
   *
   * Equivalent to GET /{tenant}/coverage/metrics/{type}
   */
  coverageMetricRead?: Maybe<CoverageMetricsListResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/coverage/{id}
   */
  coverageRead?: Maybe<CoverageQueryReadResponse>;
  /**
   * Get Benefits by ID.
   *
   * Equivalent to GET /{tenant}/coverage/{id}/benefits
   */
  coverageReadBenefits?: Maybe<CoverageBenefitsResponse>;
  /**
   * Get an Edi by ID.
   *
   * Equivalent to GET /{tenant}/coverage/{id}/edi
   */
  coverageReadEdi?: Maybe<CoverageEdiResponse>;
  /**
   * Get Coverage availity transaction.
   *
   * Equivalent to GET /{tenant}/coverage/{coverageid}/transactions/{id}
   */
  coverageReadTransactions?: Maybe<CoverageQueryReadTransactionResponse>;
  /**
   * Get an entity by ID and visit ID.
   *
   * Equivalent to GET /{tenant}/coverage/{id}/visit/{visit}
   */
  coverageVisitRead?: Maybe<CoverageVisitQueryReadResponse>;
  /**
   * Get a list of entities.
   *
   * Equivalent to GET /{tenant}/coverage/workflow
   */
  coverageWorkflowList?: Maybe<CoverageQueryListWorkflowResponse>;
  /**
   * Get an entitie by id.
   *
   * Equivalent to GET /{tenant}/coverage/workflow/{id}
   */
  coverageWorkflowRead?: Maybe<CoverageQueryReadWorkflowResponse>;
  /**
   * Get a list of entities.
   *
   * Equivalent to GET /{tenant}/device/
   */
  deviceList?: Maybe<DeviceQueryListResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/device/{id}
   */
  deviceRead?: Maybe<DeviceQueryReadResponse>;
  /**
   * Get a list of device service duration.
   *
   * Equivalent to GET /{tenant}/device/{id}/serviceDuration
   */
  deviceServiceDurationList?: Maybe<DeviceServiceDurationQueryListResponse>;
  /**
   * Get an device service duration by serviceTypeCode.
   *
   * Equivalent to GET /{tenant}/device/{id}/serviceDuration/{serviceTypeCode}
   */
  deviceServiceDurationRead?: Maybe<DeviceServiceDurationQueryReadResponse>;
  /**
   * Get a list of entities.
   *
   * Equivalent to GET /{tenant}/document/
   */
  documentList?: Maybe<DocumentQueryListResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/document/{id}
   */
  documentRead?: Maybe<DocumentQueryReadResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/document/{id}/base64
   */
  documentReadBase64?: Maybe<DocumentQueryReadImage>;
  /**
   * Get document's text.
   *
   * Equivalent to GET /{tenant}/document/{id}/text
   */
  documentReadText?: Maybe<DocumentQueryReadTextResponse>;
  /**
   * Get a download URL for the desktop application.
   *
   * Equivalent to GET /{tenant}/download/desktop
   */
  downloadDesktop?: Maybe<DownloadDesktop>;
  /**
   * Get an entities history by ID.
   *
   * Equivalent to GET /{tenant}/estimate/{visit}/history
   */
  estimateHistoryRead?: Maybe<EstimateHistoryQueryListResponse>;
  /**
   * Get a list of entities.
   *
   * Equivalent to GET /{tenant}/estimate/
   */
  estimateList?: Maybe<EstimateQueryListResponse>;
  /**
   * Get analytics metrics for estimate.
   *
   * Equivalent to GET /{tenant}/estimate/metrics/{type}
   */
  estimateMetricsRead?: Maybe<EstimateMetricListResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/estimate/{id}
   */
  estimateRead?: Maybe<EstimateQueryReadResponse>;
  /**
   * Get a list of fax outreaches.
   *
   * Equivalent to GET /{tenant}/faxOutreach/
   */
  faxOutreachList?: Maybe<FaxOutreachQueryListResponse>;
  /**
   * Get analytics metrics for faxOutreach.
   *
   * Equivalent to GET /{tenant}/faxOutreach/metrics/{type}
   */
  faxOutreachMetricsRead?: Maybe<FaxOutreachMetricListResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/faxOutreach/{id}
   */
  faxOutreachRead?: Maybe<FaxOutreachQueryReadResponse>;
  /**
   * Get a list of fax outreaches.
   *
   * Equivalent to GET /{tenant}/faxOutreach/rule
   */
  faxOutreachRuleList?: Maybe<FaxOutreachRuleQueryListResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/feeSchedule/{id}/fees
   */
  feeScheduleFeesList?: Maybe<FeeScheduleFeesQueryListResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/feeSchedule/{id}/fees/{feeId}
   */
  feeScheduleFeesRead?: Maybe<FeeScheduleFeesQueryReadResponse>;
  /**
   * Get a list of entities.
   *
   * Equivalent to GET /{tenant}/feeSchedule/
   */
  feeScheduleList?: Maybe<FeeScheduleQueryListResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/feeSchedule/{id}
   */
  feeScheduleRead?: Maybe<FeeScheduleQueryReadResponse>;
  /**
   * Get a list of entities.
   *
   * Equivalent to GET /{tenant}/flow/
   */
  flowList?: Maybe<FlowQueryListResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/flow/{id}
   */
  flowRead?: Maybe<FlowQueryReadResponse>;
  /**
   * Get a list of entities.
   *
   * Equivalent to GET /{tenant}/location/
   */
  locationList?: Maybe<LocationQueryListResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/location/{id}
   */
  locationRead?: Maybe<LocationQueryReadResponse>;
  /**
   * Get a list of entities.
   *
   * Equivalent to GET /{tenant}/lookup/authRequirement
   */
  lookupList?: Maybe<LookupQueryListAuthRequirementResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/lookup/authRequirement/{id}
   */
  lookupRead?: Maybe<LookupQueryReadAuthRequrimentResponse>;
  /**
   * Validate authRequirement and sent the auth type
   *
   * Equivalent to GET /{tenant}/lookup/authRequirement/validate
   */
  lookupValidate?: Maybe<LookupqueryAuthRequirementValidationResponse>;
  /**
   * Get a list of entities.
   *
   * Equivalent to GET /{tenant}/order/
   */
  orderList?: Maybe<OrderQueryListResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/order/{id}
   */
  orderRead?: Maybe<OrderQueryReadResponse>;
  /**
   * Get a list of entities.
   *
   * Equivalent to GET /{tenant}/organization/{id}/contract
   */
  organizationContractList?: Maybe<OrganizationContractQueryListResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/organization/{id}/contract/{contractId}
   */
  organizationContractRead?: Maybe<OrganizationContractQueryReadResponse>;
  /**
   * Get a list of entities.
   *
   * Equivalent to GET /{tenant}/organization/{id}/feeSchedule
   */
  organizationFeeScheduleList?: Maybe<OrganizationFeeScheduleQueryListResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/organization/{id}/feeSchedule/{feeSchedule}
   */
  organizationFeeScheduleRead?: Maybe<OrganizationFeeScheduleQueryListResponse>;
  /**
   * Get a list of entities.
   *
   * Equivalent to GET /{tenant}/organization/
   */
  organizationList?: Maybe<OrganizationQueryListResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/organization/{id}
   */
  organizationRead?: Maybe<OrganizationQueryReadResponse>;
  /**
   * Get a list of entities.
   *
   * Equivalent to GET /{tenant}/patient/
   */
  patientList?: Maybe<PatientQueryListResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/patient/{id}
   */
  patientRead?: Maybe<PatientQueryReadResponse>;
  /**
   * Get a list of entities.
   *
   * Equivalent to GET /{tenant}/practitioner/
   */
  practitionerList?: Maybe<PractitionerQueryListResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/practitioner/{id}
   */
  practitionerRead?: Maybe<PractitionerQueryReadResponse>;
  /**
   * Get prior auth APAS trigger information
   *
   * Equivalent to GET /{tenant}/priorAuth/{id}/coverage/{coverage}/apas
   */
  priorAuthApasTriggerRead?: Maybe<PriorAuthApasTrigger>;
  /**
   * Get prior auth APAS trigger information
   *
   * Equivalent to GET /{tenant}/priorAuth/{id}/coverage/{coverage}/apas/{apas}
   */
  priorAuthApasTriggerWithIdRead?: Maybe<PriorAuthApasTrigger>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/priorAuth/{id}/coverage/{coverage}
   */
  priorAuthCoverageRead?: Maybe<PriorAuthCoverageQueryReadResponse>;
  /**
   * Get a list of history events.
   *
   * Equivalent to GET /{tenant}/priorAuth/{id}/history
   */
  priorAuthHistoryList?: Maybe<PriorAuthHistoryQueryListResponse>;
  /**
   * Get a list of entities.
   *
   * Equivalent to GET /{tenant}/priorAuth/
   */
  priorAuthList?: Maybe<PriorAuthQueryListResponse>;
  /**
   * Get an metrics by metrics type.
   *
   * Equivalent to GET /{tenant}/priorAuth/metrics/{type}
   */
  priorAuthMetricsRead?: Maybe<PriorAuthHistoryQueryMetricResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/priorAuth/{id}
   */
  priorAuthRead?: Maybe<PriorAuthQueryReadResponse>;
  /**
   * Get a list of all schedule events.
   *
   * Equivalent to GET /{tenant}/schedule/events
   */
  scheduleEvents?: Maybe<ScheduleQueryListResponse>;
  /**
   * Get a list of entities.
   *
   * Equivalent to GET /{tenant}/schedule/
   */
  scheduleList?: Maybe<ScheduleQueryListResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/schedule/{id}
   */
  scheduleRead?: Maybe<ScheduleQueryReadResponse>;
  /**
   * Get a list of available slots.
   *
   * Equivalent to GET /{tenant}/schedule/slot
   */
  scheduleSlotList?: Maybe<ScheduleSlotQueryListResponse>;
  /**
   * Get a list of entities.
   *
   * Equivalent to GET /{tenant}/sync/
   */
  syncList?: Maybe<SyncQueryListResponse>;
  /**
   * Get an metrics by metrics type.
   *
   * Equivalent to GET /{tenant}/sync/metrics/{type}
   */
  syncMetricsRead?: Maybe<SyncQueryReadResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/sync/{id}
   */
  syncRead?: Maybe<SyncQueryReadResponse>;
  /**
   * Get a list of resource configs.
   *
   * Equivalent to GET /tenant/{tenant}/config
   */
  tenantConfigList?: Maybe<TenantConfigQueryListResponse>;
  /**
   * Get an resource config by ID.
   *
   * Equivalent to GET /tenant/{tenant}/config/{id}
   */
  tenantConfigRead?: Maybe<TenantConfigQueryReadResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /tenant/{tenant}
   */
  tenantRead?: Maybe<TenantQueryReadResponse>;
  /**
   * Fetch patients that are eligible for nudge.
   *
   * Equivalent to GET /{tenant}/textOutreach/eligible-for-nudge
   */
  textOutreachFetchEligibleForNudge?: Maybe<TextOutreachFetchEligibilityResponse>;
  /**
   * List all entities.
   *
   * Equivalent to GET /{tenant}/textOutreach/
   */
  textOutreachList?: Maybe<TextOutreachQueryListResponse>;
  /**
   * Fetches analytics metrics for textOutreach.
   *
   * Equivalent to GET /{tenant}/textOutreach/metrics/{type}
   */
  textOutreachMetrics?: Maybe<TextOutreachQueryMetricResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/textOutreach/{id}
   */
  textOutreachRead?: Maybe<TextOutreachQueryReadResponse>;
  /**
   * Get a list of URLs.
   *
   * Equivalent to GET /url/
   */
  urlList?: Maybe<UrlQueryListResponse>;
  /**
   * Fetched analytics metrics for url
   *
   * Equivalent to GET /url/metrics/{type}
   */
  urlMetrics?: Maybe<UrlQueryMetricResponse>;
  /**
   * Get an URL by ID.
   *
   * Equivalent to GET /url/{id}
   */
  urlRead?: Maybe<UrlQueryReadResponse>;
  /**
   * Get a list of users.
   *
   * Equivalent to GET /{tenant}/user/
   */
  userList?: Maybe<UserQueryListResponse>;
  /**
   * Get a user by username.
   *
   * Equivalent to GET /{tenant}/user/{username}
   */
  userRead?: Maybe<UserQueryReadResponse>;
  /**
   * Get a user by ID.
   *
   * Equivalent to GET /{tenant}/user/id/{id}
   */
  userReadById?: Maybe<UserQueryReadResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/voiceOutreach/{id}
   */
  voiceOutreachRead?: Maybe<VoiceOutreachQueryReadResponse>;
};

export type QueryAnalyticsTextDbQueryArgs = {
  sqlQuery?: InputMaybe<Scalars["String"]["input"]>;
  tenant: Scalars["String"]["input"];
};

export type QueryAppointmentListArgs = {
  basedOn?: InputMaybe<Scalars["String"]["input"]>;
  device?: InputMaybe<Scalars["String"]["input"]>;
  endTime?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Order2>;
  orderBy?: InputMaybe<OrderBy>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  patient?: InputMaybe<Scalars["String"]["input"]>;
  rescheduleRequestCreatedTime?: InputMaybe<Scalars["String"]["input"]>;
  rescheduleStartTime?: InputMaybe<Scalars["String"]["input"]>;
  rescheduleStatus?: InputMaybe<RescheduleStatus>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  serviceCategory?: InputMaybe<Scalars["String"]["input"]>;
  serviceCode?: InputMaybe<Scalars["String"]["input"]>;
  startTime?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Status>;
  tag?: InputMaybe<Scalars["String"]["input"]>;
  tenant: Scalars["String"]["input"];
  visit?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryAppointmentMetricsReadArgs = {
  device?: InputMaybe<Scalars["String"]["input"]>;
  from?: InputMaybe<Scalars["String"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  serviceCategory?: InputMaybe<Scalars["String"]["input"]>;
  tenant: Scalars["String"]["input"];
  to?: InputMaybe<Scalars["String"]["input"]>;
  type: Scalars["String"]["input"];
};

export type QueryAppointmentNudgeEligibleListArgs = {
  device?: InputMaybe<Scalars["String"]["input"]>;
  endTime?: InputMaybe<Scalars["String"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  minutesDuration?: InputMaybe<Scalars["Int"]["input"]>;
  order?: InputMaybe<Order2>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  serviceTypeCode?: InputMaybe<Scalars["String"]["input"]>;
  startTime?: InputMaybe<Scalars["String"]["input"]>;
  tenant: Scalars["String"]["input"];
};

export type QueryAppointmentReadArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type QueryAppointmentRescheduleListArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  order?: InputMaybe<Order3>;
  orderBy?: InputMaybe<OrderBy2>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  tenant: Scalars["String"]["input"];
};

export type QueryCodeSystemListArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  order?: InputMaybe<Order4>;
  orderBy?: InputMaybe<OrderBy3>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  system?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryCodeSystemReadArgs = {
  id: Scalars["String"]["input"];
};

export type QueryCodingListArgs = {
  code?: InputMaybe<Scalars["String"]["input"]>;
  display?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["String"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryCodingReadArgs = {
  codingId: Scalars["String"]["input"];
  id: Scalars["String"]["input"];
};

export type QueryCoverageListArgs = {
  id?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  order?: InputMaybe<Order5>;
  orderBy?: InputMaybe<OrderBy4>;
  organization?: InputMaybe<Scalars["String"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  patient?: InputMaybe<Scalars["String"]["input"]>;
  tag?: InputMaybe<Scalars["String"]["input"]>;
  tenant: Scalars["String"]["input"];
  visit?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryCoverageListTransactionsArgs = {
  coverageid: Scalars["String"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  payor?: InputMaybe<Scalars["String"]["input"]>;
  payorId?: InputMaybe<Scalars["String"]["input"]>;
  serviceType?: InputMaybe<Scalars["String"]["input"]>;
  tenant: Scalars["String"]["input"];
  visit?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryCoverageListWorkflowHistoryArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  tenant: Scalars["String"]["input"];
  workflowId: Scalars["String"]["input"];
};

export type QueryCoverageMetricReadArgs = {
  from?: InputMaybe<Scalars["String"]["input"]>;
  tenant: Scalars["String"]["input"];
  to?: InputMaybe<Scalars["String"]["input"]>;
  type: Scalars["String"]["input"];
};

export type QueryCoverageReadArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type QueryCoverageReadBenefitsArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type QueryCoverageReadEdiArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type QueryCoverageReadTransactionsArgs = {
  coverageid: Scalars["String"]["input"];
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type QueryCoverageVisitReadArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
  visit: Scalars["String"]["input"];
};

export type QueryCoverageWorkflowListArgs = {
  appointmentId?: InputMaybe<Scalars["String"]["input"]>;
  coverageId?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  tenant: Scalars["String"]["input"];
};

export type QueryCoverageWorkflowReadArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type QueryDeviceListArgs = {
  id?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  nudgeable?: InputMaybe<Scalars["Boolean"]["input"]>;
  order?: InputMaybe<Order6>;
  orderBy?: InputMaybe<OrderBy5>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  tag?: InputMaybe<Scalars["String"]["input"]>;
  tenant: Scalars["String"]["input"];
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryDeviceReadArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type QueryDeviceServiceDurationListArgs = {
  id: Scalars["String"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  tenant: Scalars["String"]["input"];
};

export type QueryDeviceServiceDurationReadArgs = {
  id: Scalars["String"]["input"];
  serviceTypeCode: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type QueryDocumentListArgs = {
  actionRequired?: InputMaybe<Scalars["String"]["input"]>;
  appointment?: InputMaybe<Scalars["String"]["input"]>;
  documentType?: InputMaybe<Scalars["String"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  order?: InputMaybe<Order7>;
  orderBy?: InputMaybe<OrderBy6>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  patient?: InputMaybe<Scalars["String"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  tag?: InputMaybe<Scalars["String"]["input"]>;
  tenant: Scalars["String"]["input"];
  visit?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryDocumentReadArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type QueryDocumentReadBase64Args = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type QueryDocumentReadTextArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type QueryDownloadDesktopArgs = {
  beta?: InputMaybe<Scalars["Boolean"]["input"]>;
  branch?: InputMaybe<Branch>;
  tenant: Scalars["String"]["input"];
};

export type QueryEstimateHistoryReadArgs = {
  tenant: Scalars["String"]["input"];
  visit: Scalars["String"]["input"];
};

export type QueryEstimateListArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  order?: InputMaybe<Order8>;
  orderBy?: InputMaybe<OrderBy7>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  tenant: Scalars["String"]["input"];
};

export type QueryEstimateMetricsReadArgs = {
  from?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Status2>;
  tenant: Scalars["String"]["input"];
  to?: InputMaybe<Scalars["String"]["input"]>;
  type: Scalars["String"]["input"];
};

export type QueryEstimateReadArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type QueryFaxOutreachListArgs = {
  intent?: InputMaybe<Intent>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  order?: InputMaybe<Order9>;
  orderBy?: InputMaybe<OrderBy8>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  practitioner?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Array<InputMaybe<Status3ListItem>>>;
  tenant: Scalars["String"]["input"];
  today?: InputMaybe<Scalars["Boolean"]["input"]>;
  visit?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryFaxOutreachMetricsReadArgs = {
  from?: InputMaybe<Scalars["String"]["input"]>;
  intent?: InputMaybe<Intent2>;
  status?: InputMaybe<Status4>;
  tenant: Scalars["String"]["input"];
  to?: InputMaybe<Scalars["String"]["input"]>;
  type: Scalars["String"]["input"];
};

export type QueryFaxOutreachReadArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type QueryFaxOutreachRuleListArgs = {
  intent?: InputMaybe<Intent>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  order?: InputMaybe<Order10>;
  orderBy?: InputMaybe<OrderBy9>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  practitioner?: InputMaybe<Scalars["String"]["input"]>;
  tenant: Scalars["String"]["input"];
};

export type QueryFeeScheduleFeesListArgs = {
  id: Scalars["String"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  order?: InputMaybe<Order11>;
  orderBy?: InputMaybe<OrderBy10>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  serviceTypeCode?: InputMaybe<Scalars["String"]["input"]>;
  tenant: Scalars["String"]["input"];
};

export type QueryFeeScheduleFeesReadArgs = {
  feeId: Scalars["String"]["input"];
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type QueryFeeScheduleListArgs = {
  id?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Order11>;
  orderBy?: InputMaybe<OrderBy10>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  tenant: Scalars["String"]["input"];
};

export type QueryFeeScheduleReadArgs = {
  id: Scalars["String"]["input"];
  serviceType?: InputMaybe<Scalars["String"]["input"]>;
  tenant: Scalars["String"]["input"];
};

export type QueryFlowListArgs = {
  appointmentId?: InputMaybe<Scalars["String"]["input"]>;
  deviceId?: InputMaybe<Scalars["String"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  order?: InputMaybe<Order12>;
  orderBy?: InputMaybe<OrderBy11>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  patientId?: InputMaybe<Scalars["String"]["input"]>;
  tenant: Scalars["String"]["input"];
  visitId?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryFlowReadArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type QueryLocationListArgs = {
  address?: InputMaybe<Scalars["String"]["input"]>;
  alias?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  managingOrganization?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  npi?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Order13>;
  orderBy?: InputMaybe<OrderBy12>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  partOf?: InputMaybe<Scalars["String"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  tag?: InputMaybe<Scalars["String"]["input"]>;
  taxId?: InputMaybe<Scalars["String"]["input"]>;
  tenant: Scalars["String"]["input"];
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryLocationReadArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type QueryLookupListArgs = {
  ediId?: InputMaybe<Scalars["String"]["input"]>;
  groupNumber?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  isAuthRequired?: InputMaybe<Scalars["Boolean"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  organizationName?: InputMaybe<Scalars["String"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  serviceType?: InputMaybe<ServiceType2Input>;
  subscriberPrefix?: InputMaybe<Scalars["String"]["input"]>;
  susanOutput?: InputMaybe<Scalars["String"]["input"]>;
  tenant: Scalars["String"]["input"];
};

export type QueryLookupReadArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type QueryLookupValidateArgs = {
  ediId?: InputMaybe<Scalars["String"]["input"]>;
  groupNumber?: InputMaybe<Scalars["String"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  organizationName?: InputMaybe<Scalars["String"]["input"]>;
  serviceTypeCode?: InputMaybe<Scalars["String"]["input"]>;
  subscriberPrefix?: InputMaybe<Scalars["String"]["input"]>;
  susanOutput?: InputMaybe<Scalars["String"]["input"]>;
  tenant: Scalars["String"]["input"];
};

export type QueryOrderListArgs = {
  id?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  order?: InputMaybe<Order14>;
  orderBy?: InputMaybe<OrderBy13>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  tenant: Scalars["String"]["input"];
};

export type QueryOrderReadArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type QueryOrganizationContractListArgs = {
  id: Scalars["String"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Order17>;
  orderBy?: InputMaybe<OrderBy16>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  serviceType?: InputMaybe<Scalars["String"]["input"]>;
  tenant: Scalars["String"]["input"];
};

export type QueryOrganizationContractReadArgs = {
  contractId: Scalars["String"]["input"];
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type QueryOrganizationFeeScheduleListArgs = {
  id: Scalars["String"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Order16>;
  orderBy?: InputMaybe<OrderBy15>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  serviceType?: InputMaybe<Scalars["String"]["input"]>;
  tenant: Scalars["String"]["input"];
};

export type QueryOrganizationFeeScheduleReadArgs = {
  feeSchedule: Scalars["String"]["input"];
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type QueryOrganizationListArgs = {
  active?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  inNetwork?: InputMaybe<Scalars["String"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Order15>;
  orderBy?: InputMaybe<OrderBy14>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  tag?: InputMaybe<Scalars["String"]["input"]>;
  telecom?: InputMaybe<Scalars["String"]["input"]>;
  tenant: Scalars["String"]["input"];
  type?: InputMaybe<Scalars["String"]["input"]>;
  types?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryOrganizationReadArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type QueryPatientListArgs = {
  birthDate?: InputMaybe<Scalars["String"]["input"]>;
  contactNumber?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  order?: InputMaybe<Order18>;
  orderBy?: InputMaybe<OrderBy17>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  tag?: InputMaybe<Scalars["String"]["input"]>;
  tenant: Scalars["String"]["input"];
};

export type QueryPatientReadArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type QueryPractitionerListArgs = {
  doNotContact?: InputMaybe<Scalars["Boolean"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  isPriorAuthSubmissionEnabled?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  npi?: InputMaybe<Scalars["String"]["input"]>;
  nudgeable?: InputMaybe<Scalars["Boolean"]["input"]>;
  order?: InputMaybe<Order19>;
  orderBy?: InputMaybe<OrderBy18>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  tag?: InputMaybe<Scalars["String"]["input"]>;
  tenant: Scalars["String"]["input"];
};

export type QueryPractitionerReadArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type QueryPriorAuthApasTriggerReadArgs = {
  coverage: Scalars["String"]["input"];
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type QueryPriorAuthApasTriggerWithIdReadArgs = {
  apas: Scalars["String"]["input"];
  coverage: Scalars["String"]["input"];
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type QueryPriorAuthCoverageReadArgs = {
  coverage: Scalars["String"]["input"];
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type QueryPriorAuthHistoryListArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type QueryPriorAuthListArgs = {
  appointment?: InputMaybe<Scalars["String"]["input"]>;
  appointmentStart?: InputMaybe<Scalars["String"]["input"]>;
  appointmentStatus?: InputMaybe<Array<InputMaybe<AppointmentStatus2ListItem>>>;
  appointmentTimeFilterEnd?: InputMaybe<Scalars["String"]["input"]>;
  appointmentTimeFilterStart?: InputMaybe<Scalars["String"]["input"]>;
  authStatus?: InputMaybe<Array<InputMaybe<AuthStatusListItem>>>;
  coverageId?: InputMaybe<Scalars["String"]["input"]>;
  coverageStatus?: InputMaybe<CoverageStatus2>;
  coverageWorkflowStatus?: InputMaybe<CoverageWorkflowStatus2>;
  id?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  insurance?: InputMaybe<Scalars["String"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  metadataGravityAuthEnabled?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Order20>;
  orderBy?: InputMaybe<OrderBy19>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  patientId?: InputMaybe<Scalars["String"]["input"]>;
  practitionerId?: InputMaybe<Scalars["String"]["input"]>;
  priorAuthStatus?: InputMaybe<Array<InputMaybe<PriorAuthStatusListItem>>>;
  priorAuthSubmissionEnabled?: InputMaybe<Scalars["String"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  serviceCategory?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  serviceType?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  tag?: InputMaybe<Scalars["String"]["input"]>;
  tenant: Scalars["String"]["input"];
  visit?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryPriorAuthMetricsReadArgs = {
  authType?: InputMaybe<Scalars["String"]["input"]>;
  dimensionDate?: InputMaybe<DimensionDate>;
  from?: InputMaybe<Scalars["String"]["input"]>;
  location?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  priorAuthCoverageLinkId?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  serviceCategory?: InputMaybe<Scalars["String"]["input"]>;
  submittedBy?: InputMaybe<Scalars["String"]["input"]>;
  tenant: Scalars["String"]["input"];
  to?: InputMaybe<Scalars["String"]["input"]>;
  type: Scalars["String"]["input"];
};

export type QueryPriorAuthReadArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type QueryScheduleEventsArgs = {
  end?: InputMaybe<Scalars["String"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  resourceId?: InputMaybe<Scalars["String"]["input"]>;
  resourceType?: InputMaybe<ResourceType>;
  start?: InputMaybe<Scalars["String"]["input"]>;
  tenant: Scalars["String"]["input"];
};

export type QueryScheduleListArgs = {
  end?: InputMaybe<Scalars["String"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  resourceId?: InputMaybe<Scalars["String"]["input"]>;
  resourceType?: InputMaybe<ResourceType>;
  start?: InputMaybe<Scalars["String"]["input"]>;
  tenant: Scalars["String"]["input"];
};

export type QueryScheduleReadArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type QueryScheduleSlotListArgs = {
  end?: InputMaybe<Scalars["String"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  resourceId?: InputMaybe<Scalars["String"]["input"]>;
  resourceType?: InputMaybe<ResourceType>;
  serviceTypeCode?: InputMaybe<Scalars["String"]["input"]>;
  slotDuration?: InputMaybe<Scalars["Int"]["input"]>;
  start?: InputMaybe<Scalars["String"]["input"]>;
  tenant: Scalars["String"]["input"];
};

export type QuerySyncListArgs = {
  acknowledgedAt?: InputMaybe<Scalars["String"]["input"]>;
  eventId?: InputMaybe<Scalars["String"]["input"]>;
  eventName?: InputMaybe<Scalars["String"]["input"]>;
  eventType?: InputMaybe<Scalars["String"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  order?: InputMaybe<Order21>;
  orderBy?: InputMaybe<OrderBy20>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  state?: InputMaybe<Scalars["String"]["input"]>;
  subEventId?: InputMaybe<Scalars["String"]["input"]>;
  tenant: Scalars["String"]["input"];
};

export type QuerySyncMetricsReadArgs = {
  from?: InputMaybe<Scalars["String"]["input"]>;
  tenant: Scalars["String"]["input"];
  to?: InputMaybe<Scalars["String"]["input"]>;
  type: Scalars["String"]["input"];
};

export type QuerySyncReadArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type QueryTenantConfigListArgs = {
  config?: InputMaybe<Scalars["String"]["input"]>;
  group?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  tenant: Scalars["String"]["input"];
};

export type QueryTenantConfigReadArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type QueryTenantReadArgs = {
  tenant: Scalars["String"]["input"];
};

export type QueryTextOutreachFetchEligibleForNudgeArgs = {
  resourceId?: InputMaybe<Scalars["String"]["input"]>;
  resourceType?: InputMaybe<ResourceType2>;
  tenant: Scalars["String"]["input"];
};

export type QueryTextOutreachListArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  order?: InputMaybe<Order22>;
  orderBy?: InputMaybe<OrderBy21>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<Status5>;
  tenant: Scalars["String"]["input"];
  today?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Type>;
  visit?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryTextOutreachMetricsArgs = {
  from?: InputMaybe<Scalars["String"]["input"]>;
  tenant: Scalars["String"]["input"];
  to?: InputMaybe<Scalars["String"]["input"]>;
  type: Scalars["String"]["input"];
};

export type QueryTextOutreachReadArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type QueryUrlListArgs = {
  appointment?: InputMaybe<Scalars["String"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  order?: InputMaybe<Order23>;
  orderBy?: InputMaybe<OrderBy22>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  type?: InputMaybe<Type2>;
  visit?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryUrlMetricsArgs = {
  from?: InputMaybe<Scalars["String"]["input"]>;
  tenant?: InputMaybe<Scalars["String"]["input"]>;
  to?: InputMaybe<Scalars["String"]["input"]>;
  type: Scalars["String"]["input"];
};

export type QueryUrlReadArgs = {
  id: Scalars["String"]["input"];
};

export type QueryUserListArgs = {
  id?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  role?: InputMaybe<Role>;
  sub?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  tenant: Scalars["String"]["input"];
};

export type QueryUserReadArgs = {
  tenant: Scalars["String"]["input"];
  username: Scalars["String"]["input"];
};

export type QueryUserReadByIdArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export type QueryVoiceOutreachReadArgs = {
  id: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
};

export enum RescheduleStatus {
  Booked = "booked",
  Canceled = "canceled",
  Pending = "pending",
}

export enum ResourceType {
  Device = "device",
  Practitioner = "practitioner",
}

export enum ResourceType2 {
  Device = "device",
  Practitioner = "practitioner",
}

export enum Role {
  Admin = "admin",
  User = "user",
}

export type Schedule = {
  __typename?: "Schedule";
  allowedServiceTypes?: Maybe<Array<Maybe<Scalars["JSON"]["output"]>>>;
  byweekday?: Maybe<Array<Maybe<ScheduleWeekdays>>>;
  created?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  dtstart: Scalars["String"]["output"];
  durationMinutes: Scalars["Float"]["output"];
  frequency: ScheduleFrequency;
  id: Scalars["String"]["output"];
  isActive?: Maybe<Scalars["Boolean"]["output"]>;
  resourceId: Scalars["String"]["output"];
  resourceType: ScheduleResourceType;
  status: ScheduleStatus;
  tenant?: Maybe<Scalars["String"]["output"]>;
  until: Scalars["String"]["output"];
  updated?: Maybe<Scalars["String"]["output"]>;
  wkst?: Maybe<ScheduleWeekdays>;
};

export type ScheduleCommandResponse = {
  __typename?: "ScheduleCommandResponse";
  resourceID: Scalars["String"]["output"];
};

export type ScheduleCommandResponseOutput = Error | ScheduleCommandResponse;

export type ScheduleEvent = {
  __typename?: "ScheduleEvent";
  allowedServiceTypes?: Maybe<Array<Maybe<Scalars["JSON"]["output"]>>>;
  created?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  end?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  resourceType?: Maybe<Scalars["String"]["output"]>;
  start?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  tenant?: Maybe<Scalars["String"]["output"]>;
  updated?: Maybe<Scalars["String"]["output"]>;
};

export enum ScheduleFrequency {
  Daily = "daily",
  Hourly = "hourly",
  Minutely = "minutely",
  Monthly = "monthly",
  Secondely = "secondely",
  Weekly = "weekly",
  Yearly = "yearly",
}

export type ScheduleQueryListResponse = {
  __typename?: "ScheduleQueryListResponse";
  pages: Scalars["Int"]["output"];
  resources: Array<Maybe<ScheduleEvent>>;
};

export type ScheduleQueryReadResponse = {
  __typename?: "ScheduleQueryReadResponse";
  id: Scalars["String"]["output"];
  resource: Schedule;
};

export enum ScheduleResourceType {
  Device = "device",
  Practitioner = "practitioner",
}

export type ScheduleSlot = {
  __typename?: "ScheduleSlot";
  durationMinutes?: Maybe<Scalars["Int"]["output"]>;
  resourceId?: Maybe<Scalars["String"]["output"]>;
  resourceType?: Maybe<ScheduleResourceType>;
  start?: Maybe<Scalars["String"]["output"]>;
};

export type ScheduleSlotQueryListResponse = {
  __typename?: "ScheduleSlotQueryListResponse";
  pages: Scalars["Int"]["output"];
  resources: Array<Maybe<ScheduleSlot>>;
};

export type ScheduleSlotsInput = {
  created?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["String"]["input"];
  resourceId: Scalars["String"]["input"];
  resourceType: ScheduleSlotsResourceType;
  slotDate: Scalars["String"]["input"];
  slots?: InputMaybe<Array<InputMaybe<ScheduleSlotsListInput>>>;
  tenant?: InputMaybe<Scalars["String"]["input"]>;
  updated?: InputMaybe<Scalars["String"]["input"]>;
};

export type ScheduleSlotsListInput = {
  allowedServiceTypes?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
  created?: InputMaybe<Scalars["String"]["input"]>;
  durationMinutes: Scalars["Int"]["input"];
  id?: InputMaybe<Scalars["String"]["input"]>;
  slotsId?: InputMaybe<Scalars["String"]["input"]>;
  startTime: Scalars["String"]["input"];
  status: ScheduleSlotsStatus;
  updated?: InputMaybe<Scalars["String"]["input"]>;
};

export enum ScheduleSlotsResourceType {
  Device = "device",
  Practitioner = "practitioner",
}

export enum ScheduleSlotsStatus {
  Close = "close",
  Open = "open",
  Restrict = "restrict",
}

export enum ScheduleStatus {
  Close = "close",
  Open = "open",
  Restrict = "restrict",
}

export enum ScheduleWeekdays {
  Fr = "FR",
  Mo = "MO",
  Sa = "SA",
  Su = "SU",
  Th = "TH",
  Tu = "TU",
  We = "WE",
}

export type ScheduleWriteInput = {
  allowedServiceTypes?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
  byweekday?: InputMaybe<Array<InputMaybe<ScheduleWeekdays>>>;
  created?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  dtstart: Scalars["String"]["input"];
  durationMinutes: Scalars["Float"]["input"];
  frequency: ScheduleFrequency;
  id?: InputMaybe<Scalars["String"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  resourceId: Scalars["String"]["input"];
  resourceType: ScheduleResourceType;
  status: ScheduleStatus;
  tenant?: InputMaybe<Scalars["String"]["input"]>;
  until: Scalars["String"]["input"];
  updated?: InputMaybe<Scalars["String"]["input"]>;
  wkst?: InputMaybe<ScheduleWeekdays>;
};

export type ServiceType2Input = {
  coding?: InputMaybe<Scalars["String"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
};

export enum Status {
  Arrived = "arrived",
  Booked = "booked",
  BookingPending = "bookingPending",
  Canceled = "canceled",
  CheckedIn = "checked_in",
  Completed = "completed",
  Pending = "pending",
}

export enum Status2 {
  Deleted = "deleted",
  Draft = "draft",
  Error = "error",
  Final = "final",
  Pending = "pending",
}

export enum Status3ListItem {
  Failure = "failure",
  Pending = "pending",
  Success = "success",
}

export enum Status4 {
  Failure = "failure",
  Pending = "pending",
  Success = "success",
}

export enum Status5 {
  Delivered = "Delivered",
  Failed = "Failed",
  Initiated = "Initiated",
  Sent = "Sent",
  Undelivered = "Undelivered",
}

export type Subscription = {
  __typename?: "Subscription";
  appointmentChanged?: Maybe<AppointmentQueryReadResponse>;
  coverageChanged?: Maybe<CoverageQueryReadResponse>;
  coverageVisitChanged?: Maybe<CoverageVisitQueryReadResponse>;
  deviceChanged?: Maybe<DeviceQueryReadResponse>;
  documentAdded?: Maybe<DocumentQueryReadResponse>;
  documentChanged?: Maybe<DocumentQueryReadResponse>;
  estimateChanged?: Maybe<EstimateQueryReadResponse>;
  locationChanged?: Maybe<LocationQueryReadResponse>;
  organizationChanged?: Maybe<OrganizationQueryReadResponse>;
  patientChanged?: Maybe<PatientQueryReadResponse>;
  practitionerChanged?: Maybe<PractitionerQueryReadResponse>;
  priorAuthAdded?: Maybe<PriorAuthQueryReadResponse>;
  priorAuthChanged?: Maybe<PriorAuthQueryReadResponse>;
};

export type SubscriptionAppointmentChangedArgs = {
  tenant: Scalars["String"]["input"];
};

export type SubscriptionCoverageChangedArgs = {
  tenant: Scalars["String"]["input"];
};

export type SubscriptionCoverageVisitChangedArgs = {
  tenant: Scalars["String"]["input"];
};

export type SubscriptionDeviceChangedArgs = {
  tenant: Scalars["String"]["input"];
};

export type SubscriptionDocumentAddedArgs = {
  tenant: Scalars["String"]["input"];
};

export type SubscriptionDocumentChangedArgs = {
  tenant: Scalars["String"]["input"];
};

export type SubscriptionEstimateChangedArgs = {
  tenant: Scalars["String"]["input"];
};

export type SubscriptionLocationChangedArgs = {
  tenant: Scalars["String"]["input"];
};

export type SubscriptionOrganizationChangedArgs = {
  tenant: Scalars["String"]["input"];
};

export type SubscriptionPatientChangedArgs = {
  tenant: Scalars["String"]["input"];
};

export type SubscriptionPractitionerChangedArgs = {
  tenant: Scalars["String"]["input"];
};

export type SubscriptionPriorAuthAddedArgs = {
  tenant: Scalars["String"]["input"];
};

export type SubscriptionPriorAuthChangedArgs = {
  tenant: Scalars["String"]["input"];
};

export type Sync = {
  __typename?: "Sync";
  acknowledgedAt?: Maybe<Scalars["String"]["output"]>;
  eventData?: Maybe<Scalars["String"]["output"]>;
  eventId?: Maybe<Scalars["String"]["output"]>;
  eventName?: Maybe<Scalars["String"]["output"]>;
  eventType?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  state?: Maybe<Scalars["String"]["output"]>;
  subEventId?: Maybe<Scalars["String"]["output"]>;
  tenant?: Maybe<Scalars["String"]["output"]>;
  updated?: Maybe<Scalars["String"]["output"]>;
};

export type SyncCommandResponse = {
  __typename?: "SyncCommandResponse";
  resourceID: Scalars["String"]["output"];
};

export type SyncCommandResponseOutput = Error | SyncCommandResponse;

export type SyncPatchInput = {
  acknowledgedAt?: InputMaybe<Scalars["String"]["input"]>;
  eventData?: InputMaybe<Scalars["String"]["input"]>;
  eventId?: InputMaybe<Scalars["String"]["input"]>;
  eventName?: InputMaybe<Scalars["String"]["input"]>;
  eventType?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  state?: InputMaybe<Scalars["String"]["input"]>;
  subEventId?: InputMaybe<Scalars["String"]["input"]>;
  tenant?: InputMaybe<Scalars["String"]["input"]>;
  updated?: InputMaybe<Scalars["String"]["input"]>;
};

export type SyncQueryListResponse = {
  __typename?: "SyncQueryListResponse";
  pages: Scalars["Int"]["output"];
  resources: Array<Maybe<Sync>>;
};

export type SyncQueryReadResponse = {
  __typename?: "SyncQueryReadResponse";
  resource: Sync;
};

export type SyncWriteInput = {
  acknowledgedAt?: InputMaybe<Scalars["String"]["input"]>;
  eventData?: InputMaybe<Scalars["String"]["input"]>;
  eventId?: InputMaybe<Scalars["String"]["input"]>;
  eventName?: InputMaybe<Scalars["String"]["input"]>;
  eventType?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  state?: InputMaybe<Scalars["String"]["input"]>;
  subEventId?: InputMaybe<Scalars["String"]["input"]>;
  tenant?: InputMaybe<Scalars["String"]["input"]>;
  updated?: InputMaybe<Scalars["String"]["input"]>;
};

export type Tenant = {
  __typename?: "Tenant";
  beta?: Maybe<Scalars["Boolean"]["output"]>;
  currentStack?: Maybe<Scalars["String"]["output"]>;
  deployment: TenantDeployment;
  id: Scalars["String"]["output"];
  integrationInbound?: Maybe<TenantIntegrationInbound>;
  integrationOutbound?: Maybe<TenantIntegrationOutbound>;
  logoUrl?: Maybe<Scalars["String"]["output"]>;
  migrationStatus?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  services: Array<Maybe<TenantServices>>;
  shortName: Scalars["String"]["output"];
  status?: Maybe<TenantStatus>;
  telecom?: Maybe<Array<Maybe<TenantTelecom>>>;
  timezone?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["Float"]["output"]>;
};

export type TenantConfig = {
  __typename?: "TenantConfig";
  config: Scalars["String"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  group: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  isActive?: Maybe<Scalars["Boolean"]["output"]>;
  parentId?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["Float"]["output"]>;
  value: Scalars["String"]["output"];
};

export type TenantConfigQueryListResponse = {
  __typename?: "TenantConfigQueryListResponse";
  resources: Array<Maybe<TenantConfig>>;
};

export type TenantConfigQueryReadResponse = {
  __typename?: "TenantConfigQueryReadResponse";
  resource: TenantConfig;
};

export enum TenantDeployment {
  Pool = "pool",
  Silo = "silo",
}

export enum TenantIntegrationInbound {
  Athena = "athena",
  Hl7 = "hl7",
  Modmed = "modmed",
}

export enum TenantIntegrationOutbound {
  Athena = "athena",
  Hl7 = "hl7",
  Modmed = "modmed",
}

export type TenantQueryReadResponse = {
  __typename?: "TenantQueryReadResponse";
  id: Scalars["String"]["output"];
  resource: Tenant;
};

export enum TenantServices {
  GravityAuth = "GravityAuth",
  GravityBooking = "GravityBooking",
  GravityFlow = "GravityFlow",
}

export enum TenantStatus {
  Active = "active",
  CreationFailed = "creationFailed",
  CreationPending = "creationPending",
  Inactive = "inactive",
}

export type TenantTelecom = {
  __typename?: "TenantTelecom";
  rank?: Maybe<Scalars["Float"]["output"]>;
  system?: Maybe<Scalars["String"]["output"]>;
  use?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["String"]["output"]>;
};

export type TextDbQueryListResponse = {
  __typename?: "TextDBQueryListResponse";
  resources: Array<Maybe<Scalars["JSON"]["output"]>>;
};

export type TextOutreach = {
  __typename?: "TextOutreach";
  created?: Maybe<Scalars["String"]["output"]>;
  deliveredTime?: Maybe<Scalars["String"]["output"]>;
  from?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  patient?: Maybe<Scalars["String"]["output"]>;
  refId?: Maybe<Scalars["String"]["output"]>;
  resourceId?: Maybe<Scalars["String"]["output"]>;
  resourceType?: Maybe<TextOutreachNudgeResourceType>;
  sentTime?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<TextOutreachStatus>;
  tenant?: Maybe<Scalars["String"]["output"]>;
  text?: Maybe<Scalars["String"]["output"]>;
  to?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<TextOutreachType>;
  updated?: Maybe<Scalars["String"]["output"]>;
  visit?: Maybe<Scalars["String"]["output"]>;
};

export type TextOutreachCommandInput = {
  appointmentId?: InputMaybe<Scalars["String"]["input"]>;
  type: TextOutreachQueryType;
  visit: Scalars["String"]["input"];
};

export type TextOutreachCommandResponse = {
  __typename?: "TextOutreachCommandResponse";
  resourceID: Scalars["String"]["output"];
};

export type TextOutreachCommandResponseOutput =
  | Error
  | TextOutreachCommandResponse;

export type TextOutreachEligibility = {
  __typename?: "TextOutreachEligibility";
  id: Scalars["String"]["output"];
  visit: Scalars["String"]["output"];
};

export type TextOutreachFetchEligibilityResponse = {
  __typename?: "TextOutreachFetchEligibilityResponse";
  pages: Scalars["Int"]["output"];
  resources: Array<Maybe<TextOutreachEligibility>>;
};

export type TextOutreachMetrics = {
  __typename?: "TextOutreachMetrics";
  date?: Maybe<Scalars["String"]["output"]>;
  occurrences?: Maybe<Scalars["Float"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  tenant?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<TextOutreachType>;
};

export enum TextOutreachNudgeResourceType {
  Device = "device",
  Practitioner = "practitioner",
}

export type TextOutreachQueryListResponse = {
  __typename?: "TextOutreachQueryListResponse";
  pages: Scalars["Int"]["output"];
  resources: Array<Maybe<TextOutreach>>;
};

export type TextOutreachQueryMetricResponse = {
  __typename?: "TextOutreachQueryMetricResponse";
  resource?: Maybe<TextOutreachMetrics>;
  resources?: Maybe<Array<Maybe<TextOutreachMetrics>>>;
};

export type TextOutreachQueryReadResponse = {
  __typename?: "TextOutreachQueryReadResponse";
  id: Scalars["String"]["output"];
  resource: TextOutreach;
};

export enum TextOutreachQueryType {
  AppointmentConfirmation = "AppointmentConfirmation",
  AppointmentReminder = "AppointmentReminder",
  Nudge = "Nudge",
  RescheduleFailed = "RescheduleFailed",
  RescheduleSuccess = "RescheduleSuccess",
}

export enum TextOutreachStatus {
  Delivered = "Delivered",
  Failed = "Failed",
  Initiated = "Initiated",
  Sent = "Sent",
  Undelivered = "Undelivered",
}

export enum TextOutreachType {
  AppointmentConfirmation = "AppointmentConfirmation",
  AppointmentReminder = "AppointmentReminder",
  Nudge = "Nudge",
  RescheduleFailed = "RescheduleFailed",
  RescheduleSuccess = "RescheduleSuccess",
}

export enum Type {
  AppointmentConfirmation = "AppointmentConfirmation",
  AppointmentReminder = "AppointmentReminder",
  Nudge = "Nudge",
  RescheduleFailed = "RescheduleFailed",
  RescheduleSuccess = "RescheduleSuccess",
}

export enum Type2 {
  AppointmentConfirmation = "appointmentConfirmation",
  AppointmentReminder = "appointmentReminder",
  Nudge = "nudge",
}

export type Url = {
  __typename?: "Url";
  appointment: Scalars["String"]["output"];
  created?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  tenant: Scalars["String"]["output"];
  type?: Maybe<UrlQueryUrltype>;
  updated?: Maybe<Scalars["String"]["output"]>;
  urlOpenedAt?: Maybe<Scalars["String"]["output"]>;
  visit?: Maybe<Scalars["String"]["output"]>;
};

export type UrlCommandResponse = {
  __typename?: "UrlCommandResponse";
  resourceID: Scalars["String"]["output"];
};

export type UrlCommandResponseOutput = Error | UrlCommandResponse;

export type UrlInput = {
  appointment: Scalars["String"]["input"];
  created?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  tenant: Scalars["String"]["input"];
  type?: InputMaybe<UrlQueryUrltype>;
  updated?: InputMaybe<Scalars["String"]["input"]>;
  urlOpenedAt?: InputMaybe<Scalars["String"]["input"]>;
  visit?: InputMaybe<Scalars["String"]["input"]>;
};

export type UrlMetrics = {
  __typename?: "UrlMetrics";
  date?: Maybe<Scalars["String"]["output"]>;
  occurrences?: Maybe<Scalars["Float"]["output"]>;
  tenant?: Maybe<Scalars["String"]["output"]>;
};

export type UrlQueryListResponse = {
  __typename?: "UrlQueryListResponse";
  pages: Scalars["Int"]["output"];
  resources: Array<Maybe<Url>>;
};

export type UrlQueryMetricResponse = {
  __typename?: "UrlQueryMetricResponse";
  resource?: Maybe<UrlMetrics>;
  resources?: Maybe<Array<Maybe<UrlMetrics>>>;
};

export type UrlQueryReadResponse = {
  __typename?: "UrlQueryReadResponse";
  id: Scalars["String"]["output"];
  resource: Url;
};

export enum UrlQueryUrltype {
  AppointmentConfirmation = "appointmentConfirmation",
  AppointmentReminder = "appointmentReminder",
  Nudge = "nudge",
}

export type User = {
  __typename?: "User";
  created: Scalars["String"]["output"];
  email?: Maybe<Scalars["String"]["output"]>;
  emailVerified?: Maybe<Scalars["Boolean"]["output"]>;
  id: Scalars["String"]["output"];
  modified: Scalars["String"]["output"];
  role: UserRole;
  sub: Scalars["String"]["output"];
  tenant: Scalars["String"]["output"];
  tenants: Array<Maybe<Scalars["String"]["output"]>>;
  username: Scalars["String"]["output"];
};

export type UserCommandResponse = {
  __typename?: "UserCommandResponse";
  resourceID: Scalars["String"]["output"];
};

export type UserCommandResponseOutput = Error | UserCommandResponse;

export type UserCreateCredentialsInput = {
  idToken: Scalars["String"]["input"];
};

export type UserCreateCredentialsResponse = {
  __typename?: "UserCreateCredentialsResponse";
  accessKeyId: Scalars["String"]["output"];
  expiration: Scalars["String"]["output"];
  secretKey: Scalars["String"]["output"];
  sessionToken: Scalars["String"]["output"];
};

export type UserCreateCredentialsResponseOutput =
  | Error
  | UserCreateCredentialsResponse;

export type UserCreateInput = {
  email: Scalars["String"]["input"];
  role: UserRole;
  username: Scalars["String"]["input"];
};

export type UserQueryListResponse = {
  __typename?: "UserQueryListResponse";
  pages: Scalars["Int"]["output"];
  resources: Array<Maybe<User>>;
};

export type UserQueryReadResponse = {
  __typename?: "UserQueryReadResponse";
  resource: User;
};

export enum UserRole {
  Admin = "admin",
  User = "user",
}

export type UserUpdateInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  role: UserRole;
};

export type VoiceOutreach = {
  __typename?: "VoiceOutreach";
  callruntime?: Maybe<Scalars["String"]["output"]>;
  created?: Maybe<Scalars["String"]["output"]>;
  from?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  refId?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<VoiceOutreachStatus>;
  tenant?: Maybe<Scalars["String"]["output"]>;
  to?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<VoiceOutreachType>;
  updated?: Maybe<Scalars["String"]["output"]>;
  visit?: Maybe<Scalars["String"]["output"]>;
};

export type VoiceOutreachCommandInput = {
  appointmentId?: InputMaybe<Scalars["String"]["input"]>;
  type: VoiceOutreachQueryType;
  visit: Scalars["String"]["input"];
};

export type VoiceOutreachCommandResponse = {
  __typename?: "VoiceOutreachCommandResponse";
  resourceID: Scalars["String"]["output"];
};

export type VoiceOutreachCommandResponseOutput =
  | Error
  | VoiceOutreachCommandResponse;

export type VoiceOutreachInput = {
  callruntime?: InputMaybe<Scalars["String"]["input"]>;
  created?: InputMaybe<Scalars["String"]["input"]>;
  from?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["String"]["input"];
  refId?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<VoiceOutreachStatus>;
  tenant?: InputMaybe<Scalars["String"]["input"]>;
  to?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<VoiceOutreachType>;
  updated?: InputMaybe<Scalars["String"]["input"]>;
  visit?: InputMaybe<Scalars["String"]["input"]>;
};

export type VoiceOutreachQueryReadResponse = {
  __typename?: "VoiceOutreachQueryReadResponse";
  id: Scalars["String"]["output"];
  resource: VoiceOutreach;
};

export enum VoiceOutreachQueryType {
  Nudge = "Nudge",
}

export enum VoiceOutreachStatus {
  Delivered = "Delivered",
  Failed = "Failed",
  Initiated = "Initiated",
  Sent = "Sent",
  Undelivered = "Undelivered",
}

export enum VoiceOutreachType {
  Nudge = "Nudge",
}

export type LocationCreateMutationVariables = Exact<{
  requestBody: LocationWriteInput;
  tenant: Scalars["String"]["input"];
}>;

export type LocationCreateMutation = {
  __typename?: "Mutation";
  locationCreate?:
    | { __typename?: "Error"; error: string; message: string }
    | { __typename?: "LocationCommandResponse"; resourceID: string }
    | null;
};

export type LocationUpdateMutationVariables = Exact<{
  locationUpdateId: Scalars["String"]["input"];
  requestBody: LocationWriteInput;
  tenant: Scalars["String"]["input"];
}>;

export type LocationUpdateMutation = {
  __typename?: "Mutation";
  locationUpdate?:
    | { __typename?: "Error"; error: string; message: string }
    | { __typename?: "LocationCommandResponse"; resourceID: string }
    | null;
};

export type LocationListQueryVariables = Exact<{
  tenant: Scalars["String"]["input"];
}>;

export type LocationListQuery = {
  __typename?: "Query";
  locationList?: {
    __typename?: "LocationQueryListResponse";
    resources?: Array<{
      __typename?: "Location";
      address?: string | null;
      name: string;
      id: string;
      status?: string | null;
      updatedAt?: number | null;
      type?: string | null;
      description?: string | null;
    } | null> | null;
  } | null;
};

export type LocationReadQueryVariables = Exact<{
  locationReadId: Scalars["String"]["input"];
  tenant: Scalars["String"]["input"];
}>;

export type LocationReadQuery = {
  __typename?: "Query";
  locationRead?: {
    __typename?: "LocationQueryReadResponse";
    resource: {
      __typename?: "Location";
      address?: string | null;
      name: string;
      id: string;
      status?: string | null;
      updatedAt?: number | null;
      type?: string | null;
      description?: string | null;
    };
  } | null;
};

export const LocationCreateDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "LocationCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "requestBody" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "LocationWriteInput" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "tenant" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "locationCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "requestBody" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "requestBody" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "tenant" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "tenant" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "Error" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "error" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "LocationCommandResponse" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "resourceID" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  LocationCreateMutation,
  LocationCreateMutationVariables
>;
export const LocationUpdateDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "LocationUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "locationUpdateId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "requestBody" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "LocationWriteInput" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "tenant" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "locationUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "locationUpdateId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "requestBody" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "requestBody" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "tenant" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "tenant" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "LocationCommandResponse" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "resourceID" },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "Error" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "error" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  LocationUpdateMutation,
  LocationUpdateMutationVariables
>;
export const LocationListDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "LocationList" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "tenant" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "locationList" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "tenant" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "tenant" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "resources" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "address" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "description" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LocationListQuery, LocationListQueryVariables>;
export const LocationReadDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "LocationRead" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "locationReadId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "tenant" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "locationRead" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "locationReadId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "tenant" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "tenant" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "resource" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "address" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "description" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LocationReadQuery, LocationReadQueryVariables>;
