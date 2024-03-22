import axios from 'axios'

const { EXPO_PUBLIC_SERVER_DOMAIN } = process.env

const axiosClient = axios.create({
  baseURL: `${EXPO_PUBLIC_SERVER_DOMAIN}/api`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosClient
