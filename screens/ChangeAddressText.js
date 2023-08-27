import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const ChangeAddressText = () => {
  return <Text style={styles.changeAddress}>Change Address</Text>;
};

const styles = StyleSheet.create({
  changeAddress: {
    fontSize: FontSize.size_81xl,
    fontWeight: "700",
    fontFamily: FontFamily.boldNormalHeading,
    color: Color.black,
    textAlign: "center",
  },
});

export default ChangeAddressText;
