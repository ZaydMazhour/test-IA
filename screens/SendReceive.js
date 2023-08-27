import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const SendReceive = () => {
  return (
    <Text style={styles.sendReceive}>{`Send & 
Receive`}</Text>
  );
};

const styles = StyleSheet.create({
  sendReceive: {
    fontSize: FontSize.size_181xl,
    fontWeight: "700",
    fontFamily: FontFamily.boldNormalHeading,
    color: Color.black,
    textAlign: "center",
  },
});

export default SendReceive;
