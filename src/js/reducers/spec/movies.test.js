import { initialState, movies } from '../movies';
import {
  setSearchValue,
  setSortBy,
  setSearchBy,
  setMovies,
} from '../../actions/movies';

describe('movies reducer', function () {
  describe('SET_SEARCH_VALUE action', function () {
    it('assigns new searchValue', function () {
      const searchValue = 'someValue';
      const action = setSearchValue(searchValue);

      const result = movies(initialState, action);
      
      expect(result).toEqual({
        ...initialState,
        searchValue,
      });
    });
  });

  describe('SET_SORT_BY action', function () {
    it('assigns new sortBy.active if new value is valid', function () {
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
      function () {
        const active = 'asd';
        const action = setSortBy(active);
        
        const result = movies(initialState, action);
        
        expect(result).toEqual(initialState);
      });
  });

  describe('SET_SEARCH_BY action', function () {
    it('assigns new searchBy.active if new value is valid', function () {
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
      function () {
        const active = 'asd';
        const action = setSearchBy(active);
        
        const result = movies(initialState, action);
        
        expect(result).toEqual(initialState);
      });
  });

  describe('SET_MOVIES action', function () {
    it('assigns new items', function () {
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