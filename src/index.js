import React from 'react';
import ReactDOM from 'react-dom';

import StoreProvider from './store/StoreProvider';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// eslint-disable-next-line
ReactDOM.render(<StoreProvider />, document.getElementById('root'));
registerServiceWorker();
