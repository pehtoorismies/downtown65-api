// @flow
import { AuthenticationClient } from 'auth0';
import * as Errors from './errors';
import config from './config';

const { DOMAIN, CLIENT_ID, CLIENT_SECRET } = config.AUTH0;

const authClient = new AuthenticationClient({
  domain: DOMAIN,
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
});

const errorHandler = (resolver: any) => async (...args) => {
  try {
    return await resolver(...args);
  } catch (error) {
    if (error.name in Errors) {
      throw error;
    }
    console.error(error);
    throw new Errors.FatalError();
  }
};

export { errorHandler, authClient };
