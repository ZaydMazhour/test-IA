import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Onboarding4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboarding4}>
      <Image
        style={[styles.bgIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/bg1.png")}
      />
      <Pressable
        style={[styles.pryButton, styles.pryButtonFlexBox]}
        onPress={() => navigation.navigate("Welcome1")}
      >
        <Text style={[styles.next, styles.nextTypo]}>Get Started</Text>
      </Pressable>
      <View style={[styles.secondarysmallwhitenostroke, styles.dotsFlexBox]}>
        <View
          style={[styles.secondarysmallwhitenostroke1, styles.pryButtonFlexBox]}
        >
          <Text style={[styles.next, styles.nextTypo]}>Login</Text>
        </View>
      </View>
      <View style={[styles.dots, styles.dotsFlexBox]}>
        <Image
          style={styles.ellipseIconLayout}
          contentFit="cover"
          source={require("../assets/ellipse.png")}
        />
        <Image
          style={[styles.ellipseIcon1, styles.ellipseIconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse.png")}
        />
        <Image
          style={[styles.ellipseIcon1, styles.ellipseIconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse1.png")}
        />
      </View>
      <Text style={[styles.text, styles.nextTypo]}>
        Have a seamless experience requesting for deliveries
      </Text>
      <Image
        style={[styles.frameIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/frame.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: 0,
    position: "absolute",
  },
  pryButtonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_11xl,
    flexDirection: "row",
  },
  nextTypo: {
    color: Color.mainWhite,
    fontFamily: FontFamily.boldNormalHeading,
    fontWeight: "700",
  },
  dotsFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 9,
    width: 9,
  },
  bgIcon: {
    top: 0,
    width: 1032,
    height: 976,
  },
  next: {
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
  },
  pryButton: {
    top: 730,
    left: 40,
    backgroundColor: Color.colourMain2,
    width: 334,
    paddingHorizontal: Padding.p_126xl,
    paddingVertical: Padding.p_mid,
    position: "absolute",
  },
  secondarysmallwhitenostroke1: {
    width: 161,
    paddingHorizontal: Padding.p_7xl,
    paddingVertical: Padding.p_sm,
    height: 52,
    overflow: "hidden",
  },
  secondarysmallwhitenostroke: {
    top: 796,
    left: 126,
  },
  ellipseIcon1: {
    marginLeft: 12,
  },
  dots: {
    top: 640,
    left: 182,
  },
  text: {
    marginTop: 50,
    marginLeft: -162,
    top: "50%",
    left: "50%",
    fontSize: FontSize.h3Header320ptMediumRoboto_size,
    textAlign: "center",
    width: 324,
    height: 52,
    position: "absolute",
  },
  frameIcon: {
    top: 96,
    width: 471,
    height: 397,
    overflow: "hidden",
  },
  onboarding4: {
    backgroundColor: Color.darkslateblue_100,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default Onboarding4;
