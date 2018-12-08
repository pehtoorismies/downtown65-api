export const typeDefs = /* GraphQL */ `type AggregateEvent {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Event {
  id: ID!
  eventType: EventType
  title: String!
  participants(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  creator: User!
  date: DateTime!
}

type EventConnection {
  pageInfo: PageInfo!
  edges: [EventEdge]!
  aggregate: AggregateEvent!
}

input EventCreateInput {
  eventType: EventType
  title: String!
  participants: UserCreateManyWithoutEventsInput
  creator: UserCreateOneWithoutCreatorInput!
  date: DateTime!
}

input EventCreateManyWithoutCreatorInput {
  create: [EventCreateWithoutCreatorInput!]
  connect: [EventWhereUniqueInput!]
}

input EventCreateManyWithoutParticipantsInput {
  create: [EventCreateWithoutParticipantsInput!]
  connect: [EventWhereUniqueInput!]
}

input EventCreateWithoutCreatorInput {
  eventType: EventType
  title: String!
  participants: UserCreateManyWithoutEventsInput
  date: DateTime!
}

input EventCreateWithoutParticipantsInput {
  eventType: EventType
  title: String!
  creator: UserCreateOneWithoutCreatorInput!
  date: DateTime!
}

type EventEdge {
  node: Event!
  cursor: String!
}

enum EventOrderByInput {
  id_ASC
  id_DESC
  eventType_ASC
  eventType_DESC
  title_ASC
  title_DESC
  date_ASC
  date_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type EventPreviousValues {
  id: ID!
  eventType: EventType
  title: String!
  date: DateTime!
}

input EventScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  eventType: EventType
  eventType_not: EventType
  eventType_in: [EventType!]
  eventType_not_in: [EventType!]
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  date: DateTime
  date_not: DateTime
  date_in: [DateTime!]
  date_not_in: [DateTime!]
  date_lt: DateTime
  date_lte: DateTime
  date_gt: DateTime
  date_gte: DateTime
  AND: [EventScalarWhereInput!]
  OR: [EventScalarWhereInput!]
  NOT: [EventScalarWhereInput!]
}

type EventSubscriptionPayload {
  mutation: MutationType!
  node: Event
  updatedFields: [String!]
  previousValues: EventPreviousValues
}

input EventSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EventWhereInput
  AND: [EventSubscriptionWhereInput!]
  OR: [EventSubscriptionWhereInput!]
  NOT: [EventSubscriptionWhereInput!]
}

enum EventType {
  Bicycling
  MTB
  Running
  Swimming
  Orienteering
  Triathlon
  Other
  Happening
  Ultras
}

input EventUpdateInput {
  eventType: EventType
  title: String
  participants: UserUpdateManyWithoutEventsInput
  creator: UserUpdateOneRequiredWithoutCreatorInput
  date: DateTime
}

input EventUpdateManyDataInput {
  eventType: EventType
  title: String
  date: DateTime
}

input EventUpdateManyMutationInput {
  eventType: EventType
  title: String
  date: DateTime
}

input EventUpdateManyWithoutCreatorInput {
  create: [EventCreateWithoutCreatorInput!]
  delete: [EventWhereUniqueInput!]
  connect: [EventWhereUniqueInput!]
  disconnect: [EventWhereUniqueInput!]
  update: [EventUpdateWithWhereUniqueWithoutCreatorInput!]
  upsert: [EventUpsertWithWhereUniqueWithoutCreatorInput!]
  deleteMany: [EventScalarWhereInput!]
  updateMany: [EventUpdateManyWithWhereNestedInput!]
}

input EventUpdateManyWithoutParticipantsInput {
  create: [EventCreateWithoutParticipantsInput!]
  delete: [EventWhereUniqueInput!]
  connect: [EventWhereUniqueInput!]
  disconnect: [EventWhereUniqueInput!]
  update: [EventUpdateWithWhereUniqueWithoutParticipantsInput!]
  upsert: [EventUpsertWithWhereUniqueWithoutParticipantsInput!]
  deleteMany: [EventScalarWhereInput!]
  updateMany: [EventUpdateManyWithWhereNestedInput!]
}

input EventUpdateManyWithWhereNestedInput {
  where: EventScalarWhereInput!
  data: EventUpdateManyDataInput!
}

input EventUpdateWithoutCreatorDataInput {
  eventType: EventType
  title: String
  participants: UserUpdateManyWithoutEventsInput
  date: DateTime
}

input EventUpdateWithoutParticipantsDataInput {
  eventType: EventType
  title: String
  creator: UserUpdateOneRequiredWithoutCreatorInput
  date: DateTime
}

input EventUpdateWithWhereUniqueWithoutCreatorInput {
  where: EventWhereUniqueInput!
  data: EventUpdateWithoutCreatorDataInput!
}

input EventUpdateWithWhereUniqueWithoutParticipantsInput {
  where: EventWhereUniqueInput!
  data: EventUpdateWithoutParticipantsDataInput!
}

input EventUpsertWithWhereUniqueWithoutCreatorInput {
  where: EventWhereUniqueInput!
  update: EventUpdateWithoutCreatorDataInput!
  create: EventCreateWithoutCreatorInput!
}

input EventUpsertWithWhereUniqueWithoutParticipantsInput {
  where: EventWhereUniqueInput!
  update: EventUpdateWithoutParticipantsDataInput!
  create: EventCreateWithoutParticipantsInput!
}

input EventWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  eventType: EventType
  eventType_not: EventType
  eventType_in: [EventType!]
  eventType_not_in: [EventType!]
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  participants_every: UserWhereInput
  participants_some: UserWhereInput
  participants_none: UserWhereInput
  creator: UserWhereInput
  date: DateTime
  date_not: DateTime
  date_in: [DateTime!]
  date_not_in: [DateTime!]
  date_lt: DateTime
  date_lte: DateTime
  date_gt: DateTime
  date_gte: DateTime
  AND: [EventWhereInput!]
  OR: [EventWhereInput!]
  NOT: [EventWhereInput!]
}

input EventWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createEvent(data: EventCreateInput!): Event!
  updateEvent(data: EventUpdateInput!, where: EventWhereUniqueInput!): Event
  updateManyEvents(data: EventUpdateManyMutationInput!, where: EventWhereInput): BatchPayload!
  upsertEvent(where: EventWhereUniqueInput!, create: EventCreateInput!, update: EventUpdateInput!): Event!
  deleteEvent(where: EventWhereUniqueInput!): Event
  deleteManyEvents(where: EventWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  event(where: EventWhereUniqueInput!): Event
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event]!
  eventsConnection(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EventConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  event(where: EventSubscriptionWhereInput): EventSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String
  name: String!
  nick: String!
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event!]
  creator(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String
  name: String!
  nick: String!
  events: EventCreateManyWithoutParticipantsInput
  creator: EventCreateManyWithoutCreatorInput
}

input UserCreateManyWithoutEventsInput {
  create: [UserCreateWithoutEventsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutCreatorInput {
  create: UserCreateWithoutCreatorInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutCreatorInput {
  email: String
  name: String!
  nick: String!
  events: EventCreateManyWithoutParticipantsInput
}

input UserCreateWithoutEventsInput {
  email: String
  name: String!
  nick: String!
  creator: EventCreateManyWithoutCreatorInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  name_ASC
  name_DESC
  nick_ASC
  nick_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String
  name: String!
  nick: String!
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  nick: String
  nick_not: String
  nick_in: [String!]
  nick_not_in: [String!]
  nick_lt: String
  nick_lte: String
  nick_gt: String
  nick_gte: String
  nick_contains: String
  nick_not_contains: String
  nick_starts_with: String
  nick_not_starts_with: String
  nick_ends_with: String
  nick_not_ends_with: String
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  name: String
  nick: String
  events: EventUpdateManyWithoutParticipantsInput
  creator: EventUpdateManyWithoutCreatorInput
}

input UserUpdateManyDataInput {
  email: String
  name: String
  nick: String
}

input UserUpdateManyMutationInput {
  email: String
  name: String
  nick: String
}

input UserUpdateManyWithoutEventsInput {
  create: [UserCreateWithoutEventsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutEventsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutEventsInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredWithoutCreatorInput {
  create: UserCreateWithoutCreatorInput
  update: UserUpdateWithoutCreatorDataInput
  upsert: UserUpsertWithoutCreatorInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutCreatorDataInput {
  email: String
  name: String
  nick: String
  events: EventUpdateManyWithoutParticipantsInput
}

input UserUpdateWithoutEventsDataInput {
  email: String
  name: String
  nick: String
  creator: EventUpdateManyWithoutCreatorInput
}

input UserUpdateWithWhereUniqueWithoutEventsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutEventsDataInput!
}

input UserUpsertWithoutCreatorInput {
  update: UserUpdateWithoutCreatorDataInput!
  create: UserCreateWithoutCreatorInput!
}

input UserUpsertWithWhereUniqueWithoutEventsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutEventsDataInput!
  create: UserCreateWithoutEventsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  nick: String
  nick_not: String
  nick_in: [String!]
  nick_not_in: [String!]
  nick_lt: String
  nick_lte: String
  nick_gt: String
  nick_gte: String
  nick_contains: String
  nick_not_contains: String
  nick_starts_with: String
  nick_not_starts_with: String
  nick_ends_with: String
  nick_not_ends_with: String
  events_every: EventWhereInput
  events_some: EventWhereInput
  events_none: EventWhereInput
  creator_every: EventWhereInput
  creator_some: EventWhereInput
  creator_none: EventWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`