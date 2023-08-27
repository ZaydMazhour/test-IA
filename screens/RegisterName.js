import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const RegisterName = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.registerName}>
      <View style={styles.registerNameInner}>
        <View>
          <Text style={[styles.whatsYourNameContainer, styles.nextTypo1]}>
            <Text style={styles.nextTypo}>What’s your name?</Text>
            <Text style={styles.nextTypo}> </Text>
            <Text style={styles.letUsKnow}>Let us know how to address you</Text>
          </Text>
          <View style={styles.inputbox}>
            <Text style={[styles.firstName, styles.backTypo]}>First Name</Text>
          </View>
          <View style={styles.inputbox}>
            <Text style={[styles.firstName, styles.backTypo]}>Last Name</Text>
          </View>
          <View style={styles.inputbox}>
            <Text style={[styles.firstName, styles.backTypo]}>
              Enter your email
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.inputbox3, styles.inputbox3Position]}>
        <Text style={[styles.back, styles.backTypo]}>Back</Text>
      </View>
      <Pressable
        style={[styles.pryButton, styles.inputbox3Position]}
        onPress={() => navigation.navigate("RegisterEnterPassword")}
      >
        <Text style={[styles.next, styles.nextTypo]}>Continue</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  nextTypo1: {
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
  },
  backTypo: {
    color: Color.mainAshColour,
    lineHeight: 18,
    fontFamily: FontFamily.ptRegularNormalText,
    fontSize: FontSize.boldNormalHeading_size,
  },
  inputbox3Position: {
    bottom: "3.13%",
    top: "91.07%",
    height: "5.8%",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  nextTypo: {
    fontFamily: FontFamily.boldNormalHeading,
    fontWeight: "700",
  },
  letUsKnow: {
    fontFamily: FontFamily.ptRegularNormalText,
  },
  whatsYourNameContainer: {
    color: Color.notBlack,
    textAlign: "left",
  },
  firstName: {
    textAlign: "left",
  },
  inputbox: {
    width: 334,
    height: 53,
    marginTop: 15,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_11xl,
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_3xl,
    backgroundColor: Color.whitesmoke_600,
    overflow: "hidden",
  },
  registerNameInner: {
    top: 90,
    left: 40,
    position: "absolute",
  },
  back: {
    textAlign: "center",
  },
  inputbox3: {
    marginLeft: -168,
    left: "50%",
    width: 96,
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_3xl,
    backgroundColor: Color.whitesmoke_600,
    bottom: "3.13%",
    top: "91.07%",
    height: "5.8%",
    overflow: "hidden",
  },
  next: {
    color: Color.mainWhite,
    textAlign: "left",
    fontSize: FontSize.boldNormalHeading_size,
  },
  pryButton: {
    width: "31.64%",
    right: "4.83%",
    left: "63.53%",
    backgroundColor: Color.colourMain2,
    paddingHorizontal: Padding.p_126xl,
    paddingVertical: Padding.p_mid,
    justifyContent: "center",
  },
  registerName: {
    backgroundColor: Color.mainWhite,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default RegisterName;
