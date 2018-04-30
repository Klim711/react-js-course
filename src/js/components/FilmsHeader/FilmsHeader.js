import React, {Component} from 'react';
import Filter from '../Filter/Filter';
import './FilmsHeader.scss';

export default class FilmsHeader extends Component {
  render() {
    const sortings = ['release date', 'rating'];

    return (
      <header className="films-header">
        <div>
          {this.props.count} movies found
        </div>
        <Filter content="Sort by"
                value={this.props.sortBy}
                items={this.props.sortings}
                setActive={this.props.setSorting}/>
      </header>
    );
  }
}