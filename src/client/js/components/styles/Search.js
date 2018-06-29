export default {
  search: {
    marginBottom: '20px',

    '& .title': {
      margin: '20px 0',
    },

    '& input': {
      width: '100%',
    },
  },

  'search-buttons': {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',

    '& button': {
      marginLeft: '10px',
      padding: '5px 20px',
      border: 0,
      borderRadius: '2px',
      textTransform: 'uppercase',
      cursor: 'pointer',
    },

    '$ .search__filter': {
      '& .active': {
        backgroundColor: 'red',
      },
    },
  },
};
