import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const HomeText = () => {
  return <Text style={styles.home}>Home</Text>;
};

const styles = StyleSheet.create({
  home: {
    fontSize: FontSize.size_81xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.black,
    textAlign: "center",
  },
});

export default HomeText;
