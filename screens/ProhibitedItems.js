import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const ProhibitedItems = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.prohibitedItems}>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.background, styles.headerPosition]} />
        <Text style={styles.prohibitedItems1}>Prohibited items</Text>
        <Image
          style={[styles.icMoreIcon, styles.icMoreIconLayout]}
          contentFit="cover"
          source={require("../assets/icmore.png")}
        />
        <Pressable
          style={[styles.leftArrow11, styles.icMoreIconLayout]}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/leftarrow-1-1.png")}
          />
        </Pressable>
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
      <Pressable
        style={styles.pryButton}
        onPress={() => navigation.navigate("ReviewDeliveryRequestCard")}
      >
        <Text style={[styles.next, styles.hClr]}>Back</Text>
      </Pressable>
      <View style={styles.layer2}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={[styles.h, styles.hClr]}>3h</Text>
      </View>
      <View style={styles.vectorParent}>
        <Image
          style={[styles.groupChild, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/line-4.png")}
        />
        <Text
          style={[styles.itemsSentMust, styles.itemsLayout]}
        >{`Items sent must comply with all laws and regulations and with our policies. Sending illegal, unsafe, or other prohibited items listed on this page is strictly prohibited.

If you send an item in violation of the law or any of our policies, including those listed on this page, we will take corrective actions, as appropriate, including but not limited to, immediately suspending or terminating your account. Sending illegal or unsafe products can also lead to legal action, including civil and criminal penalties.

We encourage you to report items that violate Uber's policies or applicable law by contacting us. We will investigate each report thoroughly and take appropriate action.

The following items are prohibited from package delivery:

- Illegal items
- Firearms, weaponry, and their parts
- Alcohol
- Highly perishable food or beverages (e.g., raw meat or dairy products)
- Pharmaceutical products, over-the-counter medications, vitamins or supplements
- Recreational drugs, drug paraphernalia, or tobacco products
- Money, giftcards, lottery tickets or transferable securities
- Dangerous or hazardous items, including explosives, items that are poisonous or flammable, medical waste and other dangerous or hazardous items as described in the applicable regulations
- Stolen goods
- Fragile items`}</Text>
        <Text style={[styles.itemsProhibitedFrom, styles.itemsLayout]}>
          Items prohibited from package delivery
        </Text>
      </View>
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
  icMoreIconLayout: {
    height: 24,
    width: 24,
    top: 63,
    position: "absolute",
  },
  borderPosition: {
    bottom: "0%",
    top: "0%",
    left: "0%",
    height: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  hClr: {
    color: Color.mainWhite,
    textAlign: "left",
  },
  itemsLayout: {
    height: 709,
    color: Color.darkslategray_500,
    lineHeight: 18,
    textAlign: "left",
    fontSize: FontSize.boldNormalHeading_size,
    position: "absolute",
  },
  background: {
    top: 6,
    backgroundColor: Color.backgroundBackground4,
    height: 47,
  },
  prohibitedItems1: {
    marginLeft: -80,
    top: 67,
    color: Color.dark,
    textAlign: "left",
    fontFamily: FontFamily.rubikRegular,
    fontSize: FontSize.boldNormalHeading_size,
    left: "50%",
    position: "absolute",
  },
  icMoreIcon: {
    marginLeft: 165,
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
  },
  time: {
    marginTop: -9,
    width: "14.4%",
    top: "50%",
    left: "5.6%",
    fontSize: FontSize.sFSubheadlineSemibold_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.sFSubheadlineSemibold,
    color: Color.darkslategray_400,
    textAlign: "center",
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
  next: {
    fontFamily: FontFamily.boldNormalHeading,
    fontWeight: "700",
    color: Color.mainWhite,
    fontSize: FontSize.boldNormalHeading_size,
  },
  pryButton: {
    top: 860,
    left: 68,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colourMain2,
    width: 281,
    flexDirection: "row",
    paddingHorizontal: Padding.p_126xl,
    paddingVertical: Padding.p_mid,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  vectorIcon: {
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
    color: Color.mainWhite,
    position: "absolute",
  },
  layer2: {
    height: "1.73%",
    width: "3.74%",
    top: "59.29%",
    right: "88.08%",
    bottom: "38.98%",
    left: "8.18%",
    position: "absolute",
  },
  groupChild: {
    height: "0.13%",
    top: "98.36%",
    bottom: "1.51%",
    left: "0%",
    width: "100%",
  },
  itemsSentMust: {
    top: 36,
    left: 38,
    fontFamily: FontFamily.ptRegularNormalText,
    width: 359,
  },
  itemsProhibitedFrom: {
    left: 37,
    width: 368,
    fontFamily: FontFamily.boldNormalHeading,
    fontWeight: "700",
    top: 0,
  },
  vectorParent: {
    height: "80.48%",
    width: "100.03%",
    top: "12.2%",
    right: "-0.03%",
    bottom: "7.32%",
    left: "0%",
    position: "absolute",
  },
  prohibitedItems: {
    backgroundColor: Color.mainWhite,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
  },
});

export default ProhibitedItems;
