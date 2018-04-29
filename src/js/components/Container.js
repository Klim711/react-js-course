import React, {Component} from "react";
import ReactDOM from "react-dom";
import Main from './Main';
import Footer from './Footer';
import Header from './Header/Header';

const ITEMS = [{
    title: 'Seven Psychos',
    genre: 'Comedy',
    year: '2007',
    coverUrl: '',
    rating: '8',
  }, {
    title: 'Dark Knight',
    genre: 'Comedy',
    year: '2007',
    coverUrl: '',
    rating: '9',
  }, {
    title: 'The Lord of The Rings',
    genre: 'Fantasy',
    year: '2001',
    coverUrl: '',
    rating: '9',
  }
];

class Container extends Component {
  constructor() {
    super();

    this.state = {
      filter: 'title',
      value: '',
      items: [],
    };
    this.setSearchFilter = this.setSearchFilter.bind(this);
    this.setSearchValue = this.setSearchValue.bind(this);
    this.getItems = this.getItems.bind(this);
  }
  setSearchFilter(filter = 'title') {
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
  getItems() {
    this.setState({
      items: ITEMS,
    });
  }
  render() {
    return (
      <div>
        <Header filter={this.state.filter}
                setSearchValue={this.setSearchValue}
                setSearchFilter={this.setSearchFilter}/>
        <Main items={this.state.items} content="MAIN"/>
        <Footer content="FOOTER"/>
      </div>
    );
  }
}
export default Container;

ReactDOM.render(<Container/>, document.getElementById("container"));
