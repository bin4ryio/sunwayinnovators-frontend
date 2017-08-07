import axios from 'axios'

const { socketScheme, scheme, hostname } =
  process.env.NODE_ENV === 'production'
  // ? { socketScheme: 'wss', scheme: 'https', hostname: window.location.hostname }
  ? { socketScheme: 'wss', scheme: 'https', hostname: 'https://euphoriamy.herokuapp.com/v1' }
  : { socketScheme: 'ws', scheme: 'http', hostname: 'localhost:4000' }

const defaultHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

function buildHeaders () {
  const authToken = !!localStorage.getItem('token')

  return new Headers(Object.assign({}, defaultHeaders, {
    Authorization: authToken
  }))
}

function checkStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

// export const apiURL = `${scheme}://${hostname}/api`
export const apiURL = `${scheme}://${hostname}/v1`
export const socketURL = `${socketScheme}://${hostname}/socket`

export async function httpGet (url) {
  const response = await axios.get(url, {
    headers: buildHeaders()
  })
  return checkStatus(response).json()
}

export async function httpPost (url, body) {
  const data = JSON.stringify(body)
  const response = await axios.post(url, {
    method: 'post',
    headers: buildHeaders(),
    data: data
  })
  return checkStatus(response).json()
}

export async function httpDelete (url) {
  const response = await axios.delete(url, {
    method: 'delete',
    headers: buildHeaders()
  })
  return checkStatus(response).json()
}

export async function httpUpdate (url, body) {
  const data = JSON.stringify(body)
  const response = await axios.put(url, {
    method: 'put',
    headers: buildHeaders(),
    data: data
  })
  return checkStatus(response).json()
}
