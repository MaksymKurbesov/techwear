import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './main.css';

import { Provider } from 'mobx-react';
import rootStore from './stores/rootStore';


ReactDOM.render((
    <Provider stores={rootStore}>
      <App/>
    </Provider>
  ), document.getElementById('app'));