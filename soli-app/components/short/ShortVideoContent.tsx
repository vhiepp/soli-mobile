import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Video, ResizeMode } from 'expo-av'
import { useEffect, useRef, useState } from 'react'
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons'
import { Image } from 'expo-image'

export default function ShortVideoContent(props: any) {
  const { play, videoUrl } = props
  const video = useRef(null)
  const [status, setStatus] = useState({})

  useEffect(() => {
    try {
      if (play) {
        // @ts-ignore
        video.current?.playAsync()
      } else {
        // @ts-ignore
        video.current?.pauseAsync()
      }
    } catch (e) {}
  }, [play])

  const handlePlayOrPauseVideo = () => {
    // @ts-ignore
    status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
  }

  return (
    <View style={styles.container}>
      <View style={[styles.videoContent, { zIndex: 1 }]}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: videoUrl,
          }}
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls={false}
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      </View>
      <TouchableOpacity
        // @ts-ignore
        style={[styles.btnPlayContent, styles.videoContent, !status.isPlaying ? styles.btnPlayContentActive : {}]}
        onPress={handlePlayOrPauseVideo}
      ></TouchableOpacity>
      <View
        style={[
          styles.videoContent,
          { zIndex: 2 },
          styles.centerScreen,
          // @ts-ignore
          status.isPlaying ? { display: 'none' } : { display: 'flex' },
        ]}
      >
        <Ionicons
          name="play"
          style={styles.btnPlay}
        />
      </View>
      <View style={styles.boxContent}>
        <View style={styles.boxContentLeft}>
          <View style={styles.boxAuthor}>
            <Image
              source={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQIxLGhYK3eAm_vWoR3A1l8Iq6_z_-ECWdoQ&usqp=CAU'
              }
              style={styles.authorAvatar}
            />
            <Text style={styles.authorName}>_vanhiep</Text>
            <TouchableOpacity style={styles.btnFollow}>
              <Text style={styles.textBtnFollow}>Theo dõi</Text>
            </TouchableOpacity>
          </View>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={styles.videoDesc}
          >
            Everyone deserve to be happy...Everyone deserve to be happy...
          </Text>
        </View>
        <View style={styles.boxContentRight}>
          <View style={[styles.center]}>
            <TouchableOpacity>
              <Ionicons
                name="heart-outline"
                size={35}
                color="#fff"
              />
            </TouchableOpacity>
            <Text style={{ color: '#fff', fontSize: 12 }}>4,7 triệu</Text>
          </View>
          <View style={[styles.center]}>
            <TouchableOpacity>
              <AntDesign
                name="message1"
                size={28}
                color="#fff"
              />
            </TouchableOpacity>
            <Text style={{ color: '#fff', fontSize: 12 }}>16,1 nghìn</Text>
          </View>
          <View style={[styles.center]}>
            <TouchableOpacity>
              <Ionicons
                name="paper-plane-outline"
                size={31}
                color="#fff"
              />
            </TouchableOpacity>
            <Text style={{ color: '#fff', fontSize: 12 }}>Chia sẻ</Text>
          </View>
          <View style={[styles.center]}>
            <TouchableOpacity>
              <Entypo
                name="dots-three-vertical"
                size={20}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#1b1b1b',
    position: 'relative',
  },
  videoContent: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  video: {
    width: '100%',
    height: '100%',
  },
  btnPlayContent: {
    backgroundColor: '#1B1B1B',
    zIndex: 3,
    opacity: 0,
  },
  btnPlay: {
    fontSize: 80,
    color: '#fff',
  },
  centerScreen: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnPlayContentActive: {
    opacity: 0.2,
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    bottom: 50,
    left: 0,
    zIndex: 4,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  boxContentLeft: {
    justifyContent: 'flex-end',
    gap: 18,
  },
  boxAuthor: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
  },
  authorAvatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  authorName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  btnFollow: {
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
  },
  textBtnFollow: {
    color: '#fff',
    fontSize: 14,
  },
  videoDesc: {
    color: '#fff',
    fontSize: 16,
    maxWidth: 250,
  },
  center: {
    alignItems: 'center',
    gap: 10,
  },
  boxContentRight: {
    display: 'flex',
    alignItems: 'center',
    gap: 26,
  },
})
