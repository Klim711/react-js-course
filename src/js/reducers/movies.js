import {getAll, getById, getRelated} from '../items';

export default function movies(state = {}, action) {
  const newState = {...state};

  switch (action.type) {
    case 'SET_SEARCH_VALUE':
      return {
        ...state,
        searchValue: action.value,
      }
    case 'GET_SEARCH_ITEMS':
      return {
        ...state,
        items: getAll(state.searchValue),
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
    default:
      return newState;
  }
};

function movie (state = {}, action) {
  const newState = {...state};

  switch (action.type) {
    case 'GET_MOVIE':
      newState.item = getById(action.id);

      return newState;
    case 'GET_RELATED_MOVIES':
      const relatedMovies =
        getRelated(newState.relatedMovies.criteria, newState.item);
      
        newState.relatedMovies.items = relatedMovies;
      return newState;
    default:
      return newState;
  }
}

export {
  movie,
  movies,
};