import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const ContactListText = () => {
  return <Text style={styles.contactList}>Contact List</Text>;
};

const styles = StyleSheet.create({
  contactList: {
    fontSize: FontSize.size_181xl,
    fontWeight: "700",
    fontFamily: FontFamily.boldNormalHeading,
    color: Color.black,
    textAlign: "center",
  },
});

export default ContactListText;
