import axiosClient from './axios-client'
import { useApiURL } from './useApiUrl'

const { followApi } = useApiURL()

export const useFollowApi = () => {
  const getFollowingList = async (page = 1) => {
    try {
      const { data } = await axiosClient.get(followApi.getFollowingList, { params: { page } })
      if (!data.error) return data.data
    } catch (error) {}
    return null
  }
  return { getFollowingList }
}
