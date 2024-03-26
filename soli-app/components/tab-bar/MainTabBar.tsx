import { useUserStateContext } from '@/contexts'
import { AntDesign, Feather, MaterialIcons, Octicons } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { usePathname, useRouter } from 'expo-router'
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native'

const { width } = Dimensions.get('window')
const widthBtnAdd = 56
const positionBtnAdd = width / 2 - widthBtnAdd / 2
const { EXPO_PUBLIC_DEFAULT_AVATAR } = process.env

export default function MainTabBar() {
  const router = useRouter()
  const pathname = usePathname()
  const { userInfo } = useUserStateContext()

  const handleLinkToScreen = (url: any) => {
    router.navigate(url)
  }

  return (
    <View style={styles.container}>
      {pathname === '/' ? (
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.link}
          onPress={() => router.push('/short/1')}
        >
          <MaterialIcons
            name="video-library"
            size={26}
          />
          <View style={styles.dotActive}></View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.link}
          onPress={() => handleLinkToScreen('/(tabs)/')}
        >
          <Octicons
            name="home"
            size={24}
          />
        </TouchableOpacity>
      )}
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.link}
        onPress={() => handleLinkToScreen('/(tabs)/friend')}
      >
        <Feather
          name="users"
          size={24}
        />
        {pathname === '/friend' && <View style={styles.dotActive}></View>}
      </TouchableOpacity>
      <View style={styles.link}></View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={[styles.link, styles.btnAdd]}
        onPress={() => router.push('/sign-in')}
      >
        <MaterialIcons
          name="add"
          size={27}
          color={'#fff'}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.link}
        onPress={() => handleLinkToScreen('/(tabs)/message')}
      >
        <AntDesign
          name="message1"
          size={24}
        />
        {pathname === '/message' && <View style={styles.dotActive}></View>}
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.link}
        onPress={() => handleLinkToScreen('/(tabs)/account')}
      >
        <View style={[styles.authorAvatar, pathname === '/account' ? styles.authorAvatarActive : {}]}>
          <Image
            source={
              //@ts-ignore
              userInfo
                ? // @ts-ignore
                  userInfo?.current_avatar.url
                : EXPO_PUBLIC_DEFAULT_AVATAR
            }
            style={{ width: '100%', height: '100%' }}
          />
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    backgroundColor: '#fff',
  },
  link: {
    display: 'flex',
    flexBasis: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 14,
  },
  authorAvatar: {
    width: 32,
    height: 32,
    borderRadius: 100,
    overflow: 'hidden',
  },
  authorAvatarActive: {
    borderWidth: 1,
    borderColor: '#22d6f2',
  },
  btnAdd: {
    backgroundColor: '#0681ee',
    position: 'absolute',
    width: widthBtnAdd,
    height: widthBtnAdd,
    borderRadius: widthBtnAdd,
    left: positionBtnAdd,
    top: -20,
    elevation: 3,
  },
  dotActive: {
    position: 'absolute',
    width: 4,
    height: 4,
    borderRadius: 30,
    backgroundColor: '#22d6f2',
    bottom: 10,
  },
})
