import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const MorePricesAccording = () => {
  return (
    <Text style={styles.morePricesAccording}>{`More Prices according to 
delivery plans available`}</Text>
  );
};

const styles = StyleSheet.create({
  morePricesAccording: {
    fontSize: FontSize.size_41xl,
    fontWeight: "700",
    fontFamily: FontFamily.boldNormalHeading,
    color: Color.black,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 420,
  },
});

export default MorePricesAccording;
