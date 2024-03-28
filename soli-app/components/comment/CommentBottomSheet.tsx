import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Text, StyleSheet, Dimensions, View, TouchableOpacity } from 'react-native'
import { BottomSheetBackdropProps, BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { Line } from '../theme'
import Animated from 'react-native-reanimated'
import { InputCommentBottomSheet } from './InputCommentBottomSheet'
import { CommentItem } from './CommentItem'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const { height } = Dimensions.get('window')
const percentScreen = [0.7, 1]

export default function CommentBottomSheet(props: any) {
  const { openModal, onModalClose } = props
  const [commnetList, setCommentList] = useState([1, 1, 1, 1, 1, 1, 1, 1])
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null)

  // variables
  const snapPoints = useMemo(() => [height * percentScreen[0], height * percentScreen[1]], [])

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [])

  useEffect(() => {
    if (openModal) {
      handlePresentModalPress()
    }
  }, [openModal])

  const handleSheetChanges = useCallback((index: number) => {
    if (index < 0) {
      onModalClose()
    }
  }, [])

  // renders
  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      keyboardBehavior="fillParent"
      backdropComponent={CustomBackdrop}
      footerComponent={InputCommentBottomSheet}
    >
      <View style={styles.contentContainer}>
        <Text style={styles.textTitle}>Bình luận</Text>
        <Line style={{ marginTop: 8, borderColor: '#f0f0f0' }} />
        {/* <BottomSheetVirtualizedList
          data={commnetList}
          renderItem={renderItem}
          getItemCount={(data) => data.length}
          getItem={(data, index) => data[index]}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={{ paddingHorizontal: 12, paddingTop: 12 }}
          onEndReached={() => {
            setCommentList((prev) => [...prev, 1])
          }}
        /> */}
        <View style={{ flex: 1 }}>
          <BottomSheetScrollView
            style={{ paddingHorizontal: 12, paddingTop: 12 }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            {commnetList.map(() => (
              <CommentItem key={Math.random() + ' '} />
            ))}
            <TouchableOpacity
              style={styles.btnLoadMore}
              onPress={() => setCommentList((prev) => [...prev, 1, 1, 1, 1, 1, 1, 1, 1])}
            >
              <MaterialCommunityIcons
                name="reload"
                size={18}
              />
              <Text style={{ fontSize: 14 }}>Xem thêm</Text>
            </TouchableOpacity>
          </BottomSheetScrollView>
        </View>
      </View>
    </BottomSheetModal>
  )
}

const CustomBackdrop = ({ animatedIndex, style }: BottomSheetBackdropProps) => {
  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: '#1b1b1b',
        opacity: 0.6,
      },
    ],
    [style],
  )

  return <Animated.View style={containerStyle} />
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 12,
  },
  textTitle: {
    fontSize: 14,
    textAlign: 'center',
  },
  btnLoadMore: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
    marginBottom: 55,
  },
})
