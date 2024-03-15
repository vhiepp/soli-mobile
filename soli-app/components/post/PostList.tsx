import { StyleSheet, View } from 'react-native'
import Post from './Post'

export default function PostList() {
  return (
    <View style={styles.container}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccc',
  },
})
