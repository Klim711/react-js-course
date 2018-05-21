import {getAll} from '../items';

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
      return state;
  }
};