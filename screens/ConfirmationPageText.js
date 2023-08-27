import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const ConfirmationPageText = () => {
  return (
    <Text style={styles.confirmationPage}>{`Confirmation
page`}</Text>
  );
};

const styles = StyleSheet.create({
  confirmationPage: {
    fontSize: FontSize.size_81xl,
    fontWeight: "700",
    fontFamily: FontFamily.boldNormalHeading,
    color: Color.black,
    textAlign: "center",
  },
});

export default ConfirmationPageText;
