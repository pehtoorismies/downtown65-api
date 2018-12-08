// @flow
const resolvers = {
  Query: {
    users: async (_: void, __: void, { prisma }) => {
      const allUsers = await prisma.users();
      return allUsers;
    },
  },
};

export default resolvers;
