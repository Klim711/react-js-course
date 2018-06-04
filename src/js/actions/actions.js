function setSearchValue(newValue) {
  return {
    type: 'SET_SEARCH_VALUE',
    searchValue: newValue,
  };
};

export {
  setSearchValue,
};