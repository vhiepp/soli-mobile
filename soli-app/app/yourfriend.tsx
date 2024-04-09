import { FriendItem } from '@/components/friend'
import { FlatList, StyleSheet, Text, View } from 'react-native'

export default function YourFriend() {
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={HeaderComponent}
        data={[1, 1, 1, 1]}
        renderItem={() => <FriendItem />}
      />
    </View>
  )
}

const HeaderComponent = () => {
  return (
    <View>
      <View></View>
      <View style={{ paddingHorizontal: 14 }}>
        <Text style={{ fontSize: 18, fontWeight: '700' }}>25 bạn bè</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
