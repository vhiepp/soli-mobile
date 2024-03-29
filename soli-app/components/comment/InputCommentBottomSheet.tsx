import { useUserStateContext } from '@/contexts'
import { Ionicons } from '@expo/vector-icons'
import { BottomSheetFooter, BottomSheetFooterProps } from '@gorhom/bottom-sheet'
import { Image } from 'expo-image'
import { View } from 'moti'
import { useState } from 'react'
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface InputCommentBottomSheetFooterProps extends BottomSheetFooterProps {
  // onSendComment: any
}

export const InputCommentBottomSheet = ({
  animatedFooterPosition,
}: // onSendComment,
InputCommentBottomSheetFooterProps) => {
  const { userInfo } = useUserStateContext()
  const { bottom: bottomSafeArea } = useSafeAreaInsets()
  const [content, setContent] = useState('')

  const handlePressBtnSend = () => {
    // onSendComment(content)
  }

  return (
    <BottomSheetFooter
      bottomInset={bottomSafeArea}
      animatedFooterPosition={animatedFooterPosition}
    >
      <View style={styles.container}>
        <View style={styles.authorAvatar}>
          <Image
            source={
              // @ts-ignore
              userInfo?.current_avatar.url
            }
            style={{ width: '100%', height: '100%' }}
          />
        </View>
        <TextInput
          onChangeText={(text) => {
            console.log('chang text')
            setContent(text)
          }}
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
