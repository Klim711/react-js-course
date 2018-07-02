import movie, { initialState } from '../movie';
import {
  setMovie,
  setRelatedMovies,
} from '../../actions/movie';

describe('movie reducer', () => {
  describe('SET_MOVIE action', () => {
    it('assigns new item', () => {
      const item = 'someValue';
      const action = setMovie(item);

      const result = movie(initialState, action);

      expect(result).toEqual({
        ...initialState,
        item,
      });
    });
  });

  describe('SET_RELATED_MOVIES action', () => {
    it('assigns new items for relatedMovies', () => {
      const items = 'someValue';
      const action = setRelatedMovies(items);

      const result = movie(initialState, action);

      expect(result).toEqual({
        ...initialState,
        relatedMovies: {
          ...initialState.relatedMovies,
          items,
        },
      });
    });
  });
});
