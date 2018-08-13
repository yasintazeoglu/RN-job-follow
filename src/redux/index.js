import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import {
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';
import AppRouteConfigs from '../screen'
import state from './reducer/index'


const navReducer = createNavigationReducer(AppRouteConfigs);
const appReducer = combineReducers({
  nav: navReducer,
  myState:state,
});

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

export default createStore(
  appReducer,
  applyMiddleware(middleware),
);


