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
