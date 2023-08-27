import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const RateRider = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.rateRider}>
      <Image
        style={[styles.bgIcon, styles.iconGroupPosition]}
        contentFit="cover"
        source={require("../assets/bg5.png")}
      />
      <Image
        style={[styles.backdropIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/backdrop1.png")}
      />
      <Image
        style={[styles.backdropIcon1, styles.frameChildLayout]}
        contentFit="cover"
        source={require("../assets/backdrop2.png")}
      />
      <Pressable
        style={[styles.pryButton, styles.frameFlexBox]}
        onPress={() => navigation.navigate("ReviewSuccess")}
      >
        <Text style={[styles.next, styles.nextTypo]}>Submit Review</Text>
      </Pressable>
      <Text style={[styles.enterPickupAnd, styles.nextTypo]}>
        Enter Pickup and Dropoff
      </Text>
      <View style={styles.rateRiderChild} />
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupViewLayout]} />
        <View style={[styles.frameWrapper, styles.frameFlexBox]}>
          <View style={styles.frameFlexBox}>
            <View style={[styles.groupParent, styles.frameFlexBox]}>
              <Image
                style={[styles.frameChild, styles.frameChildLayout]}
                contentFit="cover"
                source={require("../assets/group-2153.png")}
              />
              <Text style={[styles.goToHome, styles.goToHomeTypo]}>
                Go to home
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={[styles.rateSamsonIni, styles.rateSamsonIniFlexBox]}>
        Rate Samson Ini
      </Text>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <View style={styles.iconStarParent}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/icon--star.png")}
          />
          <Image
            style={[styles.iconStar1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon--star1.png")}
          />
          <Image
            style={[styles.iconStar1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon--star1.png")}
          />
          <Image
            style={[styles.iconStar1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon--star1.png")}
          />
          <Image
            style={[styles.iconStar1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon--star1.png")}
          />
        </View>
      </View>
      <View style={styles.addAQuickNoteParent}>
        <Text style={[styles.addAQuick, styles.goToHomeTypo]}>
          Add a quick note
        </Text>
        <View style={[styles.rectangleContainer, styles.groupInnerLayout]}>
          <View style={[styles.groupInner, styles.groupInnerLayout]} />
          <Text style={[styles.typeHere, styles.typeHereTypo]}>Type here</Text>
        </View>
      </View>
      <Text style={[styles.paymentSuccessful, styles.rateSamsonIniFlexBox]}>
        Payment successful!
      </Text>
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <View style={[styles.rectangleView, styles.groupViewLayout]} />
        <View style={styles.reportRiderParent}>
          <Text style={[styles.reportRider, styles.typeHereTypo]}>
            Report rider
          </Text>
          <View style={styles.frameView}>
            <View style={styles.isThereAnIssueWithYourDeWrapper}>
              <Text style={[styles.isThereAn, styles.goToHomeTypo]}>
                Is there an issue with your delivery?
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Image
        style={[styles.iconsdropdowntransfer, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/iconsdropdowntransfer.png")}
      />
      <Image
        style={[styles.avatardefaultIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/avatardefault.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconGroupPosition: {
    top: 0,
    left: 0,
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameChildLayout: {
    height: 0,
    width: 0,
  },
  frameFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  nextTypo: {
    color: Color.mainWhite,
    fontFamily: FontFamily.boldNormalHeading,
    fontWeight: "700",
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
  },
  groupViewLayout: {
    height: 68,
    width: 334,
    position: "absolute",
  },
  goToHomeTypo: {
    fontFamily: FontFamily.ptRegularNormalText,
    lineHeight: 18,
    color: Color.colourMain2,
    fontSize: FontSize.boldNormalHeading_size,
  },
  rateSamsonIniFlexBox: {
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.boldNormalHeading,
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  groupLayout: {
    width: 432,
    height: 68,
    position: "absolute",
  },
  iconLayout: {
    height: 33,
    width: 33,
    overflow: "hidden",
  },
  groupInnerLayout: {
    height: 171,
    width: 334,
  },
  typeHereTypo: {
    color: Color.mainAshColour,
    fontFamily: FontFamily.ptRegularNormalText,
    lineHeight: 18,
    fontSize: FontSize.boldNormalHeading_size,
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
    left: 0,
    position: "absolute",
  },
  next: {
    textAlign: "left",
  },
  pryButton: {
    top: 782,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colourMain2,
    paddingHorizontal: Padding.p_126xl,
    paddingVertical: Padding.p_mid,
    flexDirection: "row",
    width: 334,
    justifyContent: "center",
    left: 40,
    position: "absolute",
  },
  enterPickupAnd: {
    top: "24.44%",
    left: "9.66%",
    textAlign: "left",
    position: "absolute",
  },
  rateRiderChild: {
    top: 128,
    left: -9,
    backgroundColor: Color.whitesmoke_700,
    width: 433,
    height: 419,
    display: "none",
    position: "absolute",
  },
  groupChild: {
    top: -24,
    left: -122,
    backgroundColor: "#f6f6f6",
    borderRadius: Border.br_3xs,
    display: "none",
  },
  frameChild: {
    display: "none",
  },
  goToHome: {
    marginLeft: 10,
    textAlign: "center",
    color: Color.colourMain2,
  },
  groupParent: {
    flexDirection: "row",
  },
  frameWrapper: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleParent: {
    top: 849,
    left: 162,
    width: 77,
    height: 18,
    position: "absolute",
  },
  rateSamsonIni: {
    width: "69.57%",
    top: "13.62%",
    left: "15.22%",
    fontSize: 31,
    color: Color.darkslategray_200,
  },
  groupItem: {
    backgroundColor: "rgba(64, 123, 255, 0.02)",
    left: 0,
    top: 0,
  },
  iconStar1: {
    marginLeft: 4,
  },
  iconStarParent: {
    top: 18,
    left: 123,
    flexDirection: "row",
    position: "absolute",
  },
  rectangleGroup: {
    top: 383,
    left: -6,
  },
  addAQuick: {
    textAlign: "center",
    color: Color.colourMain2,
  },
  groupInner: {
    backgroundColor: "rgba(196, 196, 196, 0.17)",
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  typeHere: {
    top: "7.02%",
    left: "5.09%",
    textAlign: "center",
    position: "absolute",
  },
  rectangleContainer: {
    marginTop: 10,
  },
  addAQuickNoteParent: {
    top: 472,
    left: 40,
    position: "absolute",
  },
  paymentSuccessful: {
    width: "48.79%",
    top: "7.37%",
    left: "25.6%",
    fontSize: FontSize.h3Header320ptMediumRoboto_size,
    color: Color.colourMain2,
  },
  rectangleView: {
    backgroundColor: "rgba(230, 230, 230, 0)",
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.07)",
    borderWidth: 1,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  reportRider: {
    width: 118,
    height: 20,
    textAlign: "left",
  },
  isThereAn: {
    color: Color.colourMain2,
    textAlign: "left",
  },
  isThereAnIssueWithYourDeWrapper: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameView: {
    marginTop: 4,
  },
  reportRiderParent: {
    top: 12,
    left: 17,
    position: "absolute",
  },
  groupView: {
    top: 687,
    left: 40,
  },
  iconsdropdowntransfer: {
    height: "2.9%",
    width: "6.28%",
    top: "80.47%",
    right: "10.87%",
    bottom: "16.63%",
    left: "82.85%",
  },
  avatardefaultIcon: {
    height: "9.82%",
    width: "21.26%",
    top: "25.22%",
    right: "39.37%",
    bottom: "64.96%",
    left: "39.37%",
    borderRadius: Border.br_81xl,
  },
  rateRider: {
    backgroundColor: Color.mainWhite,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default RateRider;
