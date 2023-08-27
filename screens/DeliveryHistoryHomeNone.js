import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const DeliveryHistoryHomeNone = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.deliveryHistoryHomeNone, styles.iconLayout1]}>
      <View style={[styles.background, styles.statusbarPosition]} />
      <Pressable style={styles.leftArrow11} onPress={() => navigation.goBack()}>
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/leftarrow-1-12.png")}
        />
      </Pressable>
      <View style={[styles.statusbar, styles.statusbarPosition]}>
        <Text style={styles.time}>9:41</Text>
      </View>
      <View style={styles.battery}>
        <View style={styles.border} />
        <Image
          style={styles.capIcon}
          contentFit="cover"
          source={require("../assets/cap1.png")}
        />
        <View style={styles.capacity} />
      </View>
      <Image
        style={styles.wifiIcon}
        contentFit="cover"
        source={require("../assets/wifi2.png")}
      />
      <Image
        style={styles.cellularConnectionIcon}
        contentFit="cover"
        source={require("../assets/cellular-connection2.png")}
      />
      <View style={styles.shipmentHistory}>
        <Text style={[styles.label, styles.labelTypo]}>Order History</Text>
      </View>
      <View style={styles.homeIndicatorParent}>
        <View style={styles.homeIndicator}>
          <View style={styles.line} />
        </View>
        <View style={styles.groupChildPosition}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Image
            style={[styles.deliveryBox14, styles.deliveryPosition]}
            contentFit="cover"
            source={require("../assets/deliverybox-1-4.png")}
          />
          <Text style={styles.home}>Home</Text>
          <Text style={[styles.send, styles.sendTypo]}>Send</Text>
          <Text style={[styles.history, styles.sendTypo]}>History</Text>
          <Image
            style={[styles.history11, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/history-1-1.png")}
          />
          <Text style={[styles.account, styles.sendTypo]}>Account</Text>
          <Text style={[styles.receive, styles.sendTypo]}>Receive</Text>
          <Image
            style={[styles.iconProfile, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon--profile1.png")}
          />
          <Pressable
            style={[styles.iconHome, styles.iconLayout]}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              style={[styles.icon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/icon--home.png")}
            />
          </Pressable>
          <Image
            style={[styles.deliveryBox1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/deliverybox-11.png")}
          />
        </View>
      </View>
      <Text style={[styles.youCurrentlyHave, styles.labelTypo]}>
        You currently have no delivery
      </Text>
      <Image
        style={styles.delivery21}
        contentFit="cover"
        source={require("../assets/delivery-2-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    width: "100%",
    overflow: "hidden",
  },
  statusbarPosition: {
    left: "50%",
    marginLeft: -214,
    position: "absolute",
  },
  labelTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    lineHeight: 32,
    fontWeight: "600",
    position: "absolute",
  },
  groupChildPosition: {
    height: 101,
    width: 414,
    left: 0,
    top: 0,
    position: "absolute",
  },
  deliveryPosition: {
    top: 27,
    overflow: "hidden",
  },
  sendTypo: {
    top: 62,
    color: Color.black,
    fontFamily: FontFamily.ptRegularNormalText,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: 26,
    width: 26,
    position: "absolute",
  },
  background: {
    backgroundColor: Color.backgroundBackground4,
    width: 428,
    height: 47,
    top: 0,
    left: "50%",
    marginLeft: -214,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  leftArrow11: {
    left: 26,
    top: 60,
    width: 24,
    height: 24,
    position: "absolute",
  },
  time: {
    marginTop: -9,
    width: "14.4%",
    left: "5.6%",
    fontSize: FontSize.sFSubheadlineSemibold_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontFamily: FontFamily.sFSubheadlineSemibold,
    color: Color.darkslategray_400,
    textAlign: "center",
    fontWeight: "600",
    top: "50%",
    position: "absolute",
  },
  statusbar: {
    top: -6,
    width: 375,
    height: 44,
    left: "50%",
    marginLeft: -214,
  },
  border: {
    width: "90.43%",
    top: "0%",
    right: "9.57%",
    bottom: "0%",
    left: "0%",
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#384144",
    borderWidth: 1,
    opacity: 0.35,
    height: "100%",
    position: "absolute",
  },
  capIcon: {
    height: "35.29%",
    width: "5.46%",
    top: "32.36%",
    right: "0%",
    bottom: "32.35%",
    left: "94.54%",
    maxWidth: "100%",
    maxHeight: "100%",
    opacity: 0.4,
    position: "absolute",
    overflow: "hidden",
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
    height: "1.5%",
    width: "5.68%",
    top: "1.46%",
    right: "5.69%",
    bottom: "97.04%",
    left: "88.63%",
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 15,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 15,
  },
  label: {
    fontSize: FontSize.h3Header320ptMediumRoboto_size,
    color: Color.neuturalsGrey4,
    left: 0,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    lineHeight: 32,
    height: 37,
    width: 202,
    top: 0,
  },
  shipmentHistory: {
    top: 106,
    left: 48,
    height: 37,
    width: 202,
    position: "absolute",
  },
  line: {
    marginTop: 4.5,
    marginLeft: -67.5,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.gray_200,
    width: 135,
    height: 5,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  homeIndicator: {
    left: 1,
    width: 413,
    bottom: 0,
    height: 37,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.mainWhite,
  },
  deliveryBox14: {
    left: 102,
    width: 28,
    height: 23,
    position: "absolute",
  },
  home: {
    top: 63,
    left: 20,
    color: Color.black,
    fontFamily: FontFamily.ptRegularNormalText,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  send: {
    left: 188,
  },
  history: {
    left: 267,
  },
  history11: {
    left: 275,
    top: 24,
    width: 26,
    overflow: "hidden",
  },
  account: {
    left: 349,
  },
  receive: {
    left: 94,
  },
  iconProfile: {
    left: 359,
    top: 24,
    width: 26,
    overflow: "hidden",
  },
  iconHome: {
    left: 22,
    top: 25,
  },
  deliveryBox1Icon: {
    left: 189,
    top: 27,
    overflow: "hidden",
  },
  homeIndicatorParent: {
    left: 6,
    height: 138,
    width: 414,
    bottom: 0,
    position: "absolute",
  },
  youCurrentlyHave: {
    top: 408,
    left: 106,
    fontSize: FontSize.boldNormalHeading_size,
    color: Color.darkgray_300,
  },
  delivery21: {
    top: 361,
    left: 193,
    width: 36,
    height: 36,
    position: "absolute",
    overflow: "hidden",
  },
  deliveryHistoryHomeNone: {
    flex: 1,
    height: 1047,
    overflow: "hidden",
    backgroundColor: Color.mainWhite,
  },
});

export default DeliveryHistoryHomeNone;
