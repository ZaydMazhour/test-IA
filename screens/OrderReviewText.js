import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const OrderReviewText = () => {
  return (
    <Text style={styles.orderReview}>{`Order
Review`}</Text>
  );
};

const styles = StyleSheet.create({
  orderReview: {
    fontSize: FontSize.size_41xl,
    fontWeight: "700",
    fontFamily: FontFamily.boldNormalHeading,
    color: Color.black,
    textAlign: "center",
  },
});

export default OrderReviewText;
