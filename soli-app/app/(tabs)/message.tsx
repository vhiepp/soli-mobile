import { ViewContent } from '@/components/Themed'
import { MessageScreenHeader } from '@/components/header'
import { MessageList } from '@/components/message'
import { MessageStatusBar } from '@/components/status-bar'
import { ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'

export default function message() {
  return (
    <ViewContent style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <MessageScreenHeader />
        <View style={styles.boxSearch}>
          <TextInput
            placeholder="Tìm kiếm"
            style={styles.inputSearch}
          />
        </View>
        <MessageStatusBar />
        <MessageList />
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
