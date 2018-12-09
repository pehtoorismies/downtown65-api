// @flow
import { GraphQLServer } from 'graphql-yoga';
import { importSchema } from 'graphql-import';
import resolvers from './resolvers';
import './config';
import { prisma } from './prisma-client';

const typeDefs = importSchema(`${__dirname}/schema.graphql`);

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: req => ({
    ...req,
    prisma,
  }),
});
server.start(() => console.log('Server is running on localhost:4000'));
