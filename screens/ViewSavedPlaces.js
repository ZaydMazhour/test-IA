import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const ViewSavedPlaces = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.viewSavedPlaces, styles.iconLayout]}>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.background, styles.headerPosition]} />
        <Text style={styles.chooseAPlace}>Choose a place</Text>
        <Image
          style={[styles.icMoreIcon, styles.arrowLayout]}
          contentFit="cover"
          source={require("../assets/icmore.png")}
        />
        <View style={styles.statusbar}>
          <Text style={styles.time}>9:41</Text>
        </View>
      </View>
      <View style={styles.battery}>
        <View style={styles.border} />
        <Image
          style={styles.capIcon}
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
      <View style={[styles.rectangleParent, styles.groupLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.dasunBrickTower, styles.dasunClr]}>Home</Text>
        <Text style={[styles.dasunTravelPlaza, styles.dasunLayout]}>
          40 Muritala Eletu way, Osapa London
        </Text>
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/group-10884.png")}
        />
        <Image
          style={styles.favorite1Icon}
          contentFit="cover"
          source={require("../assets/favorite-1.png")}
        />
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Text
          style={[styles.dasunBrickTower, styles.dasunClr]}
        >{`Touchore `}</Text>
        <Text style={[styles.dasunTravelPlaza, styles.dasunLayout]}>
          14b Wole Ariyo Street, Lekki Phase 1
        </Text>
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/group-10884.png")}
        />
        <Image
          style={styles.favorite1Icon}
          contentFit="cover"
          source={require("../assets/favorite-1.png")}
        />
      </View>
      <Text style={[styles.dasunBrickTower2, styles.dasunPosition]}>
        Add a saved place
      </Text>
      <Text style={[styles.dasunTravelPlaza2, styles.dasunPosition]}>
        Get to your favourite places more quickly
      </Text>
      <Pressable
        style={[styles.keyboardArrowRight1, styles.arrowLayout]}
        onPress={() => navigation.navigate("SaveAnAddress")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/keyboardarrowright-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.leftArrow11, styles.arrowLayout]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/leftarrow-1-1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  headerPosition: {
    width: 428,
    left: "50%",
    marginLeft: -214,
    position: "absolute",
  },
  arrowLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  groupLayout: {
    height: 63,
    left: 0,
    width: 428,
    position: "absolute",
  },
  dasunClr: {
    color: Color.darkslategray_600,
    lineHeight: 22,
    fontSize: FontSize.sFSubheadlineSemibold_size,
    top: "50%",
  },
  dasunLayout: {
    color: Color.darkgray_200,
    lineHeight: 18,
    fontSize: FontSize.size_smi,
    width: "60.28%",
  },
  dasunPosition: {
    left: "9.11%",
    fontFamily: FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  background: {
    top: 6,
    backgroundColor: Color.backgroundBackground4,
    height: 47,
  },
  chooseAPlace: {
    marginLeft: -145,
    top: 68,
    fontSize: FontSize.boldNormalHeading_size,
    fontFamily: FontFamily.rubikRegular,
    color: Color.dark,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  icMoreIcon: {
    marginLeft: 165,
    top: 63,
    left: "50%",
    overflow: "hidden",
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
    top: 0,
    left: "50%",
    marginLeft: -214,
    position: "absolute",
  },
  header: {
    top: -6,
    height: 87,
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
    top: "32.35%",
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
  groupChild: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    top: 0,
    backgroundColor: Color.mainWhite,
  },
  dasunBrickTower: {
    marginTop: -18.5,
    fontFamily: FontFamily.helvetica,
    left: "18.22%",
    textAlign: "left",
    position: "absolute",
  },
  dasunTravelPlaza: {
    height: "23.81%",
    top: "61.9%",
    fontFamily: FontFamily.helvetica,
    left: "18.22%",
    textAlign: "left",
    position: "absolute",
  },
  groupItem: {
    top: 17,
    left: 35,
    width: 30,
    height: 28,
    position: "absolute",
  },
  favorite1Icon: {
    top: 25,
    left: 42,
    width: 16,
    height: 16,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent: {
    top: 100,
  },
  groupInner: {
    top: 0,
    backgroundColor: Color.mainWhite,
  },
  rectangleGroup: {
    top: 163,
  },
  dasunBrickTower2: {
    marginTop: -218,
    fontWeight: "700",
    color: Color.darkslategray_600,
    lineHeight: 22,
    fontSize: FontSize.sFSubheadlineSemibold_size,
    top: "50%",
  },
  dasunTravelPlaza2: {
    height: "1.62%",
    top: "29.27%",
    color: Color.darkgray_200,
    lineHeight: 18,
    fontSize: FontSize.size_smi,
    width: "60.28%",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  keyboardArrowRight1: {
    left: 369,
    top: 255,
  },
  leftArrow11: {
    left: 33,
    top: 60,
  },
  viewSavedPlaces: {
    flex: 1,
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.mainWhite,
  },
});

export default ViewSavedPlaces;
