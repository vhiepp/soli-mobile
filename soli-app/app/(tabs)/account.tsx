import { ViewContent } from '@/components/Themed'
import { AccountScreenHeader } from '@/components/header'
import { RefreshSpinner } from '@/components/spinner'
import { UserBoxInfo, UserExplore } from '@/components/user'
import { useUserStateContext } from '@/contexts'
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'
import { FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Account() {
  const [refreshing, setRefreshing] = useState(false)

  const { userInfo } = useUserStateContext()

  const onRefresh = () => {
    // goi api
    setRefreshing(true)
    // Thực hiện các thao tác tải lại dữ liệu ở đây
    setTimeout(() => {
      setRefreshing(false) // khi hoan thanh
    }, 1500)
  }

  return (
    <ViewContent style={styles.container}>
      <FlatList
        data={[]}
        renderItem={() => <View></View>}
        refreshControl={
          <RefreshSpinner
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <AccountScreenHeader />
            <UserBoxInfo
              userUid={
                // @ts-ignore
                userInfo?.uid
              }
            />
            <View style={styles.boxBtnAction}>
              <TouchableOpacity style={[styles.btnAction, { flex: 1 }]}>
                <Text
                  style={{ fontWeight: '600' }}
                  numberOfLines={1}
                >
                  Chỉnh sửa trang cá nhân
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btnAction, { flex: 1 }]}>
                <Text
                  style={{ fontWeight: '600', color: '#000' }}
                  numberOfLines={1}
                >
                  Chia sẻ trang cá nhân
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btnAction, { padding: 6 }]}>
                <Ionicons
                  name="person-add-sharp"
                  size={20}
                  color="black"
                />
              </TouchableOpacity>
            </View>
            <UserExplore />
          </>
        }
      />
    </ViewContent>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  boxBtnAction: {
    flexDirection: 'row',
    paddingHorizontal: 14,
    gap: 6,
    maxWidth: '100%',
    justifyContent: 'space-between',
  },
  btnAction: {
    backgroundColor: '#ebebeb',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 6,
  },
})
