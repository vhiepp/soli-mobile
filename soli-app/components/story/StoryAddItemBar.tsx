import { Ionicons } from '@expo/vector-icons'
import { Image, StyleSheet, Text, TouchableOpacity, View, ViewProps } from 'react-native'

export default function StoryAddItemBar(props: ViewProps) {
  const { style, ...ortherProps } = props
  return (
    <View
      style={[styles.container, style]}
      {...ortherProps}
    >
      <TouchableOpacity style={styles.contentImageAuthor}>
        <Image
          source={require('../../assets/images/avatar-default.png')}
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
