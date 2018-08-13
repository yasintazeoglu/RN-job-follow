import React from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import { connect } from "react-redux";
import { singleSave} from "../../database/control";
import Header from '../../components/header'
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.companiesSave = this.companiesSave.bind(this);
    this.state = {
      text: ""
    };
  }
  companiesSave() {
    const ref = "companies"
    singleSave(this.props.companies, this.state.text,ref)
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
          onPress={this.companiesSave}
          title="Companies"
          color="#841584"
        />
      </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  companies: state.myState.firebase_data.companies
});
const mapActionsToProps = {
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(Home);
