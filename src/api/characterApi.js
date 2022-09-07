import { apiResponse } from "./helper"

export const getCharacters = async () => {
  const response = await apiResponse({
    method: 'GET',
    url: '/character/list'
  })

  return response
}

export const getCharacter = async (params) => {
  const response = await apiResponse({
    method: 'GET',
    url: '/character',
    params,
  })

  return response
}

export const getElements = async () => {
  const response = await apiResponse({
    method: 'GET',
    url: '/element'
  })

  return response
}

export const postCharacter = async (data) => {
  console.log(data)
  const response = await apiResponse({
    method: 'POST',
    url: '/character',
    data
  })

  return response
}

export const deleteCharacters = async (data) => {
  console.log(data)
  const response = await apiResponse({
    method: 'DELETE',
    url: '/character',
    data
  })

  return response;
}


export const updateCharacter = async (data) => {
  console.log(data)
  const response = await apiResponse({
    method: 'PUT',
    url: '/character',
    data
  })

  return response
}
