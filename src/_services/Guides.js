import { API } from 'src/_constants'
import { localAPI } from 'src/_axios'

export const Guides = {
  getAll: () => localAPI.get(API.ENDPOINTS.GUIDES),
  getByTechnology: (technology) =>
    localAPI.get(API.ENDPOINTS.GUIDES_BY_TECHNOLOGY(technology)),
  getByIdentifier: (identifier) =>
    localAPI.get(API.ENDPOINTS.GUIDE_BY_IDENTIFIER(identifier)),
}
