import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const ChangeDeliveryPlan2 = () => {
  return <Text style={styles.changeDeliveryPlan}>Change delivery plan</Text>;
};

const styles = StyleSheet.create({
  changeDeliveryPlan: {
    fontSize: FontSize.size_41xl,
    fontFamily: FontFamily.ptRegularNormalText,
    color: Color.black,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 361,
  },
});

export default ChangeDeliveryPlan2;
