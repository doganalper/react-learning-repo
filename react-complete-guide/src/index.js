import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

// Ana rendering burada yapılmaktaıdır. Root component <App />.
ReactDOM.render(<App appTitle="Person Manager"/>, document.getElementById('root'));
registerServiceWorker();
