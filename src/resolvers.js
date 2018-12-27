// @flow
import { ManagementClient } from 'auth0';
import { authClient, errorHandler } from './util';
import config from './config';

const { DOMAIN } = config.AUTH0;

const createAuthZeroUser = async (
  email: string,
  password: string,
  nick: string,
  name: string,
  verifyEmail: boolean = true,
  emailVerified: boolean = false
) => {
  // valid user => create to Auth0
  const client = await authClient.clientCredentialsGrant({
    audience: `https://${DOMAIN}/api/v2/`,
    scope: 'create:users',
  });
  const management = new ManagementClient({
    token: client.access_token,
    domain: DOMAIN,
  });
  const authZeroUser = await management.createUser({
    connection: 'Username-Password-Authentication',
    email,
    password,
    username: nick,
    user_metadata: {
      name,
    },
    app_metadata: {
      role: 'USER',
    },
    email_verified: emailVerified,
    verify_email: verifyEmail,
  });
  return authZeroUser;
};

type CreateUserInput = {
  email: string,
  password: string,
  nick: string,
  name: string,
};
// Queries
const users = async (_: void, __: void, { prisma }) => {
  const allUsers = await prisma.users();
  return allUsers;
};
// Mutations
const migrateUser = async (_: void, args: CreateUserInput, { prisma }) => {
  const { email, password, nick, name } = args;
  const { user_id: providerID } = await createAuthZeroUser(
    email,
    password,
    nick,
    name,
    false,
    true
  );
  const user = await prisma.createUser({
    providerID,
    email,
    name,
    nick,
  });
  return user;
};
const registerUser = async (_: void, args: CreateUserInput, { prisma }) => {
  const { email, password, nick, name } = args;
  const { user_id: providerID } = await createAuthZeroUser(
    email,
    password,
    nick,
    name
  );
  const user = await prisma.createUser({
    providerID,
    email,
    name,
    nick,
  });

  return user;
};

const resolvers = {
  Query: {
    users: errorHandler(users),
  },
  Mutation: {
    migrateUser: errorHandler(migrateUser),
    registerUser: errorHandler(registerUser),
  },
};

export default resolvers;
