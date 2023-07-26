import { API } from 'src/_constants';
import { localAPI } from 'src/_axios';

export const Lessons = {
  getByIdentifier: (identifier) =>
    localAPI.get(API.ENDPOINTS.LESSON_BY_IDENTIFIER(identifier)),
};
