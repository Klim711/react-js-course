import  './components/Container/Container';
import '../styles/common.scss';

if (process.env.NODE_ENV === 'development') {
    console.log('Welcome to development');
}

if (process.env.NODE_ENV === 'production') {
    console.log('Welcome to production');
}