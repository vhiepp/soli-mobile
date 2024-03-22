import { Image } from 'expo-image'
import { StyleSheet, Text, TouchableOpacity, View, ViewProps, ViewStyle } from 'react-native'

export default function StoryItemBar(props: ViewProps) {
  const { style, ...ortherProps } = props
  return (
    <View
      style={[styles.container, style]}
      {...ortherProps}
    >
      <TouchableOpacity style={styles.contentImageAuthor}>
        <Image
          source={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQIxLGhYK3eAm_vWoR3A1l8Iq6_z_-ECWdoQ&usqp=CAU'}
          style={styles.imageAuthor}
        />
      </TouchableOpacity>
      <Text style={styles.authorName}>vhiep</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 6,
  },
  contentImageAuthor: {
    width: 85,
    height: 85,
    borderRadius: 85,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#22d6f2',
    marginBottom: 4,
  },
  imageAuthor: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  authorName: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
})
