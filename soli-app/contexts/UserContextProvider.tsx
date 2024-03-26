import { useStorageAuth } from '@/hooks'
import { createContext, useContext, useEffect, useState } from 'react'

const StateContext = createContext({
  userInfo: null,
  accessToken: '',
  refreshUserInfo: () => {},
  signOut: () => {},
  haveUserInfo: true || false,
})

export const UserContextProvider = ({ children }: any) => {
  const [userInfo, setUserInfo]: any = useState(null)
  const [accessToken, setAccessToken] = useState('')
  const { getUserInfo, getToken, removeToken, removeUserInfo } = useStorageAuth()

  const refreshUserInfo = async () => {
    const user = await getUserInfo()
    if (user) setUserInfo(user)
    await getToken().then((token: any) => {
      if (token && token?.length > 0) setAccessToken(token)
    })
  }

  const signOut = async () => {
    try {
      await removeToken()
      await removeUserInfo()
      setUserInfo(null)
      setAccessToken('')
      return true
    } catch (error) {
      return false
    }
  }

  useEffect(() => {
    refreshUserInfo()
  }, [])

  return (
    <StateContext.Provider
      value={{
        userInfo,
        refreshUserInfo,
        accessToken,
        signOut,
        haveUserInfo: !!userInfo && accessToken.length > 0,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useUserStateContext = () => useContext(StateContext)
