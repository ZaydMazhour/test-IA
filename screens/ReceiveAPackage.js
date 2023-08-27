import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const ReceiveAPackage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.receiveAPackage}>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <View style={styles.inputboxParent}>
          <View style={styles.inputbox}>
            <Image
              style={styles.lineIcon}
              contentFit="cover"
              source={require("../assets/line.png")}
            />
            <Text style={[styles.selectSendersLocation, styles.bWoleAriyoTypo]}>
              Select sender’s location
            </Text>
          </View>
          <View style={styles.inputboxWrapper}>
            <View style={styles.inputbox}>
              <Text style={[styles.bWoleAriyo, styles.bWoleAriyoTypo]}>
                14B Wole Ariyo Street, Lekki Phase 1
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.basicRadioParent}>
          <Image
            style={styles.basicRadio}
            contentFit="cover"
            source={require("../assets/basic--radio.png")}
          />
          <View>
            <View style={styles.frameLayout} />
            <View style={[styles.frameItem, styles.frameLayout]} />
            <View style={[styles.frameItem, styles.frameLayout]} />
            <View style={[styles.frameItem, styles.frameLayout]} />
            <View style={[styles.frameItem, styles.frameLayout]} />
            <View style={[styles.frameItem, styles.frameLayout]} />
            <View style={[styles.frameItem, styles.frameLayout]} />
          </View>
          <Image
            style={styles.basicRadio}
            contentFit="cover"
            source={require("../assets/basic--radio.png")}
          />
        </View>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.background, styles.headerPosition]} />
        <Text style={styles.wheresItComing}>Where’s it coming from</Text>
        <Image
          style={[styles.icMoreIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/icmore.png")}
        />
        <Pressable
          style={[styles.leftArrow11, styles.iconLayout1]}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/leftarrow-1-1.png")}
          />
        </Pressable>
        <View style={[styles.statusbar, styles.headerPosition]}>
          <Text style={styles.time}>9:41</Text>
        </View>
      </View>
      <View style={styles.battery}>
        <View style={styles.border} />
        <Image
          style={[styles.capIcon, styles.capIconLayout]}
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
      <Pressable
        style={[styles.receiveAPackageChild, styles.receiveShadowBox]}
        onPress={() => navigation.navigate("PoolDeliveryPrice")}
      />
      <Pressable
        style={[styles.receiveAPackageItem, styles.receiveShadowBox]}
        onPress={() => navigation.navigate("PoolDeliveryPrice")}
      />
      <Pressable
        style={[styles.receiveAPackageInner, styles.receiveShadowBox]}
        onPress={() => navigation.navigate("ViewSavedPlaces")}
      />
      <Image
        style={[styles.keyboardArrowRight1Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/keyboardarrowright-1.png")}
      />
      <View style={[styles.dasunBrickTowerParent, styles.dasunPosition1]}>
        <Text style={[styles.dasunBrickTower, styles.dasunClr1]}>Work</Text>
        <Text style={[styles.dasunTravelPlaza, styles.dasunClr]}>
          Touchcore Technology Limited
        </Text>
      </View>
      <View style={[styles.dasunBrickTowerGroup, styles.dasunPosition1]}>
        <Text style={[styles.dasunBrickTower, styles.dasunClr1]}>Home</Text>
        <Text style={[styles.dasunTravelPlaza, styles.dasunClr]}>
          45 Muritala Lekki
        </Text>
      </View>
      <Text style={[styles.dasunBrickTower2, styles.dasunClr1]}>
        Saved Places
      </Text>
      <Image
        style={[styles.groupIcon, styles.groupChildLayout]}
        contentFit="cover"
        source={require("../assets/group-10882.png")}
      />
      <Image
        style={[styles.receiveAPackageChild1, styles.groupChildLayout]}
        contentFit="cover"
        source={require("../assets/group-10882.png")}
      />
      <Image
        style={[styles.receiveAPackageChild2, styles.groupChildLayout]}
        contentFit="cover"
        source={require("../assets/group-10884.png")}
      />
      <Image
        style={styles.favorite1Icon}
        contentFit="cover"
        source={require("../assets/favorite-1.png")}
      />
      <View
        style={[styles.receiveAPackageChild3, styles.homeIndicatorPosition]}
      />
      <View style={[styles.vectorParent, styles.vectorPosition]}>
        <Image
          style={[styles.groupItem, styles.capIconLayout]}
          contentFit="cover"
          source={require("../assets/line-21.png")}
        />
        <Text
          style={[styles.dasunBrickTower3, styles.dasunPosition]}
        >{`Touchore `}</Text>
        <Text style={[styles.dasunTravelPlaza2, styles.dasunPosition]}>
          14b Wole Ariyo Street, Lekki Phase 1
        </Text>
        <Image
          style={[styles.groupInner, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/group-10886.png")}
        />
      </View>
      <View style={[styles.vectorGroup, styles.vectorPosition]}>
        <Image
          style={[styles.groupItem, styles.capIconLayout]}
          contentFit="cover"
          source={require("../assets/line-21.png")}
        />
        <Text
          style={[styles.dasunBrickTower3, styles.dasunPosition]}
        >{`Touchore `}</Text>
        <Text style={[styles.dasunTravelPlaza2, styles.dasunPosition]}>
          14b Wole Ariyo Street, Lekki Phase 1
        </Text>
        <Image
          style={[styles.groupInner, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/group-10886.png")}
        />
      </View>
      <View style={[styles.vectorContainer, styles.vectorPosition]}>
        <Image
          style={[styles.groupItem, styles.capIconLayout]}
          contentFit="cover"
          source={require("../assets/line-21.png")}
        />
        <Text
          style={[styles.dasunBrickTower3, styles.dasunPosition]}
        >{`Touchore `}</Text>
        <Text style={[styles.dasunTravelPlaza2, styles.dasunPosition]}>
          14b Wole Ariyo Street, Lekki Phase 1
        </Text>
        <Image
          style={[styles.groupInner, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/group-10886.png")}
        />
      </View>
      <View style={styles.homeIndicatorParent}>
        <View style={[styles.homeIndicator, styles.homeIndicatorPosition]}>
          <View style={styles.line} />
        </View>
        <View style={styles.groupChild5Position}>
          <View style={[styles.groupChild5, styles.groupChild5Position]} />
          <Image
            style={[styles.deliveryBox14, styles.deliveryPosition]}
            contentFit="cover"
            source={require("../assets/deliverybox-1-4.png")}
          />
          <Text style={[styles.home, styles.homeClr]}>Home</Text>
          <Text style={[styles.send, styles.sendPosition]}>Send</Text>
          <Pressable
            style={[styles.history, styles.sendPosition]}
            onPress={() => navigation.navigate("DeliveryHistoryHomeNone")}
          >
            <Text style={[styles.history1, styles.homeClr]}>History</Text>
          </Pressable>
          <Pressable
            style={[styles.history11, styles.iconLayout]}
            onPress={() => navigation.navigate("DeliveryHistoryHomeNone")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/history-1-1.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.account, styles.sendPosition]}
            onPress={() => navigation.navigate("AccountPage")}
          >
            <Text style={[styles.history1, styles.homeClr]}>Account</Text>
          </Pressable>
          <Text style={[styles.receive, styles.sendPosition]}>Receive</Text>
          <Pressable
            style={[styles.iconProfile, styles.iconLayout]}
            onPress={() => navigation.navigate("AccountPage")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/icon--profile.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.iconHome, styles.iconLayout]}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/icon--home.png")}
            />
          </Pressable>
          <Image
            style={[styles.deliveryBox1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/deliverybox-1.png")}
          />
        </View>
      </View>
      <Text style={[styles.recent, styles.homeClr]}>Recent</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bWoleAriyoTypo: {
    height: 20,
    color: Color.mainAshColour,
    fontFamily: FontFamily.ptRegularNormalText,
    lineHeight: 18,
    textAlign: "left",
    fontSize: FontSize.boldNormalHeading_size,
  },
  frameLayout: {
    height: 6,
    width: 2,
    backgroundColor: Color.whitesmoke_300,
    borderRadius: Border.br_12xs_5,
  },
  headerPosition: {
    marginLeft: -214,
    left: "50%",
    position: "absolute",
  },
  iconLayout1: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  capIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  receiveShadowBox: {
    height: 63,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    shadowOffset: {
      width: -4,
      height: 4,
    },
    width: 428,
    position: "absolute",
    backgroundColor: Color.mainWhite,
  },
  dasunPosition1: {
    height: 41,
    left: "17.76%",
    right: "21.96%",
    width: "60.28%",
    top: "50%",
    position: "absolute",
  },
  dasunClr1: {
    color: Color.darkslategray_600,
    lineHeight: 22,
    fontSize: FontSize.sFSubheadlineSemibold_size,
    top: "50%",
  },
  dasunClr: {
    color: Color.darkgray_200,
    fontSize: FontSize.size_smi,
    lineHeight: 18,
  },
  groupChildLayout: {
    height: 28,
    width: 30,
    position: "absolute",
  },
  homeIndicatorPosition: {
    left: 1,
    position: "absolute",
  },
  vectorPosition: {
    left: "0.23%",
    right: "-2.1%",
    width: "101.87%",
    height: "6.16%",
    position: "absolute",
  },
  dasunPosition: {
    left: "17.89%",
    fontFamily: FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  groupChild5Position: {
    height: 101,
    width: 414,
    top: 0,
    left: 0,
    position: "absolute",
  },
  deliveryPosition: {
    top: 27,
    overflow: "hidden",
  },
  homeClr: {
    color: Color.black,
    textAlign: "left",
  },
  sendPosition: {
    top: 62,
    position: "absolute",
  },
  iconLayout: {
    height: 26,
    width: 26,
    position: "absolute",
  },
  groupChild: {
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: -4,
      height: 4,
    },
    top: 0,
    height: 142,
    width: 428,
    left: 0,
    position: "absolute",
    backgroundColor: Color.mainWhite,
  },
  lineIcon: {
    width: 1,
    height: 19,
  },
  selectSendersLocation: {
    width: 180,
    marginLeft: 10,
  },
  inputbox: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whitesmoke_800,
    width: 307,
    flexDirection: "row",
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_2xs,
    alignItems: "center",
    height: 47,
    overflow: "hidden",
  },
  bWoleAriyo: {
    width: 245,
  },
  inputboxWrapper: {
    marginTop: 15,
  },
  inputboxParent: {
    top: 13,
    left: 69,
    width: 317,
    position: "absolute",
  },
  basicRadio: {
    height: 14,
    width: 14,
  },
  frameItem: {
    marginTop: 1,
  },
  basicRadioParent: {
    top: 26,
    left: 41,
    width: 14,
    alignItems: "center",
    position: "absolute",
  },
  rectangleParent: {
    top: 90,
    height: 142,
    width: 428,
    left: 0,
    position: "absolute",
  },
  background: {
    top: 6,
    backgroundColor: Color.backgroundBackground4,
    left: "50%",
    height: 47,
    width: 428,
  },
  wheresItComing: {
    marginLeft: -80,
    top: 67,
    fontFamily: FontFamily.rubikRegular,
    color: Color.dark,
    left: "50%",
    textAlign: "left",
    fontSize: FontSize.boldNormalHeading_size,
    position: "absolute",
  },
  icMoreIcon: {
    marginLeft: 165,
    top: 63,
    left: "50%",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  leftArrow11: {
    left: 27,
    top: 63,
  },
  time: {
    marginTop: -9,
    width: "14.4%",
    left: "5.6%",
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.sFSubheadlineSemibold,
    color: Color.darkslategray_400,
    textAlign: "center",
    fontSize: FontSize.sFSubheadlineSemibold_size,
    top: "50%",
    position: "absolute",
  },
  statusbar: {
    width: 375,
    height: 44,
    left: "50%",
    top: 0,
    marginLeft: -214,
  },
  header: {
    top: -6,
    height: 87,
    left: "50%",
    width: 428,
  },
  border: {
    width: "90.43%",
    top: "0%",
    right: "9.57%",
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#384144",
    borderWidth: 1,
    opacity: 0.35,
    left: "0%",
    bottom: "0%",
    height: "100%",
    position: "absolute",
  },
  capIcon: {
    height: "35.29%",
    width: "5.46%",
    top: "32.35%",
    right: "0%",
    bottom: "32.35%",
    left: "94.54%",
    opacity: 0.4,
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
  receiveAPackageChild: {
    top: 237,
    left: 0,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  receiveAPackageItem: {
    top: 300,
    left: 0,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  receiveAPackageInner: {
    top: 366,
    left: -2,
  },
  keyboardArrowRight1Icon: {
    top: 382,
    left: 369,
    overflow: "hidden",
  },
  dasunBrickTower: {
    marginTop: -20.5,
    fontFamily: FontFamily.helvetica,
    position: "absolute",
    left: "0%",
    textAlign: "left",
  },
  dasunTravelPlaza: {
    height: "36.59%",
    top: "63.41%",
    fontFamily: FontFamily.helvetica,
    position: "absolute",
    left: "0%",
    textAlign: "left",
    width: "100%",
  },
  dasunBrickTowerParent: {
    marginTop: -215,
  },
  dasunBrickTowerGroup: {
    marginTop: -152,
  },
  dasunBrickTower2: {
    marginTop: -76,
    left: "17.29%",
    fontFamily: FontFamily.helvetica,
    position: "absolute",
    textAlign: "left",
  },
  groupIcon: {
    top: 254,
    left: 35,
  },
  receiveAPackageChild1: {
    top: 317,
    left: 35,
  },
  receiveAPackageChild2: {
    top: 384,
    left: 33,
  },
  favorite1Icon: {
    top: 392,
    left: 40,
    width: 16,
    height: 16,
    position: "absolute",
    overflow: "hidden",
  },
  receiveAPackageChild3: {
    top: 484,
    height: 199,
    width: 428,
    backgroundColor: Color.mainWhite,
  },
  groupItem: {
    height: "1.75%",
    top: "98.25%",
    right: "0.11%",
    left: "-0.11%",
    bottom: "0%",
    width: "100%",
  },
  dasunBrickTower3: {
    marginTop: -28.5,
    color: Color.darkslategray_600,
    lineHeight: 22,
    fontSize: FontSize.sFSubheadlineSemibold_size,
    top: "50%",
  },
  dasunTravelPlaza2: {
    height: "26.32%",
    width: "59.17%",
    top: "45.61%",
    color: Color.darkgray_200,
    fontSize: FontSize.size_smi,
    lineHeight: 18,
  },
  groupInner: {
    top: 8,
    left: 35,
  },
  vectorParent: {
    top: "52.7%",
    bottom: "41.14%",
  },
  vectorGroup: {
    top: "59.29%",
    bottom: "34.56%",
  },
  vectorContainer: {
    top: "65.87%",
    bottom: "27.97%",
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
    bottom: 0,
    width: 413,
    height: 37,
  },
  groupChild5: {
    backgroundColor: Color.mainWhite,
  },
  deliveryBox14: {
    left: 102,
    width: 28,
    height: 23,
    position: "absolute",
  },
  home: {
    left: 20,
    fontSize: FontSize.size_xs,
    color: Color.black,
    fontFamily: FontFamily.ptRegularNormalText,
    top: 63,
    position: "absolute",
  },
  send: {
    left: 188,
    color: Color.black,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.ptRegularNormalText,
  },
  history1: {
    fontSize: FontSize.size_xs,
    color: Color.black,
    fontFamily: FontFamily.ptRegularNormalText,
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
    color: Color.black,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.ptRegularNormalText,
  },
  iconProfile: {
    left: 359,
    top: 24,
    width: 26,
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
    bottom: -1,
    height: 138,
    width: 414,
    left: 0,
    position: "absolute",
  },
  recent: {
    top: 452,
    left: 35,
    fontFamily: FontFamily.helvetica,
    position: "absolute",
    color: Color.black,
    lineHeight: 22,
    fontSize: FontSize.sFSubheadlineSemibold_size,
  },
  receiveAPackage: {
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.mainWhite,
  },
});

export default ReceiveAPackage;
