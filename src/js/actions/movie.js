function setMovie(newValue) {
  return {
    type: 'SET_MOVIE',
    item: newValue,
  };
};

function setRelatedMovies(newValue) {
  return {
    type: 'SET_RELATED_MOVIES',
    items: newValue,
  };
};

function fetchMovie(newValue) {
  return {
    type: 'MOVIE_FETCH',
    id: newValue,
  };
};

export {
  setMovie,
  setRelatedMovies,
  fetchMovie,
}