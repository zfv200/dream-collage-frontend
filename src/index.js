import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import userReducer from './reducers/users'
import dreamReducer from './reducers/dreams'
import collageReducer from './reducers/collages'

import 'semantic-ui-css/semantic.min.css';


const rootReducer = combineReducers({userReducer, dreamReducer, collageReducer})

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}><App store={store}/></Provider>, document.getElementById('root'));
registerServiceWorker();
