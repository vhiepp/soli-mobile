import { Octicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const { width } = Dimensions.get('window')

export default function FriendScreenHeader() {
  const router = useRouter()
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
      <ScrollView
        style={styles.headerBtnLink}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ flexDirection: 'row', minWidth: width, paddingHorizontal: 12, gap: 8 }}>
          <TouchableOpacity
            style={styles.btnLink}
            onPress={() => router.push('/yourfriend')}
          >
            <Text style={styles.textBtnLink}>Bạn bè</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnLink}>
            <Text style={styles.textBtnLink}>Theo dõi</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnLink}
            onPress={() => {
              router.push('/following')
            }}
          >
            <Text style={styles.textBtnLink}>Đang theo dõi</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    marginTop: 8,
    minWidth: width,
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
