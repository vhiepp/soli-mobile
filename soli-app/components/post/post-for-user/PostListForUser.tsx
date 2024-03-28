import { useState } from 'react'
import { Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import { SceneMap, TabView } from 'react-native-tab-view'

const FirstRoute = () => (
  <View style={{ height: 500, backgroundColor: '#ff4081' }}>
    <Text>hihi</Text>
    <Text>hihi</Text>
    <Text>hihi</Text>
    <Text>hihi</Text>
  </View>
)

const SecondRoute = () => <View style={{ height: 500, backgroundColor: '#673ab7' }} />

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
})

export function PostListForUser() {
  const layout = useWindowDimensions()

  const [index, setIndex] = useState(0)
  const [routes] = useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ])

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  )
}

export const PostCardForUser = () => {
  return <View></View>
}
