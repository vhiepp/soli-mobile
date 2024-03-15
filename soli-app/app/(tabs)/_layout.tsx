import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Link, Tabs } from 'expo-router'
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Colors from '@/constants/Colors'
import { useColorScheme } from '@/components/useColorScheme'
import { useClientOnlyValue } from '@/components/useClientOnlyValue'
import { AntDesign, Feather, Ionicons, Octicons } from '@expo/vector-icons'

export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarIconStyle: styles.tabBarIconStyle,

        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({ color, size }) => (
            <Octicons
              name="home"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="friend"
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({ color, size }) => (
            <Feather
              name="users"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: '',
          tabBarIcon: ({ color, size }) => (
            <Octicons
              name="diff-added"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="short"
        options={{
          title: '',
          tabBarIcon: ({ color, size }) => (
            <Octicons
              name="video"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: '',
          tabBarIcon: ({ color, size }) => (
            <Octicons
              name="person"
              size={size}
              color={color}
            />
          ),
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
