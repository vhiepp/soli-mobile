import AsyncStorage from '@react-native-async-storage/async-storage'

export default function useAsyncStorage() {
  async function setItemAsyncStorage(key: string, value: any) {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
      console.log('Error in set item in async storage: ', e)
    }
  }

  async function getItemAsyncStorage(key: string) {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      return await (jsonValue != null ? JSON.parse(jsonValue) : null)
    } catch (e) {
      // error reading value
    }
  }

  return {
    setItemAsyncStorage,
    getItemAsyncStorage,
  }
}
