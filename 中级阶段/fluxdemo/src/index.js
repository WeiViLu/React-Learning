import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ControlPanel from './views/ControlPanel.js'

ReactDOM.render(<ControlPanel />, document.getElementById('root'));
registerServiceWorker();
