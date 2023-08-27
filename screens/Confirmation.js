import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Confirmation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.confirmation}>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.background, styles.headerPosition]} />
        <Text style={styles.confirmation1}>Confirmation</Text>
        <Image
          style={[styles.icMoreIcon, styles.icMoreIconLayout]}
          contentFit="cover"
          source={require("../assets/icmore.png")}
        />
        <Image
          style={[styles.leftArrow11, styles.icMoreIconLayout]}
          contentFit="cover"
          source={require("../assets/leftarrow-1-1.png")}
        />
        <View style={[styles.statusbar, styles.headerPosition]}>
          <Text style={styles.time}>9:41</Text>
        </View>
      </View>
      <View style={styles.battery}>
        <View style={[styles.border, styles.helpPosition2]} />
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
        style={[styles.mapsicleMapIcon, styles.mapsicleMapIconPosition]}
        contentFit="cover"
        source={require("../assets/mapsicle-map1.png")}
      />
      <Image
        style={styles.confirmationChild}
        contentFit="cover"
        source={require("../assets/group-108981.png")}
      />
      <View style={styles.layer2}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={[styles.h, styles.hClr]}>3h</Text>
      </View>
      <View style={[styles.confirmationItem, styles.mapsicleMapIconPosition]} />
      <Image
        style={styles.confirmationInner}
        contentFit="cover"
        source={require("../assets/rectangle-1927.png")}
      />
      <View style={styles.orderStatusprepared}>
        <View style={styles.orderStatusBar}>
          <View style={styles.statusBarinactive} />
          <LinearGradient
            style={styles.statusBaractive}
            locations={[0, 1]}
            colors={["#054d82", "rgba(5, 53, 130, 0.72)"]}
          />
        </View>
        <View style={[styles.helpButton, styles.helpPosition1]}>
          <View style={[styles.helpRectangle, styles.helpPosition]} />
          <Text style={[styles.help, styles.helpFlexBox]}>Help</Text>
        </View>
        <View style={styles.orderStatus}>
          <Text style={styles.riderWillBe}>
            We are assigning the nearest driver to you
          </Text>
          <Text style={[styles.findingYourDelivery, styles.findingTypo]}>
            Finding your delivery rider
          </Text>
        </View>
      </View>
      <View style={styles.orderStatusprepared1}>
        <View style={styles.orderStatusBar}>
          <View style={styles.statusBarinactive} />
          <LinearGradient
            style={styles.statusBaractive}
            locations={[0, 1]}
            colors={["#054d82", "rgba(5, 53, 130, 0.72)"]}
          />
        </View>
        <View style={[styles.helpButton1, styles.helpPosition1]}>
          <View style={[styles.helpRectangle1, styles.helpPosition]} />
          <Text style={[styles.help, styles.helpFlexBox]}>Help</Text>
        </View>
        <View style={styles.orderStatus1}>
          <Text style={[styles.findingYourDelivery1, styles.findingTypo]}>
            Finding your delivery rider
          </Text>
        </View>
      </View>
      <Text style={[styles.yourRequestWas, styles.nextTypo]}>
        Your request was successful
      </Text>
      <Pressable
        style={[styles.pryButton, styles.helpFlexBox]}
        onPress={() => navigation.navigate("DeliveryHistoryHome")}
      >
        <Text style={[styles.next, styles.nextTypo]}>Continue</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  headerPosition: {
    marginLeft: -214,
    left: "50%",
    position: "absolute",
  },
  icMoreIconLayout: {
    height: 24,
    width: 24,
    top: 63,
    position: "absolute",
    overflow: "hidden",
  },
  helpPosition2: {
    left: "0%",
    top: "0%",
    height: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  mapsicleMapIconPosition: {
    left: 0,
    position: "absolute",
  },
  hClr: {
    color: Color.mainWhite,
    textAlign: "left",
  },
  helpPosition1: {
    left: "85.07%",
    top: "19.77%",
    display: "none",
    position: "absolute",
  },
  helpPosition: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whitesmoke_200,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  helpFlexBox: {
    justifyContent: "center",
    position: "absolute",
  },
  findingTypo: {
    color: Color.darkslategray_200,
    fontSize: FontSize.h3Header320ptMediumRoboto_size,
    fontFamily: FontFamily.boldNormalHeading,
    fontWeight: "700",
    alignItems: "center",
    display: "none",
    textAlign: "left",
    position: "absolute",
  },
  nextTypo: {
    fontFamily: FontFamily.boldNormalHeading,
    fontWeight: "700",
    fontSize: FontSize.boldNormalHeading_size,
  },
  background: {
    top: 6,
    backgroundColor: Color.backgroundBackground4,
    height: 47,
    width: 428,
    left: "50%",
  },
  confirmation1: {
    marginLeft: -80,
    top: 67,
    color: Color.dark,
    textAlign: "left",
    fontSize: FontSize.boldNormalHeading_size,
    fontFamily: FontFamily.rubikRegular,
    left: "50%",
    position: "absolute",
  },
  icMoreIcon: {
    marginLeft: 165,
    left: "50%",
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
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.sFSubheadlineSemibold,
    color: Color.darkslategray_400,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  statusbar: {
    top: 0,
    width: 375,
    height: 44,
    left: "50%",
  },
  header: {
    top: -6,
    height: 87,
    width: 428,
    left: "50%",
  },
  border: {
    width: "90.43%",
    right: "9.57%",
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#384144",
    borderWidth: 1,
    opacity: 0.35,
    bottom: "0%",
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
  mapsicleMapIcon: {
    top: 118,
    width: 654,
    height: 654,
  },
  confirmationChild: {
    top: 303,
    left: 38,
    width: 337,
    height: 112,
    position: "absolute",
  },
  vectorIcon: {
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
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
  confirmationItem: {
    top: 527,
    height: 399,
    width: 428,
    backgroundColor: Color.mainWhite,
    left: 0,
  },
  confirmationInner: {
    top: 611,
    left: 141,
    width: 118,
    height: 81,
    position: "absolute",
  },
  statusBarinactive: {
    height: "66.67%",
    top: "16.67%",
    bottom: "16.67%",
    backgroundColor: Color.whitesmoke_200,
    borderRadius: Border.br_27xl,
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  statusBaractive: {
    width: "20%",
    right: "80%",
    backgroundColor: Color.linMainBlue,
    borderRadius: Border.br_27xl,
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  orderStatusBar: {
    height: "13.95%",
    top: "86.05%",
    display: "none",
    right: "0%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  helpRectangle: {
    height: "41.86%",
    width: "94.63%",
    right: "5.37%",
    bottom: "58.14%",
  },
  help: {
    fontSize: FontSize.size_xs,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: FontFamily.sFProDisplay,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    color: Color.gray_100,
    lineHeight: 18,
    textAlign: "center",
    left: "0%",
    top: "0%",
    height: "100%",
    letterSpacing: 0,
    width: "100%",
  },
  helpButton: {
    height: "55.56%",
    width: "15.77%",
    right: "-0.85%",
    bottom: "24.68%",
  },
  riderWillBe: {
    fontFamily: FontFamily.ptRegularNormalText,
    color: Color.gray_100,
    lineHeight: 18,
    left: "0%",
    top: "0%",
    textAlign: "left",
    fontSize: FontSize.boldNormalHeading_size,
    position: "absolute",
  },
  findingYourDelivery: {
    width: "88.8%",
    top: "-148.58%",
    left: "-0.62%",
  },
  orderStatus: {
    height: "50%",
    width: "96.81%",
    top: "15.96%",
    right: "2.59%",
    bottom: "34.04%",
    left: "0.6%",
    position: "absolute",
  },
  orderStatusprepared: {
    top: 709,
    left: 72,
    width: 282,
    height: 36,
    position: "absolute",
  },
  helpRectangle1: {
    width: "73.83%",
    right: "26.17%",
    bottom: "0%",
    height: "100%",
    borderRadius: Border.br_3xs,
  },
  helpButton1: {
    height: "23.26%",
    width: "20.22%",
    right: "-5.29%",
    bottom: "56.98%",
  },
  findingYourDelivery1: {
    width: 189,
    height: 19,
  },
  orderStatus1: {
    top: "-490.62%",
    left: "3.64%",
    width: 0,
    height: 0,
    position: "absolute",
  },
  orderStatusprepared1: {
    top: 756,
    left: 92,
    width: 220,
    height: 32,
    position: "absolute",
  },
  yourRequestWas: {
    height: "2.38%",
    width: "51.17%",
    top: "61.77%",
    left: "21.03%",
    alignItems: "flex-end",
    justifyContent: "center",
    position: "absolute",
    display: "flex",
    color: Color.gray_100,
    lineHeight: 18,
    textAlign: "center",
  },
  next: {
    color: Color.mainWhite,
    textAlign: "left",
  },
  pryButton: {
    top: 762,
    left: 75,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colourMain2,
    width: 281,
    flexDirection: "row",
    paddingHorizontal: Padding.p_126xl,
    paddingVertical: Padding.p_mid,
    alignItems: "center",
    justifyContent: "center",
  },
  confirmation: {
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.mainWhite,
  },
});

export default Confirmation;
