import { useFriendApi } from '@/apis'
import { FriendRequestItem, FriendRequestItemSkeleton } from '@/components/friend'
import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

export default function FriendRequest() {
  const [state, setState] = useState({
    friendRequestList: [],
    totalFriendRequest: 0,
    currentPage: 1,
  })
  const { getFriendRequestList } = useFriendApi()

  const setMultipleState = (value: any) => {
    setState((prev) => ({ ...prev, ...value }))
  }

  const handleGetFriendRequestList = async () => {
    if (state.currentPage > 0) {
      console.log('load friend request list')

      const data = await getFriendRequestList(state.currentPage)
      if (data && data.total > 0) {
        setMultipleState({
          friendRequestList: [...state.friendRequestList, ...data.data],
          totalFriendRequest: data.total,
          currentPage: state.currentPage < data.last_page ? state.currentPage + 1 : 0,
        })
      }
    }
  }

  useEffect(() => {
    handleGetFriendRequestList()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={state.friendRequestList}
        renderItem={({ item }: any) => (
          <FriendRequestItem
            key={`friendrequest-${item.id}`}
            user={item}
          />
        )}
        ListFooterComponent={
          <>
            {state.currentPage > 0 && (
              <>
                <FriendRequestItemSkeleton />
                <FriendRequestItemSkeleton />
                <FriendRequestItemSkeleton />
              </>
            )}
          </>
        }
        onEndReached={handleGetFriendRequestList}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
