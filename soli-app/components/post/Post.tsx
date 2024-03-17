import { Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Image } from 'expo-image'
import { AntDesign, Entypo, FontAwesome6, Ionicons } from '@expo/vector-icons'

export default function Post() {
  const handleSharePost = async () => {
    try {
      await Share.share({
        message: 'Test chia sẻ',
      })
    } catch (error) {
      console.error('Error sharing:', error)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            source={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQIxLGhYK3eAm_vWoR3A1l8Iq6_z_-ECWdoQ&usqp=CAU'
            }
            style={styles.authorAvatar}
          />
          <View style={styles.authorNameBox}>
            <Text style={styles.authorName}>_vhiep</Text>
            <Text style={styles.authorDesc}>Gợi ý cho bạn</Text>
          </View>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.btnFollow}>
            <Text>Theo dõi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dotThree}>
            <Entypo
              name="dots-three-vertical"
              style={styles.dotThreeIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.postContent}>
        <Text style={styles.textContent}>Đội mũ cà chua đi cà phê</Text>
        <Image
          source={'https://th.bing.com/th/id/OIG.MC3PObbEmuJhfsPJ8biQ'}
          style={styles.postImage}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.footerLeft}>
          <View style={styles.footerLeftIcon}>
            <TouchableOpacity>
              <Ionicons
                name="heart-outline"
                size={30}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign
                name="message1"
                size={24}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSharePost}>
              <Ionicons
                name="paper-plane-outline"
                size={27}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.textCountHeart}>344 lượt thích</Text>
        </View>
        <View style={styles.footerRight}>{/* thêm sau */}</View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 14,
  },
  header: {
    paddingHorizontal: 14,
    paddingTop: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    display: 'flex',
    flexDirection: 'row',
  },
  authorNameBox: {
    paddingLeft: 10,
  },
  authorName: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 18,
  },
  authorDesc: {
    fontSize: 12,
    color: '#a3a2a2',
  },
  authorAvatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
    objectFit: 'cover',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    height: 30,
    gap: 10,
  },
  btnFollow: {
    backgroundColor: '#ebebeb',
    justifyContent: 'center',
    paddingHorizontal: 14,
    borderRadius: 8,
    fontWeight: '600',
  },
  dotThree: {
    justifyContent: 'center',
    height: '100%',
  },
  dotThreeIcon: {
    fontSize: 18,
  },
  postContent: {
    height: 560,
    overflow: 'hidden',
  },
  textContent: {
    fontSize: 14,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 6,
  },
  postImage: {
    height: '100%',
    objectFit: 'cover',
    width: '100%',
  },
  footer: {
    paddingTop: 10,
    paddingHorizontal: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerLeft: {},
  footerLeftIcon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  textCountHeart: {
    color: '#000',
    fontSize: 14,
  },
  footerRight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
})
