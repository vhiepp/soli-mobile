import React, { useEffect } from 'react'
import { Tabs } from 'expo-router'
import { StyleSheet } from 'react-native'

import Colors from '@/constants/Colors'
import { useColorScheme } from '@/components/useColorScheme'
import { useClientOnlyValue } from '@/components/useClientOnlyValue'
import { MainTabBar } from '@/components/tab-bar'
import { useAuthorization } from '@/hooks'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'

export default function TabLayout() {
  useAuthorization()

  const colorScheme = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarIconStyle: styles.tabBarIconStyle,

        headerShown: useClientOnlyValue(false, true),
      }}
      tabBar={() => <MainTabBar />}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: '',
        }}
      />
      <Tabs.Screen
        name="friend"
        options={{
          headerShown: false,
          title: '',
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: '',
        }}
      />
      <Tabs.Screen
        name="message"
        options={{
          headerShown: false,
          title: '',
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          headerShown: false,
          title: '',
        }}
      />
    </Tabs>
  )
}

const styles = StyleSheet.create({
  title: {
    color: '#000',
    fontSize: 26,
    marginLeft: 15,
    fontWeight: '600',
    fontFamily: 'LobsterTwoBoldItalic',
  },
  header: {},
  headerRight: {
    marginRight: 20,
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
  },
  heart: {
    position: 'relative',
  },
  dotHeart: {
    position: 'absolute',
    width: 9,
    height: 9,
    backgroundColor: '#ff3853',
    borderRadius: 10,
    right: 0,
    top: 1,
  },
  tabBarIconStyle: {},
})
