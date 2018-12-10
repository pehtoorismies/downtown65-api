import dotenv from 'dotenv';

dotenv.config();

const config = {
  AUTH0: {
    DOMAIN: process.env.AUTH0_DOMAIN,
    CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
  },
  PRISMA_ENDPOINT: 'http://localhost:4466',
};

export default config;
