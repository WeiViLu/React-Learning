import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ControlPanel from './views/ControlPanel.js'
import {Provider} from 'react-redux';

import store from './Store.js';



ReactDOM.render(
<Provider store={store}>
    <ControlPanel />
</Provider>
, document.getElementById('root'));
