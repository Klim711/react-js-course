import React, {PureComponent} from 'react';

class Footer extends PureComponent {
  render() {
    return <footer>{this.props.content}</footer>;
  }
}

export default Footer;
