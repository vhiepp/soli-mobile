import { useAsyncStorage } from '@/hooks'
import { useEffect } from 'react'
import { Text, View } from 'react-native'

export default function FollowingScreen() {
  const { setItemAsyncStorage } = useAsyncStorage()
  useEffect(() => {
    setItemAsyncStorage('test', { a: 'b' })
  }, [])
  return (
    <View>
      <Text>Following</Text>
    </View>
  )
}
