import { AntDesign, Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function HomeScreenHeader() {
  const router = useRouter()

  return (
    <View style={styles.header}>
      <Text style={styles.title}>Soli</Text>
      <View style={styles.headerRight}>
        <TouchableOpacity style={styles.heart}>
          <Ionicons
            name="heart-outline"
            size={28}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/notification')}>
          <Ionicons
            name="notifications-outline"
            size={28}
            color="black"
          />
          <View style={styles.dotNotification}></View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: '#000',
    fontSize: 26,
    marginLeft: 15,
    fontWeight: '600',
    fontFamily: 'LobsterTwoBoldItalic',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  headerRight: {
    marginRight: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  heart: {
    position: 'relative',
  },
  dotHeart: {
    position: 'absolute',
    width: 9,
    height: 9,
    backgroundColor: '#ff3853',
    borderRadius: 10,
    right: 0,
    top: 1,
  },
  dotNotification: {
    position: 'absolute',
    width: 9,
    height: 9,
    backgroundColor: '#ff3853',
    borderRadius: 10,
    right: 3,
    top: 2,
  },
  tabBarIconStyle: {},
})
