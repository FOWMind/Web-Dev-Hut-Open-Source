import { API } from 'src/_constants'
import { localAPI } from 'src/_axios'

export const Technologies = {
  getAll: () => localAPI.get(API.ENDPOINTS.TECHNOLOGIES),
  getByName: (name) => localAPI.get(API.ENDPOINTS.TECHNOLOGY_BY_NAME(name)),
  getByArea: (area) => localAPI.get(API.ENDPOINTS.TECHNOLOGIES_BY_AREA(area)),
}
