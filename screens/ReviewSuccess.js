import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const ReviewSuccess = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.reviewSuccess}>
      <Image
        style={[styles.bgIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/bg4.png")}
      />
      <Image
        style={[styles.backdropIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/backdrop1.png")}
      />
      <Image
        style={styles.backdropIcon1}
        contentFit="cover"
        source={require("../assets/backdrop2.png")}
      />
      <Text style={[styles.enterPickupAnd, styles.nextTypo]}>
        Enter Pickup and Dropoff
      </Text>
      <View style={styles.reviewSuccessChild} />
      <Text style={styles.success}>Success!</Text>
      <Image
        style={[styles.success1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/success-11.png")}
      />
      <Pressable
        style={styles.pryButton}
        onPress={() => navigation.navigate("DeliveryDetailsWithReview")}
      >
        <Text style={styles.nextTypo}>Go back</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    top: 0,
    left: 0,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  nextTypo: {
    textAlign: "left",
    color: Color.mainWhite,
    fontSize: FontSize.boldNormalHeading_size,
    fontFamily: FontFamily.boldNormalHeading,
    fontWeight: "700",
  },
  bgIcon: {
    width: 1032,
    height: 976,
    left: 0,
    position: "absolute",
  },
  backdropIcon: {
    right: 0,
    bottom: -55,
    left: 0,
    top: 0,
  },
  backdropIcon1: {
    top: 85,
    width: 0,
    height: 0,
    left: 0,
    position: "absolute",
  },
  enterPickupAnd: {
    left: "9.66%",
    top: "24.44%",
    color: Color.mainWhite,
    fontSize: FontSize.boldNormalHeading_size,
    position: "absolute",
  },
  reviewSuccessChild: {
    top: 128,
    left: -9,
    backgroundColor: Color.whitesmoke_700,
    width: 433,
    height: 419,
    display: "none",
    position: "absolute",
  },
  success: {
    left: "28.5%",
    fontSize: FontSize.h1Header138ptBlackRoboto_size,
    color: Color.green2,
    textAlign: "center",
    fontFamily: FontFamily.boldNormalHeading,
    fontWeight: "700",
    top: "24.44%",
    position: "absolute",
  },
  success1Icon: {
    height: "15.51%",
    width: "33.33%",
    top: "32.89%",
    right: "34.78%",
    bottom: "51.59%",
    left: "31.88%",
  },
  pryButton: {
    top: 587,
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
  reviewSuccess: {
    backgroundColor: Color.mainWhite,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default ReviewSuccess;
