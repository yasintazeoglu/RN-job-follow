import { Picker, Text, View} from "react-native";
import React, { Component } from "react";

export default class MyPicker extends Component {
  state = {
    item: [],
    status: true
  };
  render() {
    let { type, core, styles, onValueChange, state } = this.props;
    const array = [];
    array.push(
      <Picker.Item label={`Select to ${type}`} value={0} key={0} />
    );
    for (let key in core) {
      array.push(<Picker.Item label={core[key]} value={key} key={key} />);
    }
    this.state.status ? this.setState({ item: array, status: false }) : null;
    return (
      <View style={styles.pickerparent}>
        <Text style={styles.picker_type}>{type} :</Text>
          <Picker
            mode="dropdown"
            selectedValue={state[type]}
            style={{ height: 50, width: 200 }}
            onValueChange={(itemValue, itemIndex) => {
              let data = {};
              data[type] = itemValue;
              onValueChange(data);
            }}
          >
            {this.state.item}
          </Picker>
      </View>
    );
  }
}
