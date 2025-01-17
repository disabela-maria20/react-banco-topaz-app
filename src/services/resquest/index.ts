import axios, { AxiosRequestConfig } from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3001/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const request = async <T>(config: AxiosRequestConfig): Promise<T> => {
  try {
    const response = await api(config)
    return response.data
  } catch (error) {
    throw new Error(`Request failed: ${error}`)
  }
}
