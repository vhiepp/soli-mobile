import axiosClient from './axios-client'
import { useApiURL } from './useApiUrl'

const { userApi } = useApiURL()

export const useUserApi = () => {
  const getUserProfileWithUid = async (uid: string) => {
    try {
      const { data } = await axiosClient.post(userApi.getUserProfileWithUid, { uid })
      if (!data.error) return data.data
    } catch (error) {}
    return null
  }
  return { getUserProfileWithUid }
}
