import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const ChangePaymentMethod = () => {
  return (
    <Text style={styles.changePaymentMethod}>{`Change
payment
method`}</Text>
  );
};

const styles = StyleSheet.create({
  changePaymentMethod: {
    fontSize: FontSize.size_41xl,
    fontFamily: FontFamily.ptRegularNormalText,
    color: Color.black,
    textAlign: "center",
  },
});

export default ChangePaymentMethod;
