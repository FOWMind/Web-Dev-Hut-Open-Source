import { API } from 'src/_constants';
import { localAPI } from 'src/_axios';

export const Contributors = {
  getAll: () => localAPI.get(API.ENDPOINTS.CONTRIBUTORS),
};
