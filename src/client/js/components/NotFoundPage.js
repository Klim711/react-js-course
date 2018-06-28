import React from 'react';
import { Link } from 'react-router-dom';

import Footer from './Footer';

const NotFoundPage = () => (
  <div className="container">
    <main className="row">
      <h1>Page not found</h1>
      <Link to="/">
          Go to main page
      </Link>
    </main>
    <Footer/>
  </div>
);

export default NotFoundPage;
