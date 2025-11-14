import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../res/color";
import GlobalStyles from "../styles/GlobalStyles";
import dimensions from "../res/dimenstion";

const RadioGroup = ({ options, selectedValue, onSelect,isExam }) => {
  return (
    <View style={styles.container}>
      {options.map((option) => (
        <TouchableOpacity
          key={option.value}
          style={styles.optionContainer}
          onPress={() => onSelect(option.value)}
        >
          <View style={styles.radioCircle}>
            {selectedValue === option.value && <View style={styles.selectedRb} />}
          </View>
          <Text style={[GlobalStyles.txt_regular_black_16,{marginStart:10}]}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    borderColor:colors.black,
    borderWidth:1,
    flexDirection: "row",
    paddingHorizontal:dimensions.dp_12,
    paddingVertical:dimensions.spaceDimension.space_15,
    marginTop:dimensions.spaceDimension.space_15,
    borderRadius: dimensions.dp_10, 

  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginEnd:dimensions.dp_15
  },
  radioCircle: {
    height: dimensions.spaceDimension.space_20,
    width: dimensions.spaceDimension.space_20,
    borderRadius: dimensions.spaceDimension.space_10,
    borderWidth: 2,
    borderColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedRb: {
    width: dimensions.spaceDimension.space_10,
    height: dimensions.spaceDimension.space_10,
    borderRadius: dimensions.spaceDimension.space_5,
    backgroundColor:colors.primary,
  },
  radioText: {
    marginLeft: dimensions.spaceDimension.space_10,
    fontSize: dimensions.textDimension.text_16,
  },
});

export default RadioGroup;
