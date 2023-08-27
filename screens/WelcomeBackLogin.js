import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const WelcomeBackLogin = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.welcomeBackLogin}>
      <Pressable
        style={styles.frameParent}
        onPress={() => navigation.navigate("Home")}
      >
        <View>
          <Text style={styles.welcomeBackJohnContainer}>
            <Text style={styles.welcomeBackJohn}>{`Welcome back, 
John
`}</Text>
            <Text style={styles.enterYourPassword}>{`
Enter your password to continue`}</Text>
          </Text>
          <View style={[styles.inputbox, styles.inputboxFlexBox]}>
            <Text style={[styles.enterPassword, styles.backTypo]}>
              Enter password
            </Text>
          </View>
        </View>
        <View style={styles.pryButtonWrapper}>
          <View style={[styles.pryButton, styles.inputboxFlexBox]}>
            <Text style={styles.next}>Continue</Text>
          </View>
        </View>
      </Pressable>
      <View style={[styles.inputbox1, styles.inputboxFlexBox]}>
        <Text style={[styles.back, styles.backTypo]}>Back</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputboxFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_11xl,
  },
  backTypo: {
    color: Color.mainAshColour,
    lineHeight: 18,
    fontFamily: FontFamily.ptRegularNormalText,
    fontSize: FontSize.boldNormalHeading_size,
  },
  welcomeBackJohn: {
    fontSize: FontSize.size_21xl,
    color: Color.notBlack,
    fontFamily: FontFamily.boldNormalHeading,
    fontWeight: "700",
  },
  enterYourPassword: {
    color: Color.darkslategray_300,
    fontFamily: FontFamily.ptRegularNormalText,
    fontSize: FontSize.boldNormalHeading_size,
  },
  welcomeBackJohnContainer: {
    textAlign: "left",
  },
  enterPassword: {
    textAlign: "left",
  },
  inputbox: {
    height: 53,
    paddingLeft: Padding.p_15xl,
    paddingTop: Padding.p_2xs,
    paddingRight: Padding.p_3xl,
    paddingBottom: Padding.p_2xs,
    marginTop: 15,
    width: 334,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_11xl,
    backgroundColor: Color.whitesmoke_600,
    overflow: "hidden",
  },
  next: {
    color: Color.mainWhite,
    fontSize: FontSize.boldNormalHeading_size,
    fontFamily: FontFamily.boldNormalHeading,
    fontWeight: "700",
    textAlign: "left",
  },
  pryButton: {
    backgroundColor: Color.colourMain2,
    paddingHorizontal: Padding.p_126xl,
    paddingVertical: Padding.p_mid,
    justifyContent: "center",
    width: 334,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_11xl,
  },
  pryButtonWrapper: {
    marginTop: 17,
  },
  frameParent: {
    top: 84,
    left: 40,
    position: "absolute",
  },
  back: {
    textAlign: "center",
  },
  inputbox1: {
    height: "5.8%",
    marginLeft: -187,
    top: "91.96%",
    bottom: "2.23%",
    left: "50%",
    width: 96,
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_2xs,
    backgroundColor: Color.whitesmoke_600,
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  welcomeBackLogin: {
    backgroundColor: Color.mainWhite,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default WelcomeBackLogin;
