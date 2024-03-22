import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Text, StyleSheet, Dimensions, View } from 'react-native'
import { BottomSheetBackdropProps, BottomSheetModal } from '@gorhom/bottom-sheet'
import { Line } from '../theme'
import Animated, { interpolate, useAnimatedStyle, Extrapolate } from 'react-native-reanimated'

const { height } = Dimensions.get('window')
const percentScreen = [0.75, 1]

export default function CommentBottomSheet(props: any) {
  const [currentPercentScreen, setCurrentPercentScreen] = useState(1)
  const { openModal, onModalClose } = props
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
    } else {
      setCurrentPercentScreen(index)
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
    >
      <View style={styles.contentContainer}>
        <Text style={styles.textTitle}>Bình luận</Text>
        <Line style={{ marginVertical: 8, borderColor: '#f0f0f0' }} />
        <View
          style={[
            { position: 'absolute', left: 0, right: 0, height: 500, backgroundColor: '#fff' },
            { bottom: height * (1 - percentScreen[currentPercentScreen]) - 500 },
          ]}
        ></View>
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
  },
  textTitle: {
    fontSize: 14,
    textAlign: 'center',
  },
})
