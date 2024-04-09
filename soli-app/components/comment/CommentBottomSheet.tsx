import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Text, StyleSheet, Dimensions, View, TouchableOpacity, Button } from 'react-native'
import {
  BottomSheetBackdropProps,
  BottomSheetFlatList,
  BottomSheetModal,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet'
import { Line } from '../theme'
import Animated from 'react-native-reanimated'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { usePostApi } from '@/apis'
import CommentItem from './CommentItem'
import InputCommentBottomSheet from './InputCommentBottomSheet'

const { height } = Dimensions.get('window')
const percentScreen = [0.7, 1]

export default function CommentBottomSheet(props: any) {
  const { openModal, onModalClose, postId } = props

  const [state, setState] = useState({
    commentList: [],
    commentListCurrentPage: 1,
  })

  const scrollViewRef = useRef(null)

  const setCommentList = (value: any) => {
    setState((prev) => ({ ...prev, commentList: value }))
  }

  const setCommentListCurrenPage = (value: number) => {
    setState((prev) => ({ ...prev, commentListCurrentPage: value }))
  }

  const setMultipleState = (value: any) => {
    setState((prev) => ({ ...prev, ...value }))
  }

  const { getCommentListForPostId, commentForPostId } = usePostApi()
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

      if (data.data.length > 0) {
        // @ts-ignore
        setMultipleState({
          commentList: [...state.commentList, ...data.data],
          commentListCurrentPage:
            state.commentListCurrentPage === data.last_page ? 0 : state.commentListCurrentPage + 1,
        })
      } else {
        setMultipleState({
          commentListCurrentPage: 0,
        })
      }
    }
  }

  const handleSendComment = async (text: string) => {
    if (text.length > 0) {
      const data: any = await commentForPostId(postId, text)
      if (scrollViewRef.current) {
        // @ts-ignore
        scrollViewRef.current.scrollTo({ animated: true, offset: 0 })
      }
      setMultipleState({
        commentList: [data, ...state.commentList],
      })
    }
  }

  const customBottom = useCallback(
    (props: any) => {
      return (
        <InputCommentBottomSheet
          {...props}
          onSendComment={handleSendComment}
        />
      )
    },
    [state],
  )

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
      footerComponent={customBottom}
    >
      <View style={styles.contentContainer}>
        <View style={{ flex: 1 }}>
          <BottomSheetScrollView
            style={{ paddingHorizontal: 12, paddingTop: 12 }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            ref={scrollViewRef}
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

const CustomBackdrop = memo(({ animatedIndex, style }: BottomSheetBackdropProps) => {
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
})

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 12,
  },
  btnLoadMore: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
    marginBottom: 55,
  },
})
