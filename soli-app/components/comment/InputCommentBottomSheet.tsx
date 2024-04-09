import { BottomSheetFooter, BottomSheetFooterProps } from '@gorhom/bottom-sheet'
import React, { memo, useEffect, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { Image } from 'expo-image'
import { Ionicons } from '@expo/vector-icons'
import { useUserStateContext } from '@/contexts'

const { EXPO_PUBLIC_DEFAULT_AVATAR } = process.env

interface InputCommentBottomSheetFooterProps extends BottomSheetFooterProps {
  onSendComment: any
}

const InputCommentBottomSheet = ({ animatedFooterPosition, onSendComment }: InputCommentBottomSheetFooterProps) => {
  const { bottom: bottomSafeArea } = useSafeAreaInsets()
  const [content, setContent] = useState('')
  const { userInfo } = useUserStateContext()
  const handlePressBtnSend = () => {
    onSendComment(content)
  }

  useEffect(() => {
    console.log('render InputCommentBottomSheet')
  }, [])

  return (
    <BottomSheetFooter
      bottomInset={bottomSafeArea}
      animatedFooterPosition={animatedFooterPosition}
    >
      <View style={styles.container}>
        <View style={styles.authorAvatar}>
          <Image
            source={
              userInfo
                ? // @ts-ignore
                  userInfo?.current_avatar.url
                : EXPO_PUBLIC_DEFAULT_AVATAR
            }
            style={{ width: '100%', height: '100%' }}
          />
        </View>
        <TextInput
          multiline
          defaultValue=""
          onChangeText={(text) => setContent(text)}
          placeholder="Hãy bình luận gì đó"
          style={styles.textInput}
        />
        <TouchableOpacity onPress={handlePressBtnSend}>
          <Ionicons
            name="send"
            size={24}
            color="#0681ee"
          />
        </TouchableOpacity>
      </View>
    </BottomSheetFooter>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 14,
    paddingVertical: 10,
    paddingBottom: 8,
    gap: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  authorAvatar: {
    width: 35,
    height: 35,
    borderRadius: 100,
    overflow: 'hidden',
  },
  textInput: {
    fontSize: 16,
    flex: 1,
  },
})

export default memo(InputCommentBottomSheet)
