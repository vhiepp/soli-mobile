import { Skeleton } from 'moti/skeleton'
import { memo } from 'react'
import { StyleSheet, View } from 'react-native'

const SkeletonCommonProps = {
  colorMode: 'light',
  transition: {
    type: 'timing',
    duration: 3000,
  },
  backgroundColor: '#D4D4D4',
} as const

function FriendItemSkeleton() {
  console.log('render friend request item skeleton')

  return (
    <View style={styles.container}>
      <View style={styles.authorAvatar}>
        <Skeleton
          show
          width={'100%'}
          height={'100%'}
          radius={'round'}
          {...SkeletonCommonProps}
        ></Skeleton>
      </View>
      <View style={{ justifyContent: 'flex-start', flex: 1, gap: 4 }}>
        <View style={styles.boxAuthorName}>
          <Skeleton
            show
            width={'100%'}
            height={28}
            radius={'round'}
            {...SkeletonCommonProps}
          ></Skeleton>
        </View>
        <View style={{ marginBottom: 6 }}>
          <Skeleton
            show
            width={'70%'}
            height={16}
            radius={'round'}
            {...SkeletonCommonProps}
          ></Skeleton>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 14,
    gap: 12,
  },
  authorAvatar: {
    width: 65,
    height: 65,
    borderRadius: 100,
    overflow: 'hidden',
  },
  boxAuthorName: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },
})

export default memo(FriendItemSkeleton)
