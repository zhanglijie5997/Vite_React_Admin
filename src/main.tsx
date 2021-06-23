import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { createBrowserHistory } from 'history';
import { HashRouter } from 'react-router-dom';
import '@i18n/i18n';
import '@assets/css/reset.css';
import '@assets/css/global.less';
const stores = store(createBrowserHistory());
ReactDOM.render(
    <Provider store={stores}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
  document.getElementById('root')
)