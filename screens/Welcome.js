import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.welcome}>
      <Pressable
        style={styles.pryButton}
        onPress={() => navigation.navigate("ShareAndEarn")}
      >
        <Text style={[styles.next, styles.nextTypo]}>Continue</Text>
      </Pressable>
      <View style={styles.welcomeChild} />
      <View style={styles.welcomeToPaakejParent}>
        <Text
          style={[styles.welcomeToPaakej, styles.yourAccountWasFlexBox]}
        >{`Welcome to 
Paakej`}</Text>
        <Text style={[styles.yourAccountWas, styles.yourAccountWasFlexBox]}>
          Your account was created successfully
        </Text>
      </View>
      <Image
        style={styles.box1Icon}
        contentFit="cover"
        source={require("../assets/box-1.png")}
      />
      <Image
        style={styles.reload1Icon}
        contentFit="cover"
        source={require("../assets/reload-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  nextTypo: {
    fontFamily: FontFamily.boldNormalHeading,
    fontWeight: "700",
  },
  yourAccountWasFlexBox: {
    textAlign: "center",
    color: Color.notBlack,
    position: "absolute",
  },
  next: {
    color: Color.mainWhite,
    textAlign: "left",
    fontSize: FontSize.boldNormalHeading_size,
  },
  pryButton: {
    height: "5.8%",
    width: "36.96%",
    top: "85.83%",
    right: "29.71%",
    bottom: "8.37%",
    left: "33.33%",
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colourMain2,
    flexDirection: "row",
    paddingHorizontal: Padding.p_126xl,
    paddingVertical: Padding.p_mid,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  welcomeChild: {
    top: 89,
    left: -22,
    position: "absolute",
  },
  welcomeToPaakej: {
    top: "0%",
    left: "0%",
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.boldNormalHeading,
    fontWeight: "700",
  },
  yourAccountWas: {
    top: "77.71%",
    left: "-2.07%",
    fontFamily: FontFamily.ptRegularNormalText,
    fontSize: FontSize.boldNormalHeading_size,
  },
  welcomeToPaakejParent: {
    top: 356,
    left: 86,
    width: 242,
    height: 166,
    position: "absolute",
  },
  box1Icon: {
    top: 199,
    left: 131,
    width: 160,
    height: 160,
    position: "absolute",
  },
  reload1Icon: {
    top: 522,
    left: 129,
    width: 148,
    height: 148,
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

export default Welcome;
