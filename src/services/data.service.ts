import { IValues } from '~/types'
import httpService from './http.service'

const dataService = {
  submit: async (payload: IValues) => {
    const { data } = await httpService.post('/', payload)
    return {
      namespaceId: payload.namespace_id,
      date: new Date().toISOString(),
      height: data.height,
      txhash: data.txhash,
    }
  },
}

export default dataService
