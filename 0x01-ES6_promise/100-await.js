import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const results = await Promise.all([uploadPhoto(), createUser()])
    .then((messages) => ({ photo: messages[0], user: messages[1] }))
    .catch(() => ({ photo: null, user: null }));

  return results;
}
