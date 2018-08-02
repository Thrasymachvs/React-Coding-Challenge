import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReverseApp from './App';
import LinkInfoApp from './LinkInfo';

import registerServiceWorker from './registerServiceWorker';
<div id = "app"></div>
ReactDOM.render(<ReverseApp />, document.getElementById('root'));
ReactDOM.render(<LinkInfoApp />, document.getElementById('app'));
registerServiceWorker();
