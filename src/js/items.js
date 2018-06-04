import { isArray } from "util";

const FILMS_SOURCE = 'http://react-cdp-api.herokuapp.com';

async function getMovies({searchValue, searchBy, sortBy}) {
  const value = searchValue || '';
  const search = searchBy.active;
  const sort = sortBy.active;
  const source = `${FILMS_SOURCE}/movies` +
    `?sortBy=${sort}&sortOrder=desc&search=${value}&searchBy=${search}`;
  const response = await fetch(source);

  const {data} = await response.json();

  return data;
}

async function getMovie(id) {
  const source = `${FILMS_SOURCE}/movies/${id}`;
  const response = await fetch(source);
  
  return response.json();
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
  getRelated,
  getMovie,
  getMovies,
};


