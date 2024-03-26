import axiosClient from './axios-client'
import { useApiURL } from './useApiUrl'

const { authApi } = useApiURL()

export const useAuthApi = () => {
  const signInWithEmaiPassword = async (email: string, password: string) => {
    try {
      if (email.length > 0 && password.length > 0) {
        const { data } = await axiosClient.post(authApi.signInWithEmailPassword, { email, password })
        if (!data.error) return data.data
      }
    } catch (error) {}
    return null
  }

  const signInWithOAuth = async (userOAuthInfo: any) => {
    try {
      const { data } = await axiosClient.post(authApi.signInWithOAuth, userOAuthInfo)
      if (!data.error) return data.data
    } catch (error) {}
    return null
  }

  return {
    signInWithEmaiPassword,
    signInWithOAuth,
  }
}
