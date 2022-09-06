import axios from 'axios'
const baseURL = "https://baeintech.herokuapp.com"

export const apiResponse = async ({ method, url, data, headers, params }) => {
  const response = await axios({
    method: method,
    url: baseURL + url,
    data: data,
    headers,
  });

  return response.data
};
