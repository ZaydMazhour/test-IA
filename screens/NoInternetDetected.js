import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const NoInternetDetected = () => {
  return (
    <Text style={styles.noInternetDetected}>{`No internet 
detected page`}</Text>
  );
};

const styles = StyleSheet.create({
  noInternetDetected: {
    fontSize: FontSize.size_181xl,
    fontWeight: "700",
    fontFamily: FontFamily.boldNormalHeading,
    color: Color.black,
    textAlign: "right",
  },
});

export default NoInternetDetected;
