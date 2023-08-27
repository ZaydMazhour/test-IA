import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <View style={[styles.homeChild, styles.homeLayout]} />
      <View style={[styles.homeItem, styles.homeLayout]} />
      <Image
        style={[styles.statusBarIcon, styles.illustrationLayout]}
        contentFit="cover"
        source={require("../assets/status-bar1.png")}
      />
      <Text style={styles.label}>Paakej</Text>
      <Text style={[styles.label1, styles.labelLayout]}>
        What would you like to do today?
      </Text>
      <Text style={[styles.label2, styles.labelTypo]}>Send something</Text>
      <Text style={[styles.label3, styles.labelTypo]}>Get something</Text>
      <Image
        style={styles.mapIcon}
        contentFit="cover"
        source={require("../assets/map1.png")}
      />
      <View style={[styles.homeIndicatorParent, styles.statusBarIconLayout]}>
        <View style={styles.homeIndicator}>
          <View style={styles.line} />
        </View>
        <View style={styles.groupChildPosition}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Pressable
            style={styles.deliveryBox14}
            onPress={() => navigation.navigate("ReceiveAPackage")}
          >
            <Image
              style={[styles.icon, styles.iconLayout2]}
              contentFit="cover"
              source={require("../assets/deliverybox-1-4.png")}
            />
          </Pressable>
          <Text style={[styles.home1, styles.sendTypo1]}>Home</Text>
          <Text style={[styles.send, styles.sendPosition]}>Send</Text>
          <Pressable
            style={[styles.history, styles.sendPosition]}
            onPress={() => navigation.navigate("DeliveryHistoryHome")}
          >
            <Text style={styles.sendTypo1}>History</Text>
          </Pressable>
          <Pressable
            style={[styles.history11, styles.iconLayout1]}
            onPress={() => navigation.navigate("DeliveryHistoryHome")}
          >
            <Image
              style={[styles.icon, styles.iconLayout2]}
              contentFit="cover"
              source={require("../assets/history-1-1.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.account, styles.sendPosition]}
            onPress={() => navigation.navigate("AccountPage")}
          >
            <Text style={styles.sendTypo1}>Account</Text>
          </Pressable>
          <Pressable
            style={[styles.receive, styles.sendPosition]}
            onPress={() => navigation.navigate("ReceiveAPackage")}
          >
            <Text style={styles.sendTypo1}>Receive</Text>
          </Pressable>
          <Pressable
            style={[styles.iconProfile, styles.iconLayout1]}
            onPress={() => navigation.navigate("AccountPage")}
          >
            <Image
              style={[styles.icon, styles.iconLayout2]}
              contentFit="cover"
              source={require("../assets/icon--profile.png")}
            />
          </Pressable>
          <Image
            style={[styles.iconHome, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/icon--home.png")}
          />
          <Pressable
            style={[styles.deliveryBox1, styles.iconLayout1]}
            onPress={() => navigation.navigate("ReceiveAPackage")}
          >
            <Image
              style={[styles.icon, styles.iconLayout2]}
              contentFit="cover"
              source={require("../assets/deliverybox-11.png")}
            />
          </Pressable>
        </View>
      </View>
      <Pressable
        style={[styles.freeShipping, styles.freePosition]}
        onPress={() => navigation.navigate("ReceiveAPackage")}
      >
        <Text style={[styles.sendAPackage, styles.sendTypo]}>
          Send a package
        </Text>
        <Text style={[styles.haveOurDriver, styles.haveTypo]}>
          Have our driver deliver your package across town
        </Text>
        <View
          style={[styles.illustrationWrapper, styles.sendAPackage1Position]}
        >
          <Image
            style={[styles.illustrationIcon, styles.bg1Position]}
            contentFit="cover"
            source={require("../assets/illustration10.png")}
          />
        </View>
      </Pressable>
      <Pressable
        style={[styles.freeShipping1, styles.freePosition]}
        onPress={() => navigation.navigate("ReceiveAPackage")}
      >
        <Text style={[styles.sendAPackage1, styles.sendAPackage1Position]}>
          Send a package
        </Text>
        <Text style={[styles.haveOurDriver1, styles.sendAPackage1Position]}>
          Have our driver deliver your package across town
        </Text>
      </Pressable>
      <Pressable
        style={[styles.illustration, styles.illustrationLayout]}
        onPress={() => navigation.navigate("ReceiveAPackage")}
      >
        <Image
          style={styles.iconLayout2}
          contentFit="cover"
          source={require("../assets/illustration11.png")}
        />
      </Pressable>
      <View style={styles.shipmentHistory}>
        <View style={[styles.card1, styles.bgLayout]}>
          <View style={[styles.bg, styles.bgLayout]} />
          <View style={[styles.track, styles.trackLayout]}>
            <View style={[styles.purpose, styles.trackLayout]}>
              <Text style={[styles.address, styles.addressLayout]}>
                1407 S Michigan Ave...
              </Text>
              <Image
                style={styles.iconMap}
                contentFit="cover"
                source={require("../assets/icon--map1.png")}
              />
            </View>
          </View>
          <Pressable
            style={styles.status}
            onPress={() => navigation.navigate("Track")}
          >
            <View style={[styles.bg1, styles.bg1Layout]} />
            <Text style={[styles.label4, styles.label4FlexBox]}>Track</Text>
          </Pressable>
        </View>
        <Text style={styles.viewAll}>View All</Text>
        <Text style={styles.label5}>History</Text>
      </View>
      <Text style={[styles.address1, styles.addressLayout]}>John Doe</Text>
      <View style={[styles.banner1, styles.bg2Layout]}>
        <View style={[styles.bg2, styles.bg2Layout]} />
        <Image
          style={[styles.decoration2Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/decoration-2.png")}
        />
        <Image
          style={[styles.decoration1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/decoration-1.png")}
        />
        <Text style={styles.description}>{`Track your package 
every step of the way`}</Text>
        <Text style={[styles.localDelivery, styles.labelTypo]}>{`Local
Delivery`}</Text>
        <Image
          style={styles.illustrationIcon1}
          contentFit="cover"
          source={require("../assets/illustration12.png")}
        />
      </View>
      <View style={[styles.homeInner, styles.bg1Layout]} />
      <Text style={[styles.address2, styles.label4FlexBox]}>On-going</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homeLayout: {
    height: 96,
    width: 362,
    borderWidth: 1,
    borderColor: "rgba(236, 228, 228, 0.7)",
    borderStyle: "solid",
    borderRadius: Border.br_xs,
    left: 20,
    position: "absolute",
  },
  illustrationLayout: {
    height: 49,
    position: "absolute",
  },
  labelLayout: {
    width: 317,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 45,
    left: 31,
    height: 35,
    color: Color.black,
  },
  labelTypo: {
    fontSize: FontSize.h3Header320ptMediumRoboto_size,
    textAlign: "left",
    position: "absolute",
  },
  statusBarIconLayout: {
    width: 414,
    left: 0,
  },
  groupChildPosition: {
    height: 101,
    width: 414,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconLayout2: {
    height: "100%",
    width: "100%",
  },
  sendTypo1: {
    fontFamily: FontFamily.ptRegularNormalText,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.black,
  },
  sendPosition: {
    top: 62,
    position: "absolute",
  },
  iconLayout1: {
    height: 26,
    width: 26,
    position: "absolute",
  },
  freePosition: {
    right: "8.94%",
    height: "4.7%",
    position: "absolute",
  },
  sendTypo: {
    alignItems: "center",
    display: "flex",
    lineHeight: 26,
    letterSpacing: 0.3,
    top: "0%",
    height: "36.07%",
    fontSize: FontSize.boldNormalHeading_size,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.black,
  },
  haveTypo: {
    color: Color.lightSecondary,
    fontFamily: FontFamily.manropeSemiBold,
    lineHeight: 17,
    top: "40.98%",
    height: "59.02%",
    alignItems: "center",
    display: "flex",
    letterSpacing: 0.3,
    fontSize: FontSize.boldNormalHeading_size,
    fontWeight: "600",
    textAlign: "left",
  },
  sendAPackage1Position: {
    left: "0%",
    position: "absolute",
  },
  bg1Position: {
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  bgLayout: {
    height: 100,
    width: 375,
    left: 0,
    position: "absolute",
  },
  trackLayout: {
    width: 202,
    height: 23,
    position: "absolute",
  },
  addressLayout: {
    width: 171,
    color: Color.neuturalsGrey4,
    lineHeight: 20,
    fontSize: FontSize.boldNormalHeading_size,
    height: 23,
    textAlign: "left",
    position: "absolute",
  },
  bg1Layout: {
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  label4FlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  bg2Layout: {
    height: 190,
    width: 346,
    position: "absolute",
  },
  iconLayout: {
    height: 200,
    width: 200,
    position: "absolute",
  },
  homeChild: {
    top: 460,
  },
  homeItem: {
    top: 621,
  },
  statusBarIcon: {
    width: 414,
    left: 0,
    top: 0,
  },
  label: {
    top: 33,
    left: 160,
    fontSize: FontSize.headingH4_size,
    width: 94,
    height: 35,
    color: Color.black,
    lineHeight: 32,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  label1: {
    top: 284,
    fontSize: 30,
    textAlign: "left",
    width: 317,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 45,
    position: "absolute",
  },
  label2: {
    top: 410,
    width: 317,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 45,
    left: 31,
    height: 35,
    color: Color.black,
  },
  label3: {
    top: 571,
    width: 317,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 45,
    left: 31,
    height: 35,
    color: Color.black,
  },
  mapIcon: {
    top: 84,
    width: 453,
    height: 165,
    left: 0,
    position: "absolute",
  },
  line: {
    marginTop: 4.5,
    marginLeft: -67.5,
    top: "50%",
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.gray_200,
    width: 135,
    height: 5,
    position: "absolute",
  },
  homeIndicator: {
    bottom: 0,
    left: 1,
    width: 413,
    height: 37,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.mainWhite,
  },
  icon: {
    overflow: "hidden",
  },
  deliveryBox14: {
    left: 102,
    width: 28,
    height: 23,
    top: 27,
    position: "absolute",
  },
  home1: {
    top: 63,
    left: 20,
    fontFamily: FontFamily.ptRegularNormalText,
    position: "absolute",
  },
  send: {
    left: 188,
    fontFamily: FontFamily.ptRegularNormalText,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.black,
  },
  history: {
    left: 267,
  },
  history11: {
    left: 275,
    top: 24,
    width: 26,
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
  },
  iconHome: {
    top: 25,
    left: 22,
    overflow: "hidden",
  },
  deliveryBox1: {
    left: 189,
    top: 27,
    width: 26,
  },
  homeIndicatorParent: {
    bottom: -9,
    height: 138,
    position: "absolute",
  },
  sendAPackage: {
    width: "69.94%",
    left: "25.43%",
    position: "absolute",
  },
  haveOurDriver: {
    width: "74.57%",
    left: "25.43%",
    position: "absolute",
  },
  illustrationIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  illustrationWrapper: {
    width: "17.63%",
    right: "82.37%",
    bottom: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
  },
  freeShipping: {
    width: "83.57%",
    top: "36.8%",
    bottom: "58.51%",
    left: "7.49%",
  },
  sendAPackage1: {
    width: "93.8%",
    alignItems: "center",
    display: "flex",
    lineHeight: 26,
    letterSpacing: 0.3,
    top: "0%",
    height: "36.07%",
    fontSize: FontSize.boldNormalHeading_size,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.black,
  },
  haveOurDriver1: {
    color: Color.lightSecondary,
    fontFamily: FontFamily.manropeSemiBold,
    lineHeight: 17,
    top: "40.98%",
    height: "59.02%",
    alignItems: "center",
    display: "flex",
    letterSpacing: 0.3,
    fontSize: FontSize.boldNormalHeading_size,
    fontWeight: "600",
    textAlign: "left",
    width: "100%",
  },
  freeShipping1: {
    width: "62.32%",
    top: "49.19%",
    bottom: "46.11%",
    left: "28.74%",
  },
  illustration: {
    top: 643,
    width: 74,
    left: 31,
  },
  bg: {
    top: 0,
    borderRadius: Border.br_xs,
    backgroundColor: Color.mainWhite,
  },
  address: {
    fontFamily: FontFamily.poppinsRegular,
    left: 31,
    top: 0,
  },
  iconMap: {
    top: 2,
    width: 18,
    height: 18,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  purpose: {
    left: 0,
    top: 0,
  },
  track: {
    top: 51,
    left: 18,
    width: 202,
  },
  bg1: {
    backgroundColor: Color.colourMain2,
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  label4: {
    height: "57.14%",
    width: "55.68%",
    top: "21.43%",
    left: "22.73%",
    letterSpacing: 0.2,
    lineHeight: 16,
    textTransform: "capitalize",
    color: Color.mainWhite,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  status: {
    height: "32.11%",
    width: "22.91%",
    top: "12%",
    right: "4.82%",
    bottom: "55.89%",
    left: "72.27%",
    position: "absolute",
  },
  card1: {
    top: 55,
    shadowColor: "rgba(206, 206, 206, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
  },
  viewAll: {
    top: 8,
    left: 293,
    color: Color.darkslategray_500,
    width: 64,
    lineHeight: 20,
    fontSize: FontSize.boldNormalHeading_size,
    height: 23,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  label5: {
    color: Color.neuturalsGrey4,
    width: 202,
    left: 18,
    height: 37,
    fontSize: FontSize.h3Header320ptMediumRoboto_size,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "left",
    lineHeight: 32,
    top: 0,
    position: "absolute",
  },
  shipmentHistory: {
    top: 1000,
    left: 19,
    height: 155,
    width: 375,
    position: "absolute",
  },
  address1: {
    top: 1076,
    left: 39,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
  },
  bg2: {
    backgroundColor: Color.colourMain2,
    left: 0,
    top: 0,
    borderRadius: Border.br_xs,
  },
  decoration2Icon: {
    top: 67,
    left: 220,
  },
  decoration1Icon: {
    left: 0,
    top: 0,
  },
  description: {
    top: 113,
    left: 26,
    lineHeight: 24,
    width: 167,
    height: 54,
    color: Color.mainWhite,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
    position: "absolute",
  },
  localDelivery: {
    top: 26,
    left: 28,
    lineHeight: 28,
    width: 95,
    height: 63,
    color: Color.mainWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.h3Header320ptMediumRoboto_size,
  },
  illustrationIcon1: {
    top: 53,
    left: 184,
    width: 144,
    height: 110,
    position: "absolute",
  },
  banner1: {
    top: 764,
    left: 31,
  },
  homeInner: {
    top: 1108,
    left: 297,
    backgroundColor: "rgba(142, 216, 181, 0.29)",
    width: 72,
    height: 13,
  },
  address2: {
    top: 1110,
    left: 307,
    fontSize: FontSize.size_5xs,
    lineHeight: 8,
    color: "#00c065",
    width: 51,
    height: 9,
    fontFamily: FontFamily.poppinsRegular,
  },
  home: {
    flex: 1,
    height: 1299,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.mainWhite,
  },
});

export default Home;
