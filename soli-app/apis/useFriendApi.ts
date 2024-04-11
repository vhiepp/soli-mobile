import axiosClient from './axios-client'
import { useApiURL } from './useApiUrl'

const { friendApi } = useApiURL()

export const useFriendApi = () => {
  const getFriendList = async (page = 1) => {
    try {
      const { data } = await axiosClient.get(friendApi.getFriendList, { params: { page } })
      if (!data.error) return data.data
    } catch (error) {}
    return null
  }

  const getFriendRequestList = async (page = 1) => {
    try {
      const { data } = await axiosClient.get(friendApi.getFriendRequestList, { params: { page } })
      if (!data.error) return data.data
    } catch (error) {}
    return null
  }

  const agreedFriendRequest = async (user_request_id: string) => {
    try {
      const { data } = await axiosClient.post(friendApi.agreedFriendRequest, { user_request_id })
      if (!data.error) return true
    } catch (error) {}
    return false
  }

  const deleteFriendRequest = async (user_request_id: string) => {
    try {
      const { data } = await axiosClient.delete(friendApi.agreedFriendRequest, { params: { user_request_id } })
      if (!data.error) return true
    } catch (error) {}
    return false
  }
  return { getFriendRequestList, getFriendList, agreedFriendRequest, deleteFriendRequest }
}
