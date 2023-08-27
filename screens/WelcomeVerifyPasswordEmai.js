import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Padding, Border } from "../GlobalStyles";

const WelcomeVerifyPasswordEmai = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.welcomeVerifyPasswordEmai}>
      <View style={styles.frameParent}>
        <View style={styles.enterThe6DigitCodeSentToWrapper}>
          <Text style={[styles.enterThe6DigitContainer, styles.nextTypo1]}>
            <Text
              style={styles.nextTypo}
            >{`Enter the 6-digit code sent to you at:

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
        <Pressable
          style={styles.pryButtonWrapper}
          onPress={() => navigation.navigate("CreateNewPassword")}
        >
          <View style={[styles.pryButton, styles.pryButtonFlexBox]}>
            <Text style={[styles.next, styles.nextTypo]}>Continue</Text>
          </View>
        </Pressable>
      </View>
      <View style={[styles.didntReceiveAnyCodeParent, styles.pryButtonFlexBox]}>
        <Text style={[styles.didntReceiveAny, styles.resendTypo]}>
          Didn’t receive any code?
        </Text>
        <Text style={[styles.resend, styles.resendTypo]}>Resend</Text>
      </View>
      <Image
        style={styles.arrowRightLargeIcon}
        contentFit="cover"
        source={require("../assets/arrow-right-large1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  nextTypo1: {
    textAlign: "left",
    fontSize: FontSize.boldNormalHeading_size,
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
  pryButtonFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  nextTypo: {
    fontFamily: FontFamily.boldNormalHeading,
    fontWeight: "700",
  },
  resendTypo: {
    lineHeight: 18,
    fontFamily: FontFamily.ptRegularNormalText,
    textAlign: "left",
    fontSize: FontSize.boldNormalHeading_size,
  },
  johndoegmailcom: {
    fontFamily: FontFamily.ptRegularNormalText,
  },
  enterThe6DigitContainer: {
    color: Color.notBlack,
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
  next: {
    color: Color.mainWhite,
    textAlign: "left",
    fontSize: FontSize.boldNormalHeading_size,
  },
  pryButton: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colourMain2,
    width: 334,
    paddingHorizontal: Padding.p_126xl,
    paddingVertical: Padding.p_mid,
    justifyContent: "center",
  },
  pryButtonWrapper: {
    marginTop: 20,
  },
  frameParent: {
    top: 88,
    left: 40,
    position: "absolute",
  },
  didntReceiveAny: {
    color: Color.mainAshColour,
  },
  resend: {
    color: Color.colourMain2,
    marginLeft: 4,
  },
  didntReceiveAnyCodeParent: {
    top: 312,
    left: 86,
    position: "absolute",
  },
  arrowRightLargeIcon: {
    top: 41,
    left: 39,
    width: 20,
    height: 20,
    position: "absolute",
  },
  welcomeVerifyPasswordEmai: {
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.mainWhite,
  },
});

export default WelcomeVerifyPasswordEmai;
