import { useUserStateContext } from '@/contexts'
import { Ionicons } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { StyleSheet, Text, TouchableOpacity, View, ViewProps } from 'react-native'

const { EXPO_PUBLIC_DEFAULT_AVATAR } = process.env

export default function StoryAddItemBar(props: ViewProps) {
  const { style, ...ortherProps } = props
  const { userInfo } = useUserStateContext()
  return (
    <View
      style={[styles.container, style]}
      {...ortherProps}
    >
      <TouchableOpacity style={styles.contentImageAuthor}>
        <Image
          // @ts-ignore
          source={
            // @ts-ignore
            userInfo ? userInfo.current_avatar.url : EXPO_PUBLIC_DEFAULT_AVATAR
          }
          style={styles.imageAuthor}
        />
        <Ionicons
          name="add-circle"
          style={styles.addIcon}
        />
      </TouchableOpacity>
      <Text style={styles.authorName}>Tin của bạn</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 6,
    marginLeft: 14,
  },
  contentImageAuthor: {
    width: 85,
    height: 85,
    borderRadius: 85,
    borderWidth: 2,
    borderColor: '#ccc',
    marginBottom: 4,
    position: 'relative',
  },
  imageAuthor: {
    width: '100%',
    height: '100%',
    borderRadius: 85,
    objectFit: 'cover',
  },
  authorName: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
  },
  addIcon: {
    position: 'absolute',
    fontSize: 26,
    backgroundColor: '#fff',
    borderRadius: 30,
    right: -2,
    bottom: -2,
    color: '#0681ee',
  },
})
