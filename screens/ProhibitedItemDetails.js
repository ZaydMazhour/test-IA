import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const ProhibitedItemDetails = () => {
  return (
    <Text style={styles.prohibitedItemDetails}>{`Prohibited 
item details`}</Text>
  );
};

const styles = StyleSheet.create({
  prohibitedItemDetails: {
    fontSize: FontSize.size_41xl,
    fontWeight: "700",
    fontFamily: FontFamily.boldNormalHeading,
    color: Color.black,
    textAlign: "center",
  },
});

export default ProhibitedItemDetails;
