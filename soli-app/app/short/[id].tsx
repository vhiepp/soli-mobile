import { ViewContent } from '@/components/Themed'
import { ShortVideoContent } from '@/components/short'
import { useLocalSearchParams } from 'expo-router'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PagerView, { PagerViewOnPageSelectedEvent } from 'react-native-pager-view'

const arrTest = [
  'https://video.vhiep.com/1.mp4',
  'https://video.vhiep.com/2.mp4',
  'https://video.vhiep.com/3.mp4',
  'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
]

export default function StoryScreen() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const [pageSelected, setPageSelected] = useState(0)

  const handlePageSelected = (e: PagerViewOnPageSelectedEvent) => {
    setPageSelected(e.nativeEvent.position)
  }

  return (
    <View style={styles.container}>
      <PagerView
        style={styles.viewPager}
        initialPage={0}
        orientation="vertical"
        onPageSelected={handlePageSelected}
      >
        {arrTest.map((v, index) => (
          <View
            style={styles.page}
            key={index + 1}
          >
            <ShortVideoContent
              play={index === pageSelected}
              videoUrl={v}
            />
          </View>
        ))}
      </PagerView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewPager: {
    width: '100%',
    height: '100%',
  },
  page: {},
})
