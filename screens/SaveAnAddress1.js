import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const SaveAnAddress1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.saveAnAddress}>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.background, styles.headerPosition]} />
        <View style={styles.statusbar}>
          <Text style={styles.time}>9:41</Text>
        </View>
      </View>
      <View style={styles.battery}>
        <View style={[styles.border, styles.borderPosition]} />
        <Image
          style={[styles.capIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/cap.png")}
        />
        <View style={styles.capacity} />
      </View>
      <Image
        style={styles.wifiIcon}
        contentFit="cover"
        source={require("../assets/wifi.png")}
      />
      <Image
        style={styles.cellularConnectionIcon}
        contentFit="cover"
        source={require("../assets/cellular-connection.png")}
      />
      <View style={[styles.backButtonParent, styles.buttonFlexBox]}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/back-button1.png")}
          />
        </Pressable>
        <Text style={[styles.scheduleADelivery, styles.nextTypo1]}>
          Add an address
        </Text>
      </View>
      <View style={[styles.search, styles.searchPosition]}>
        <View style={[styles.group14Copy, styles.borderPosition]}>
          <View style={[styles.group14Copy, styles.borderPosition]}>
            <View style={[styles.group14Copy, styles.borderPosition]}>
              <View style={[styles.group14Copy, styles.borderPosition]}>
                <View style={[styles.group14Copy, styles.borderPosition]}>
                  <View style={[styles.rectangle, styles.borderPosition]} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <Text style={[styles.dasun, styles.dasunLayout]}>Enter an address</Text>
      </View>
      <View style={[styles.search1, styles.searchPosition]}>
        <View style={[styles.group14Copy, styles.borderPosition]}>
          <View style={[styles.group14Copy, styles.borderPosition]}>
            <View style={[styles.group14Copy, styles.borderPosition]}>
              <View style={[styles.group14Copy, styles.borderPosition]}>
                <View style={[styles.group14Copy, styles.borderPosition]}>
                  <View style={[styles.rectangle, styles.borderPosition]} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <Text
          style={[styles.dasun, styles.dasunLayout]}
        >{`Enter a name `}</Text>
      </View>
      <View style={[styles.pryButton, styles.buttonFlexBox]}>
        <Text style={[styles.next, styles.nextTypo]}>Save address</Text>
      </View>
      <Text style={[styles.addressSaved, styles.nextTypo]}>Address saved</Text>
      <Image
        style={[styles.verifiedIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/verified1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerPosition: {
    width: 428,
    left: "50%",
    marginLeft: -214,
    position: "absolute",
  },
  borderPosition: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  buttonFlexBox: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  nextTypo1: {
    fontFamily: FontFamily.boldNormalHeading,
    fontWeight: "700",
  },
  searchPosition: {
    left: "13.55%",
    right: "10.05%",
    width: "76.4%",
    height: "4.75%",
    position: "absolute",
  },
  dasunLayout: {
    lineHeight: 22,
    position: "absolute",
  },
  nextTypo: {
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
  },
  background: {
    top: 6,
    backgroundColor: Color.backgroundBackground4,
    height: 47,
  },
  time: {
    marginTop: -9,
    width: "14.4%",
    top: "50%",
    left: "5.6%",
    letterSpacing: 0,
    lineHeight: 20,
    fontFamily: FontFamily.sFSubheadlineSemibold,
    color: Color.darkslategray_400,
    textAlign: "center",
    fontWeight: "600",
    fontSize: FontSize.sFSubheadlineSemibold_size,
    position: "absolute",
  },
  statusbar: {
    top: 0,
    width: 375,
    height: 44,
    left: "50%",
    marginLeft: -214,
    position: "absolute",
  },
  header: {
    top: -6,
    height: 53,
  },
  border: {
    width: "90.43%",
    right: "9.57%",
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#384144",
    borderWidth: 1,
    opacity: 0.35,
  },
  capIcon: {
    height: "35.29%",
    width: "5.46%",
    top: "32.35%",
    bottom: "32.35%",
    left: "94.54%",
    opacity: 0.4,
    right: "0%",
  },
  capacity: {
    height: "64.71%",
    width: "73.99%",
    top: "17.65%",
    right: "17.79%",
    bottom: "17.65%",
    left: "8.22%",
    borderRadius: 1,
    backgroundColor: Color.darkslategray_400,
    position: "absolute",
  },
  battery: {
    height: "1.22%",
    width: "5.68%",
    top: "1.19%",
    right: "5.69%",
    bottom: "97.59%",
    left: "88.63%",
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  backButton: {
    width: 21,
    height: 12,
  },
  scheduleADelivery: {
    fontSize: FontSize.h3Header320ptMediumRoboto_size,
    color: Color.notBlack,
    marginLeft: 39,
    textAlign: "left",
  },
  backButtonParent: {
    top: 72,
    left: 35,
    alignItems: "center",
  },
  rectangle: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.aliceblue_100,
    right: "0%",
    width: "100%",
    bottom: "0%",
    top: "0%",
  },
  group14Copy: {
    right: "0%",
    width: "100%",
    bottom: "0%",
    top: "0%",
  },
  dasun: {
    width: "60.95%",
    top: "25%",
    left: "3.98%",
    fontWeight: "300",
    fontFamily: FontFamily.helvetica,
    color: Color.mainAshColour,
    textAlign: "left",
    fontSize: FontSize.sFSubheadlineSemibold_size,
  },
  search: {
    top: "12.2%",
    bottom: "83.05%",
  },
  search1: {
    top: "17.71%",
    bottom: "77.54%",
  },
  next: {
    color: Color.mainWhite,
    fontFamily: FontFamily.boldNormalHeading,
    fontWeight: "700",
  },
  pryButton: {
    top: 264,
    left: 71,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colourMain2,
    width: 281,
    paddingHorizontal: Padding.p_126xl,
    paddingVertical: Padding.p_mid,
    justifyContent: "center",
    alignItems: "center",
  },
  addressSaved: {
    height: "1.08%",
    width: "63.32%",
    top: "24.95%",
    left: "25.23%",
    letterSpacing: 0.3,
    fontFamily: FontFamily.manropeSemiBold,
    color: Color.highlightsHighlight2,
    display: "flex",
    lineHeight: 22,
    position: "absolute",
    alignItems: "center",
    fontWeight: "600",
  },
  verifiedIcon: {
    height: "1.51%",
    width: "3.27%",
    top: "24.73%",
    right: "77.1%",
    bottom: "73.76%",
    left: "19.63%",
  },
  saveAnAddress: {
    backgroundColor: Color.mainWhite,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
  },
});

export default SaveAnAddress1;
