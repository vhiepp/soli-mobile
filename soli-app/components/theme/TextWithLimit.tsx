import { useState } from 'react'
import { Button, Text, View } from 'react-native'

const TextWithLimit = ({ text, limit }: { text: string; limit: number }) => {
  const [showAll, setShowAll] = useState(false)

  const toggleShowAll = () => {
    setShowAll(!showAll)
  }

  const renderText = () => {
    if (!showAll && text.split('\n').length > limit) {
      const lines = text.split('\n').slice(0, limit).join('\n')
      return (
        <>
          <Text>{lines}</Text>
          <Text>...</Text>
          <Button
            title="Xem thêm"
            onPress={toggleShowAll}
          />
        </>
      )
    } else {
      return <Text>{text}</Text>
    }
  }

  return <View>{renderText()}</View>
}

export { TextWithLimit }
