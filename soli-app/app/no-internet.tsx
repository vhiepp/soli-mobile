import { ViewContent } from '@/components/Themed'
import { RefreshSpinner } from '@/components/spinner'
import { MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import NetInfo from '@react-native-community/netinfo'
import { useRouter } from 'expo-router'

const { height } = Dimensions.get('window')

export default function NoInternetScreen() {
  const [refreshing, setRefreshing] = useState(false)
  const router = useRouter()

  const onRefresh = () => {
    // goi api
    setRefreshing(true)
    NetInfo.fetch().then((state) => {
      // console.log('Connection type', state.type)
      // console.log('Is connected?', state.isConnected)
      setRefreshing(false)
      if (state.isConnected) router.replace('/(tabs)/')
    })
  }

  return (
    <ViewContent style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshSpinner
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <View style={{ height, justifyContent: 'center', alignItems: 'center' }}>
          <MaterialIcons
            name="wifi-off"
            style={styles.wifiIcon}
          />
          <Text style={{ fontSize: 16, color: '#ccc', fontWeight: '600' }}>No Internet</Text>
        </View>
      </ScrollView>
    </ViewContent>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wifiIcon: {
    fontSize: 120,
    color: '#ccc',
  },
})
