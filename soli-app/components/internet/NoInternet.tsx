import { ViewContent } from '@/components/Themed'
import { MaterialIcons } from '@expo/vector-icons'
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'

const { height } = Dimensions.get('window')

export default function NoInternet() {
  return (
    <ViewContent style={styles.container}>
      <View style={{ height, justifyContent: 'center', alignItems: 'center' }}>
        <MaterialIcons
          name="wifi-off"
          style={styles.wifiIcon}
        />
        <Text style={{ fontSize: 16, color: '#ccc', fontWeight: '600' }}>No Internet</Text>
      </View>
    </ViewContent>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wifiIcon: {
    fontSize: 120,
    color: '#ccc',
  },
})
