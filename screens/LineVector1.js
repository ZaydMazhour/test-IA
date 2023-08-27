import * as React from "react";
import { StyleSheet, View } from "react-native";

const LineVector1 = () => {
  return <View style={styles.lineView} />;
};

const styles = StyleSheet.create({
  lineView: {
    borderStyle: "solid",
    borderColor: "#e2e8f0",
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: 1,
  },
});

export default LineVector1;
