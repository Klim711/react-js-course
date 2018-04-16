import React, {Component} from "react";
import ReactDOM from "react-dom";
import Main from './Main';

class Container extends Component {
  render() {
    return (
      <div>
        <Main content="MAIN"/>
      </div>
    );
  }
}
export default Container;

ReactDOM.render(<Container/>, document.getElementById("container"));
