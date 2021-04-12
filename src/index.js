import ReactDOM from 'react-dom';

import App from '@/App';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import mainReducer from './redux/reducers';
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  mainReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
