import { useUserStateContext } from '@/contexts'
import { Ionicons } from '@expo/vector-icons'
import { BottomSheetFooter, BottomSheetFooterProps, useBottomSheet } from '@gorhom/bottom-sheet'
import { Image } from 'expo-image'
import { View } from 'moti'
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface CustomFooterProps extends BottomSheetFooterProps {}

export const InputCommentBottomSheet = ({ animatedFooterPosition }: CustomFooterProps) => {
  const { userInfo } = useUserStateContext()
  const { bottom: bottomSafeArea } = useSafeAreaInsets()

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
          placeholder="Hãy bình luận gì đó"
          style={styles.textInput}
        />
        <TouchableOpacity>
          <Ionicons
            name="send"
            size={24}
            color="black"
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
    paddingBottom: 8,
    gap: 10,
    alignItems: 'center',
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
