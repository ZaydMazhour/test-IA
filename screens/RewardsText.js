import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const RewardsText = () => {
  return <Text style={styles.rewards}>{`Rewards `}</Text>;
};

const styles = StyleSheet.create({
  rewards: {
    fontSize: FontSize.size_181xl,
    fontWeight: "700",
    fontFamily: FontFamily.boldNormalHeading,
    color: Color.black,
    textAlign: "center",
  },
});

export default RewardsText;
