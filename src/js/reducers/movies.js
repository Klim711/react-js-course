import {getAll, getById, getRelated} from '../items';

export default function movies(state = {}, action) {
  const newState = {...state};

  switch (action.type) {
    case 'SET_SEARCH_VALUE':
      return {
        ...state,
        searchValue: action.searchValue,
      }
    case 'SET_SORT_BY':
      const newActiveSort = action.active;

      if (newState.sortBy.values.includes(newActiveSort)) {
        newState.sortBy.active = newActiveSort;
      }

      return newState;
    case 'SET_SEARCH_BY':
      const newActiveSearchBy = action.active;

      if (newState.searchBy.values.includes(newActiveSearchBy)) {
        newState.searchBy.active = newActiveSearchBy;
      }

      return newState;
    case 'MOVIES_FETCH_SUCCEEDED':
      newState.items = action.items;

      return newState;
    default:
      return newState;
  }
};

function movie (state = {}, action) {
  const newState = {...state};

  switch (action.type) {
    case 'SET_MOVIE':
      newState.item = action.item;

      return newState;
    case 'SET_RELATED_MOVIES':
      newState.relatedMovies.items = action.items;
      
      return newState;
    default:
      return newState;
  }
}

export {
  movie,
  movies,
};