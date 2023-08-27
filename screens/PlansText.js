import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const PlansText = () => {
  return <Text style={styles.plans}>Plans</Text>;
};

const styles = StyleSheet.create({
  plans: {
    fontSize: FontSize.size_181xl,
    fontWeight: "700",
    fontFamily: FontFamily.boldNormalHeading,
    color: Color.black,
    textAlign: "center",
  },
});

export default PlansText;
