import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import VideoReducer from './reducers/video'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    VideoReducer,
    window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
