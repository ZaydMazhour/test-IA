import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Border, FontFamily, Color, Padding } from "../GlobalStyles";

const RegisterEnterPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.registerEnterPassword}>
      <View style={styles.registerEnterPasswordInner}>
        <View>
          <Text style={[styles.chooseAPasswordContainer, styles.nextTypo1]}>
            <Text style={styles.nextTypo}>
              Choose a password for your account
            </Text>
            <Text style={styles.nextTypo}> </Text>
            <Text style={styles.letUsSecure}>Let us secure your account</Text>
          </Text>
          <View style={styles.inputbox}>
            <Text style={[styles.password, styles.backLayout]}>Password</Text>
          </View>
          <View style={styles.inputbox}>
            <Text style={[styles.password, styles.backLayout]}>
              Confirm Password
            </Text>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.inputbox2, styles.inputbox2Position]}
        onPress={() => navigation.navigate("RegisterName")}
      >
        <Text style={[styles.back, styles.backLayout]}>Back</Text>
      </Pressable>
      <Pressable
        style={[styles.pryButton, styles.inputbox2Position]}
        onPress={() => navigation.navigate("Welcome")}
      >
        <Text style={[styles.next, styles.nextTypo]}>Continue</Text>
      </Pressable>
      <View style={styles.iAgreeToTheTermsOfServicParent}>
        <Text style={[styles.iAgreeToContainer, styles.backLayout]}>
          <Text style={styles.iAgreeToTheTermsOfServic}>
            <Text style={styles.letUsSecure}>{`I agree to the `}</Text>
            <Text style={styles.nextTypo}>terms of services</Text>
            <Text style={styles.letUsSecure}>{` & `}</Text>
          </Text>
          <Text style={[styles.privacyPolicy, styles.nextTypo]}>
            privacy policy
          </Text>
          <Text style={styles.ofPaakej}> of Paakej.</Text>
        </Text>
        <View style={styles.groupChild} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nextTypo1: {
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
  },
  backLayout: {
    lineHeight: 18,
    fontSize: FontSize.boldNormalHeading_size,
  },
  inputbox2Position: {
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
  letUsSecure: {
    fontFamily: FontFamily.ptRegularNormalText,
  },
  chooseAPasswordContainer: {
    color: Color.notBlack,
    textAlign: "left",
  },
  password: {
    color: Color.mainAshColour,
    fontFamily: FontFamily.ptRegularNormalText,
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
  registerEnterPasswordInner: {
    top: 110,
    left: 39,
    position: "absolute",
  },
  back: {
    textAlign: "center",
    color: Color.mainAshColour,
    fontFamily: FontFamily.ptRegularNormalText,
  },
  inputbox2: {
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
    width: "31.88%",
    right: "8.45%",
    left: "59.66%",
    backgroundColor: Color.colourMain2,
    paddingHorizontal: Padding.p_126xl,
    paddingVertical: Padding.p_mid,
    justifyContent: "center",
  },
  iAgreeToTheTermsOfServic: {
    color: Color.mainAshColour,
  },
  privacyPolicy: {
    color: Color.colourMain2,
  },
  ofPaakej: {
    color: Color.mainAshColour,
    fontFamily: FontFamily.ptRegularNormalText,
  },
  iAgreeToContainer: {
    width: "91.23%",
    top: "0%",
    left: "8.77%",
    textAlign: "left",
    position: "absolute",
  },
  groupChild: {
    top: 7,
    left: 0,
    backgroundColor: "#d9d9d9",
    width: 17,
    height: 15,
    position: "absolute",
  },
  iAgreeToTheTermsOfServicParent: {
    height: "4.02%",
    width: "82.61%",
    top: "36.38%",
    right: "7.97%",
    bottom: "59.6%",
    left: "9.42%",
    position: "absolute",
  },
  registerEnterPassword: {
    backgroundColor: Color.mainWhite,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default RegisterEnterPassword;
