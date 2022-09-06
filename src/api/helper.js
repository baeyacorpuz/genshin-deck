import axios from 'axios'
const baseURL = "http://localhost:5000"

export const apiResponse = async ({ method, url, data, headers, params }) => {
  const response = await axios({
    method: method,
    url: baseURL + url,
    data: data,
    headers,
  });

  return response.data
};
