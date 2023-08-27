import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const OrderReviewWith = () => {
  return (
    <Text style={styles.orderReviewWith}>{`Order Review 
with more details`}</Text>
  );
};

const styles = StyleSheet.create({
  orderReviewWith: {
    fontSize: FontSize.size_41xl,
    fontWeight: "700",
    fontFamily: FontFamily.boldNormalHeading,
    color: Color.black,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 403,
  },
});

export default OrderReviewWith;
