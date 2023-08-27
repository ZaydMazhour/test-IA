import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const LoginText = () => {
  return <Text style={styles.login}>Login</Text>;
};

const styles = StyleSheet.create({
  login: {
    fontSize: FontSize.size_181xl,
    fontWeight: "700",
    fontFamily: FontFamily.boldNormalHeading,
    color: Color.black,
    textAlign: "center",
  },
});

export default LoginText;
