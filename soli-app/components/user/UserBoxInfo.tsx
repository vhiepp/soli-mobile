import { useAuthApi, useUserApi } from '@/apis'
import { useUserStateContext } from '@/contexts'
import { FontAwesome } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const { EXPO_PUBLIC_DEFAULT_AVATAR } = process.env

export default function UserBoxInfo({ userUid }: any) {
  const [user, setUser]: any = useState()
  const { getUserProfileWithUid } = useUserApi()
  const { userInfo } = useUserStateContext()

  const handleGetUserInfo = async () => {
    const data = await getUserProfileWithUid(userUid)
    setUser(data)
  }

  useEffect(() => {
    handleGetUserInfo()
  }, [userUid])

  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <View style={styles.boxLeft}>
          <View style={styles.authorAvatar}>
            <Image
              source={
                user
                  ? // @ts-ignore
                    user?.profile.current_avatar.url
                  : EXPO_PUBLIC_DEFAULT_AVATAR
              }
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            {
              // @ts-ignore
              user && user.profile.uid === userInfo?.uid && (
                <TouchableOpacity
                  style={styles.authorChangeAvatarIcon}
                  activeOpacity={0.9}
                >
                  <View style={styles.bgOpacity}></View>
                  <FontAwesome
                    name="camera"
                    size={20}
                    color="#fff"
                  />
                </TouchableOpacity>
              )
            }
          </View>
        </View>
        <View style={styles.boxRight}>
          <View style={styles.boxInfo}>
            <Text style={styles.infoNumber}>
              {user
                ? // @ts-ignore
                  user?.posts.total_short
                : 0}
            </Text>
            <Text
              style={styles.infoDesc}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              bài viết
            </Text>
          </View>
          <View style={styles.boxInfo}>
            <Text style={styles.infoNumber}>
              {user
                ? // @ts-ignore
                  user?.followers.total_short
                : 0}
            </Text>
            <Text
              style={styles.infoDesc}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              người theo dõi
            </Text>
          </View>
          <View style={styles.boxInfo}>
            <Text style={styles.infoNumber}>
              {user
                ? //@ts-ignore
                  user.following.total_short
                : 0}
            </Text>
            <Text
              style={styles.infoDesc}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              đang theo dõi
            </Text>
          </View>
        </View>
      </View>
      <Text style={styles.authorName}>
        {
          // @ts-ignore
          user?.profile.firstname
        }
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    paddingVertical: 14,
    gap: 6,
  },
  containerTop: {
    display: 'flex',
    flexDirection: 'row',
    gap: 28,
  },
  boxLeft: {
    gap: 6,
  },
  authorAvatar: {
    width: 85,
    height: 85,
    borderRadius: 100,
    overflow: 'hidden',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#ccc',
  },
  authorChangeAvatarIcon: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgOpacity: {
    backgroundColor: '#1b1b1b',
    opacity: 0.2,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  authorName: {
    fontSize: 16,
    fontWeight: '500',
  },
  boxRight: {
    flex: 1,
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  boxInfo: {
    maxWidth: '33.33%',
    alignItems: 'center',
  },
  infoNumber: {
    fontWeight: '700',
    fontSize: 20,
  },
  infoDesc: {
    fontSize: 14,
  },
})
