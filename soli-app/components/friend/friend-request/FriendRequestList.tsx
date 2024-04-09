import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FriendRequestItem from './FriendRequestItem'
import { Link } from 'expo-router'
import { useEffect, useState } from 'react'
import { useFriendApi } from '@/apis'

export default function FriendRequestList() {
  const [state, setState] = useState({
    friendRequestList: [],
    totalFriendRequest: 0,
  })

  const { getFriendRequestList } = useFriendApi()

  const setMultipleState = (value: any) => {
    setState((prev) => ({ ...prev, ...value }))
  }

  const handleGetFriendRequestList = async () => {
    const data = await getFriendRequestList()
    if (data && data.total > 0) {
      setMultipleState({
        friendRequestList: data.data,
        totalFriendRequest: data.total,
      })
    }
  }

  console.log('render friend request list')

  useEffect(() => {
    handleGetFriendRequestList()
  }, [])

  return (
    <>
      {state.totalFriendRequest > 0 ? (
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <Text style={[styles.headerText]}>Lời mời kết bạn</Text>
              <Text style={[styles.headerText, { color: 'red' }]}>{state.totalFriendRequest}</Text>
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
            {state.friendRequestList.slice(0, 4).map((item: any) => (
              <FriendRequestItem
                key={`friendrequest-${item.id}`}
                user={item}
              />
            ))}
          </View>
        </View>
      ) : (
        <View></View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 14,
    paddingBottom: 12,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
    paddingHorizontal: 14,
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
    fontWeight: '500',
  },
})
