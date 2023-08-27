import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const WelcomeVerifyEmail = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.welcomeVerifyEmail}>
      <Pressable
        style={styles.frameParent}
        onPress={() => navigation.navigate("RegisterName")}
      >
        <View style={styles.enterThe6DigitCodeSentToWrapper}>
          <Text style={[styles.enterThe6DigitContainer, styles.sTypo1]}>
            <Text style={styles.sTypo}>{`Enter the 6-digit code sent to you at:

`}</Text>
            <Text style={styles.johndoegmailcom}>johndoe@gmail.com</Text>
          </Text>
        </View>
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <View style={[styles.groupItem, styles.groupChildLayout]} />
          <View style={[styles.groupInner, styles.groupChildLayout]} />
          <View style={[styles.rectangleView, styles.groupChildLayout]} />
          <View style={[styles.groupChild1, styles.groupChildLayout]} />
          <View style={[styles.groupChild2, styles.groupChildLayout]} />
        </View>
      </Pressable>
      <View style={styles.didntReceiveAnyCodeParent}>
        <Text style={[styles.didntReceiveAny, styles.backTypo]}>
          Didn’t receive any code?
        </Text>
        <Text style={styles.resend}>Resend</Text>
      </View>
      <Pressable
        style={[styles.inputbox, styles.inputboxPosition]}
        onPress={() => navigation.navigate("Welcome1")}
      >
        <Text style={[styles.back, styles.backTypo]}>Back</Text>
      </Pressable>
      <Pressable
        style={[styles.pryButton, styles.inputboxPosition]}
        onPress={() => navigation.navigate("RegisterName")}
      >
        <Text style={[styles.next, styles.sTypo]}>Continue</Text>
      </Pressable>
      <Text style={[styles.s, styles.sTypo]}>120s</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sTypo1: {
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
  },
  groupChildLayout: {
    width: 40,
    borderWidth: 1,
    borderColor: "#bdbdbd",
    borderStyle: "solid",
    top: 0,
    height: 50,
    position: "absolute",
    backgroundColor: Color.mainWhite,
  },
  backTypo: {
    color: Color.mainAshColour,
    lineHeight: 18,
    fontFamily: FontFamily.ptRegularNormalText,
    fontSize: FontSize.boldNormalHeading_size,
  },
  inputboxPosition: {
    borderRadius: Border.br_11xl,
    bottom: "4.02%",
    top: "90.18%",
    height: "5.8%",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  sTypo: {
    fontFamily: FontFamily.boldNormalHeading,
    fontWeight: "700",
  },
  johndoegmailcom: {
    fontFamily: FontFamily.ptRegularNormalText,
  },
  enterThe6DigitContainer: {
    color: Color.notBlack,
    textAlign: "left",
  },
  enterThe6DigitCodeSentToWrapper: {
    paddingRight: Padding.p_15xl,
  },
  groupChild: {
    left: 0,
  },
  groupItem: {
    left: 150,
  },
  groupInner: {
    left: 50,
  },
  rectangleView: {
    left: 200,
  },
  groupChild1: {
    left: 100,
  },
  groupChild2: {
    left: 250,
  },
  rectangleParent: {
    width: 290,
    marginTop: 20,
    height: 50,
  },
  frameParent: {
    top: 67,
    left: 40,
    position: "absolute",
  },
  didntReceiveAny: {
    textAlign: "left",
  },
  resend: {
    color: Color.colourMain2,
    marginLeft: 4,
    lineHeight: 18,
    fontFamily: FontFamily.ptRegularNormalText,
    textAlign: "left",
    fontSize: FontSize.boldNormalHeading_size,
  },
  didntReceiveAnyCodeParent: {
    top: 292,
    alignItems: "center",
    flexDirection: "row",
    left: 40,
    position: "absolute",
  },
  back: {
    textAlign: "center",
  },
  inputbox: {
    marginLeft: -167,
    left: "50%",
    backgroundColor: Color.whitesmoke_600,
    width: 96,
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_2xs,
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
  s: {
    top: 224,
    left: 165,
    color: Color.black,
    textAlign: "left",
    fontSize: FontSize.boldNormalHeading_size,
    position: "absolute",
    fontWeight: "700",
  },
  welcomeVerifyEmail: {
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.mainWhite,
  },
});

export default WelcomeVerifyEmail;
