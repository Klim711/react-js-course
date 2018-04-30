import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Container.scss';

const IMAGE_URL = 'https://ia.media-imdb.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX182_CR0,0,182,268_AL_.jpg';
const ITEMS = [{
    title: ' Seven Psychopaths',
    genre: 'Comedy',
    year: '2007',
    coverUrl: IMAGE_URL,
    rating: '8',
  }, {
    title: 'Dark Knight',
    genre: 'Comedy',
    year: '2007',
    coverUrl: IMAGE_URL,
    rating: '9',
  }, {
    title: 'The Lord of The Rings',
    genre: 'Fantasy',
    year: '2001',
    coverUrl: IMAGE_URL,
    rating: '9',
  }
];

class Container extends Component {
  constructor() {
    super();

    this.state = {
      filters: ['title', 'genre'],
      filter: 'title',
      value: '',
      items: [],
      sortings: ['release date', 'rating'],
      sortBy: 'release date',
    };
    this.setSearchFilter = this.setSearchFilter.bind(this);
    this.setSearchValue = this.setSearchValue.bind(this);
    this.getItems = this.getItems.bind(this);
    this.setSorting = this.setSorting.bind(this);
    this.sortItems = this.sortItems.bind(this);
  }
  setSearchFilter(filter) {
    this.setState({
      filter,
    });
  }
  setSearchValue(value) {
    this.setState({
      value,
    });
    this.getItems();
  }
  setSorting(sortBy) {
    this.setState({
      sortBy,
    });
    this.sortItems();
  }
  getItems() {
    this.setState({
      items: ITEMS,
    });
  }
  sortItems() {

  }
  render() {
    return (
      <div className="container">
        <Header filter={this.state.filter}
                filters={this.state.filters}
                setSearchValue={this.setSearchValue}
                setSearchFilter={this.setSearchFilter}/>
        <Main items={this.state.items}
              sortings={this.state.sortings}
              sortBy={this.state.sortBy}
              setSorting={this.setSorting}/>
        <Footer content="FOOTER"/>
      </div>
    );
  }
}
export default Container;

ReactDOM.render(<Container/>, document.getElementById("container"));
