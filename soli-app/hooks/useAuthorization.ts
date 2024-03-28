import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import useMyAuth from './useStorageAuth'

export function useAuthorization() {
  const router = useRouter()
  const { getToken, getUserInfo } = useMyAuth()
  const check = async () => {
    const user = await getUserInfo()
    const token = await getToken()

    if (user === null || token === null) {
      if (router.canDismiss()) {
        router.dismissAll()
      }
      router.replace('/sign-in')
    }
  }
  useEffect(() => {
    check()
  }, [])
}
