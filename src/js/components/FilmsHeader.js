import React, {Component} from 'react';
import {connect} from 'react-redux';
import Filter from './Filter';

class FilmsHeader extends Component {
  render() {
    return (
      <header className="films-header">
        <div>
          {this.props.count} movies found
        </div>
        <Filter content="Sort by"
                value={this.props.active}
                items={this.props.items}
                setActive={this.props.setSorting}/>
      </header>
    );
  }
}

function mapStateToProps (state){
  return {
    items: state.movies.sortBy.values,
    active: state.movies.sortBy.active,
  };
};

function mapDispatchToProps (dispatch){
  return {
    setSorting: (value) => {
      dispatch({
        type: 'SET_SORT_BY',
        active: value,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FilmsHeader);