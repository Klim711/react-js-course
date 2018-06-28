import React, {Component} from 'react';
import Main from './Main';
import Footer from './Footer';
import Header from './Header';

class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}
export default HomePage;