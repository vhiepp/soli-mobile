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
          <View style={styles.dotActive}></View>
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
        {currentScreen === 1 && <View style={styles.dotActive}></View>}
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
        {currentScreen === 3 && <View style={styles.dotActive}></View>}
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.link}
        onPress={() => handleLinkToScreen('/(tabs)/account', 4)}
      >
        <View style={[styles.authorAvatar, currentScreen === 4 ? styles.authorAvatarActive : {}]}>
          <Image
            source={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQIxLGhYK3eAm_vWoR3A1l8Iq6_z_-ECWdoQ&usqp=CAU'
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
