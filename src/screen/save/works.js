import React from "react";
import { connect } from "react-redux";
import { multiSave } from "../../database/control";
import { Text, View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import Picker from "../../components/picker";
import TextInput from "../../components/text_input";
import { return_picker } from "../../redux/reducer/picker.reducer";
import Header from '../../components/header'
class Works extends React.Component {
  constructor(props) {
    super(props);
    this.WorksSave = this.WorksSave.bind(this);
    this.saved = this.saved.bind(this);
    this.state = {
      data: {},
      checked: false,
      checkbox: {
        name: "close-o",
        color: "red"
      },
      detail: "",
      distance: "",
      value: "",
      weight: "",
      save_date: ""
    };
  }
  saved() {
    let e = () =>{console.log("birseyler eksik")};
    const { receiver, sender } = this.props.picker_item;
    const {detail,value,weight,distance,save_date,checked}=this.state
    receiver&&sender&&detail&&value&&weight&&distance&&save_date?
    this.WorksSave({detail,receiver,sender,detail,value,weight,distance,
      save_date,paid:checked})
    :e();
  }
  WorksSave(ds) {
    const ref = "works";
    multiSave(this.props.works, ds, ref)
      .then(data => {
        console.log(data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    this.props.navigation.openDrawer()
    const { companies, return_picker, picker_item } = this.props;
    const icon_props = {
      containerStyle: styles.menuicon,
      underlayColor: "transparent",
      name: this.state.checkbox.name,
      type: "evilicon",
      color: this.state.checkbox.color,
      size: 25,
      onPress: () => {
        this.state.checked
          ? this.setState({
              checkbox: { name: "close-o", color: "red" },
              checked: false
            })
          : this.setState({
              checkbox: { name: "check", color: "green" },
              checked: true
            });
      }
    };
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
      <Header open={this.props.navigation.openDrawer} close={this.props.navigation.closeDrawer}/>
      <View style={{ margin: 10 }}>
        <Picker
          type="receiver"
          core={companies}
          styles={styles}
          onValueChange={return_picker}
          state={picker_item}
        />
        <Picker
          type="sender"
          core={companies}
          styles={styles}
          onValueChange={return_picker}
          state={picker_item}
        />
        <TextInput
          value={this.state.distance} type="numeric" name="Distance"
          onChangeText={e => this.setState({ distance: e })}
        />
        <TextInput
          value={this.state.value} type="numeric" name="Value"
          onChangeText={e => this.setState({ value: e })}
        />
        <TextInput
          value={this.state.weight} type="numeric" name="Weight" 
          onChangeText={e => this.setState({ weight: e })}
        />
        <TextInput
          value={this.state.detail} type="default" name="Detail" 
          onChangeText={t => {
            this.setState({ detail: t });
          }}
        />
        <TextInput
          value={this.state.save_date} type="default" name="Date Save" 
          onChangeText={t => {
            this.setState({save_date : t });
          }}
        />
        <View style={styles.checkbox}>
          <Icon {...icon_props} />
          <Text>i am paid</Text>
        </View>

        <Text onPress={this.saved}>Save</Text>
      </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  pickerparent: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#4b1d3f",
    borderRadius: 50,
    width: 310,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10
  },
  checkbox: {
    flexDirection: "row"
  },
  picker_type: {
    color: "#4b1d3f"
  },
  text_input: {
    height: 40,
    width: 200,
    borderColor: "gray",
    borderWidth: 1
  }
});

const mapStateToProps = state => ({
  works: state.myState.firebase_data.works,
  picker_item: state.myState.picker,
  companies: state.myState.firebase_data.companies
});
const mapActionsToProps = {
  return_picker
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(Works);
