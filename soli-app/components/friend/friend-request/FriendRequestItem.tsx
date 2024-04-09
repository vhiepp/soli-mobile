import { Image } from 'expo-image'
import { memo } from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'

const { EXPO_PUBLIC_DEFAULT_AVATAR } = process.env

function FriendRequestItem({ user }: any) {
  console.log('render friend request item', user.uid)

  return (
    <TouchableNativeFeedback
      // @ts-ignore
      background={TouchableNativeFeedback.Ripple('#ededed')}
    >
      <View style={styles.container}>
        <View style={styles.authorAvatar}>
          <Image
            source={user ? user.current_avatar.url : EXPO_PUBLIC_DEFAULT_AVATAR}
            style={{ width: '100%', height: '100%' }}
          />
        </View>
        <View style={{ justifyContent: 'flex-start', flex: 1 }}>
          <View style={styles.boxAuthorName}>
            <Text style={styles.authorName}>{user.full_name}</Text>
            <Text style={styles.textDate}>4 tuần</Text>
          </View>
          <View style={{ marginBottom: 12 }}>
            <Text>{user.uid}</Text>
          </View>
          <View style={styles.boxBtn}>
            <TouchableOpacity style={[styles.btn, styles.btnPrimary]}>
              <Text style={[styles.textBtn, styles.textBtnPrimary]}>Chấp nhận</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn]}>
              <Text style={[styles.textBtn]}>Xóa</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 14,
    gap: 12,
  },
  authorAvatar: {
    width: 95,
    height: 95,
    borderRadius: 100,
    overflow: 'hidden',
  },
  boxAuthorName: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  authorName: {
    fontWeight: '600',
    fontSize: 18,
  },
  textDate: {
    fontSize: 14,
    color: '#a3a2a2',
  },
  boxBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },
  btn: {
    flex: 1,
    backgroundColor: '#ebebeb',
    borderRadius: 10,
    paddingVertical: 8,
  },
  textBtn: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
  },
  btnPrimary: {
    backgroundColor: '#2a65fa',
  },
  textBtnPrimary: {
    color: '#fff',
  },
})

export default memo(FriendRequestItem)
