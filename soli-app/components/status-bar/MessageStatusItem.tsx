import { Image } from 'expo-image'
import { StyleSheet, Text, View } from 'react-native'

export default function MessageStatusItem() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.authorAvatar}
        source={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQIxLGhYK3eAm_vWoR3A1l8Iq6_z_-ECWdoQ&usqp=CAU'}
      />
      <Text style={styles.authorName}>vhiep</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 14,
    overflow: 'hidden',
    alignItems: 'center',
    gap: 8,
  },
  authorAvatar: {
    width: 85,
    height: 85,
    borderRadius: 85,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  authorName: {
    fontWeight: '600',
    fontSize: 14,
  },
})
