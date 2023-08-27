import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const ReportIssue = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.reportIssue}>
      <Image
        style={[styles.bgIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/bg7.png")}
      />
      <Image
        style={[styles.backdropIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/backdrop2.png")}
      />
      <View style={styles.reportIssueChild} />
      <View style={styles.frameParent}>
        <View>
          <Text style={styles.describeYourIssue}>Describe your issue</Text>
          <View style={[styles.rectangleParent, styles.groupChildLayout]}>
            <View style={[styles.groupChild, styles.groupChildLayout]} />
            <Text style={[styles.typeYourIssue, styles.typeYourIssueTypo]}>
              Type your issue
            </Text>
          </View>
        </View>
        <View style={styles.addScreenshotsOptionalParent}>
          <Text
            style={[styles.addScreenshotsOptional, styles.typeYourIssueTypo]}
          >
            Add screenshots (Optional)
          </Text>
          <View style={styles.instanceParent}>
            <View style={styles.editSpaceBlock}>
              <Image
                style={styles.editPlus}
                contentFit="cover"
                source={require("../assets/edit--plus.png")}
              />
            </View>
            <View style={[styles.editPlusContainer, styles.editSpaceBlock]}>
              <Image
                style={styles.editPlus}
                contentFit="cover"
                source={require("../assets/edit--plus.png")}
              />
            </View>
            <View style={[styles.editPlusContainer, styles.editSpaceBlock]}>
              <Image
                style={styles.editPlus}
                contentFit="cover"
                source={require("../assets/edit--plus.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.pryButton, styles.buttonPosition]}>
        <Text style={[styles.next, styles.nextTypo]}>Submit</Text>
      </View>
      <Pressable
        style={[styles.backButtonParent, styles.buttonPosition]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.backButtonIcon}
          contentFit="cover"
          source={require("../assets/back-button1.png")}
        />
        <Text style={[styles.scheduleADelivery, styles.nextTypo]}>
          Report an Issue
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: 0,
    position: "absolute",
  },
  groupChildLayout: {
    height: 210,
    width: 334,
  },
  typeYourIssueTypo: {
    color: Color.mainAshColour,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.ptRegularNormalText,
    fontSize: FontSize.ptBoldHeader5CardTitles_size,
  },
  editSpaceBlock: {
    paddingVertical: Padding.p_16xl,
    paddingHorizontal: Padding.p_14xl,
    width: 98,
    backgroundColor: Color.offBlue,
    borderRadius: Border.br_base,
    flexDirection: "row",
  },
  buttonPosition: {
    left: 41,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  nextTypo: {
    fontFamily: FontFamily.boldNormalHeading,
    fontWeight: "700",
    textAlign: "left",
  },
  bgIcon: {
    width: 1041,
    height: 976,
    top: 0,
    left: 0,
  },
  backdropIcon: {
    top: 85,
    width: 0,
    height: 0,
  },
  reportIssueChild: {
    top: 128,
    left: -9,
    backgroundColor: Color.whitesmoke_700,
    width: 433,
    height: 419,
    display: "none",
    position: "absolute",
  },
  describeYourIssue: {
    color: Color.blackDMS,
    width: 158,
    height: 25,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.ptRegularNormalText,
    fontSize: FontSize.ptBoldHeader5CardTitles_size,
  },
  groupChild: {
    borderRadius: Border.br_5xs,
    backgroundColor: "rgba(230, 230, 230, 0.29)",
    left: 0,
    position: "absolute",
    top: 0,
  },
  typeYourIssue: {
    height: "11.9%",
    width: "47.31%",
    top: "8.57%",
    left: "6.89%",
    position: "absolute",
  },
  rectangleParent: {
    marginTop: 18,
  },
  addScreenshotsOptional: {
    width: 249,
    height: 25,
  },
  editPlus: {
    width: 31,
    height: 31,
  },
  editPlusContainer: {
    marginLeft: 20,
  },
  instanceParent: {
    marginTop: 16,
    flexDirection: "row",
  },
  addScreenshotsOptionalParent: {
    marginTop: 36,
  },
  frameParent: {
    top: 214,
    left: 40,
    position: "absolute",
  },
  next: {
    fontSize: FontSize.boldNormalHeading_size,
    color: Color.mainWhite,
  },
  pryButton: {
    top: 782,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colourMain2,
    paddingHorizontal: Padding.p_126xl,
    paddingVertical: Padding.p_mid,
    justifyContent: "center",
    width: 334,
    left: 41,
  },
  backButtonIcon: {
    width: 21,
    height: 12,
  },
  scheduleADelivery: {
    fontSize: FontSize.h3Header320ptMediumRoboto_size,
    color: Color.notBlack,
    marginLeft: 39,
  },
  backButtonParent: {
    top: 45,
  },
  reportIssue: {
    backgroundColor: Color.mainWhite,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default ReportIssue;
