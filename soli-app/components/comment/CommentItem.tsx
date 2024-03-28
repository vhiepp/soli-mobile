import { BottomSheetView } from '@gorhom/bottom-sheet'
import { Image } from 'expo-image'
import { StyleSheet, Text } from 'react-native'

const { EXPO_PUBLIC_DEFAULT_AVATAR } = process.env

export function CommentItem() {
  return (
    <BottomSheetView style={styles.container}>
      <BottomSheetView style={styles.avatarAuthorBox}>
        <Image
          source={EXPO_PUBLIC_DEFAULT_AVATAR}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </BottomSheetView>
      <BottomSheetView style={{ flex: 1 }}>
        <BottomSheetView style={styles.contentBox}>
          <Text style={styles.authorName}>Văn Hiệp</Text>
          <Text style={styles.commentContent}>
            xin chao moi nguoi nha, xin chao moi nguoi nha, xin chao moi nguoi nha, xin chao moi nguoi nha, xin chao moi
            nguoi nha, xin chao moi nguoi nha,
          </Text>
        </BottomSheetView>
        <BottomSheetView style={{ paddingLeft: 14, paddingTop: 2 }}>
          <Text style={{ fontSize: 14, fontWeight: '500', color: '#353a3d' }}>4 tuần</Text>
        </BottomSheetView>
      </BottomSheetView>
    </BottomSheetView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 14,
    gap: 6,
  },
  avatarAuthorBox: {
    width: 52,
    height: 52,
    borderRadius: 100,
    overflow: 'hidden',
  },
  contentBox: {
    flex: 1,
    backgroundColor: '#f0f4f7',
    borderRadius: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 14,
    paddingRight: 12,
  },
  authorName: {
    fontSize: 16,
    fontWeight: '700',
  },
  commentContent: {
    fontSize: 16,
    fontWeight: '400',
  },
})
