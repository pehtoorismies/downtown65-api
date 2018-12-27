import { createError } from 'apollo-errors';

const FatalError = createError('FatalError', {
  message: 'Your request could not be completed',
});

const NotFoundError = createError('NotFoundError', {
  message: 'Thespecified element was not found',
});

const DuplicateUserError = createError('DuplicateUserError', {
  message: 'A user with the given email address already exists',
});

export { NotFoundError, DuplicateUserError, FatalError };
