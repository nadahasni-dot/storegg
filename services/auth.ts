import axios from 'axios';
import callAPI from '../config/api';
import { LoginTypes } from './data-types';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export async function setSignUp(data: FormData) {
  const URL = 'auth/signup';

  return callAPI({
    url: `${ROOT_API}/${API_VERSION}/${URL}`,
    method: 'POST',
    data,
  });
}

export async function setLogin(data: LoginTypes) {
  const URL = 'auth/signin';

  return callAPI({
    url: `${ROOT_API}/${API_VERSION}/${URL}`,
    method: 'POST',
    data,
  });
}
