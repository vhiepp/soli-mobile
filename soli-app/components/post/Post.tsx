import { Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Image } from 'expo-image'
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons'
import { CommentBottomSheet } from '../comment'
import { useState } from 'react'
import { usePostApi } from '@/apis'

const { EXPO_PUBLIC_DEFAULT_AVATAR } = process.env

const Post = ({ post }: any) => {
  const [openCommentModal, setOpenCommentModal] = useState(false)
  const [heartStatus, setHeartStatus]: any = useState({ is_heart: post.is_heart, total: post.heart.total })

  const { heartChangeForPostId } = usePostApi()
  const handleOpenModalComment = () => {
    setOpenCommentModal(true)
  }

  const handleChangeHeartStatus = () => {
    heartChangeForPostId(post.id)
    setHeartStatus((prev: any) => {
      return {
        is_heart: !prev.is_heart,
        total: prev.is_heart ? prev.total - 1 : prev.total + 1,
      }
    })
  }

  const handleSharePost = async () => {
    try {
      await Share.share({
        message: 'Test chia sẻ',
      })
    } catch (error) {
      console.error('Error sharing:', error)
    }
  }

  return (
    <View style={styles.container}>
      {openCommentModal && (
        <CommentBottomSheet
          openModal={true}
          onModalClose={() => setOpenCommentModal(false)}
        />
      )}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.authorAvatar}>
            <Image
              source={post?.author.current_avatar.url ? post?.author.current_avatar.url : EXPO_PUBLIC_DEFAULT_AVATAR}
              style={{ width: '100%', height: '100%' }}
            />
          </View>
          <View style={styles.authorNameBox}>
            <Text style={styles.authorName}>{post?.author.uid}</Text>
            <Text style={styles.authorDesc}>Gợi ý cho bạn</Text>
          </View>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.btnFollow}>
            <Text>Theo dõi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dotThree}>
            <Entypo
              name="dots-three-vertical"
              style={styles.dotThreeIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.postContent}>
        <Text
          style={styles.textContent}
          numberOfLines={2}
        >
          {post?.caption}
        </Text>
        <Image
          source={post?.media[0].file_url}
          style={[styles.postImage, { height: 520 }]}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.footerLeft}>
          <View style={styles.footerLeftIcon}>
            <TouchableOpacity onPress={handleChangeHeartStatus}>
              {heartStatus.is_heart ? (
                <Ionicons
                  name="heart-sharp"
                  size={30}
                  color="red"
                />
              ) : (
                <Ionicons
                  name="heart-outline"
                  size={30}
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={handleOpenModalComment}>
              <AntDesign
                name="message1"
                size={24}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSharePost}>
              <Ionicons
                name="paper-plane-outline"
                size={27}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.textCountHeart}>{heartStatus.total} lượt thích</Text>
        </View>
        <View style={styles.footerRight}>{/* thêm sau */}</View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 14,
    position: 'relative',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  header: {
    paddingHorizontal: 14,
    paddingTop: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorNameBox: {
    paddingLeft: 10,
    paddingTop: 2,
    gap: 2,
  },
  authorName: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: '700',
    margin: 0,
    padding: 0,
    minWidth: 120,
  },
  authorDesc: {
    fontSize: 12,
    color: '#a3a2a2',
    margin: 0,
    padding: 0,
    maxWidth: 90,
  },
  authorAvatar: {
    width: 40,
    height: 40,
    borderRadius: 100,
    overflow: 'hidden',
    objectFit: 'cover',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    height: 30,
    gap: 10,
  },
  btnFollow: {
    backgroundColor: '#ebebeb',
    justifyContent: 'center',
    paddingHorizontal: 14,
    borderRadius: 8,
    fontWeight: '600',
  },
  dotThree: {
    justifyContent: 'center',
    height: '100%',
  },
  dotThreeIcon: {
    fontSize: 18,
  },
  postContent: {
    overflow: 'hidden',
  },
  textContent: {
    fontSize: 14,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 6,
  },
  postImage: {
    objectFit: 'cover',
    width: '100%',
  },
  footer: {
    paddingTop: 10,
    paddingHorizontal: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerLeft: {},
  footerLeftIcon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  textCountHeart: {
    color: '#000',
    fontSize: 14,
  },
  footerRight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
})

export default Post
