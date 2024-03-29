import { BottomSheetView } from '@gorhom/bottom-sheet'
import { Image } from 'expo-image'
import moment from 'moment'
import 'moment/locale/vi'
import { memo } from 'react'
import { StyleSheet, Text } from 'react-native'

const { EXPO_PUBLIC_DEFAULT_AVATAR } = process.env

const CommentItem = ({ comment }: any) => {
  moment.locale('vi')
  const timeAgoString = moment.unix(comment.updated_at_number).fromNow()
  console.log('render comment ', comment.id)

  return (
    <BottomSheetView style={styles.container}>
      <BottomSheetView style={styles.avatarAuthorBox}>
        <Image
          source={comment ? comment.author.current_avatar.url : EXPO_PUBLIC_DEFAULT_AVATAR}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </BottomSheetView>
      <BottomSheetView style={{ flex: 1 }}>
        <BottomSheetView style={styles.contentBox}>
          <Text style={styles.authorName}>{comment.author.uid}</Text>
          <Text style={styles.commentContent}>{comment.content}</Text>
        </BottomSheetView>
        <BottomSheetView style={{ paddingLeft: 14, paddingTop: 2 }}>
          <Text style={{ fontSize: 14, fontWeight: '500', color: '#353a3d' }}>{timeAgoString}</Text>
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
    width: 50,
    height: 50,
    borderRadius: 100,
    overflow: 'hidden',
  },
  contentBox: {
    flex: 1,
    backgroundColor: '#f0f4f7',
    borderRadius: 20,
    paddingTop: 8,
    paddingBottom: 10,
    paddingLeft: 14,
    paddingRight: 12,
    gap: 2,
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

export default memo(CommentItem)
