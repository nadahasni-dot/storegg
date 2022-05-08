import callAPI from '../config/api';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export async function getMemberTransactions(valueParams: string) {
  let params = '';

  if (valueParams === 'all') {
    params = '';
  } else {
    params = `?status=${valueParams}`;
  }

  const URL = 'players/history';

  return callAPI({
    url: `${ROOT_API}/${API_VERSION}/${URL}${params}`,
    method: 'GET',
    data: {},
    token: true,
  });
}

export async function getMemberOverview() {
  const URL = 'players/dashboard';

  return callAPI({
    url: `${ROOT_API}/${API_VERSION}/${URL}`,
    method: 'GET',
    data: {},
    token: true,
  });
}

export async function getTransactionDetail(id: string, token: string) {
  const URL = `players/history/${id}/detail`;

  return callAPI({
    url: `${ROOT_API}/${API_VERSION}/${URL}`,
    method: 'GET',
    data: {},
    serverToken: token,
  });
}

export async function updateProfile(data: FormData) {
  const URL = 'players/profile';

  return callAPI({
    url: `${ROOT_API}/${API_VERSION}/${URL}`,
    method: 'PUT',
    data,
    token: true,
  });
}
