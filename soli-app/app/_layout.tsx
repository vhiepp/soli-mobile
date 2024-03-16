import FontAwesome from '@expo/vector-icons/FontAwesome'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'

import { useColorScheme } from '@/components/useColorScheme'
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

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

  if (!loaded) {
    return null
  }

  return <RootLayoutNav />
}

function RootLayoutNav() {
  const colorScheme = useColorScheme()

  return (
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
  )
}
