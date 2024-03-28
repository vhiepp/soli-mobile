import { useEffect } from 'react'
import { useAuth, useUser } from '@clerk/clerk-expo'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { useRouter } from 'expo-router'
import { useUserStateContext } from '@/contexts'
import { useStorageAuth } from '@/hooks'
import { useAuthApi } from '@/apis'

const Page = () => {
  const { user } = useUser()
  const { signOut } = useAuth()
  const { saveUserInfo, saveToken } = useStorageAuth()
  const router = useRouter()
  const { refreshUserInfo } = useUserStateContext()
  const { signInWithOAuth } = useAuthApi()

  useEffect(() => {
    async function checkSignIn() {
      if (user) {
        try {
          const data = await signInWithOAuth({
            sign_in_provider: 'social-sign-in',
            provider_id: user.id,
            email: user.emailAddresses.toString(),
            full_name: user.fullName,
            firstname: user.firstName,
            lastname: user.lastName,
            avatar_url: user.imageUrl,
          })
          signOut()
          if (data) {
            saveToken(data.access_token)
            await saveUserInfo(data.profile)
            if (router.canDismiss()) router.dismissAll()
            router.replace('/(tabs)/')
            refreshUserInfo()
            return
          }
        } catch (err) {}
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
