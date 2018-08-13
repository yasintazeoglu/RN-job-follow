import React from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import { connect } from "react-redux";
import { singleSave} from "../../database/control";
import Header from '../../components/header'
class ExpenseType extends React.Component {
  constructor(props) {
    super(props);
    this.ExpenseTypeSave= this.ExpenseTypeSave.bind(this);
    this.state = {
      text: ""
    };
  }
  ExpenseTypeSave() {
    const ref = "expense_type"
    singleSave(this.props.expense_type, this.state.text,ref)
    .then((d)=>console.log(d))
    .catch((e)=>console.log(e))
  }
  render() {
    return (
<View style={{ flex: 1, alignItems: "center" }}>
      <Header open={this.props.navigation.openDrawer} close={this.props.navigation.closeDrawer}/>
 
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TextInput
          style={{
            height: 40,
            width: 400,
            borderColor: "gray",
            borderWidth: 1
          }}
          onChangeText={t => {
            this.setState({ text: t });
          }}
        />
        <Button
          onPress={this.ExpenseTypeSave}
          title="Expense Type"
          color="#841584"
        />
      </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  expense_type: state.myState.firebase_data.expense_type
});
const mapActionsToProps = {
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(ExpenseType);
