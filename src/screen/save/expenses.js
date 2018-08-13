import React from "react";
import { connect } from "react-redux";
import { multiSave } from "../../database/control";
import { Text, View, StyleSheet } from "react-native";
import Picker from "../../components/picker";
import TextInput from "../../components/text_input";
import { return_picker } from "../../redux/reducer/picker.reducer";
import Header from '../../components/header'

class Expenses extends React.Component {
  constructor(props) {
    super(props);
    this.ExpensesSave = this.ExpensesSave.bind(this);
    this.saved = this.saved.bind(this);
    this.state = {
      detail: "",
      save_date: "",
      expense: ""
    };
  }
  saved() {
    let e = () => {
      console.log("birseyler eksik");
    };
    const { expenses } = this.props.picker_item;
    const { detail, save_date,expense } = this.state;
    expenses && detail && save_date
      ? this.ExpensesSave({
          detail,
          kind:expenses ,
          save_date,
          expense
        })
      : e();
  }
  ExpensesSave(ds) {
    const ref = "expenses";
    multiSave(this.props.expenses, ds, ref)
      .then(d => console.log(d))
      .catch(e => console.log(e));
  }
  render() {
    const { expense_type, return_picker, picker_item } = this.props;
    return (
<View style={{ flex: 1, alignItems: "center" }}>
      <Header open={this.props.navigation.openDrawer} close={this.props.navigation.closeDrawer}/>
 
      <View style={{ margin: 10 }}>
        <Picker
          type="expenses"
          core={expense_type}
          styles={styles}
          onValueChange={return_picker}
          state={picker_item}
        />
        <TextInput
          value={this.state.expense}
          type="numeric"
          name="Expense"
          onChangeText={e => this.setState({ expense: e })}
        />
        <TextInput
          value={this.state.detail}
          type="default"
          name="Detail"
          onChangeText={t => {
            this.setState({ detail: t });
          }}
        />
        <TextInput
          value={this.state.save_date}
          type="default"
          name="Date Save"
          onChangeText={t => {
            this.setState({ save_date: t });
          }}
        />
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
  expense_type: state.myState.firebase_data.expense_type,
  expenses: state.myState.firebase_data.expenses,
  picker_item: state.myState.picker,
});
const mapActionsToProps = {
  return_picker
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(Expenses);

