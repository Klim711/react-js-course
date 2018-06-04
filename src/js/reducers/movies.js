const initialState = {
  searchBy: {
    values: ['title', 'genres'],
    active: 'title',
  },
  searchValue: '',
  items: [],
  sortBy: {
    values: ['release_date', 'vote_average'],
    active: 'release_date',
  },
};

export default function movies(state = initialState, action) {
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
        newState.sortBy = {
          ...state.sortBy,
          active: newActiveSort,
        };
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

export {
  initialState,
  movies,
}