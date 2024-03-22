import { RefreshControl } from 'react-native'

export default function RefreshSpinner(props: any) {
  const { refreshing, onRefresh, ...ortherProps } = props

  return (
    <RefreshControl
      refreshing={refreshing}
      onRefresh={onRefresh}
      colors={['#22d6f2', '#0681ee', '#2a65fa']}
      tintColor=""
      title=""
      titleColor="#000"
      progressBackgroundColor="#fff"
      {...ortherProps}
    />
  )
}
