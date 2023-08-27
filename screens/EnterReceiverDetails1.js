import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const EnterReceiverDetails1 = () => {
  return (
    <Text style={styles.enterReceiverDetails}>{`Enter Receiver 
details`}</Text>
  );
};

const styles = StyleSheet.create({
  enterReceiverDetails: {
    fontSize: FontSize.size_41xl,
    fontWeight: "700",
    fontFamily: FontFamily.boldNormalHeading,
    color: Color.black,
    textAlign: "center",
  },
});

export default EnterReceiverDetails1;
