// @flow
import { GraphQLServer } from 'graphql-yoga';
import { prisma } from '../prisma-client';

const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`;

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: () => ({
    context: req => ({
      ...req,
      db: prisma,
    }),
  }),
});
server.start(() => console.log('Server is running on localhost:4000'));
