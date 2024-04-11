const authApi = {
  signInWithEmailPassword: 'auth/sign-in',
  signInWithOAuth: 'auth/sign-in-with-oauth',
  getProfile: 'auth/profile',
}

const userApi = {
  getUserProfileWithUid: 'user/profile',
}

const postApi = {
  postListForYou: 'posts/for-you',
}

const friendApi = {
  getFriendList: 'friend',
  getFriendRequestList: 'friend/request',
  agreedFriendRequest: 'friend/request',
  deleteFriendRequest: 'friend/request',
}

export const useApiURL = () => {
  return {
    authApi,
    postApi,
    userApi,
    friendApi,
  }
}
