import Container from './components/Container/Container';
import '../styles/common.scss';
import ReactDOM from 'react-dom';
import React from 'react';
import ErrorBoundarry from './components/ErrorBoundary';

if (process.env.NODE_ENV === 'development') {
    console.log('Welcome to development');
}

if (process.env.NODE_ENV === 'production') {
    console.log('Welcome to production');
}

ReactDOM.render((
    <ErrorBoundarry>
        <Container/>
    </ErrorBoundarry>
  ), document.getElementById("container"));