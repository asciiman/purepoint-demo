import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StoreProvider from './store/StoreProvider';
import registerServiceWorker from './registerServiceWorker';

// eslint-disable-next-line
ReactDOM.render(<StoreProvider />, document.getElementById('root'));
registerServiceWorker();
