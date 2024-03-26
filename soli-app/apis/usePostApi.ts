import axiosClient from './axios-client'
import { useApiURL } from './useApiUrl'

const { postApi } = useApiURL()

export const usePostApi = () => {
  const getPostListHomePageForYou = async (excPostList: string) => {
    try {
      const { data } = await axiosClient.post(postApi.postListForYou, { except_posts: excPostList })
      if (!data.error) return data.data
    } catch (error) {}
    return null
  }
  return { getPostListHomePageForYou }
}
