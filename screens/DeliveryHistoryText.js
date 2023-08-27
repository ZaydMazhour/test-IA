import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const DeliveryHistoryText = () => {
  return <Text style={styles.deliveryHistory}>Delivery History</Text>;
};

const styles = StyleSheet.create({
  deliveryHistory: {
    fontSize: FontSize.size_81xl,
    fontWeight: "700",
    fontFamily: FontFamily.boldNormalHeading,
    color: Color.black,
    textAlign: "left",
  },
});

export default DeliveryHistoryText;
