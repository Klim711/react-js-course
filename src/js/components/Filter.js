import React, {Component} from 'react';

export default class Filter extends Component {
  constructor() {
    super();

    this.setActive = this.setActive.bind(this);
  }
  setActive(event) {
    this.props.setActive(event.target.value);
  }
  render () {
    const items = this.props.items.map((item) => {
      let className = (item === this.props.value) ? 'active' : '';

      return (
        <button className={className}
                key={item}
                value={item}
                onClick={this.setActive}>
          {item}
        </button>
      );
    });

    return (
        <div className="search__filter">
          <span className="search__filter__title">{this.props.content}</span>
          {items}
        </div>
    );
  }
}