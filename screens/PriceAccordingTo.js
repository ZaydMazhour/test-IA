import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const PriceAccordingTo = () => {
  return (
    <Text style={styles.priceAccordingTo}>{`Price according to 
delivery plans available`}</Text>
  );
};

const styles = StyleSheet.create({
  priceAccordingTo: {
    fontSize: FontSize.size_41xl,
    fontWeight: "700",
    fontFamily: FontFamily.boldNormalHeading,
    color: Color.black,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 397,
  },
});

export default PriceAccordingTo;
