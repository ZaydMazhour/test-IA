import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const StTimeLogin = () => {
  return <Text style={styles.stTimeLogin}>1st time login</Text>;
};

const styles = StyleSheet.create({
  stTimeLogin: {
    fontSize: FontSize.size_81xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.black,
    textAlign: "center",
  },
});

export default StTimeLogin;
