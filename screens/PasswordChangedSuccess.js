import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const PasswordChangedSuccess = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.passwordChangedSuccess}>
      <Image
        style={[styles.bgIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/bg3.png")}
      />
      <Image
        style={[styles.backdropIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/backdrop.png")}
      />
      <Text style={[styles.passwordChangedSuccessfully, styles.nextTypo]}>
        Password Changed Successfully!
      </Text>
      <Pressable
        style={styles.pryButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={[styles.next, styles.nextTypo]}>Continue</Text>
      </Pressable>
      <Image
        style={[styles.success1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/success-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: 0,
    top: 0,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  nextTypo: {
    textAlign: "left",
    fontFamily: FontFamily.boldNormalHeading,
    fontWeight: "700",
  },
  bgIcon: {
    width: 1032,
    height: 976,
    position: "absolute",
  },
  backdropIcon: {
    right: 0,
    bottom: -41,
    left: 0,
    top: 0,
  },
  passwordChangedSuccessfully: {
    top: "47.77%",
    left: "11.59%",
    fontSize: FontSize.h3Header320ptMediumRoboto_size,
    color: Color.notBlack,
    position: "absolute",
  },
  next: {
    fontSize: FontSize.boldNormalHeading_size,
    color: Color.mainWhite,
  },
  pryButton: {
    top: 508,
    left: 40,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colourMain2,
    width: 334,
    flexDirection: "row",
    paddingHorizontal: Padding.p_126xl,
    paddingVertical: Padding.p_mid,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  success1Icon: {
    height: "15.51%",
    width: "33.33%",
    top: "26.34%",
    right: "33.33%",
    bottom: "58.15%",
    left: "33.33%",
  },
  passwordChangedSuccess: {
    backgroundColor: Color.darkslateblue_100,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default PasswordChangedSuccess;
