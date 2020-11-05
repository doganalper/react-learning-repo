import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Ana rendering burada yapılmaktaıdır. Root component <App />.
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
