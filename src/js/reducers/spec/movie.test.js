import { initialState, movie } from '../movie';
import {
  setMovie,
  setRelatedMovies,
} from '../../actions/movie';

describe('movie reducer', function () {
  describe('SET_MOVIE action', function () {
    it('assigns new item', function () {
      const item = 'someValue';
      const action = setMovie(item);

      const result = movie(initialState, action);
      
      expect(result).toEqual({
        ...initialState,
        item,
      });
    });
  });

  describe('SET_RELATED_MOVIES action', function () {
    it('assigns new items for relatedMovies', function () {
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