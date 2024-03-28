import { Ionicons } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { Link } from 'expo-router'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const { EXPO_PUBLIC_DEFAULT_AVATAR } = process.env

export function UserExplore() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontWeight: '500', fontSize: 15 }}>Khám phá mọi người</Text>
        <Link href={'/(tabs)/friend'}>
          <Text style={{ color: '#0681ee', fontWeight: '600', fontSize: 15 }}>Xem tất cả</Text>
        </Link>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <UserExploreCard />
        <UserExploreCard />
        <UserExploreCard />
        <UserExploreCard />
        <UserExploreCard />
        <UserExploreCard />
        <UserExploreCard />
        <UserExploreCard />
        <UserExploreCard />
        <UserExploreCard />
      </ScrollView>
    </View>
  )
}

const UserExploreCard = () => {
  return (
    <View style={styles.containerCard}>
      <TouchableOpacity style={styles.closeIcon}>
        <Ionicons
          name="close"
          size={20}
          color="#ccc"
        />
      </TouchableOpacity>
      <View style={styles.authorAvatarCard}>
        <Image
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          source={EXPO_PUBLIC_DEFAULT_AVATAR}
        />
      </View>
      <Text
        style={styles.authorNameCard}
        numberOfLines={1}
      >
        Dương Văn Hiệp
      </Text>
      <Text style={{ fontSize: 12, color: '#ccc' }}>Gợi ý cho bạn</Text>
      <TouchableOpacity style={styles.btnFollow}>
        <Text style={{ color: '#fff', fontSize: 14 }}>Theo dõi</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
  },
  containerCard: {
    position: 'relative',
    paddingVertical: 12,
    paddingHorizontal: 7,
    marginLeft: 4,
    borderWidth: 1,
    borderColor: '#ebebeb',
    borderRadius: 6,
    alignItems: 'center',
    width: 150,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  authorAvatarCard: {
    width: 80,
    height: 80,
    borderRadius: 100,
    overflow: 'hidden',
    marginBottom: 10,
  },
  authorNameCard: {
    fontSize: 16,
    fontWeight: '500',
  },
  btnFollow: {
    backgroundColor: '#2a65fa',
    width: '92%',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 26,
  },
  closeIcon: {
    position: 'absolute',
    right: 4,
    top: 4,
  },
})
