import * as SecureStore from 'expo-secure-store'

const TOKEN_SECURE_KEY = 'token_secure_key'
const USER_SECURE_KEY = 'user_secure_key'

const useMyAuth = () => {
  async function getToken() {
    try {
      return await SecureStore.getItemAsync(TOKEN_SECURE_KEY)
    } catch (err) {
      return null
    }
  }

  async function saveToken(token: string) {
    try {
      return await SecureStore.setItemAsync(TOKEN_SECURE_KEY, token)
    } catch (err) {
      return
    }
  }

  async function removeToken() {
    try {
      await saveToken('')
      return true
    } catch (e) {
      return false
    }
  }

  async function getUserInfo() {
    try {
      const jsonValue = await SecureStore.getItem(USER_SECURE_KEY)
      return await (jsonValue != null ? JSON.parse(jsonValue) : null)
    } catch (err) {
      return null
    }
  }

  async function saveUserInfo(value: any) {
    try {
      const jsonValue = JSON.stringify(value)
      return await SecureStore.setItem(USER_SECURE_KEY, jsonValue)
    } catch (e) {
      console.log('Error in set item in async storage: ', e)
    }
  }

  async function removeUserInfo() {
    try {
      await saveUserInfo(null)
      return true
    } catch (e) {
      return false
    }
  }

  return { getToken, saveToken, removeToken, getUserInfo, saveUserInfo, removeUserInfo }
}

export default useMyAuth
