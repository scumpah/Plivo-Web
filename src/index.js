import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import configureStore from './store';
import { Provider } from 'react-redux';
import Application from './App';
import * as serviceWorker from './serviceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
    <Provider store={configureStore()}>
      <MuiThemeProvider >
       <Application />
      </MuiThemeProvider>
    </Provider>
  );

  ReactDOM.render(<App />, document.getElementById('root'));



// render(
// <Provider store={configureStore()}>
// <MuiThemeProvider>
// <App />
// </MuiThemeProvider>
// </Provider>,
// document.getElementById('root'));
serviceWorker.unregister();
