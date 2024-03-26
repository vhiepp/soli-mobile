import { useUserStateContext } from '@/contexts'
import { MaterialCommunityIcons, Octicons, SimpleLineIcons } from '@expo/vector-icons'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function AccountScreenHeader() {
  const { signOut } = useUserStateContext()
  return (
    <View style={styles.container}>
      <View style={styles.headerLeft}>
        <MaterialCommunityIcons
          name="account-circle-outline"
          size={20}
          color="black"
        />
        <Text style={styles.authorUId}>dhiep2307</Text>
      </View>
      <View style={styles.headerRight}>
        <TouchableOpacity
          style={[styles.btnAction]}
          onPress={signOut}
        >
          <Octicons
            name="diff-added"
            size={24}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btnAction]}>
          <SimpleLineIcons
            name="menu"
            size={23}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
  },
  headerLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 14,
  },
  authorUId: {
    fontSize: 20,
    fontWeight: '600',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  btnAction: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
