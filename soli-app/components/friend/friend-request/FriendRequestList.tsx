import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FriendRequestItem from './FriendRequestItem'
import { Link } from 'expo-router'

export default function FriendRequestList() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={[styles.headerText]}>Lời mời kết bạn</Text>
          <Text style={[styles.headerText, { color: 'red' }]}>2</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Link href={'/friend-request'}>
              <Text style={[styles.headerText, styles.textSeeAll]}>Xem tất cả</Text>
            </Link>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <FriendRequestItem />
        <FriendRequestItem />
        <FriendRequestItem />
        <FriendRequestItem />
        <FriendRequestItem />
        <FriendRequestItem />
        <FriendRequestItem />
        <FriendRequestItem />
        <FriendRequestItem />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 12,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  headerLeft: {
    display: 'flex',
    flexDirection: 'row',
    gap: 6,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
  },
  textSeeAll: {
    color: '#0681ee',
    fontSize: 18,
    fontWeight: '400',
  },
})
