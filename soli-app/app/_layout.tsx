import FontAwesome from '@expo/vector-icons/FontAwesome'
import 'react-native-reanimated'
import 'react-native-gesture-handler'
import { DarkTheme, DefaultTheme, ThemeProvider, useRoute } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect, useState } from 'react'

import { useColorScheme } from '@/components/useColorScheme'
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { ClerkProvider } from '@clerk/clerk-expo'

import NetInfo from '@react-native-community/netinfo'
import { NoInternet } from '@/components/internet'
import { UserContextProvider } from '@/contexts'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'

const { EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY } = process.env

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [statusInternet, setStatusInternet] = useState(true)
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    LobsterTwoBold: require('../assets/fonts/LobsterTwo-Bold.ttf'),
    LobsterTwoBoldItalic: require('../assets/fonts/LobsterTwo-BoldItalic.ttf'),
    ...FontAwesome.font,
  })

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  useEffect(() => {
    NetInfo.fetch().then((state) => {
      // console.log('Connection type', state.type)
      // console.log('Is connected?', state.isConnected);
      if (!state.isConnected) setStatusInternet(false)
    })
  }, [])

  if (!loaded) {
    return null
  }

  return (
    <UserContextProvider>
      <ClerkProvider publishableKey={`${EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}`}>
        {statusInternet ? <RootLayoutNav /> : <NoInternet />}
      </ClerkProvider>
    </UserContextProvider>
  )
}

function RootLayoutNav() {
  const colorScheme = useColorScheme()

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack>
            <Stack.Screen
              name="(tabs)"
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="following"
              options={{ presentation: 'modal', title: 'Đang theo dõi' }}
            />
            <Stack.Screen
              name="yourfriend"
              options={{ presentation: 'modal', title: 'Bạn bè' }}
            />
            <Stack.Screen
              name="friend-request"
              options={{ presentation: 'modal', title: 'Lời mời kết bạn' }}
            />
            <Stack.Screen
              name="notification"
              options={{ presentation: 'modal', title: 'Thông báo', headerShown: false }}
            />
            <Stack.Screen
              name="sign-in"
              options={{ presentation: 'modal', headerShown: false }}
            />
            <Stack.Screen
              name="oauth-native-callback"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="no-internet"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="short/[id]"
              options={{
                presentation: 'modal',
                title: 'Reels',
                headerTransparent: true,
                headerTintColor: '#fff',
                headerRight: () => (
                  <TouchableOpacity>
                    <Feather
                      name="camera"
                      size={26}
                      color="#fff"
                    />
                  </TouchableOpacity>
                ),
              }}
            />
          </Stack>
        </ThemeProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}
