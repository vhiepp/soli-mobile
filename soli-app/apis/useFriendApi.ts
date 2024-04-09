import axiosClient from './axios-client'
import { useApiURL } from './useApiUrl'

const { friendApi } = useApiURL()

export const useFriendApi = () => {
  const getFriendRequestList = async (page = 1) => {
    try {
      const { data } = await axiosClient.get(friendApi.getFriendRequestList, { params: { page } })
      if (!data.error) return data.data
    } catch (error) {}
    return null
  }
  return { getFriendRequestList }
}
