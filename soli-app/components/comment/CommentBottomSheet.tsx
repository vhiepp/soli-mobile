import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Text, StyleSheet, Dimensions, View, TouchableOpacity } from 'react-native'
import { BottomSheetBackdropProps, BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { Line } from '../theme'
import Animated from 'react-native-reanimated'
import { InputCommentBottomSheet } from './InputCommentBottomSheet'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { usePostApi } from '@/apis'
import CommentItem from './CommentItem'

const { height } = Dimensions.get('window')
const percentScreen = [0.7, 1]

export default function CommentBottomSheet(props: any) {
  const { openModal, onModalClose, postId } = props

  const [state, setState] = useState({
    commentList: [],
    commentListCurrentPage: 1,
  })

  const setCommentList = (value: any) => {
    setState((prev) => ({ ...prev, commentList: value }))
  }

  const setCommentListCurrenPage = (value: number) => {
    setState((prev) => ({ ...prev, commentListCurrentPage: value }))
  }

  const setMultipleState = (value: any) => {
    setState((prev) => ({ ...prev, ...value }))
  }

  const { getCommentListForPostId } = usePostApi()
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null)

  // variables
  const snapPoints = useMemo(() => [height * percentScreen[0], height * percentScreen[1]], [])

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [])

  const handleSheetChanges = useCallback((index: number) => {
    if (index < 0) {
      onModalClose()
    }
  }, [])

  console.log('comment bottom sheet render')

  const handleGetCommentList = async () => {
    if (state.commentListCurrentPage > 0) {
      const data = await getCommentListForPostId(postId, state.commentListCurrentPage)
      // @ts-ignore
      setMultipleState({
        commentList: [...state.commentList, ...data.data],
        commentListCurrentPage: state.commentListCurrentPage === data.last_page ? 0 : state.commentListCurrentPage + 1,
      })
    }
  }

  useEffect(() => {
    if (openModal) {
      handlePresentModalPress()
    }
  }, [openModal])

  useEffect(() => {
    handleGetCommentList()
  }, [])

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      keyboardBehavior="fillParent"
      backdropComponent={CustomBackdrop}
      footerComponent={(props) => (
        <InputCommentBottomSheet
          {...props}
          // onSendComment={(text: any) => {
          //   console.log(text)
          // }}
        />
      )}
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
            {state.commentList.map((item: any) => (
              <CommentItem
                key={`comment-${item.id}`}
                comment={item}
              />
            ))}
            {state.commentListCurrentPage > 0 ? (
              <TouchableOpacity
                style={styles.btnLoadMore}
                onPress={handleGetCommentList}
              >
                <MaterialCommunityIcons
                  name="reload"
                  size={18}
                />
                <Text style={{ fontSize: 14 }}>Xem thêm</Text>
              </TouchableOpacity>
            ) : (
              <Text style={{ marginBottom: 55, textAlign: 'center', fontSize: 12 }}>Không có dữ liệu để hiển thị</Text>
            )}
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
