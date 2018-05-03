import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ErrorBoundarry from '../ErrorBoundary';
import './Container.scss';
import ITEMS from '../../items';

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
      <ErrorBoundarry>
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
      </ErrorBoundarry>
    );
  }
}
export default Container;

ReactDOM.render(<Container/>, document.getElementById("container"));
