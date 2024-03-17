import { AntDesign, Feather, MaterialIcons, Octicons } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { Href, Link, useRouter } from 'expo-router'
import { useState } from 'react'
import { Dimensions, StyleSheet, Touchable, TouchableOpacity, View } from 'react-native'

const { width, height } = Dimensions.get('window')
const widthBtnAdd = 56
const positionBtnAdd = width / 2 - widthBtnAdd / 2

export default function MainTabBar() {
  const router = useRouter()
  const [currentScreen, setCurrentScreen] = useState(0)

  const handleLinkToScreen = (url: any, screenIndex: number) => {
    router.replace(url)
    setCurrentScreen(screenIndex)
  }
  return (
    <View style={styles.container}>
      {currentScreen === 0 ? (
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.link}
          onPress={() => router.push('/short/1')}
        >
          <MaterialIcons
            name="video-library"
            size={26}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.link}
          onPress={() => handleLinkToScreen('/(tabs)/', 0)}
        >
          <Octicons
            name="home"
            size={24}
          />
        </TouchableOpacity>
      )}
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.link}
        onPress={() => handleLinkToScreen('/(tabs)/friend', 1)}
      >
        <Feather
          name="users"
          size={24}
        />
      </TouchableOpacity>
      <View style={styles.link}></View>
      <TouchableOpacity
        activeOpacity={0.6}
        style={[styles.link, styles.btnAdd]}
      >
        <MaterialIcons
          name="add"
          size={27}
          color={'#fff'}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.link}
        onPress={() => handleLinkToScreen('/(tabs)/message', 3)}
      >
        <AntDesign
          name="message1"
          size={24}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.link}
        onPress={() => handleLinkToScreen('/(tabs)/account', 4)}
      >
        <Image
          source={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQIxLGhYK3eAm_vWoR3A1l8Iq6_z_-ECWdoQ&usqp=CAU'}
          style={[styles.authorAvatar, currentScreen === 4 ? styles.authorAvatarActive : {}]}
        />
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
    paddingVertical: 12,
  },
  authorAvatar: {
    width: 30,
    height: 30,
    borderRadius: 35,
  },
  authorAvatarActive: {
    borderWidth: 1,
    borderColor: '#1b1b1b',
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
})
