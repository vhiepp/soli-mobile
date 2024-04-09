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

  const heartChangeForPostId = async (postId: string) => {
    try {
      const { data } = await axiosClient.post(`posts/${postId}/hearts`)
      if (!data.error) return true
    } catch (error) {}
    return false
  }

  const getCommentListForPostId = async (postId: string, page: number) => {
    try {
      if (!page) page = 1
      const { data } = await axiosClient.get(`posts/${postId}/comments`, { params: { page } })
      if (!data.error) return data.data
    } catch (error) {}
    return null
  }

  const commentForPostId = async (postId: string, content: string) => {
    try {
      const { data } = await axiosClient.post(`posts/${postId}/comments`, { content })
      if (!data.error) return data.data
    } catch (error) {}
    return null
  }

  return { getPostListHomePageForYou, heartChangeForPostId, getCommentListForPostId, commentForPostId }
}
