import { useMyAuth } from '@/hooks'
import { createContext, useContext, useEffect, useState } from 'react'

const StateContext = createContext({
  userInfo: null,
  accessToken: '',
  refreshUserInfo: () => {},
})

export const UserContextProvider = ({ children }: any) => {
  const [userInfo, setUserInfo]: any = useState(null)
  const [accessToken, setAccessToken] = useState('')
  const { getUserInfo, getToken } = useMyAuth()

  const refreshUserInfo = () => {
    getUserInfo().then((user) => {
      if (user) setUserInfo(user)
    })
    getToken().then((token: any) => {
      if (token && token?.length > 0) setAccessToken(token)
    })
  }

  useEffect(() => {
    console.log('user_state_context_render')
    refreshUserInfo()
  }, [])

  return (
    <StateContext.Provider
      value={{
        userInfo,
        refreshUserInfo,
        accessToken,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useUserStateContext = () => useContext(StateContext)
