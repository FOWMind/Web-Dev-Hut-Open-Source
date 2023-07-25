import { API } from 'app/_constants'
import { localAPI } from 'app/_axios'

export const Contributors = {
  getAll: () => localAPI.get(API.ENDPOINTS.CONTRIBUTORS),
}
