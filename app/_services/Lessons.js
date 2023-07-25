import { API } from 'app/_constants'
import { localAPI } from 'app/_axios'

export const Lessons = {
  getByIdentifier: (identifier) =>
    localAPI.get(API.ENDPOINTS.LESSON_BY_IDENTIFIER(identifier)),
}
