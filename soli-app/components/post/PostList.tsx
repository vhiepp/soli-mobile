import { StyleSheet, View } from 'react-native'
import Post from './Post'
import { Line } from '../theme'

export default function PostList() {
  return (
    <View style={styles.container}>
      <Post />
      <Line />
      <Post />
      <Line />
      <Post />
      <Line />
      <Post />
      <Line />
      <Post />
      <Line />
      <Post />
      <Line />
      <Post />
      <Line />
      <Post />
      <Line />
      <Post />
      <Line />
      <Post />
      <Line />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccc',
  },
})
