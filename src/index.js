import { reduxifyNavigator } from "react-navigation-redux-helpers";
import store from "./redux";
import { Provider, connect } from "react-redux";
import React from "react";
import AppRouteConfigs from "./screen";
let ReduxApp = reduxifyNavigator(AppRouteConfigs, "root");
const mapStateToProps = state => ({
  state: state.nav
});
let App = connect(mapStateToProps)(ReduxApp);

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <App />
      </Provider>
    );
  }
}
