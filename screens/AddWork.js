import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const AddWork = () => {
  return <Text style={styles.addWork}>Add work / Home</Text>;
};

const styles = StyleSheet.create({
  addWork: {
    fontSize: FontSize.size_181xl,
    fontWeight: "700",
    fontFamily: FontFamily.boldNormalHeading,
    color: Color.black,
    textAlign: "center",
  },
});

export default AddWork;
