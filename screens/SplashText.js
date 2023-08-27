import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const SplashText = () => {
  return <Text style={styles.splash}>Splash</Text>;
};

const styles = StyleSheet.create({
  splash: {
    fontSize: FontSize.size_181xl,
    fontWeight: "700",
    fontFamily: FontFamily.boldNormalHeading,
    color: Color.black,
    textAlign: "center",
  },
});

export default SplashText;
