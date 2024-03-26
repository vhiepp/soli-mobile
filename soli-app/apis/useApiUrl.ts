const authApi = {
  signInWithEmailPassword: 'auth/sign-in',
  signInWithOAuth: 'auth/sign-in-with-oauth',
  getProfile: '/auth/profile',
}

const userApi = {
  getUserProfileWithUid: '/user/profile',
}

const postApi = {
  postListForYou: 'posts/for-you',
}

export const useApiURL = () => {
  return {
    authApi,
    postApi,
    userApi,
  }
}
