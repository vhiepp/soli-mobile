import { TextInputCustom } from '@/components/form'
import { Line } from '@/components/theme'
import { useMyAuth, useWarmUpBrowser } from '@/hooks'
import { useOAuth } from '@clerk/clerk-expo'
import { AntDesign } from '@expo/vector-icons'
import { ImageBackground } from 'expo-image'
import { Link, useRouter } from 'expo-router'
import { useCallback, useEffect, useState } from 'react'
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as WebBrowser from 'expo-web-browser'
import axiosClient from '@/apis/axios-client'
import { useUserStateContext } from '@/contexts'

WebBrowser.maybeCompleteAuthSession()

const SOCIAL_OAUTH = {
  GOOGLE: 'oauth_google',
  GITHUB: 'oauth_github',
  FACEBOOK: 'oauth_facebook',
}

export default function SignInScreen() {
  const OAuth = {
    oauth_google: useOAuth({ strategy: 'oauth_google' }),
    // oauth_github: useOAuth({ strategy: 'oauth_github' }),
    // oauth_facebook: useOAuth({ strategy: 'oauth_facebook' }),
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { saveUserInfo, saveToken } = useMyAuth()
  const { refreshUserInfo } = useUserStateContext()
  const router = useRouter()

  useWarmUpBrowser()

  const handleSignInWithPassword = async () => {
    if (email.length > 0 && password.length > 0) {
      const { data } = await axiosClient.post('auth/sign-in', { email, password })
      // console.log(data.data.profile.current_avatar.url)
      console.log(data)

      if (!data.error) {
        saveToken(data.data.access_token)
        await saveUserInfo(data.data.profile)
        router.dismissAll()
        refreshUserInfo()
        router.replace('/(tabs)/')
      }
    }
  }

  const signInWithOAuth = useCallback(async (socialOAuth: string) => {
    try {
      // @ts-ignore
      const { createdSessionId, setActive } = await OAuth[socialOAuth].startOAuthFlow()

      if (createdSessionId) {
        await setActive!({ session: createdSessionId })
      } else {
      }
    } catch (err) {
      console.log(err)
    }
  }, [])

  useEffect(() => {
    console.log(process.env.EXPO_PUBLIC_SERVER_DOMAIN)
  }, [])

  return (
    <ImageBackground
      style={styles.imageBackground}
      source={require('../assets/images/bg-1.jpg')}
      blurRadius={50}
    >
      <View style={styles.container}>
        <View style={styles.boxHeader}>
          <Text style={styles.textWelcome}>Chào mừng!</Text>
          <Text style={styles.appName}>Soli</Text>
        </View>
        <View style={styles.boxContentForm}>
          <TextInputCustom
            placeholder="Email hoặc số điện thoại"
            value={email}
            // @ts-ignore
            onChange={(e) => setEmail(e)}
          />
          <TextInputCustom
            placeholder="Mật khẩu"
            secureTextEntry={true}
            value={password}
            // @ts-ignore
            onChange={(e) => setPassword(e)}
          />
          <TouchableOpacity
            style={[styles.btnSignIn]}
            activeOpacity={0.8}
            onPress={handleSignInWithPassword}
          >
            <Text style={styles.textBtnSignIn}>ĐĂNG NHẬP</Text>
          </TouchableOpacity>
          <View style={styles.lineOr}>
            <Line style={{ flex: 1 }} />
            <Text style={{ fontSize: 12, fontWeight: '600', color: '#787878' }}>HOẶC</Text>
            <Line style={{ flex: 1 }} />
          </View>
          <TouchableOpacity
            style={[styles.btnSignIn, { backgroundColor: '#fff', borderWidth: 1, borderColor: '#1b1b1b' }]}
            activeOpacity={0.5}
            onPress={() => signInWithOAuth(SOCIAL_OAUTH.GOOGLE)}
          >
            <AntDesign
              name="google"
              size={24}
              color="#000"
            />
            <Text style={[styles.textBtnSignIn, { color: '#000' }]}>Đăng nhập với Google</Text>
          </TouchableOpacity>
        </View>
        <Line />
        <View style={styles.boxFooter}>
          <Text style={{ color: '#1b1b1b', fontSize: 12 }}>Bạn chưa có tài khoản?</Text>
          <Link
            style={{ color: '#2196F3', fontSize: 13 }}
            href={'/(tabs)/'}
          >
            Đăng ký
          </Link>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: StatusBar.currentHeight,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  boxHeader: {
    flex: 1,
    maxHeight: '30%',
    justifyContent: 'center',
  },
  textWelcome: {
    color: '#1b1b1b',
    textAlign: 'center',
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    fontSize: 12,
  },
  appName: {
    color: '#1b1b1b',
    fontSize: 38,
    textAlign: 'center',
    fontWeight: '600',
    fontFamily: 'LobsterTwoBoldItalic',
  },
  boxContentForm: {
    flex: 1,
    paddingHorizontal: 18,
    gap: 12,
  },
  boxFooter: {
    paddingBottom: 14,
    paddingTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  btnSignIn: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#2196F3',
    paddingVertical: 14,
    borderRadius: 13,
    justifyContent: 'center',
    gap: 10,
  },
  textBtnSignIn: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  lineOr: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
})
