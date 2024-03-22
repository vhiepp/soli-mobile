import { Skeleton } from 'moti/skeleton'
import { StyleSheet, View } from 'react-native'

const SkeletonCommonProps = {
  colorMode: 'light',
  transition: {
    type: 'timing',
    duration: 3000,
  },
  backgroundColor: '#D4D4D4',
} as const

export function PostSkeleton() {
  return (
    <View style={styles.container}>
      <Skeleton.Group show>
        <View style={styles.header}>
          <View style={styles.authorAvatar}>
            <Skeleton
              show
              width={'100%'}
              height={'100%'}
              // transition={{
              //   type: 'timing',
              //   duration: 2000,
              // }}
              {...SkeletonCommonProps}
            ></Skeleton>
          </View>
          <View style={{ gap: 4 }}>
            <Skeleton
              show
              width={'90%'}
              height={23}
              radius={'round'}
              {...SkeletonCommonProps}
            ></Skeleton>
            <Skeleton
              show
              width={'60%'}
              height={16}
              radius={'round'}
              {...SkeletonCommonProps}
            ></Skeleton>
          </View>
        </View>
        <View style={{ paddingHorizontal: 0, overflow: 'hidden', left: -10 }}>
          <Skeleton
            show
            width={'85%'}
            height={16}
            radius={'round'}
            {...SkeletonCommonProps}
          ></Skeleton>
        </View>
        <View>
          <Skeleton
            show
            width={'100%'}
            height={460}
            radius={'square'}
            {...SkeletonCommonProps}
          ></Skeleton>
        </View>
        <View style={{ paddingHorizontal: 0, overflow: 'hidden', left: -10 }}>
          <Skeleton
            show
            width={'55%'}
            height={28}
            radius={'round'}
            {...SkeletonCommonProps}
          ></Skeleton>
        </View>
      </Skeleton.Group>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 14,
    position: 'relative',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    gap: 10,
  },
  header: {
    paddingHorizontal: 14,
    paddingTop: 8,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  authorAvatar: {
    width: 45,
    height: 45,
    borderRadius: 100,
    overflow: 'hidden',
    objectFit: 'cover',
  },
})
