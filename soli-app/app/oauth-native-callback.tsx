import { useEffect } from 'react'
import { useAuth, useUser } from '@clerk/clerk-expo'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { useMyAuth } from '@/hooks'
import { useRouter } from 'expo-router'
import { useUserStateContext } from '@/contexts'
import axiosClient from '@/apis/axios-client'

const Page = () => {
  const { user } = useUser()
  const { signOut } = useAuth()
  const { saveUserInfo, saveToken } = useMyAuth()
  const router = useRouter()
  const { refreshUserInfo } = useUserStateContext()

  useEffect(() => {
    async function checkSignIn() {
      if (user) {
        const post = {
          sign_in_provider: 'social-sign-in',
          provider_id: user.id,
          email: user.emailAddresses.toString(),
          full_name: user.fullName,
          firstname: user.firstName,
          lastname: user.lastName,
          avatar_url: user.imageUrl,
        }
        signOut()

        const { data } = await axiosClient.post('auth/sign-in-with-oauth', post)

        if (!data.error) {
          saveToken(data.data.access_token)
          await saveUserInfo(data.data.profile)
          router.dismissAll()
          refreshUserInfo()
          router.replace('/(tabs)/')
        } else {
        }
      } else {
      }
    }
    checkSignIn()
  }, [user])

  return (
    <View style={styles.container}>
      <ActivityIndicator
        size={40}
        color="#ccc"
      />
      <Text style={styles.textSignIn}>Chờ một xíu!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  textSignIn: {
    fontSize: 12,
    color: '#ccc',
  },
})

export default Page
