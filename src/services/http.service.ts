import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://pfb-rpc.bitszn.com',
  timeout: 60000,
})

const httpService = {
  get: async (url: string) => {
    const data = await instance.get(url)
    return data
  },
  post: async (url: string, payload: any) => {
    const data = await instance.post(url, payload)
    return data
  },
}

export default httpService
