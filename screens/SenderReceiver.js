import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const SenderReceiver = () => {
  return (
    <Text style={styles.senderReceiver}>{`Sender 
& 
receiver location`}</Text>
  );
};

const styles = StyleSheet.create({
  senderReceiver: {
    fontSize: FontSize.size_41xl,
    fontWeight: "700",
    fontFamily: FontFamily.boldNormalHeading,
    color: Color.black,
    textAlign: "center",
  },
});

export default SenderReceiver;
