import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const DeliveryDetailsWithReview = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.deliveryDetailsWithReview, styles.rectangleBg]}>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.background, styles.headerPosition]} />
        <Text style={styles.deliveryDetails}>Delivery Details</Text>
        <Image
          style={styles.icMoreIcon}
          contentFit="cover"
          source={require("../assets/icmore.png")}
        />
        <View style={[styles.leftArrow11, styles.leftPosition]} />
        <View style={styles.statusbar}>
          <Text style={styles.time}>9:41</Text>
        </View>
        <Pressable
          style={styles.leftPosition}
          onPress={() => navigation.navigate("DeliveryHistoryHome")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/leftarrow-1-1.png")}
          />
        </Pressable>
      </View>
      <View style={styles.battery}>
        <View style={[styles.border, styles.borderBorder]} />
        <Image
          style={[styles.capIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/cap.png")}
        />
        <View style={styles.capacity} />
      </View>
      <Image
        style={styles.wifiIcon}
        contentFit="cover"
        source={require("../assets/wifi1.png")}
      />
      <Image
        style={styles.cellularConnectionIcon}
        contentFit="cover"
        source={require("../assets/cellular-connection1.png")}
      />
      <View style={styles.layer2}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={[styles.h, styles.hClr]}>3h</Text>
      </View>
      <View style={[styles.backdropParent, styles.backdropPosition]}>
        <Image
          style={[styles.backdropIcon, styles.backdropPosition]}
          contentFit="cover"
          source={require("../assets/backdrop3.png")}
        />
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/frame-10819.png")}
        />
        <View style={styles.groupParent}>
          <View style={styles.groupWrapper}>
            <View style={styles.enterPickupAndDropoffParent}>
              <Text style={[styles.enterPickupAnd, styles.textTypo]}>
                Enter Pickup and Dropoff
              </Text>
              <View style={[styles.rectangle, styles.rectangleShadowBox]} />
              <Image
                style={[styles.iconsdropdowntransfer, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/iconsdropdowntransfer1.png")}
              />
              <Text style={[styles.headingToThe, styles.headingToTheClr]}>
                Your delivery rider
              </Text>
              <Pressable
                style={styles.reportAnIssueContainer}
                onPress={() => navigation.navigate("ReportIssue")}
              >
                <Text style={[styles.reportAnIssue, styles.headingToTheClr]}>
                  Report an issue
                </Text>
              </Pressable>
              <Text style={styles.crazyRider}>“Crazy rider”</Text>
            </View>
          </View>
          <View style={styles.avatardefaultParent}>
            <Image
              style={[styles.avatardefaultIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/avatardefault1.png")}
            />
            <Text style={[styles.simeonTee, styles.simeonTeeLayout]}>
              Simeon Tee
            </Text>
            <Text style={[styles.xkybyd223, styles.simeonTeeLayout]}>
              XKYBYD223
            </Text>
          </View>
          <View style={[styles.documents, styles.documentsLayout]}>
            <View style={[styles.rectangle1, styles.documentsLayout]} />
            <View style={[styles.documentsInner, styles.deliveryBox13Layout]}>
              <View style={[styles.fileParent, styles.parentFlexBox]}>
                <Image
                  style={styles.fileIcon}
                  contentFit="cover"
                  source={require("../assets/file.png")}
                />
                <Text style={[styles.documents1, styles.documents1Typo]}>
                  Receipt
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.headingToTheCityParent}>
            <Text style={[styles.headingToThe1, styles.avenueTypo]}>
              Rider rating:
            </Text>
            <Pressable
              style={[styles.iconStarParent, styles.parentFlexBox]}
              onPress={() => navigation.navigate("RateRider")}
            >
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/icon--star2.png")}
              />
              <Image
                style={[styles.iconStar1, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/icon--star3.png")}
              />
              <Image
                style={[styles.iconStar1, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/icon--star3.png")}
              />
              <Image
                style={[styles.iconStar1, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/icon--star3.png")}
              />
              <Image
                style={[styles.iconStar1, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/icon--star3.png")}
              />
            </Pressable>
          </View>
          <Text style={[styles.june24, styles.juneTypo]}>
            <Text style={styles.cash}>{`Cash : `}</Text>
            <Text style={styles.paid}>Paid</Text>
          </Text>
          <View style={styles.groupContainer}>
            <View
              style={[styles.headingToTheCityGroup, styles.headingPosition]}
            >
              <Text style={[styles.headingToThe2, styles.headingPosition]}>
                Status: Delivered
              </Text>
              <Text style={[styles.june23, styles.juneTypo]}>03:29PM</Text>
            </View>
          </View>
        </View>
        <View style={[styles.packageNumberParent, styles.parentFlexBox]}>
          <View style={styles.packageNumber}>
            <Text style={[styles.text, styles.avenueClr]}>Sent package</Text>
            <Image
              style={[styles.deliveryBox13, styles.deliveryBox13Layout]}
              contentFit="cover"
              source={require("../assets/deliverybox-1-3.png")}
            />
          </View>
          <View style={styles.groupFrame}>
            <View style={[styles.june21Parent, styles.june21Position]}>
              <Text style={[styles.june21, styles.june21Position]}>
                18 June, 20
              </Text>
              <Text style={[styles.june22, styles.juneTypo]}>02:29PM</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.infoLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <View style={[styles.info, styles.infoLayout]}>
          <Image
            style={[styles.lineIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/line5.png")}
          />
          <View style={[styles.text1, styles.textPosition]}>
            <Text style={[styles.from, styles.julTypo]}>From</Text>
            <Text style={[styles.leeAvenue, styles.avenueClr]}>
              21, Lekki Avenue
            </Text>
            <Text style={[styles.on12Jul, styles.julTypo]}>
              On 12 Jul, 12:30pm
            </Text>
          </View>
          <Text style={[styles.bushwickAvenue, styles.textPosition]}>
            20, Checkpoint Road
          </Text>
          <View style={[styles.text2, styles.textPosition]}>
            <Text style={[styles.from, styles.julTypo]}>Right now</Text>
            <Text style={[styles.leeAvenue, styles.avenueClr]}>
              430, Osborne Bridge
            </Text>
          </View>
          <Text style={[styles.claireHeightsA, styles.textPosition]}>
            11, Lekki Phase One Avenue
          </Text>
          <View style={[styles.text3, styles.textPosition]}>
            <Text style={[styles.from, styles.julTypo]}>To</Text>
            <Text style={[styles.leeAvenue, styles.avenueClr]}>
              14B, Wole Ariyo, Lekki Phase 1
            </Text>
            <Text style={[styles.by13Jul, styles.julTypo]}>
              By 12 Jul, 4:30pm
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleBg: {
    backgroundColor: Color.mainWhite,
    width: "100%",
  },
  headerPosition: {
    width: 428,
    left: "50%",
    marginLeft: -214,
    position: "absolute",
  },
  leftPosition: {
    left: 27,
    height: 24,
    width: 24,
    top: 63,
    position: "absolute",
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  hClr: {
    color: Color.mainWhite,
    textAlign: "left",
    position: "absolute",
  },
  backdropPosition: {
    right: 0,
    position: "absolute",
  },
  groupLayout: {
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.boldNormalHeading,
    fontWeight: "700",
  },
  rectangleShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -15,
    },
  },
  headingToTheClr: {
    color: Color.black,
    fontSize: FontSize.boldNormalHeading_size,
  },
  simeonTeeLayout: {
    alignItems: "flex-end",
    display: "flex",
    left: "25.71%",
    width: "74.29%",
    height: "48.72%",
    lineHeight: 18,
    fontFamily: FontFamily.ptRegularNormalText,
    textAlign: "left",
    position: "absolute",
  },
  documentsLayout: {
    height: 35,
    width: 111,
    position: "absolute",
  },
  deliveryBox13Layout: {
    height: 16,
    position: "absolute",
    overflow: "hidden",
  },
  parentFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  documents1Typo: {
    letterSpacing: 1,
    fontFamily: FontFamily.sFSubheadlineSemibold,
  },
  avenueTypo: {
    fontWeight: "500",
    letterSpacing: 1,
    fontFamily: FontFamily.sFSubheadlineSemibold,
  },
  iconLayout: {
    width: 33,
    height: 33,
    overflow: "hidden",
  },
  juneTypo: {
    fontSize: FontSize.size_smi,
    lineHeight: 18,
    fontFamily: FontFamily.ptRegularNormalText,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  headingPosition: {
    marginTop: -18,
    left: "0%",
    top: "50%",
    position: "absolute",
  },
  avenueClr: {
    color: Color.darkslategray_700,
    top: "50%",
    textAlign: "left",
  },
  june21Position: {
    marginTop: -19,
    left: "0%",
    top: "50%",
    position: "absolute",
  },
  infoLayout: {
    height: 227,
    width: 212,
    position: "absolute",
  },
  textPosition: {
    left: "9.91%",
    position: "absolute",
  },
  julTypo: {
    marginTop: -16.5,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    letterSpacing: 1,
    fontFamily: FontFamily.sFSubheadlineSemibold,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  background: {
    top: 6,
    backgroundColor: Color.backgroundBackground4,
    height: 47,
  },
  deliveryDetails: {
    marginLeft: -148,
    top: 60,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.rubikBold,
    color: Color.dark,
    textAlign: "left",
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  icMoreIcon: {
    marginLeft: 165,
    height: 24,
    width: 24,
    top: 63,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  leftArrow11: {
    overflow: "hidden",
  },
  time: {
    marginTop: -9,
    width: "14.4%",
    left: "5.6%",
    fontSize: FontSize.sFSubheadlineSemibold_size,
    letterSpacing: 0,
    lineHeight: 20,
    color: Color.darkslategray_400,
    textAlign: "center",
    fontFamily: FontFamily.sFSubheadlineSemibold,
    fontWeight: "600",
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
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  header: {
    top: -6,
    height: 87,
  },
  border: {
    width: "90.43%",
    right: "9.57%",
    borderRadius: 3,
    borderColor: "#384144",
    opacity: 0.35,
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  capIcon: {
    height: "35.29%",
    width: "5.46%",
    top: "32.36%",
    bottom: "32.34%",
    left: "94.54%",
    opacity: 0.4,
    right: "0%",
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
    height: "1.11%",
    width: "5.68%",
    top: "1.08%",
    right: "5.69%",
    bottom: "97.8%",
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
  vectorIcon: {
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  h: {
    top: 3,
    left: 3,
    fontSize: FontSize.size_5xs,
    lineHeight: 10,
    fontFamily: FontFamily.rubikRegular,
  },
  layer2: {
    height: "1.57%",
    width: "3.74%",
    top: "53.98%",
    right: "88.08%",
    bottom: "44.44%",
    left: "8.18%",
    position: "absolute",
  },
  backdropIcon: {
    bottom: 116,
    left: 0,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    top: 0,
  },
  groupChild: {
    top: 95,
    width: 334,
    height: 166,
    left: 40,
  },
  enterPickupAnd: {
    height: "3.95%",
    width: "49.01%",
    top: "30.01%",
    left: "3.38%",
    fontSize: FontSize.boldNormalHeading_size,
    color: Color.mainWhite,
    textAlign: "left",
    position: "absolute",
  },
  rectangle: {
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowRadius: 25,
    elevation: 25,
    borderRadius: Border.br_base,
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.mainWhite,
  },
  iconsdropdowntransfer: {
    height: "5.7%",
    width: "7.32%",
    top: "57.63%",
    right: "3.94%",
    bottom: "36.66%",
    left: "88.73%",
    position: "absolute",
  },
  headingToThe: {
    marginTop: -111.84,
    width: "40%",
    left: "9.58%",
    height: 10,
    letterSpacing: 1,
    fontFamily: FontFamily.sFSubheadlineSemibold,
    textAlign: "center",
    fontWeight: "600",
    color: Color.black,
    top: "50%",
    position: "absolute",
  },
  reportAnIssue: {
    width: 105,
    height: 20,
    fontFamily: FontFamily.boldNormalHeading,
    fontWeight: "700",
    textAlign: "left",
  },
  reportAnIssueContainer: {
    left: 114,
    top: 227,
    position: "absolute",
  },
  crazyRider: {
    top: 189,
    left: 122,
    fontFamily: FontFamily.ptRegularNormalText,
    color: Color.black,
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
    position: "absolute",
  },
  enterPickupAndDropoffParent: {
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  groupWrapper: {
    height: "76.97%",
    width: "105.97%",
    top: "16.62%",
    right: "-2.39%",
    bottom: "6.41%",
    left: "-3.58%",
    position: "absolute",
  },
  avatardefaultIcon: {
    height: "105.13%",
    width: "23.43%",
    top: "-5.13%",
    right: "77.71%",
    left: "-1.14%",
    borderRadius: Border.br_81xl,
    bottom: "0%",
    position: "absolute",
  },
  simeonTee: {
    top: "5.13%",
    color: Color.blackDMS,
    fontSize: FontSize.boldNormalHeading_size,
  },
  xkybyd223: {
    top: "51.28%",
    color: Color.mainAshColour,
    fontSize: FontSize.size_xs,
  },
  avatardefaultParent: {
    height: "11.37%",
    width: "52.24%",
    top: "32.65%",
    right: "40.6%",
    bottom: "55.98%",
    left: "7.16%",
    position: "absolute",
  },
  rectangle1: {
    borderColor: "#053582",
    borderRadius: Border.br_base,
    left: 0,
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
  },
  fileIcon: {
    width: 12,
    height: 15,
  },
  documents1: {
    color: Color.colourMain2,
    marginLeft: 9,
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
  },
  fileParent: {
    left: 6,
    alignItems: "center",
    top: 0,
  },
  documentsInner: {
    top: 9,
    left: 13,
    width: 90,
  },
  documents: {
    top: 111,
    left: 206,
  },
  headingToThe1: {
    marginTop: -8.5,
    color: Color.slategray_100,
    fontSize: FontSize.boldNormalHeading_size,
    left: "0%",
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  iconStar1: {
    marginLeft: 4,
  },
  iconStarParent: {
    left: 103,
    top: 0,
  },
  headingToTheCityParent: {
    marginTop: 31,
    width: "84.78%",
    right: "7.76%",
    left: "7.46%",
    height: 33,
    top: "50%",
    position: "absolute",
  },
  cash: {
    color: Color.royalblue_200,
  },
  paid: {
    color: Color.royalblue_100,
  },
  june24: {
    marginTop: -85.5,
    left: "74.63%",
  },
  headingToThe2: {
    color: Color.slategray_100,
    fontWeight: "500",
    letterSpacing: 1,
    fontFamily: FontFamily.sFSubheadlineSemibold,
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "center",
  },
  june23: {
    marginTop: 0,
    left: "0.77%",
    color: Color.royalblue_200,
  },
  headingToTheCityGroup: {
    height: 36,
    right: "0%",
    width: "100%",
  },
  groupContainer: {
    marginTop: -159.5,
    width: "38.81%",
    right: "59.1%",
    left: "2.09%",
    height: 36,
    top: "50%",
    position: "absolute",
  },
  groupParent: {
    top: 584,
    width: 335,
    height: 343,
    left: 40,
    position: "absolute",
  },
  text: {
    marginTop: -10.5,
    left: "13.61%",
    fontSize: FontSize.ptBoldHeader5CardTitles_size,
    fontFamily: FontFamily.boldNormalHeading,
    fontWeight: "700",
    position: "absolute",
  },
  deliveryBox13: {
    top: 2,
    width: 16,
    left: 0,
  },
  packageNumber: {
    width: 169,
    height: 19,
    overflow: "hidden",
  },
  june21: {
    color: Color.slategray_100,
    lineHeight: 18,
    marginTop: -19,
    fontFamily: FontFamily.ptRegularNormalText,
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
  },
  june22: {
    marginTop: 1,
    left: "23.61%",
    color: Color.royalblue_200,
  },
  june21Parent: {
    height: 38,
    right: "0%",
    width: "100%",
  },
  groupFrame: {
    width: 72,
    marginLeft: 67,
    height: 38,
  },
  packageNumberParent: {
    top: 31,
    left: 43,
  },
  backdropParent: {
    top: 75,
    bottom: 15,
    left: 14,
  },
  groupItem: {
    top: -36,
    left: -42,
    backgroundColor: Color.gray_500,
    width: 237,
    height: 293,
    display: "none",
  },
  lineIcon: {
    height: "90.75%",
    width: "5.66%",
    right: "94.34%",
    bottom: "9.25%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  from: {
    color: Color.slategray_100,
    left: "0%",
  },
  leeAvenue: {
    marginTop: 2.5,
    fontWeight: "500",
    letterSpacing: 1,
    fontFamily: FontFamily.sFSubheadlineSemibold,
    fontSize: FontSize.size_xs,
    left: "0%",
    position: "absolute",
  },
  on12Jul: {
    left: "21.47%",
    color: Color.mediumseagreen_100,
  },
  text1: {
    width: "83.49%",
    right: "6.6%",
    bottom: "85.46%",
    height: "14.54%",
    left: "9.91%",
    overflow: "hidden",
    top: "0%",
  },
  bushwickAvenue: {
    marginTop: -55.5,
    color: Color.darkslategray_700,
    top: "50%",
    textAlign: "left",
    fontWeight: "500",
    letterSpacing: 1,
    fontFamily: FontFamily.sFSubheadlineSemibold,
    fontSize: FontSize.size_xs,
  },
  text2: {
    width: "73.11%",
    top: "42.73%",
    right: "16.98%",
    bottom: "42.73%",
    height: "14.54%",
    left: "9.91%",
    overflow: "hidden",
  },
  claireHeightsA: {
    marginTop: 41.5,
    color: Color.slategray_100,
    fontWeight: "500",
    letterSpacing: 1,
    fontFamily: FontFamily.sFSubheadlineSemibold,
    fontSize: FontSize.size_xs,
    top: "50%",
    textAlign: "left",
  },
  by13Jul: {
    left: "10.47%",
    color: Color.mainGreen,
  },
  text3: {
    width: "90.09%",
    top: "85.46%",
    height: "14.54%",
    left: "9.91%",
    overflow: "hidden",
    right: "0%",
    bottom: "0%",
  },
  info: {
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  rectangleParent: {
    top: 383,
    left: 55,
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -15,
    },
  },
  deliveryDetailsWithReview: {
    flex: 1,
    height: 1017,
    overflow: "hidden",
    width: "100%",
  },
});

export default DeliveryDetailsWithReview;
