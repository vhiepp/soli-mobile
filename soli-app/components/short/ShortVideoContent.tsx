import { ActivityIndicator, Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ResizeMode, Video } from 'expo-av'
import { useEffect, useRef, useState } from 'react'
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { CommentBottomSheet } from '../comment'

export default function ShortVideoContent(props: any) {
  const { play, videoUrl, isMuted, onChangeStatusMuted } = props
  let video: any = useRef(null)
  const [status, setStatus] = useState({})
  const [onloaded, setOnloaded] = useState(false)
  const [isUserPauseVideo, setIsUserPauseVideo] = useState(false)
  const [videoSize, setVideoSize] = useState({ width: 1, height: 1 })
  const [openCommentModal, setOpenCommentModal] = useState(false)

  const handleOpenModalComment = () => {
    setOpenCommentModal(true)
  }

  const handleLoadError = (e: any) => {
    console.log('load err', e)
    // @ts-ignore
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

  useEffect(() => {
    async function fetchVideoInfo() {
      try {
      } catch (error) {
        console.error('Error fetching video info:', error)
      }
    }
    fetchVideoInfo()

    try {
      if (play && onloaded) {
        // @ts-ignore
        video.current?.playAsync()
      } else {
        // @ts-ignore
        video.current?.replayAsync()
        video.current?.stopAsync()
      }
    } catch (e) {}
  }, [play, onloaded])

  // @ts-ignore
  const handleOnloaded = () => {
    setOnloaded(true)
  }

  // @ts-ignore
  const handleVideoOnReady = ({ naturalSize }) => {
    const { width, height } = naturalSize
    setVideoSize({
      width,
      height,
    })
  }

  const handlePlayOrPauseVideo = () => {
    // @ts-ignore
    if (status.isPlaying) {
      video.current.pauseAsync()
      setIsUserPauseVideo(true)
    } else {
      video.current.playAsync()
      setIsUserPauseVideo(false)
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
      <View style={[styles.videoContent, { zIndex: 1 }]}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: videoUrl,
            overrideFileExtensionAndroid: 'mp4',
          }}
          resizeMode={videoSize.width / videoSize.height < 1.7 ? ResizeMode.COVER : ResizeMode.CONTAIN}
          useNativeControls={false}
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          // @ts-ignore
          onLoad={handleOnloaded}
          onError={handleLoadError}
          isMuted={isMuted}
          onReadyForDisplay={handleVideoOnReady}
        />
      </View>
      <TouchableOpacity
        // @ts-ignore
        style={[styles.btnPlayContent, styles.videoContent, !status.isPlaying ? styles.btnPlayContentActive : {}]}
        onPress={handlePlayOrPauseVideo}
      ></TouchableOpacity>
      <View style={[styles.videoContent, { zIndex: 2 }, styles.centerScreen]}>
        {
          // @ts-ignore
          !status.isPlaying && onloaded && isUserPauseVideo && (
            <Ionicons
              name="play"
              style={styles.btnPlay}
            />
          )
        }
        {
          // @ts-ignore
          !status.isPlaying && !isUserPauseVideo && (
            <ActivityIndicator
              size={40}
              color="#ccc"
            />
          )
        }
      </View>

      <View style={styles.boxContent}>
        <View style={styles.boxContentLeft}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={handlePlayOrPauseVideo}
          ></TouchableOpacity>
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
            Everyone deserve to be happy... Everyone deserve to be happy...
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
            <TouchableOpacity onPress={handleOpenModalComment}>
              <AntDesign
                name="message1"
                size={28}
                color="#fff"
              />
            </TouchableOpacity>
            <Text style={{ color: '#fff', fontSize: 12 }}>16,1 nghìn</Text>
          </View>
          <View style={[styles.center]}>
            <TouchableOpacity onPress={handleSharePost}>
              <Ionicons
                name="paper-plane-outline"
                size={31}
                color="#fff"
              />
            </TouchableOpacity>
            <Text style={{ color: '#fff', fontSize: 12 }}>Chia sẻ</Text>
          </View>
          <View style={[styles.center]}>
            <TouchableOpacity
              onPress={onChangeStatusMuted}
              activeOpacity={0.6}
            >
              {isMuted ? (
                <Ionicons
                  name="volume-mute-outline"
                  size={26}
                  color="#fff"
                />
              ) : (
                <Ionicons
                  name="volume-high-outline"
                  size={26}
                  color="#fff"
                />
              )}
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
    maxWidth: 260,
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
