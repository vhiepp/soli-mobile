import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import MessageStatusItem from './MessageStatusItem'

const { width, height } = Dimensions.get('window')

export default function MessageStatusBar() {
  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.container}
      >
        <View style={styles.statusItemList}>
          <MessageStatusItem />
          <MessageStatusItem />
          <MessageStatusItem />
          <MessageStatusItem />
          <MessageStatusItem />
          <MessageStatusItem />
          <MessageStatusItem />
          <MessageStatusItem />
          <MessageStatusItem />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginBottom: 16,
  },
  statusItemList: {
    minWidth: width,
    display: 'flex',
    flexDirection: 'row',
  },
})
