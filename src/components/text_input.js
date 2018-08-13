import React from "react";
import {TextInput,View,Text} from 'react-native'
const onChanged=(text,onChanged)=>{
  let newText = '';
  let numbers = '0123456789';

  for (var i=0; i < text.length; i++){
      if(numbers.indexOf(text[i]) > -1 ) {
          newText = newText + text[i];
      }
  }
  onChanged(newText)
}
const text_input = ({onChangeText,value,type,name}) => (
  <View>
    <Text>{name}</Text>
  <TextInput
    style={{
      height: 40,
      width: 200,
      borderColor: "gray",
      borderWidth: 1
    }}
    value={value}
    keyboardType={type}
    onChangeText={t => {
     type==="numeric"?onChanged(t,onChangeText):onChangeText(t)
    }}
  />
</View>
);
export default text_input