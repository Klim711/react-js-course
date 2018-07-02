function setSearchValue(newValue) {
  return {
    type: 'SET_SEARCH_VALUE',
    searchValue: newValue,
  };
}

function setSortBy(newValue) {
  return {
    type: 'SET_SORT_BY',
    active: newValue,
  };
}

function setSearchBy(newValue) {
  return {
    type: 'SET_SEARCH_BY',
    active: newValue,
  };
}

function setMovies(newValue) {
  return {
    type: 'SET_MOVIES',
    items: newValue,
  };
}

function fetchMovies() {
  return {
    type: 'MOVIES_FETCH',
  };
}

export {
  setSearchValue,
  setSortBy,
  setSearchBy,
  setMovies,
  fetchMovies,
};
