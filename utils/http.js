/* eslint-disable */

import fetch from 'isomorphic-fetch'
import { polyfill } from 'es6-promise'

const { socketScheme, scheme, hostname } =
  process.env.NODE_ENV === 'production'
  ? { socketScheme: 'wss', scheme: 'https', hostname: window.location.hostname }
  : { socketScheme: 'ws', scheme: 'http', hostname: 'localhost:5000' }

const defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

function buildHeaders () {
    const jwt = localStorage.getItem('jwt')
    return !jwt ? defaultHeaders : {
        ...defaultHeaders,
        'Authorization': `Bearer ${jwt}`
    }
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

function parseJSON (response) {
  return response.json()
    .then((json) => ({
      data: json,
      description: response.description,
      status: response.status
    }))
}

export const apiURL = `${scheme}://${hostname}/api`
export const socketURL = `${socketScheme}://${hostname}/socket`

export async function httpGet (url) {
  const options = {
    headers: buildHeaders()
  }
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
}

export async function httpPost (url, data) {
  const body = JSON.stringify(data)
  const options = {
    method: 'POST',
    headers: buildHeaders(),
    body: body
  }
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
}

export async function httpDelete (url) {
  const options = {
    method: 'DELETE',
    headers: buildHeaders()
  }
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
}

export async function httpUpdate (url, data) {
  const body = JSON.stringify(data)
  const options = {
    method: 'PUT',
    headers: buildHeaders(),
    body: body
  }
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
}
