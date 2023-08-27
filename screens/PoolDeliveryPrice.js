import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const PoolDeliveryPrice = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.poolDeliveryPrice}>
      <View style={styles.poolDeliveryPriceInner}>
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.groupChildShadowBox]} />
          <View style={styles.frameParent}>
            <View>
              <View style={[styles.inputbox, styles.inputboxFlexBox]}>
                <Text style={[styles.home, styles.homeTypo]}>Home</Text>
              </View>
            </View>
            <View style={styles.inputboxContainer}>
              <View style={[styles.inputbox, styles.inputboxFlexBox]}>
                <Text style={[styles.bWoleAriyo, styles.homeTypo]}>
                  14B wole ariyo street, lekki phase 1
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
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.background, styles.headerPosition]} />
        <Text style={styles.wheresItGoing}>Where’s it going to</Text>
        <Image
          style={[styles.icMoreIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/icmore.png")}
        />
        <Image
          style={[styles.leftArrow11, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/leftarrow-1-1.png")}
        />
        <View style={[styles.statusbar, styles.headerPosition]}>
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
      <Image
        style={styles.mapsicleMapIcon}
        contentFit="cover"
        source={require("../assets/mapsicle-map.png")}
      />
      <Image
        style={styles.poolDeliveryPriceChild}
        contentFit="cover"
        source={require("../assets/group-10898.png")}
      />
      <View
        style={[
          styles.poolDeliveryPriceItem,
          styles.rectangleContainerPosition,
        ]}
      />
      <Pressable
        style={[styles.rectangleContainer, styles.groupItemLayout]}
        onPress={() => navigation.navigate("ReviewDeliveryRequestCard1")}
      >
        <View style={[styles.groupItem, styles.groupItemBg]} />
        <View style={styles.dasunBrickTowerParent}>
          <Text style={[styles.dasunBrickTower, styles.dasunClr]}>Express</Text>
          <Text style={[styles.dasunBrickTower1, styles.dasunClr]}>₦2,000</Text>
          <Text style={styles.dasunTravelPlaza}>Delivered in minutes</Text>
          <Text style={styles.dasunTravelPlaza1}>{`Pickup in 10m `}</Text>
        </View>
        <Image
          style={[styles.groupInner, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/group-108922.png")}
        />
        <Image
          style={styles.clock11}
          contentFit="cover"
          source={require("../assets/clock-1-13.png")}
        />
      </Pressable>
      <View
        style={[styles.dasunTravelPlazaParent, styles.groupContainerPosition]}
      >
        <Text
          style={[styles.dasunTravelPlaza2, styles.dasunTypo2]}
        >{`Pickup in 20m `}</Text>
        <View style={[styles.dasunBrickTowerGroup, styles.dasunPosition2]}>
          <Text style={[styles.dasunBrickTower2, styles.dasunTypo1]}>
            3-hour
          </Text>
          <Text style={[styles.dasunBrickTower3, styles.dasunTypo]}>
            ₦1,000
          </Text>
          <Text style={[styles.dasunTravelPlaza3, styles.dasunPosition1]}>
            Delivered within 3 hours
          </Text>
        </View>
        <Image
          style={[styles.groupIcon, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/group-108821.png")}
        />
        <Image
          style={[styles.clock111, styles.clockPosition]}
          contentFit="cover"
          source={require("../assets/clock-1-12.png")}
        />
      </View>
      <View style={styles.groupParent}>
        <View style={[styles.dasunBrickTowerContainer, styles.dasunPosition2]}>
          <Text style={[styles.dasunBrickTower2, styles.dasunTypo1]}>
            Same Day
          </Text>
          <Text style={[styles.dasunBrickTower5, styles.dasunTypo]}>₦800</Text>
          <Text style={[styles.dasunTravelPlaza4, styles.dasunPosition1]}>
            Delivered same day
          </Text>
        </View>
        <Image
          style={[styles.clock112, styles.clockPosition]}
          contentFit="cover"
          source={require("../assets/clock-1-12.png")}
        />
        <Text
          style={[styles.dasunTravelPlaza5, styles.dasunTypo2]}
        >{`Pickup in 60m `}</Text>
      </View>
      <Pressable
        style={[styles.pryButton, styles.groupItemBg]}
        onPress={() => navigation.navigate("ReviewDeliveryRequestCard1")}
      >
        <Text style={[styles.next, styles.dasunClr]}>Confirm Pickup</Text>
      </Pressable>
      <Pressable
        style={[styles.rectanglePressable, styles.groupChildShadowBox]}
        onPress={() => navigation.navigate("PoolDeliveryPriceMoreOp")}
      />
      <Image
        style={[styles.keyboardArrowRight1Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/keyboardarrowright-13.png")}
      />
      <View style={[styles.dasunBrickTowerWrapper, styles.dasunPosition]}>
        <Text style={[styles.dasunBrickTower6, styles.dasunTypo1]}>
          View more
        </Text>
      </View>
      <Image
        style={[styles.poolDeliveryPriceChild1, styles.groupChildLayout]}
        contentFit="cover"
        source={require("../assets/group-10884.png")}
      />
      <Image
        style={[styles.deliveryBox11, styles.layer2Position]}
        contentFit="cover"
        source={require("../assets/deliverybox-1-11.png")}
      />
      <Image
        style={[styles.poolDeliveryPriceChild2, styles.groupChildLayout]}
        contentFit="cover"
        source={require("../assets/group-108923.png")}
      />
      <View style={[styles.layer2, styles.layer2Position]}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={[styles.h, styles.hPosition]}>3h</Text>
      </View>
      <Image
        style={[styles.lineIcon, styles.lineIconLayout]}
        contentFit="cover"
        source={require("../assets/line-23.png")}
      />
      <Image
        style={[styles.poolDeliveryPriceChild3, styles.lineIconLayout]}
        contentFit="cover"
        source={require("../assets/line-22.png")}
      />
      <View style={[styles.groupContainer, styles.groupContainerPosition]}>
        <View style={[styles.dasunBrickTowerFrame, styles.dasunPosition]}>
          <Text style={[styles.dasunBrickTower6, styles.dasunTypo1]}>
            Pay with stored Card
          </Text>
        </View>
        <Image
          style={[styles.groupChild1, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/group-10909.png")}
        />
        <View style={[styles.groupView, styles.groupLayout]}>
          <View style={[styles.groupChild2, styles.groupLayout]} />
          <Image
            style={[styles.ellipseIcon, styles.hPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-58.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: -4,
      height: 4,
    },
    width: 428,
    left: 0,
    position: "absolute",
    backgroundColor: Color.mainWhite,
  },
  inputboxFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  homeTypo: {
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
    overflow: "hidden",
  },
  borderPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  rectangleContainerPosition: {
    top: 424,
    position: "absolute",
  },
  groupItemLayout: {
    height: 88,
    width: 428,
    left: 0,
  },
  groupItemBg: {
    backgroundColor: Color.colourMain2,
    position: "absolute",
  },
  dasunClr: {
    color: Color.mainWhite,
    textAlign: "left",
  },
  groupChildLayout: {
    width: 30,
    height: 28,
    position: "absolute",
  },
  groupContainerPosition: {
    left: "6.54%",
    position: "absolute",
  },
  dasunTypo2: {
    color: Color.royalblue_100,
    height: "24.59%",
    fontWeight: "300",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.helvetica,
    textAlign: "left",
    lineHeight: 18,
    position: "absolute",
  },
  dasunPosition2: {
    height: 37,
    marginTop: -30.5,
    right: "0%",
    top: "50%",
    position: "absolute",
  },
  dasunTypo1: {
    color: Color.darkslategray_600,
    fontFamily: FontFamily.helvetica,
    lineHeight: 22,
    left: "0%",
    fontSize: FontSize.sFSubheadlineSemibold_size,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  dasunTypo: {
    marginTop: -3.5,
    color: Color.darkslategray_600,
    fontFamily: FontFamily.helvetica,
    fontWeight: "700",
    lineHeight: 22,
    fontSize: FontSize.sFSubheadlineSemibold_size,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  dasunPosition1: {
    color: Color.silver_100,
    top: "56.76%",
    height: "40.54%",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.helvetica,
    left: "0%",
    textAlign: "left",
    lineHeight: 18,
    position: "absolute",
  },
  clockPosition: {
    top: 45,
    height: 16,
    width: 16,
    position: "absolute",
    overflow: "hidden",
  },
  dasunPosition: {
    height: 22,
    top: "50%",
    position: "absolute",
  },
  layer2Position: {
    left: "8.18%",
    right: "88.08%",
    width: "3.74%",
    height: "1.73%",
    position: "absolute",
  },
  hPosition: {
    left: 3,
    top: 3,
    position: "absolute",
  },
  lineIconLayout: {
    right: "-1.87%",
    width: "101.87%",
    height: "0.11%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout: {
    height: 18,
    width: 39,
    position: "absolute",
  },
  groupChild: {
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowRadius: 20,
    elevation: 20,
    top: 0,
    height: 142,
  },
  home: {
    width: 167,
  },
  inputbox: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whitesmoke_800,
    width: 307,
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_2xs,
    alignItems: "center",
    height: 47,
    overflow: "hidden",
  },
  bWoleAriyo: {
    width: 269,
  },
  inputboxContainer: {
    marginTop: 15,
  },
  frameParent: {
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
    top: 0,
    height: 142,
    width: 428,
    left: 0,
    position: "absolute",
  },
  poolDeliveryPriceInner: {
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
  wheresItGoing: {
    marginLeft: -80,
    top: 67,
    color: Color.dark,
    fontFamily: FontFamily.rubikRegular,
    left: "50%",
    textAlign: "left",
    fontSize: FontSize.boldNormalHeading_size,
    position: "absolute",
  },
  icMoreIcon: {
    marginLeft: 165,
    top: 63,
    height: 24,
    width: 24,
    left: "50%",
  },
  leftArrow11: {
    left: 27,
    top: 63,
    height: 24,
    width: 24,
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
  },
  header: {
    top: -6,
    height: 87,
    left: "50%",
    width: 428,
  },
  border: {
    width: "90.43%",
    right: "9.57%",
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#384144",
    borderWidth: 1,
    opacity: 0.35,
    left: "0%",
    position: "absolute",
  },
  capIcon: {
    height: "35.29%",
    width: "5.46%",
    top: "32.35%",
    bottom: "32.35%",
    left: "94.54%",
    opacity: 0.4,
    right: "0%",
    maxWidth: "100%",
    position: "absolute",
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
  mapsicleMapIcon: {
    top: 246,
    width: 435,
    height: 435,
    left: 0,
    position: "absolute",
  },
  poolDeliveryPriceChild: {
    top: 303,
    left: 38,
    width: 337,
    height: 112,
    position: "absolute",
  },
  poolDeliveryPriceItem: {
    height: 517,
    width: 428,
    left: 0,
    backgroundColor: Color.mainWhite,
  },
  groupItem: {
    height: 88,
    width: 428,
    left: 0,
    top: 0,
  },
  dasunBrickTower: {
    marginTop: -29.5,
    fontFamily: FontFamily.helvetica,
    lineHeight: 22,
    color: Color.mainWhite,
    fontWeight: "700",
    top: "50%",
    position: "absolute",
    left: "0%",
    fontSize: FontSize.sFSubheadlineSemibold_size,
  },
  dasunBrickTower1: {
    marginTop: -6.5,
    left: "78.59%",
    fontSize: FontSize.h3Header320ptMediumRoboto_size,
    fontFamily: FontFamily.helvetica,
    lineHeight: 22,
    color: Color.mainWhite,
    fontWeight: "700",
    top: "50%",
    position: "absolute",
  },
  dasunTravelPlaza: {
    width: "82.43%",
    top: "35.59%",
    color: Color.whitesmoke_400,
    fontSize: FontSize.size_xs,
    height: "25.42%",
    fontFamily: FontFamily.helvetica,
    left: "0%",
    textAlign: "left",
    lineHeight: 18,
    position: "absolute",
  },
  dasunTravelPlaza1: {
    width: "25.88%",
    top: "74.58%",
    left: "7.03%",
    fontWeight: "300",
    fontSize: FontSize.size_3xs,
    height: "25.42%",
    color: Color.mainWhite,
    fontFamily: FontFamily.helvetica,
    textAlign: "left",
    lineHeight: 18,
    position: "absolute",
  },
  dasunBrickTowerParent: {
    marginTop: -32,
    width: "73.13%",
    right: "7.01%",
    height: 59,
    left: "19.86%",
    top: "50%",
    position: "absolute",
  },
  groupInner: {
    top: 21,
    height: 28,
    left: 28,
    width: 30,
  },
  clock11: {
    top: 57,
    left: 85,
    height: 16,
    width: 16,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleContainer: {
    top: 424,
    position: "absolute",
  },
  dasunTravelPlaza2: {
    width: "22.19%",
    top: "72.13%",
    left: "22.47%",
  },
  dasunBrickTower2: {
    marginTop: -18.5,
  },
  dasunBrickTower3: {
    left: "83.77%",
  },
  dasunTravelPlaza3: {
    width: "83.77%",
  },
  dasunBrickTowerGroup: {
    width: "84.38%",
    left: "15.62%",
  },
  groupIcon: {
    top: 9,
    height: 28,
    left: 0,
  },
  clock111: {
    left: 57,
  },
  dasunTravelPlazaParent: {
    height: "6.59%",
    width: "85.28%",
    top: "57.67%",
    right: "8.18%",
    bottom: "35.75%",
  },
  dasunBrickTower5: {
    left: "87.16%",
  },
  dasunTravelPlaza4: {
    width: "87.16%",
  },
  dasunBrickTowerContainer: {
    left: "0%",
    width: "100%",
  },
  clock112: {
    left: 0,
  },
  dasunTravelPlaza5: {
    width: "27.36%",
    top: "73.77%",
    left: "8.45%",
  },
  groupParent: {
    marginTop: 169,
    width: "69.16%",
    right: "10.98%",
    height: 61,
    left: "19.86%",
    top: "50%",
    position: "absolute",
  },
  next: {
    fontFamily: FontFamily.boldNormalHeading,
    fontWeight: "700",
    color: Color.mainWhite,
    fontSize: FontSize.boldNormalHeading_size,
  },
  pryButton: {
    top: 851,
    left: 73,
    borderRadius: Border.br_11xl,
    width: 281,
    paddingHorizontal: Padding.p_126xl,
    paddingVertical: Padding.p_mid,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  rectanglePressable: {
    top: 711,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    height: 51,
  },
  keyboardArrowRight1Icon: {
    top: 727,
    left: 370,
  },
  dasunBrickTower6: {
    marginTop: -11,
  },
  dasunBrickTowerWrapper: {
    marginTop: 264,
    width: "16.59%",
    right: "63.55%",
    left: "19.86%",
  },
  poolDeliveryPriceChild1: {
    top: 724,
    height: 28,
    left: 28,
    width: 30,
  },
  deliveryBox11: {
    top: "78.94%",
    bottom: "19.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  poolDeliveryPriceChild2: {
    top: 641,
    height: 28,
    left: 28,
    width: 30,
  },
  vectorIcon: {
    right: "0%",
    maxWidth: "100%",
    position: "absolute",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  h: {
    fontSize: FontSize.size_5xs,
    lineHeight: 10,
    color: Color.mainWhite,
    textAlign: "left",
    fontFamily: FontFamily.rubikRegular,
  },
  layer2: {
    top: "59.29%",
    bottom: "38.98%",
  },
  lineIcon: {
    top: "66.09%",
    bottom: "33.8%",
  },
  poolDeliveryPriceChild3: {
    top: "76.62%",
    bottom: "23.27%",
  },
  dasunBrickTowerFrame: {
    marginTop: -11.06,
    width: "39.55%",
    right: "44.35%",
    left: "16.1%",
  },
  groupChild1: {
    height: 28,
    top: 0,
    left: 0,
  },
  groupChild2: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.silver_100,
    top: 0,
    left: 0,
  },
  ellipseIcon: {
    width: 13,
    height: 12,
  },
  groupView: {
    left: 315,
    top: 3,
    height: 18,
    width: 39,
  },
  groupContainer: {
    marginTop: 333,
    width: "82.71%",
    right: "10.75%",
    height: 28,
    top: "50%",
  },
  poolDeliveryPrice: {
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.mainWhite,
  },
});

export default PoolDeliveryPrice;
