import { FontAwesome5 } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { memo } from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'

const { EXPO_PUBLIC_DEFAULT_AVATAR } = process.env

function FriendItem({ user }: any) {
  console.log('render friend item ', user.uid)

  return (
    <TouchableNativeFeedback
      // @ts-ignore
      background={TouchableNativeFeedback.Ripple('#ededed')}
    >
      <View style={styles.container}>
        <View style={styles.userInfoBox}>
          <View style={styles.avatarBox}>
            <Image
              source={user ? user.current_avatar.url : EXPO_PUBLIC_DEFAULT_AVATAR}
              style={{ width: '100%', height: '100%' }}
            />
          </View>
          <View style={styles.nameBox}>
            <Text style={styles.authorName}>{user.full_name}</Text>
            <Text style={{ fontSize: 14, fontWeight: '400', color: '#8f8d8d' }}>{user.uid}</Text>
          </View>
        </View>
        <View style={styles.chatBox}>
          <TouchableOpacity style={styles.btnMessage}>
            <FontAwesome5
              name="facebook-messenger"
              size={18}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableNativeFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 14,
  },
  userInfoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatarBox: {
    width: 65,
    height: 65,
    overflow: 'hidden',
    borderRadius: 100,
  },
  nameBox: {},
  authorName: {
    fontSize: 18,
    fontWeight: '700',
  },
  chatBox: {},
  btnMessage: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#ebebeb',
    borderRadius: 6,
  },
})

export default memo(FriendItem)
