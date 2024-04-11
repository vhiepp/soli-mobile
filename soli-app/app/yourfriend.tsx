import { FriendItem } from '@/components/friend'
import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useFriendApi } from '@/apis'

export default function YourFriend() {
  const [state, setState] = useState({
    friendList: [],
    currentPage: 1,
    friendTotal: 0,
  })

  const { getFriendList } = useFriendApi()

  const setMultipleState = (value: any) => {
    setState((prev) => ({ ...prev, ...value }))
  }

  const handleGetFriendList = async () => {
    if (state.currentPage > 0) {
      const data = await getFriendList(state.currentPage)
      // console.log(data)

      if (data && data.total > 0) {
        setMultipleState({
          friendList: [...state.friendList, ...data.data],
          friendTotal: data.total,
          currentPage: state.currentPage < data.last_page ? state.currentPage + 1 : 0,
        })
      }
    }
  }

  useEffect(() => {
    handleGetFriendList()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => <HeaderComponent friendTotal={state.friendTotal} />}
        data={state.friendList}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onEndReached={handleGetFriendList}
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
