import { ViewContent } from '@/components/Themed'
import { ShortVideoContent } from '@/components/short'
import { useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import PagerView, { PagerViewOnPageSelectedEvent } from 'react-native-pager-view'

const arrTest = [
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631109/video/6_lzvqzz.mp4',
  'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631105/video/14_npnwaq.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631103/video/7_t6tzfh.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631102/video/17_wxpzba.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631099/video/15_sizvsq.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631099/video/10_elsbfw.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631099/video/11_ijajtl.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631095/video/3_jljg1d.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631094/video/8_ebax82.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631091/video/1_daavkc.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631091/video/19_bbq5qn.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631088/video/16_nk1ubj.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631087/video/13_taq16k.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631085/video/12_plhabi.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631085/video/9_o8pwqs.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631083/video/5_fkvwqn.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631081/video/4_yekgge.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631080/video/20_usluws.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631079/video/2_zhdvrb.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631077/video/18_f93ios.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631091/video/1_daavkc.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631109/video/6_lzvqzz.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631105/video/14_npnwaq.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631103/video/7_t6tzfh.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631102/video/17_wxpzba.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631099/video/15_sizvsq.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631099/video/10_elsbfw.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631099/video/11_ijajtl.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631095/video/3_jljg1d.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631094/video/8_ebax82.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631091/video/1_daavkc.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631091/video/19_bbq5qn.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631088/video/16_nk1ubj.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631087/video/13_taq16k.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631085/video/12_plhabi.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631085/video/9_o8pwqs.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631083/video/5_fkvwqn.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631081/video/4_yekgge.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631080/video/20_usluws.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631079/video/2_zhdvrb.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631077/video/18_f93ios.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631091/video/1_daavkc.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631109/video/6_lzvqzz.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631105/video/14_npnwaq.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631103/video/7_t6tzfh.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631102/video/17_wxpzba.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631099/video/15_sizvsq.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631099/video/10_elsbfw.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631099/video/11_ijajtl.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631095/video/3_jljg1d.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631094/video/8_ebax82.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631091/video/1_daavkc.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631091/video/19_bbq5qn.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631088/video/16_nk1ubj.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631087/video/13_taq16k.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631085/video/12_plhabi.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631085/video/9_o8pwqs.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631083/video/5_fkvwqn.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631081/video/4_yekgge.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631080/video/20_usluws.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631079/video/2_zhdvrb.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631077/video/18_f93ios.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631091/video/1_daavkc.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631109/video/6_lzvqzz.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631105/video/14_npnwaq.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631103/video/7_t6tzfh.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631102/video/17_wxpzba.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631099/video/15_sizvsq.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631099/video/10_elsbfw.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631099/video/11_ijajtl.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631095/video/3_jljg1d.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631094/video/8_ebax82.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631091/video/1_daavkc.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631091/video/19_bbq5qn.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631088/video/16_nk1ubj.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631087/video/13_taq16k.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631085/video/12_plhabi.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631085/video/9_o8pwqs.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631083/video/5_fkvwqn.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631081/video/4_yekgge.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631080/video/20_usluws.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631079/video/2_zhdvrb.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631077/video/18_f93ios.mp4',
  'https://res.cloudinary.com/daz6jb1w7/video/upload/v1710631091/video/1_daavkc.mp4',
]

export default function StoryScreen() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const [pageSelected, setPageSelected] = useState(0)
  const [isMuted, setIsMuted] = useState(false)

  const handlePageSelected = (e: PagerViewOnPageSelectedEvent) => {
    setPageSelected(e.nativeEvent.position)
  }

  const handleChangeStatusMuted = () => {
    setIsMuted((prev) => !prev)
  }

  return (
    <View style={styles.container}>
      <PagerView
        style={styles.viewPager}
        initialPage={0}
        orientation="vertical"
        onPageSelected={handlePageSelected}
      >
        {
          //@ts-ignore
          arrTest.map((v, index) => {
            return (
              <View
                style={styles.page}
                key={index + 1}
              >
                {index <= pageSelected + 2 && index >= pageSelected - 1 && (
                  <ShortVideoContent
                    play={index === pageSelected}
                    videoUrl={v}
                    isMuted={isMuted}
                    onChangeStatusMuted={handleChangeStatusMuted}
                  />
                )}
              </View>
            )
          })
        }
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
