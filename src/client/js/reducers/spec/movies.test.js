import movies, { initialState } from '../movies';
import {
  setSearchValue,
  setSortBy,
  setSearchBy,
  setMovies,
} from '../../actions/movies';

describe('movies reducer', () => {
  describe('SET_SEARCH_VALUE action', () => {
    it('assigns new searchValue', () => {
      const searchValue = 'someValue';
      const action = setSearchValue(searchValue);

      const result = movies(initialState, action);

      expect(result).toEqual({
        ...initialState,
        searchValue,
      });
    });
  });

  describe('SET_SORT_BY action', () => {
    it('assigns new sortBy.active if new value is valid', () => {
      const active = 'vote_average';
      const action = setSortBy(active);

      const result = movies(initialState, action);

      expect(result).toEqual({
        ...initialState,
        sortBy: {
          ...initialState.sortBy,
          active,
        },
      });
    });

    it('does not assign new sortBy.active if new value is invalid',
      () => {
        const active = 'asd';
        const action = setSortBy(active);

        const result = movies(initialState, action);

        expect(result).toEqual(initialState);
      });
  });

  describe('SET_SEARCH_BY action', () => {
    it('assigns new searchBy.active if new value is valid', () => {
      const active = 'genres';
      const action = setSearchBy(active);

      const result = movies(initialState, action);

      expect(result).toEqual({
        ...initialState,
        searchBy: {
          ...initialState.searchBy,
          active,
        },
      });
    });

    it('does not assign new searchBy.active if new value is invalid',
      () => {
        const active = 'asd';
        const action = setSearchBy(active);

        const result = movies(initialState, action);

        expect(result).toEqual(initialState);
      });
  });

  describe('SET_MOVIES action', () => {
    it('assigns new items', () => {
      const items = 'someValue';
      const action = setMovies(items);

      const result = movies(initialState, action);

      expect(result).toEqual({
        ...initialState,
        items,
      });
    });
  });
});
