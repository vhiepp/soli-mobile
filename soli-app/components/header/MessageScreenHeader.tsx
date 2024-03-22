import { Octicons, SimpleLineIcons } from '@expo/vector-icons'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function MessageScreenHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.headerSearch}>
        <Text style={styles.friendText}>Đoạn chat</Text>
        <TouchableOpacity style={styles.btnSearch}>
          <SimpleLineIcons
            name="settings"
            size={19}
            color="#000"
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
  },
  headerSearch: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingHorizontal: 18,
  },
  friendText: {
    fontSize: 24,
    fontWeight: '700',
  },
  btnSearch: {
    width: 35,
    height: 35,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8ebeb',
  },
})
