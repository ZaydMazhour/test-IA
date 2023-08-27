import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Onboarding2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboarding2}>
      <Image
        style={styles.whhtrolleyfullIcon}
        contentFit="cover"
        source={require("../assets/whhtrolleyfull.png")}
      />
      <Image
        style={styles.bgIcon}
        contentFit="cover"
        source={require("../assets/bg2.png")}
      />
      <Pressable
        style={[styles.pryButton, styles.pryButtonFlexBox]}
        onPress={() => navigation.navigate("Onboarding3")}
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
          source={require("../assets/ellipse1.png")}
        />
        <Image
          style={[styles.ellipseIcon1, styles.ellipseIconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse.png")}
        />
        <Image
          style={[styles.ellipseIcon1, styles.ellipseIconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse.png")}
        />
      </View>
      <Text style={[styles.text, styles.nextTypo]}>
        Get delivery of your items in a shortest possible time
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
  whhtrolleyfullIcon: {
    top: 82,
    left: 1,
    width: 413,
    height: 417,
    position: "absolute",
    overflow: "hidden",
  },
  bgIcon: {
    top: 0,
    left: 0,
    width: 1032,
    height: 976,
    position: "absolute",
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
  onboarding2: {
    backgroundColor: Color.darkslateblue_100,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default Onboarding2;
