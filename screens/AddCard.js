import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const AddCard = () => {
  return <Text style={styles.addCard}>Add Card / Wallet</Text>;
};

const styles = StyleSheet.create({
  addCard: {
    fontSize: FontSize.size_81xl,
    fontWeight: "700",
    fontFamily: FontFamily.boldNormalHeading,
    color: Color.black,
    textAlign: "left",
  },
});

export default AddCard;
