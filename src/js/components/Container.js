import React, {Component} from "react";
import ReactDOM from "react-dom";
import Main from './Main';
import Footer from './Footer';

class Container extends Component {
  render() {
    return (
      <div>
        <Main content="MAIN"/>
        <Footer content="FOOTER"/>
      </div>
    );
  }
}
export default Container;

ReactDOM.render(<Container/>, document.getElementById("container"));
