import { ViewContent } from '@/components/Themed'
import { MessageScreenHeader } from '@/components/header'
import { MessageList } from '@/components/message'
import { RefreshSpinner } from '@/components/spinner'
import { MessageStatusBar } from '@/components/status-bar'
import { useState } from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'

export default function message() {
  const [refreshing, setRefreshing] = useState(false)

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
        showsHorizontalScrollIndicator={false}
        refreshControl={
          <RefreshSpinner
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <MessageScreenHeader />
        <View style={styles.boxSearch}>
          <TextInput
            placeholder="Tìm kiếm"
            style={styles.inputSearch}
          />
        </View>
        <MessageStatusBar />
        {!refreshing && <MessageList />}
      </ScrollView>
    </ViewContent>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  boxSearch: {
    width: '100%',
    paddingHorizontal: 14,
  },
  inputSearch: {
    fontSize: 16,
    backgroundColor: '#ebebeb',
    paddingVertical: 4,
    paddingHorizontal: 18,
    borderRadius: 16,
  },
})
