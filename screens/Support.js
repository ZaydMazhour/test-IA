import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const Support = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.support}>
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
      <Pressable
        style={[styles.backButtonParent, styles.parentFlexBox]}
        onPress={() => navigation.navigate("AccountPage")}
      >
        <Image
          style={styles.backButtonIcon}
          contentFit="cover"
          source={require("../assets/back-button1.png")}
        />
        <Text style={styles.scheduleADelivery}>Support</Text>
      </Pressable>
      <View style={styles.supportChild} />
      <Text style={[styles.text, styles.textTypo]}>
        We would like to hear from you.
      </Text>
      <View style={[styles.lineParent, styles.iconPosition]}>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <View style={styles.frameWrapper}>
          <View style={styles.frameContainer}>
            <View style={[styles.basicShareParent, styles.parentFlexBox]}>
              <Image
                style={styles.basicShare}
                contentFit="cover"
                source={require("../assets/basic--share1.png")}
              />
              <Image
                style={[styles.groupIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/group2.png")}
              />
              <Text style={[styles.contactUs, styles.textTypo]}>
                Contact Us
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.frameItem, styles.frameLayout]} />
        <View style={styles.frameWrapper}>
          <View style={styles.frameContainer}>
            <View style={[styles.basicShareParent, styles.parentFlexBox]}>
              <Image
                style={styles.basicShare}
                contentFit="cover"
                source={require("../assets/basic--share1.png")}
              />
              <Image
                style={[styles.vectorIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/vector5.png")}
              />
              <Text style={[styles.contactUs, styles.textTypo]}>FAQs</Text>
            </View>
          </View>
        </View>
        <View style={[styles.frameItem, styles.frameLayout]} />
        <View style={styles.frameWrapper}>
          <Pressable
            style={styles.framePressable}
            onPress={() => navigation.navigate("ReportIssue")}
          >
            <View style={[styles.basicShareParent, styles.parentFlexBox]}>
              <Image
                style={styles.heroiconsSoliddocumentRepor}
                contentFit="cover"
                source={require("../assets/heroiconssoliddocumentreport.png")}
              />
              <Text style={[styles.contactUs, styles.textTypo]}>
                Report an issue
              </Text>
            </View>
          </Pressable>
        </View>
        <View style={[styles.frameItem, styles.frameLayout]} />
        <Pressable
          style={styles.frameWrapper}
          onPress={() => navigation.navigate("AboutApp")}
        >
          <View style={styles.frameWrapper4}>
            <View style={[styles.basicShareParent, styles.parentFlexBox]}>
              <Image
                style={styles.basicShare}
                contentFit="cover"
                source={require("../assets/basic--share1.png")}
              />
              <Image
                style={styles.flatColorIconsabout}
                contentFit="cover"
                source={require("../assets/flatcoloriconsabout.png")}
              />
              <Text style={[styles.contactUs, styles.textTypo]}>About App</Text>
            </View>
          </View>
        </Pressable>
        <View style={[styles.frameItem, styles.frameLayout]} />
      </View>
      <Image
        style={styles.womanWithHeadsetIcon}
        contentFit="cover"
        source={require("../assets/womanwithheadset.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: 0,
    position: "absolute",
  },
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  textTypo: {
    fontSize: FontSize.ptBoldHeader5CardTitles_size,
    textAlign: "left",
  },
  frameLayout: {
    height: 1,
    width: 415,
    borderTopWidth: 1,
    borderStyle: "solid",
  },
  iconLayout: {
    width: 19,
    marginLeft: 20,
  },
  bgIcon: {
    width: 1041,
    height: 976,
    top: 0,
  },
  backdropIcon: {
    top: 85,
    width: 0,
    height: 0,
  },
  backButtonIcon: {
    height: 12,
    width: 21,
  },
  scheduleADelivery: {
    fontSize: FontSize.h3Header320ptMediumRoboto_size,
    color: Color.notBlack,
    marginLeft: 39,
    textAlign: "left",
    fontFamily: FontFamily.boldNormalHeading,
    fontWeight: "700",
  },
  backButtonParent: {
    top: 45,
    left: 42,
    alignItems: "center",
    position: "absolute",
  },
  supportChild: {
    top: 128,
    left: -9,
    backgroundColor: Color.whitesmoke_700,
    width: 433,
    height: 419,
    display: "none",
    position: "absolute",
  },
  text: {
    marginTop: -157,
    width: "58.7%",
    top: "50%",
    left: "20.77%",
    color: Color.darkslategray_700,
    fontFamily: FontFamily.boldNormalHeading,
    fontWeight: "700",
    fontSize: FontSize.ptBoldHeader5CardTitles_size,
    position: "absolute",
  },
  frameChild: {
    borderColor: "rgba(0, 0, 0, 0.02)",
  },
  basicShare: {
    height: 21,
    width: 25,
    display: "none",
  },
  groupIcon: {
    marginLeft: 20,
    height: 21,
  },
  contactUs: {
    fontFamily: FontFamily.ptRegularNormalText,
    color: Color.blackDMS,
    display: "flex",
    width: 130,
    marginLeft: 20,
    height: 25,
    alignItems: "center",
  },
  basicShareParent: {
    width: 256,
    alignItems: "center",
  },
  frameContainer: {
    left: 40,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frameWrapper: {
    width: 414,
    marginTop: 40,
    height: 25,
  },
  frameItem: {
    borderColor: "rgba(0, 0, 0, 0.12)",
    marginTop: 40,
  },
  vectorIcon: {
    height: 22,
    marginLeft: 20,
  },
  heroiconsSoliddocumentRepor: {
    width: 25,
    height: 25,
    overflow: "hidden",
  },
  framePressable: {
    left: 34,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  flatColorIconsabout: {
    height: 20,
    marginLeft: 20,
    width: 21,
    overflow: "hidden",
  },
  frameWrapper4: {
    left: 38,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  lineParent: {
    top: 367,
  },
  womanWithHeadsetIcon: {
    top: 155,
    left: 163,
    width: 99,
    height: 99,
    position: "absolute",
    overflow: "hidden",
  },
  support: {
    backgroundColor: Color.mainWhite,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default Support;
