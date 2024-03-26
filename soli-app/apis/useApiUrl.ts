const authApi = {
  signInWithEmailPassword: 'auth/sign-in',
  signInWithOAuth: 'auth/sign-in-with-oauth',
}

const postApi = {
  postListForYou: 'posts/for-you',
}

export const useApiURL = () => {
  return {
    authApi,
    postApi,
  }
}
