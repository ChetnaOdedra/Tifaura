import React from "react";
import { View,  TextInput } from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import colors from "../res/color";

const BorderedTextInput = ({
    placeholder, value,onChangeText,additionalViewStyle ,
    additionalInputStyle,secureTextEntry,maxLength
  }) => {
    
  return (
    <View style={[GlobalStyles.textInputView, additionalViewStyle]}>
      <TextInput
        style={[GlobalStyles.textInput, additionalInputStyle]}
        placeholder={placeholder}
        value={value}
        placeholderTextColor={colors.hintColor}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        maxLength={maxLength}
      />
    </View>
  );
};

export default BorderedTextInput;