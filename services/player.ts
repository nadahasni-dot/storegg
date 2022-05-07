import callAPI from '../config/api';
import { CheckoutTypes } from './data-types';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export async function getFeaturedGame() {
  const URL = 'players/landingpage';

  return callAPI({
    url: `${ROOT_API}/${API_VERSION}/${URL}`,
    method: 'GET',
    data: {},
  });
}

export async function getDetailVoucher(id: string) {
  const URL = `players/${id}/detail`;

  return callAPI({
    url: `${ROOT_API}/${API_VERSION}/${URL}`,
    method: 'GET',
    data: {},
  });
}

export async function getGameCategories() {
  const URL = 'players/category';

  return callAPI({
    url: `${ROOT_API}/${API_VERSION}/${URL}`,
    method: 'GET',
    data: {},
  });
}

export async function setCheckout(data: CheckoutTypes) {
  const URL = 'players/checkout';

  return callAPI({
    url: `${ROOT_API}/${API_VERSION}/${URL}`,
    method: 'POST',
    data,
    token: true,
  });
}
