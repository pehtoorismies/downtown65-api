// @flow
import { ManagementClient, AuthenticationClient } from 'auth0';
import config from './config';

const { DOMAIN, CLIENT_ID, CLIENT_SECRET } = config.AUTH0;

const auth0 = new AuthenticationClient({
  domain: DOMAIN,
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
});

const createAuthZeroUser = async (email, password, nick, name) => {
  // valid user => create to Auth0
  const client = await auth0.clientCredentialsGrant({
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
  });
  return authZeroUser;
};

type CreateUserInput = {
  email: String,
  password: String,
  nick: String,
  name: ?String,
};

const resolvers = {
  Query: {
    users: async (_: void, __: void, { prisma }) => {
      const allUsers = await prisma.users();
      return allUsers;
    },
  },
  Mutation: {
    registerUser: async (_: void, args: CreateUserInput, { prisma }) => {
      try {
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
      } catch (error) {
        return error;
      }
    },
  },
};

export default resolvers;
