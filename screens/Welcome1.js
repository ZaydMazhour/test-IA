import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color, Padding } from "../GlobalStyles";

const Welcome1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.welcome}>
      <Pressable
        style={styles.frameParent}
        onPress={() => navigation.navigate("WelcomeBackLogin")}
      >
        <View>
          <Text style={[styles.whatsYourEmail, styles.orTypo]}>
            What’s your email or phone number
          </Text>
          <View style={[styles.inputbox, styles.inputboxFlexBox]}>
            <Text style={[styles.enterEmailOr, styles.backTypo]}>
              Enter email or phone number
            </Text>
          </View>
        </View>
        <View style={styles.pryButtonWrapper}>
          <View style={[styles.pryButton, styles.inputboxFlexBox]}>
            <Text style={[styles.next, styles.orTypo]}>Continue</Text>
          </View>
        </View>
      </Pressable>
      <Pressable
        style={styles.forgotPassword}
        onPress={() => navigation.navigate("ForgotPassword")}
      >
        <Text style={[styles.forgotPassword1, styles.backTypo]}>
          Forgot password
        </Text>
      </Pressable>
      <Text
        style={[styles.byProceedingYou, styles.backTypo]}
      >{`By proceeding, you consent to get calls, whatsapp or sms messages and agree to the terms of services & privacy policy of Paakej.`}</Text>
      <View style={[styles.welcomeChild, styles.welcomeLayout]} />
      <View style={[styles.welcomeItem, styles.welcomeLayout]} />
      <Text style={[styles.or, styles.orTypo]}>or</Text>
      <Image
        style={[styles.googleLogoIcon, styles.googlePosition]}
        contentFit="cover"
        source={require("../assets/google-logo.png")}
      />
      <Text style={[styles.continueWithGoogle, styles.googlePosition]}>
        Continue with Google
      </Text>
      <View style={[styles.inputbox1, styles.inputboxFlexBox]}>
        <Text style={[styles.back, styles.backTypo]}>Back</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  orTypo: {
    fontFamily: FontFamily.boldNormalHeading,
    fontWeight: "700",
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
  },
  inputboxFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_11xl,
  },
  backTypo: {
    color: Color.mainAshColour,
    fontFamily: FontFamily.ptRegularNormalText,
    lineHeight: 18,
    fontSize: FontSize.boldNormalHeading_size,
  },
  welcomeLayout: {
    height: 1,
    width: 156,
    borderTopWidth: 1,
    borderColor: "#053582",
    borderStyle: "solid",
    top: 253,
    position: "absolute",
  },
  googlePosition: {
    top: 294,
    position: "absolute",
  },
  whatsYourEmail: {
    color: Color.notBlack,
    textAlign: "left",
  },
  enterEmailOr: {
    textAlign: "left",
  },
  inputbox: {
    height: 53,
    marginTop: 15,
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_3xl,
    backgroundColor: Color.whitesmoke_600,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_11xl,
    overflow: "hidden",
    width: 334,
  },
  next: {
    color: Color.mainWhite,
    textAlign: "left",
  },
  pryButton: {
    backgroundColor: Color.colourMain2,
    paddingHorizontal: Padding.p_126xl,
    paddingVertical: Padding.p_mid,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_11xl,
    width: 334,
  },
  pryButtonWrapper: {
    marginTop: 20,
  },
  frameParent: {
    top: 60,
    left: 33,
    position: "absolute",
  },
  forgotPassword1: {
    textAlign: "left",
  },
  forgotPassword: {
    left: "34.78%",
    top: "38.62%",
    position: "absolute",
  },
  byProceedingYou: {
    width: "80.43%",
    top: "43.97%",
    left: "7.97%",
    textAlign: "left",
    position: "absolute",
  },
  welcomeChild: {
    left: 33,
  },
  welcomeItem: {
    left: 212,
  },
  or: {
    top: 241,
    left: 195,
    color: Color.darkgray_300,
    textAlign: "left",
    position: "absolute",
  },
  googleLogoIcon: {
    left: 84,
    width: 24,
    height: 24,
  },
  continueWithGoogle: {
    left: 123,
    fontSize: FontSize.h3Header320ptMediumRoboto_size,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: "rgba(0, 0, 0, 0.54)",
    textAlign: "left",
  },
  back: {
    textAlign: "center",
  },
  inputbox1: {
    height: "5.8%",
    marginLeft: -187,
    top: "91.74%",
    bottom: "2.46%",
    left: "50%",
    width: 96,
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_3xl,
    backgroundColor: Color.whitesmoke_600,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_11xl,
    overflow: "hidden",
    position: "absolute",
  },
  welcome: {
    backgroundColor: Color.mainWhite,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default Welcome1;
