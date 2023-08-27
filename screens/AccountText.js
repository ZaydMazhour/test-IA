import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const AccountText = () => {
  return <Text style={styles.account}>Account</Text>;
};

const styles = StyleSheet.create({
  account: {
    fontSize: FontSize.size_181xl,
    fontWeight: "700",
    fontFamily: FontFamily.boldNormalHeading,
    color: Color.black,
    textAlign: "center",
  },
});

export default AccountText;
