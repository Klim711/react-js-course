const initialState = {
  item: null,
  relatedMovies: {
    criteria: 'genres',
    items: [],
  },
};

export default function movie (state = initialState, action) {
  const newState = {...state};

  switch (action.type) {
    case 'SET_MOVIE':
      newState.item = action.item;

      return newState;
    case 'SET_RELATED_MOVIES':
      newState.relatedMovies = {
        ...newState.relatedMovies,
        items: action.items,
      };
      
      return newState;
    default:
      return newState;
  }
}

export {
  initialState,
  movie,
}