import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const ForgotPasswordText = () => {
  return <Text style={styles.forgotPassword}>Forgot password</Text>;
};

const styles = StyleSheet.create({
  forgotPassword: {
    fontSize: FontSize.size_181xl,
    fontWeight: "700",
    fontFamily: FontFamily.boldNormalHeading,
    color: Color.black,
    textAlign: "center",
  },
});

export default ForgotPasswordText;
