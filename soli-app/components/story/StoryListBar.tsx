import { Dimensions, ScrollView, StyleSheet, View, ViewProps } from 'react-native'
import StoryAddItemBar from './StoryAddItemBar'
import StoryItemBar from './StoryItemBar'

const { width, height } = Dimensions.get('window')

export default function StoryListBar(props: ViewProps) {
  const { style, ...ortherProps } = props
  return (
    <View
      style={[styles.container, style]}
      {...ortherProps}
    >
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.storyItemList}>
          <StoryAddItemBar />

          <StoryItemBar />
          <StoryItemBar />
          <StoryItemBar />
          <StoryItemBar />
          <StoryItemBar />
          <StoryItemBar />
          <StoryItemBar />
          <StoryItemBar />
          <StoryItemBar />
          <StoryItemBar />
          <StoryItemBar />
          <StoryItemBar />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  storyItemList: {
    minWidth: width,
    display: 'flex',
    flexDirection: 'row',
  },
})
