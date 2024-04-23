import ReactDOM from 'react-dom';
import React from 'react';
import App from './app';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './styles.css';

injectTapEventPlugin();

ReactDOM.render(<App />, document.getElementById('app'));
