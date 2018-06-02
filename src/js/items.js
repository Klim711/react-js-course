import { isArray } from "util";

const IMAGE_URL = 'https://ia.media-imdb.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX182_CR0,0,182,268_AL_.jpg';
const ITEMS = [{
    id: '0',
    title: ' Seven Psychopaths',
    genre: 'Comedy',
    year: '2007',
    time: '155',
    coverUrl: IMAGE_URL,
    rating: '8',
    description: `A struggling screenwriter inadvertently becomes entangled in the Los Angeles 
      criminal underworld after his oddball friends kidnap a gangster's beloved Shih Tzu.`,
  }, {
    id: '1',
    title: 'Dark Knight',
    genre: 'Comedy',
    year: '2007',
    time: '155',
    coverUrl: IMAGE_URL,
    rating: '9',
    description: `A struggling screenwriter inadvertently becomes entangled in the Los Angeles 
      criminal underworld after his oddball friends kidnap a gangster's beloved Shih Tzu.`,
  }, {
    id: '2',
    title: 'The Lord of The Rings',
    genre: 'Fantasy',
    year: '2001',
    time: '155',
    coverUrl: IMAGE_URL,
    rating: '9',
    description: `A struggling screenwriter inadvertently becomes entangled in the Los Angeles 
      criminal underworld after his oddball friends kidnap a gangster's beloved Shih Tzu.`,
  }
];

const FILMS_SOURCE = 'http://react-cdp-api.herokuapp.com';

async function getMovies(value, filter = 'title') {
  const source = `${FILMS_SOURCE}/movies/` +
    (value ? `?search=${value}&searchBy=${filter}` : '');
  const response = await fetch(source);

  const {data} = await response.json();

  return data;
}

async function getMovie(id) {
  const source = `${FILMS_SOURCE}/movies/${id}`;
  const response = await fetch(source);
  
  return response.json();
}

function getAll() {
  return ITEMS;
}

function getById(id) {
  return ITEMS.find((item) => item.id === id);
}

async function getRelated(criteria, relatesTo) {
  const filterValue = relatesTo[criteria];
  const search = isArray(filterValue) ? filterValue[0] : filterValue;
  const source =
    `${FILMS_SOURCE}/movies/?search=${search}&searchBy=${criteria}`;
  
  const response = await fetch(source);

  const {data} = await response.json();

  if (!data) {
    return [];
  }

  return data.filter((item) => item.id !== relatesTo.id);
}

export {
  getAll,
  getById,
  getRelated,
  getMovie,
};


