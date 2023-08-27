import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const PoolDeliveryPriceMoreOp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.poolDeliveryPriceMoreOp}>
      <View
        style={[styles.poolDeliveryPriceMoreOpInner, styles.groupChildLayout1]}
      >
        <View style={[styles.rectangleParent, styles.groupChildLayout1]}>
          <View style={[styles.groupChild, styles.childShadowBox]} />
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
        <Text style={[styles.wheresItGoing, styles.hTypo]}>
          Where’s it going to
        </Text>
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
        style={styles.poolDeliveryPriceMoreOpChild}
        contentFit="cover"
        source={require("../assets/group-10898.png")}
      />
      <View style={styles.poolDeliveryPriceMoreOpItem} />
      <View style={styles.rectangleContainer}>
        <View style={[styles.groupItem, styles.groupParentLayout]} />
        <View style={styles.dasunBrickTowerParent}>
          <Text style={[styles.dasunBrickTower, styles.dasunTypo3]}>
            Express
          </Text>
          <Text style={[styles.dasunBrickTower1, styles.dasunTypo2]}>
            ₦2,000
          </Text>
          <Text style={styles.dasunTravelPlaza}>Delivered in minutes</Text>
        </View>
        <Image
          style={[styles.groupInner, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-108922.png")}
        />
        <Image
          style={[styles.clock11, styles.clockLayout]}
          contentFit="cover"
          source={require("../assets/clock-1-12.png")}
        />
        <Image
          style={[styles.lineIcon, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/line-22.png")}
        />
        <Image
          style={[styles.groupChild1, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/line-22.png")}
        />
        <Image
          style={[styles.groupChild2, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/line-22.png")}
        />
        <Image
          style={[styles.groupChild3, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/line-22.png")}
        />
      </View>
      <View style={[styles.groupView, styles.groupParentLayout]}>
        <View style={[styles.groupChild4, styles.groupParentLayout]} />
        <View style={[styles.dasunBrickTowerGroup, styles.dasunPosition1]}>
          <Text style={[styles.dasunBrickTower, styles.dasunTypo3]}>
            3-hour
          </Text>
          <Text style={[styles.dasunBrickTower1, styles.dasunTypo2]}>
            ₦1,000
          </Text>
          <Text style={[styles.dasunTravelPlaza1, styles.dasunTypo1]}>
            Delivered within 3 hours
          </Text>
        </View>
        <View
          style={[styles.fastTime1Wrapper, styles.fastTime1WrapperPosition]}
        >
          <View style={[styles.fastTime1, styles.clockLayout]} />
        </View>
        <Image
          style={[styles.clock111, styles.clockLayout]}
          contentFit="cover"
          source={require("../assets/clock-1-12.png")}
        />
      </View>
      <View style={[styles.rectangleParent1, styles.groupParentLayout]}>
        <View style={[styles.groupChild4, styles.groupParentLayout]} />
        <View style={[styles.dasunBrickTowerContainer, styles.dasunPosition1]}>
          <Text style={[styles.dasunBrickTower, styles.dasunTypo3]}>
            Same Day
          </Text>
          <Text style={[styles.dasunBrickTower5, styles.dasunTypo2]}>₦800</Text>
          <Text style={[styles.dasunTravelPlaza2, styles.dasunTypo1]}>
            Delivered same day
          </Text>
        </View>
        <Image
          style={[styles.groupIcon, styles.poolChildPosition]}
          contentFit="cover"
          source={require("../assets/group-108923.png")}
        />
        <Image
          style={[styles.clock111, styles.clockLayout]}
          contentFit="cover"
          source={require("../assets/clock-1-12.png")}
        />
      </View>
      <Pressable
        style={[styles.pryButton, styles.inputboxFlexBox]}
        onPress={() => navigation.navigate("ReviewDeliveryRequestCard1")}
      >
        <Text style={[styles.next, styles.hClr]}>Confirm Pickup</Text>
      </Pressable>
      <View
        style={[styles.poolDeliveryPriceMoreOpChild1, styles.childShadowBox]}
      />
      <Image
        style={[styles.keyboardArrowRight1Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/keyboardarrowright-12.png")}
      />
      <View style={[styles.dasunBrickTowerWrapper, styles.dasunPosition]}>
        <Text style={[styles.dasunBrickTower6, styles.dasunTypo3]}>
          View Less
        </Text>
      </View>
      <Image
        style={[styles.poolDeliveryPriceMoreOpChild2, styles.poolChildPosition]}
        contentFit="cover"
        source={require("../assets/group-10884.png")}
      />
      <Image
        style={[styles.deliveryBox11, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/deliverybox-1-11.png")}
      />
      <Image
        style={[
          styles.poolDeliveryPriceMoreOpChild3,
          styles.fastTime1WrapperPosition,
        ]}
        contentFit="cover"
        source={require("../assets/group-2155.png")}
      />
      <View
        style={[styles.poolDeliveryPriceMoreOpInner1, styles.poolChildPosition]}
      >
        <View style={[styles.groupParent, styles.groupLayout]}>
          <Image
            style={[styles.groupParent, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/group-108821.png")}
          />
          <View style={styles.layer2}>
            <Image
              style={[styles.vectorIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
            <Text style={[styles.h, styles.hClr]}>3h</Text>
          </View>
        </View>
      </View>
      <View style={[styles.rectangleParent2, styles.groupParentLayout]}>
        <View style={[styles.groupChild4, styles.groupParentLayout]} />
        <View style={[styles.dasunBrickTowerContainer, styles.dasunPosition1]}>
          <Text style={[styles.dasunBrickTower, styles.dasunTypo3]}>
            Next Day
          </Text>
          <Text style={[styles.dasunBrickTower5, styles.dasunTypo2]}>₦800</Text>
          <Text style={[styles.dasunTravelPlaza2, styles.dasunTypo1]}>
            Delivered next day
          </Text>
        </View>
        <View
          style={[styles.fastTime1Wrapper, styles.fastTime1WrapperPosition]}
        >
          <View style={[styles.fastTime1, styles.clockLayout]} />
        </View>
        <Image
          style={[styles.clock111, styles.clockLayout]}
          contentFit="cover"
          source={require("../assets/clock-1-12.png")}
        />
        <Text style={styles.dasunTravelPlaza4}>{`Pickup in 60m `}</Text>
      </View>
      <Image
        style={[styles.poolDeliveryPriceMoreOpChild4, styles.poolChildPosition]}
        contentFit="cover"
        source={require("../assets/group-109051.png")}
      />
      <Text
        style={[styles.dasunTravelPlaza5, styles.dasunTypo]}
      >{`Pickup in 10m `}</Text>
      <Text
        style={[styles.dasunTravelPlaza6, styles.dasunTypo]}
      >{`Pickup in 20m `}</Text>
      <Text
        style={[styles.dasunTravelPlaza7, styles.dasunTypo]}
      >{`Pickup in 30m `}</Text>
      <View style={[styles.dasunBrickTowerFrame, styles.dasunPosition]}>
        <Text style={[styles.dasunBrickTower6, styles.dasunTypo3]}>
          Pay with stored Card
        </Text>
      </View>
      <Image
        style={[styles.poolDeliveryPriceMoreOpChild5, styles.poolChildPosition]}
        contentFit="cover"
        source={require("../assets/group-10909.png")}
      />
      <View style={[styles.rectangleParent3, styles.groupChild8Layout]}>
        <View style={[styles.groupChild8, styles.groupChild8Layout]} />
        <Image
          style={styles.ellipseIcon}
          contentFit="cover"
          source={require("../assets/ellipse-58.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout1: {
    height: 142,
    left: 0,
  },
  childShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: -4,
      height: 4,
    },
    width: 428,
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
  hTypo: {
    fontFamily: FontFamily.rubikRegular,
    position: "absolute",
  },
  iconLayout1: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  borderPosition: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupParentLayout: {
    height: 88,
    width: 428,
    position: "absolute",
  },
  dasunTypo3: {
    color: Color.darkslategray_600,
    fontFamily: FontFamily.helvetica,
    lineHeight: 22,
    left: "0%",
    fontSize: FontSize.sFSubheadlineSemibold_size,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  dasunTypo2: {
    marginTop: -3.5,
    fontWeight: "700",
    color: Color.darkslategray_600,
    fontFamily: FontFamily.helvetica,
    lineHeight: 22,
    fontSize: FontSize.sFSubheadlineSemibold_size,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  groupLayout: {
    height: 28,
    width: 30,
    position: "absolute",
  },
  clockLayout: {
    height: 16,
    width: 16,
    position: "absolute",
    overflow: "hidden",
  },
  groupChildLayout: {
    left: "1.13%",
    width: "98.87%",
    height: "0.26%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  dasunPosition1: {
    left: "19.86%",
    marginTop: -32,
    height: 37,
    top: "50%",
    position: "absolute",
  },
  dasunTypo1: {
    color: Color.silver_100,
    fontSize: FontSize.size_xs,
    top: "56.76%",
    height: "40.54%",
    fontFamily: FontFamily.helvetica,
    left: "0%",
    textAlign: "left",
    lineHeight: 18,
    position: "absolute",
  },
  fastTime1WrapperPosition: {
    left: 35,
    height: 16,
    width: 16,
    position: "absolute",
  },
  poolChildPosition: {
    left: 28,
    height: 28,
    width: 30,
    position: "absolute",
  },
  hClr: {
    color: Color.mainWhite,
    textAlign: "left",
  },
  dasunPosition: {
    height: 22,
    left: "19.86%",
    top: "50%",
    position: "absolute",
  },
  dasunTypo: {
    height: "1.62%",
    color: Color.royalblue_100,
    fontWeight: "300",
    fontSize: FontSize.size_3xs,
    left: "25.93%",
    width: "18.93%",
    fontFamily: FontFamily.helvetica,
    textAlign: "left",
    lineHeight: 18,
    position: "absolute",
  },
  groupChild8Layout: {
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
    left: 0,
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
    width: 428,
    position: "absolute",
  },
  poolDeliveryPriceMoreOpInner: {
    top: 90,
    width: 428,
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
    left: "50%",
    textAlign: "left",
    fontFamily: FontFamily.rubikRegular,
    fontSize: FontSize.boldNormalHeading_size,
  },
  icMoreIcon: {
    marginLeft: 165,
    top: 63,
    height: 24,
    width: 24,
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
  poolDeliveryPriceMoreOpChild: {
    top: 303,
    left: 38,
    width: 337,
    height: 112,
    position: "absolute",
  },
  poolDeliveryPriceMoreOpItem: {
    top: 328,
    height: 613,
    width: 428,
    left: 0,
    position: "absolute",
    backgroundColor: Color.mainWhite,
  },
  groupItem: {
    left: 5,
    top: 0,
    backgroundColor: Color.mainWhite,
  },
  dasunBrickTower: {
    marginTop: -18.5,
  },
  dasunBrickTower1: {
    left: "83.77%",
    fontWeight: "700",
  },
  dasunTravelPlaza: {
    fontSize: FontSize.size_xs,
    top: "56.76%",
    height: "40.54%",
    width: "83.77%",
    fontFamily: FontFamily.helvetica,
    left: "0%",
    textAlign: "left",
    color: Color.mainAshColour,
    lineHeight: 18,
    position: "absolute",
  },
  dasunBrickTowerParent: {
    marginTop: -181.5,
    width: "69.84%",
    right: "9.75%",
    left: "20.41%",
    height: 37,
    top: "50%",
    position: "absolute",
  },
  groupInner: {
    left: 33,
    top: 21,
  },
  clock11: {
    left: 90,
    top: 57,
    width: 16,
  },
  lineIcon: {
    top: "22.61%",
    bottom: "77.13%",
  },
  groupChild1: {
    top: "50.52%",
    bottom: "49.22%",
  },
  groupChild2: {
    top: "74.29%",
    bottom: "25.45%",
  },
  groupChild3: {
    top: "99.87%",
    bottom: "-0.13%",
  },
  rectangleContainer: {
    top: 333,
    left: -5,
    width: 441,
    height: 387,
    position: "absolute",
  },
  groupChild4: {
    top: 0,
    left: 0,
    backgroundColor: Color.mainWhite,
  },
  dasunTravelPlaza1: {
    width: "83.77%",
    color: Color.silver_100,
  },
  dasunBrickTowerGroup: {
    width: "71.96%",
    right: "8.18%",
  },
  fastTime1: {
    top: 0,
    left: 0,
  },
  fastTime1Wrapper: {
    top: 27,
  },
  clock111: {
    left: 85,
    top: 57,
    width: 16,
  },
  groupView: {
    top: 431,
    left: 0,
  },
  dasunBrickTower5: {
    left: "87.16%",
    fontWeight: "700",
  },
  dasunTravelPlaza2: {
    width: "87.16%",
  },
  dasunBrickTowerContainer: {
    width: "69.16%",
    right: "10.98%",
  },
  groupIcon: {
    top: 21,
  },
  rectangleParent1: {
    top: 529,
    left: 0,
  },
  next: {
    fontFamily: FontFamily.boldNormalHeading,
    fontWeight: "700",
    fontSize: FontSize.boldNormalHeading_size,
    color: Color.mainWhite,
  },
  pryButton: {
    top: 853,
    left: 72,
    borderRadius: Border.br_11xl,
    width: 282,
    paddingHorizontal: Padding.p_126xl,
    paddingVertical: Padding.p_mid,
    justifyContent: "center",
    backgroundColor: Color.colourMain2,
    alignItems: "center",
    position: "absolute",
  },
  poolDeliveryPriceMoreOpChild1: {
    top: 724,
    left: -1,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    height: 63,
  },
  keyboardArrowRight1Icon: {
    top: 738,
    left: 370,
    overflow: "hidden",
  },
  dasunBrickTower6: {
    marginTop: -11,
  },
  dasunBrickTowerWrapper: {
    marginTop: 275,
    width: "16.12%",
    right: "64.02%",
  },
  poolDeliveryPriceMoreOpChild2: {
    top: 735,
  },
  deliveryBox11: {
    height: "1.73%",
    width: "3.74%",
    top: "80.13%",
    right: "88.08%",
    bottom: "18.14%",
    left: "8.18%",
  },
  poolDeliveryPriceMoreOpChild3: {
    top: 647,
  },
  groupParent: {
    top: 0,
    left: 0,
  },
  vectorIcon: {
    right: "0%",
    maxWidth: "100%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  h: {
    top: 3,
    left: 3,
    fontSize: FontSize.size_5xs,
    lineHeight: 10,
    fontFamily: FontFamily.rubikRegular,
    position: "absolute",
  },
  layer2: {
    height: "56.89%",
    width: "53.33%",
    top: "21.33%",
    right: "23.33%",
    bottom: "21.78%",
    left: "23.33%",
    position: "absolute",
  },
  poolDeliveryPriceMoreOpInner1: {
    top: 452,
  },
  dasunTravelPlaza4: {
    height: "17.05%",
    top: "64.77%",
    color: Color.royalblue_100,
    fontWeight: "300",
    fontSize: FontSize.size_3xs,
    left: "25.93%",
    width: "18.93%",
    fontFamily: FontFamily.helvetica,
    textAlign: "left",
    lineHeight: 18,
    position: "absolute",
  },
  rectangleParent2: {
    top: 625,
    left: 0,
  },
  poolDeliveryPriceMoreOpChild4: {
    top: 646,
  },
  dasunTravelPlaza5: {
    top: "42.01%",
  },
  dasunTravelPlaza6: {
    top: "52.81%",
  },
  dasunTravelPlaza7: {
    top: "63.28%",
  },
  dasunBrickTowerFrame: {
    marginTop: 351,
    width: "32.71%",
    right: "47.43%",
  },
  poolDeliveryPriceMoreOpChild5: {
    top: 811,
  },
  groupChild8: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colourMain2,
    top: 0,
    left: 0,
  },
  ellipseIcon: {
    top: 2,
    left: 21,
    width: 13,
    height: 12,
    position: "absolute",
  },
  rectangleParent3: {
    top: 814,
    left: 343,
  },
  poolDeliveryPriceMoreOp: {
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.mainWhite,
  },
});

export default PoolDeliveryPriceMoreOp;
