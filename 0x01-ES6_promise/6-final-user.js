import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const signUp = await signUpUser(firstName, lastName)
    .then((result) => ({ status: 'fulfilled', value: result }))
    .catch((error) => ({ status: 'rejected', value: error }));

  const photo = await uploadPhoto(fileName)
    .then((result) => ({ status: 'fulfilled', value: result }))
    .catch((error) => ({ status: 'rejected', value: error.toString() }));

  return [signUp, photo];
}
