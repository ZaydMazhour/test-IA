import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const CreateNewPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.createNewPassword}>
      <Pressable
        style={[styles.pryButton, styles.pryButtonFlexBox]}
        onPress={() => navigation.navigate("PasswordChangedSuccess")}
      >
        <Text style={[styles.next, styles.nextTypo]}>Change password</Text>
      </Pressable>
      <Text style={styles.enterANew}>
        Enter a new password for your account
      </Text>
      <View style={[styles.newPass, styles.newPosition]}>
        <View style={[styles.txtBox, styles.txtPosition]} />
        <Text style={[styles.text, styles.textTypo]}>**********</Text>
        <Text style={[styles.newPassword, styles.textTypo]}>New Password</Text>
        <Text style={[styles.minimum6Characters, styles.matchedTypo]}>
          Minimum 6 characters required
        </Text>
        <Image
          style={styles.crossIcon}
          contentFit="cover"
          source={require("../assets/cross1.png")}
        />
      </View>
      <View style={[styles.retypePass, styles.newPosition]}>
        <View style={[styles.txtBox1, styles.txtPosition]} />
        <Text style={[styles.text, styles.textTypo]}>**********</Text>
        <Text style={[styles.newPassword, styles.textTypo]}>
          Retype Password
        </Text>
        <Text style={[styles.matched, styles.matchedTypo]}>Matched.</Text>
        <Image
          style={styles.crossIcon}
          contentFit="cover"
          source={require("../assets/verified1.png")}
        />
      </View>
      <View style={styles.createNewPasswordInner}>
        <View />
      </View>
      <Text style={[styles.chooseANew, styles.newPosition]}>
        Choose a new password
      </Text>
      <View style={[styles.createNewPasswordChild, styles.pryButtonFlexBox]} />
      <Text style={styles.cancel}>Cancel</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pryButtonFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  nextTypo: {
    textAlign: "left",
    fontFamily: FontFamily.boldNormalHeading,
    fontWeight: "700",
    fontSize: FontSize.boldNormalHeading_size,
  },
  newPosition: {
    left: "8.7%",
    position: "absolute",
  },
  txtPosition: {
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.backgroundBackground4,
    borderRadius: Border.br_7xs,
    bottom: "28.42%",
    right: "0%",
    top: "29.47%",
    height: "42.11%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  textTypo: {
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    lineHeight: 26,
    letterSpacing: 0.3,
    fontSize: FontSize.ptBoldHeader5CardTitles_size,
    height: "13.68%",
    display: "flex",
    textAlign: "left",
    alignItems: "center",
    position: "absolute",
  },
  matchedTypo: {
    lineHeight: 22,
    left: "7.27%",
    top: "87.37%",
    width: "82.12%",
    height: "10.53%",
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    letterSpacing: 0.3,
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.boldNormalHeading_size,
    alignItems: "center",
    position: "absolute",
  },
  next: {
    color: Color.mainWhite,
  },
  pryButton: {
    top: 406,
    left: 32,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colourMain2,
    width: 334,
    flexDirection: "row",
    paddingHorizontal: Padding.p_126xl,
    paddingVertical: Padding.p_mid,
    justifyContent: "center",
  },
  enterANew: {
    top: 88,
    color: Color.darkGray,
    width: 338,
    display: "flex",
    fontFamily: FontFamily.ptRegularNormalText,
    lineHeight: 18,
    left: 36,
    textAlign: "left",
    fontSize: FontSize.boldNormalHeading_size,
    alignItems: "center",
    position: "absolute",
  },
  txtBox: {
    borderColor: "#eb6a6a",
  },
  text: {
    width: "75.15%",
    top: "43.16%",
    left: "4.55%",
    color: Color.lightSecondary,
  },
  newPassword: {
    width: "89.39%",
    top: "0%",
    color: Color.lightPrimary,
    left: "0%",
  },
  minimum6Characters: {
    color: Color.highlightsHighlight6,
  },
  crossIcon: {
    height: "14.74%",
    width: "4.24%",
    top: "85.26%",
    right: "95.76%",
    bottom: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  newPass: {
    top: "15.29%",
    bottom: "74.11%",
    right: "11.59%",
    width: "79.71%",
    height: "10.6%",
    left: "8.7%",
  },
  txtBox1: {
    borderColor: "#ebebeb",
  },
  matched: {
    color: Color.highlightsHighlight2,
  },
  retypePass: {
    top: "29.24%",
    bottom: "60.16%",
    right: "11.59%",
    width: "79.71%",
    height: "10.6%",
    left: "8.7%",
  },
  createNewPasswordInner: {
    top: 67,
    height: 21,
    left: 36,
    position: "absolute",
  },
  chooseANew: {
    height: "2.23%",
    width: "44.69%",
    top: "6.36%",
    color: Color.notBlack,
    textAlign: "left",
    fontFamily: FontFamily.boldNormalHeading,
    fontWeight: "700",
    fontSize: FontSize.boldNormalHeading_size,
  },
  createNewPasswordChild: {
    top: 488,
    left: 101,
  },
  cancel: {
    top: "53.46%",
    left: "44.44%",
    color: Color.colourMain2,
    fontFamily: FontFamily.ptRegularNormalText,
    lineHeight: 18,
    textAlign: "left",
    fontSize: FontSize.boldNormalHeading_size,
    position: "absolute",
  },
  createNewPassword: {
    backgroundColor: Color.mainWhite,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default CreateNewPassword;
