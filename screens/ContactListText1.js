import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const ContactListText1 = () => {
  return <Text style={styles.contactList}>Contact list</Text>;
};

const styles = StyleSheet.create({
  contactList: {
    fontSize: FontSize.size_81xl,
    fontWeight: "700",
    fontFamily: FontFamily.boldNormalHeading,
    color: Color.black,
    textAlign: "left",
  },
});

export default ContactListText1;
