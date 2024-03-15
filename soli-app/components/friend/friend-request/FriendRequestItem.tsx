import { Image } from 'expo-image'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function FriendRequestItem() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.authorAvatar}
        source={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQIxLGhYK3eAm_vWoR3A1l8Iq6_z_-ECWdoQ&usqp=CAU'}
      />
      <View style={{ justifyContent: 'flex-start', flex: 1 }}>
        <View style={styles.boxAuthorName}>
          <Text style={styles.authorName}>Văn Hiệp</Text>
          <Text style={styles.textDate}>4 tuần</Text>
        </View>
        <View style={{ marginBottom: 12 }}>
          <Text>_vhiep</Text>
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
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    gap: 12,
  },
  authorAvatar: {
    width: 95,
    height: 95,
    borderRadius: 100,
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
