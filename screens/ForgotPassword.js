import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Border, FontFamily, Color, Padding } from "../GlobalStyles";

const ForgotPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.forgotPassword}>
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={styles.whatsYourEmailOrPhoneNumParent}>
          <Text style={[styles.whatsYourEmailContainer, styles.yourTypo]}>
            <Text style={styles.nextTypo}>
              What’s your email or phone number
            </Text>
            <Text style={styles.nextTypo}> </Text>
            <Text style={styles.aPasswordRecovery}>
              A password recovery mail will be sent into your email address
            </Text>
          </Text>
          <View style={[styles.inputbox, styles.inputboxFlexBox]}>
            <Text style={[styles.enterYourEmail, styles.yourTypo]}>
              Enter your email
            </Text>
          </View>
        </View>
        <View style={styles.pryButtonWrapper}>
          <Pressable
            style={[styles.pryButton, styles.inputboxFlexBox]}
            onPress={() => navigation.navigate("WelcomeVerifyPasswordEmai")}
          >
            <Text style={[styles.next, styles.nextTypo]}>Reset Password</Text>
          </Pressable>
        </View>
      </View>
      <Image
        style={[styles.arrowRightLargeIcon, styles.frameParentPosition]}
        contentFit="cover"
        source={require("../assets/arrow-right-large1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentPosition: {
    left: 40,
    position: "absolute",
  },
  yourTypo: {
    textAlign: "left",
    fontSize: FontSize.boldNormalHeading_size,
  },
  inputboxFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_11xl,
    width: 334,
  },
  nextTypo: {
    fontFamily: FontFamily.boldNormalHeading,
    fontWeight: "700",
  },
  aPasswordRecovery: {
    fontFamily: FontFamily.ptRegularNormalText,
  },
  whatsYourEmailContainer: {
    color: Color.notBlack,
    height: 91,
    width: 334,
  },
  enterYourEmail: {
    lineHeight: 18,
    color: Color.mainAshColour,
    width: 136,
    fontFamily: FontFamily.ptRegularNormalText,
  },
  inputbox: {
    backgroundColor: Color.whitesmoke_600,
    height: 53,
    paddingLeft: 32,
    paddingTop: Padding.p_2xs,
    paddingRight: Padding.p_3xl,
    paddingBottom: Padding.p_2xs,
    marginTop: 10,
    overflow: "hidden",
  },
  whatsYourEmailOrPhoneNumParent: {
    width: 334,
  },
  next: {
    color: Color.mainWhite,
    textAlign: "left",
    fontSize: FontSize.boldNormalHeading_size,
  },
  pryButton: {
    backgroundColor: Color.colourMain2,
    paddingHorizontal: Padding.p_126xl,
    paddingVertical: Padding.p_mid,
    justifyContent: "center",
  },
  pryButtonWrapper: {
    marginTop: 10,
  },
  frameParent: {
    top: 88,
  },
  arrowRightLargeIcon: {
    top: 40,
    width: 20,
    height: 20,
  },
  forgotPassword: {
    backgroundColor: Color.mainWhite,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default ForgotPassword;
