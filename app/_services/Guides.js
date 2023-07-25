import { API } from 'app/_constants'
import { localAPI } from 'app/_axios'

export const Guides = {
  getAll: () => localAPI.get(API.ENDPOINTS.GUIDES),
  getByTechnology: (technology) =>
    localAPI.get(API.ENDPOINTS.GUIDES_BY_TECHNOLOGY(technology)),
  getByIdentifier: (identifier) =>
    localAPI.get(API.ENDPOINTS.GUIDE_BY_IDENTIFIER(identifier)),
}
