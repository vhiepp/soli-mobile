import { Image } from 'expo-image'
import { StyleSheet, Text, View } from 'react-native'

export default function MessageItem() {
  return (
    <View style={styles.container}>
      <View style={styles.roomImage}>
        <Image
          source={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQIxLGhYK3eAm_vWoR3A1l8Iq6_z_-ECWdoQ&usqp=CAU'}
          style={{ width: '100%', height: '100%' }}
        />
      </View>
      <View style={styles.boxContent}>
        <Text
          style={styles.roomName}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          Văn Hiệp
        </Text>
        <View style={styles.boxDesc}>
          <Text
            style={styles.roomDesc}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Huế: Hihi
          </Text>
          <View style={styles.dotDesc}></View>
          <Text>T3</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 14,
  },
  roomImage: {
    width: 70,
    height: 70,
    borderRadius: 100,
    overflow: 'hidden',
  },
  boxContent: {
    gap: 4,
    paddingLeft: 12,
    flex: 1,
  },
  roomName: {
    fontSize: 20,
    fontWeight: '800',
    maxWidth: 250,
  },
  boxDesc: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dotDesc: {
    width: 5,
    height: 5,
    borderRadius: 10,
    backgroundColor: '#000',
    marginHorizontal: 8,
  },
  roomDesc: {
    maxWidth: 250,
    fontSize: 15,
    fontWeight: '500',
    color: '#4a4a4a',
  },
})
