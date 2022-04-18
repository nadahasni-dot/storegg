import axios, { AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

interface callApiProps extends AxiosRequestConfig {
  token?: boolean;
}

export default async function callAPI({
  url, method, data, token,
}: callApiProps) {
  let headers = {};

  if (token) {
    const tokenCookies = Cookies.get('token');

    if (tokenCookies) {
      const jwtToken = atob(tokenCookies);
      headers = {
        Authorization: `Bearer ${jwtToken}`,
      };
    }
  }

  const response = await axios({
    url,
    method,
    data,
    headers,
  }).catch((error) => error.response);

  if (response.status > 300) {
    const res = {
      error: true,
      message: response.data.message,
      data: null,
    };
    return res;
  }

  const { length } = Object.keys(response.data);

  const res = {
    error: false,
    message: 'success',
    data: length > 3 ? response.data : response.data.data,
  };

  return res;
}
