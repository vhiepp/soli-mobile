import { ViewContent } from '@/components/Themed'
import { AccountScreenHeader } from '@/components/header'
import { RefreshSpinner } from '@/components/spinner'
import { UserBoxInfo } from '@/components/user'
import { useUserStateContext } from '@/contexts'
import { useAuthorization } from '@/hooks'
import { useEffect, useState } from 'react'
import { ScrollView, StatusBar, StyleSheet } from 'react-native'

export default function Account() {
  const [refreshing, setRefreshing] = useState(false)
  const { userInfo } = useUserStateContext()

  useEffect(() => {}, [])

  const onRefresh = () => {
    // goi api
    setRefreshing(true)

    // Thực hiện các thao tác tải lại dữ liệu ở đây
    setTimeout(() => {
      setRefreshing(false) // khi hoan thanh
    }, 1500) // Giả định rằng việc tải lại mất khoảng 2 giây
  }

  return (
    <ViewContent style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshSpinner
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <AccountScreenHeader />
        <UserBoxInfo userInfo={userInfo} />
      </ScrollView>
    </ViewContent>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
})
