import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { set_data } from "../redux/reducer/set_data.reducer";
import {set_data_control}from '../redux/reducer/set_data_control.reducer'
import { connect } from "react-redux";
import { read_r } from "../database";

class AnimationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
    this.state = {
      status: true,
      go_home: false
    };
  }
  getData() {
    read_r(undefined, d => {
      this.props.set_data(d);
      this.props.set_data_control()
    });
    this.setState({ status: false });
  }
  render() {
    // this.state.status ? this.getData() : null;
    // this.props.set_control ? this.props.navigation.navigate("Works") : null;
    this.props.navigation.navigate("Works")
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>AnimationScreen!</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({set_control:state.myState.set_control});
const mapActionsToProps = {
  set_data,
  set_data_control
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(AnimationScreen);
