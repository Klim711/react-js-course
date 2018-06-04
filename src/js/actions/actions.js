function setSearchValue(newValue) {
  return {
    type: 'SET_SEARCH_VALUE',
    searchValue: newValue,
  };
};

function setSortBy(newValue) {
  return {
    type: 'SET_SORT_BY',
    active: newValue,
  };
};

export {
  setSearchValue,
  setSortBy
};