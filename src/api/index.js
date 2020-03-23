import axios from 'axios'
import createAxiosAdapter from './axios-adapter'
import { UserTypes } from '../constants'
const { REACT_APP_API_URL: API_URL } = process.env

export const authProviderOptions = {
  authFields: { username: 'email', password: 'password' },
  authUrl: API_URL,
  tokenStorageKey: 'marchavirtual.token',
  userStorageKey: 'marchavirtual.user',
  tokenField: 'token',
  userfield: 'user'
}

const authProvider = createAxiosAdapter(axios, authProviderOptions)

const {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGOUT_REQUEST,
  USERS_ADD_TO_BLACKLIST_REQUEST,
} = UserTypes

export default {
  users: {
    login: (username, password) => authProvider(AUTH_LOGIN_REQUEST, {
      username,
      password,
    }),
    logout: () => authProvider(AUTH_LOGOUT_REQUEST),
    youDamnTroll: twitterId => authProvider(USERS_ADD_TO_BLACKLIST_REQUEST, {
      twitterId
    })
  }
}
