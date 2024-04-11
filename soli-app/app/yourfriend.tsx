import { FriendItem, FriendItemSkeleton } from '@/components/friend'
import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useFriendApi } from '@/apis'
import { RefreshSpinner } from '@/components/spinner'

export default function YourFriend() {
  const [state, setState] = useState({
    friendList: [],
    currentPage: 1,
    friendTotal: 0,
    refreshing: false,
  })

  const { getFriendList } = useFriendApi()

  const setMultipleState = (value: any) => {
    setState((prev) => ({ ...prev, ...value }))
  }

  const handleGetFriendList = async () => {
    if (state.currentPage > 0) {
      const data = await getFriendList(state.currentPage)
      console.log('get friend list currentPage', state.currentPage)

      if (data && data.total > 0) {
        setMultipleState({
          friendList: [...state.friendList, ...data.data],
          friendTotal: data.total,
          currentPage: state.currentPage < data.last_page ? state.currentPage + 1 : 0,
          refreshing: false,
        })
      }
    }
  }

  const handleOnRefresh = async () => {
    setMultipleState({
      refreshing: true,
      friendList: [],
      currentPage: 1,
      friendTotal: 0,
    })
  }

  useEffect(() => {
    if (state.refreshing) {
      handleGetFriendList()
    }
  }, [state.refreshing])

  useEffect(() => {
    if (state.currentPage === 2 && !state.refreshing) handleGetFriendList()
  }, [state.currentPage])

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => <HeaderComponent friendTotal={state.friendTotal} />}
        ListFooterComponent={
          <>
            {state.currentPage > 0 && (
              <>
                <FriendItemSkeleton />
                <FriendItemSkeleton />
                <FriendItemSkeleton />
              </>
            )}
          </>
        }
        refreshControl={
          <RefreshSpinner
            refreshing={state.refreshing}
            onRefresh={handleOnRefresh}
          />
        }
        data={state.friendList}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={1}
        onEndReached={handleGetFriendList}
        keyExtractor={(item: any) => `friend-${item.id}`}
        renderItem={({ item }) => <FriendItem user={item} />}
      />
    </View>
  )
}

const HeaderComponent = ({ friendTotal }: any) => {
  return (
    <View>
      <View></View>
      <View style={{ paddingHorizontal: 14 }}>
        <Text style={{ fontSize: 18, fontWeight: '700' }}>{friendTotal} bạn bè</Text>
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
