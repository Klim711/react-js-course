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
  const newState = { ...state };

  switch (action.type) {
    case 'SET_SEARCH_VALUE':
      return {
        ...state,
        searchValue: action.searchValue,
      };
    case 'SET_SORT_BY':
      if (newState.sortBy.values.includes(action.active)) {
        newState.sortBy = {
          ...state.sortBy,
          active: action.active,
        };
      }

      return newState;
    case 'SET_SEARCH_BY':
      if (newState.searchBy.values.includes(action.active)) {
        newState.searchBy.active = action.active;
      }

      return newState;
    case 'SET_MOVIES':
      newState.items = action.items;

      return newState;
    default:
      return newState;
  }
}

export {
  initialState,
};
