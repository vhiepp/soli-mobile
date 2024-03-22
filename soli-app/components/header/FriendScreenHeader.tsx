import { Octicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function FriendScreenHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.headerSearch}>
        <Text style={styles.friendText}>Bạn bè</Text>
        <TouchableOpacity style={styles.btnSearch}>
          <Octicons
            name="search"
            size={20}
            color="#000"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.headerBtnLink}>
        <TouchableOpacity style={styles.btnLink}>
          <Link href={'/yourfriend'}>
            <Text style={styles.textBtnLink}>Bạn bè</Text>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnLink}>
          <Link href={'/following'}>
            <Text style={styles.textBtnLink}>Theo dõi</Text>
          </Link>
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
  headerBtnLink: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginTop: 8,
    paddingHorizontal: 12,
  },
  btnLink: {
    paddingHorizontal: 16,
    paddingVertical: 5,
    borderRadius: 18,
    backgroundColor: '#e8ebeb',
  },
  textBtnLink: {
    fontSize: 16,
    fontWeight: '400',
  },
})
