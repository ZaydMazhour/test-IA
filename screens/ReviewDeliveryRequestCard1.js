import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const ReviewDeliveryRequestCard1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.reviewDeliveryRequestCard, styles.iconLayout2]}>
      <View
        style={[styles.reviewDeliveryRequestCardChild, styles.reviewCardLayout]}
      />
      <View
        style={[styles.reviewDeliveryRequestCardItem, styles.reviewCardLayout]}
      />
      <View
        style={[styles.reviewDeliveryRequestCardInner, styles.reviewCardLayout]}
      />
      <View style={[styles.rectangleView, styles.reviewCardLayout]} />
      <View style={styles.battery}>
        <View style={[styles.border, styles.infoPosition2]} />
        <Image
          style={[styles.capIcon, styles.iconGroupLayout]}
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
      <Text style={[styles.pickUp, styles.pickUpFlexBox]}>Pick-up</Text>
      <Text style={[styles.dropOff, styles.pickUpFlexBox]}>Drop-off</Text>
      <Text style={[styles.bWoleAriyo, styles.bWoleAriyoClr]}>
        14B wole ariyo street, lekki phase 1
      </Text>
      <Text style={[styles.muritalaEletuWay, styles.bWoleAriyoClr]}>
        55 Muritala Eletu way, Osapa London
      </Text>
      <Text style={styles.turnOnTo}>
        Turn on to confirm delivery with a 4-digit PIN
      </Text>
      <View style={styles.password}>
        <View style={[styles.info, styles.infoPosition1]}>
          <Text style={[styles.johnChinedu, styles.locationTypo]}>
            John Chinedu
          </Text>
          <Text style={[styles.text, styles.textTypo]}>0812902934</Text>
        </View>
      </View>
      <Pressable
        style={[styles.password1, styles.passwordPosition3]}
        onPress={() => navigation.navigate("EnterReceiverDetails")}
      >
        <View style={[styles.info, styles.infoPosition1]}>
          <Text style={[styles.addRecipient, styles.pickUpFlexBox]}>
            Add recipient
          </Text>
        </View>
      </Pressable>
      <View style={[styles.password2, styles.passwordPosition3]}>
        <View style={[styles.info, styles.infoPosition1]}>
          <Text style={[styles.addRecipient, styles.pickUpFlexBox]}>
            Require PIN upon delivery
          </Text>
        </View>
      </View>
      <Text style={[styles.location, styles.locationTypo]}>Location</Text>
      <Image
        style={[styles.user1Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/user-1.png")}
      />
      <Image
        style={[styles.user2Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/user-1.png")}
      />
      <Image
        style={[styles.lineIcon, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/line-3.png")}
      />
      <Image
        style={[styles.icModeEdit24px2Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/ic-mode-edit-24px-2.png")}
      />
      <View style={styles.location31Parent}>
        <Image
          style={[styles.location31, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/location-3-1.png")}
        />
        <View style={styles.password3}>
          <View style={[styles.info, styles.infoPosition1]}>
            <Text style={[styles.bWoleAriyo1, styles.textTypo]}>
              14b wole ariyo street, Lekki phase 1
            </Text>
          </View>
        </View>
        <Image
          style={[styles.icModeEdit24px6Icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/ic-mode-edit-24px-2.png")}
        />
      </View>
      <View style={[styles.pryButton, styles.pryFlexBox1]}>
        <Text style={[styles.imSending, styles.sendingTypo]}>I’m sending</Text>
      </View>
      <View style={[styles.pryButton1, styles.pryFlexBox1]}>
        <Text style={[styles.imSending1, styles.sendingTypo]}>I’m sending</Text>
      </View>
      <View style={[styles.header, styles.headerLayout]}>
        <View style={[styles.headerChild, styles.headerChildPosition]} />
        <View style={[styles.leftArrow11Parent, styles.headerLayout]}>
          <Pressable
            style={[styles.leftArrow11, styles.leftArrow11Layout]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={[styles.icon, styles.iconLayout2]}
              contentFit="cover"
              source={require("../assets/leftarrow-1-11.png")}
            />
          </Pressable>
          <Text style={[styles.reviewOrder, styles.timeFlexBox]}>
            Review order
          </Text>
          <View style={[styles.statusbar, styles.reviewCardLayout]}>
            <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.keyboardArrowRight1, styles.keyboardLayout]}
        onPress={() => navigation.navigate("EnterReceiverDetails")}
      >
        <Image
          style={[styles.icon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/keyboardarrowright-11.png")}
        />
      </Pressable>
      <Image
        style={[styles.passwordIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/password.png")}
      />
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("EnterReceiverDetails")}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/ellipse-58.png")}
        />
      </Pressable>
      <View style={[styles.groupView, styles.groupLayout1]}>
        <View style={[styles.groupWrapper, styles.groupLayout1]}>
          <View style={[styles.groupWrapper, styles.groupLayout1]}>
            <View style={[styles.groupInner, styles.groupLayout1]} />
            <View style={styles.password4}>
              <View style={[styles.info, styles.infoPosition1]}>
                <Text style={[styles.johnChinedu, styles.locationTypo]}>
                  Pay now with card
                </Text>
              </View>
            </View>
            <Text style={[styles.paymentMethod, styles.n3000Typo]}>
              Payment Method
            </Text>
            <Text style={[styles.n3000, styles.n3000Typo]}>N3,000</Text>
            <Image
              style={[styles.creditCard1Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/creditcard-1.png")}
            />
            <Pressable
              style={[styles.keyboardArrowRight2, styles.keyboardLayout]}
              onPress={() => navigation.navigate("ChangeDeliveryPlan")}
            >
              <Image
                style={[styles.icon, styles.iconLayout2]}
                contentFit="cover"
                source={require("../assets/keyboardarrowright-2.png")}
              />
            </Pressable>
          </View>
        </View>
      </View>
      <View
        style={[styles.reviewDeliveryRequestCardChild1, styles.groupLayout1]}
      />
      <View style={[styles.groupParent, styles.groupLayout]}>
        <View style={[styles.rectangleContainer, styles.groupLayout]}>
          <View style={[styles.groupChild1, styles.groupLayout]} />
          <Image
            style={[styles.groupIcon, styles.iconGroupLayout]}
            contentFit="cover"
            source={require("../assets/line-9.png")}
          />
          <View style={[styles.passwordParent, styles.passwordPosition2]}>
            <View style={[styles.password5, styles.info6Position]}>
              <View style={[styles.info, styles.infoPosition1]}>
                <Text style={[styles.addRecipient, styles.pickUpFlexBox]}>
                  Standard package
                </Text>
              </View>
            </View>
            <View style={[styles.info6, styles.infoPosition]}>
              <Text
                style={[
                  styles.documentsenvelopeSmallElec,
                  styles.customizeYourRequestTypo,
                ]}
              >
                Documents/Envelope, small electronics, essential oils,
                cosmetics, single piece clothing
              </Text>
            </View>
            <Image
              style={[styles.ellipseIcon, styles.wrapperPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-223.png")}
            />
            <Image
              style={[styles.groupChild2, styles.iconGroupLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-226.png")}
            />
          </View>
          <Pressable
            style={[styles.passwordGroup, styles.passwordPosition2]}
            onPress={() => navigation.navigate("ReviewDeliveryRequestCard")}
          >
            <View style={[styles.password6, styles.info8Position]}>
              <View style={[styles.info, styles.infoPosition1]}>
                <Text style={[styles.addRecipient, styles.pickUpFlexBox]}>
                  Custom delivery
                </Text>
              </View>
            </View>
            <View style={[styles.info8, styles.info8Position]}>
              <Text
                style={[
                  styles.customizeYourRequest,
                  styles.customizeYourRequestTypo,
                ]}
              >
                Customize your request to matches your need by providing more
                information or adding requirements
              </Text>
            </View>
            <Pressable
              style={[styles.wrapper, styles.wrapperPosition]}
              onPress={() => navigation.navigate("ReviewDeliveryRequestCard")}
            >
              <Image
                style={[styles.icon3, styles.iconGroupLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-223.png")}
              />
            </Pressable>
          </Pressable>
        </View>
        <Text style={[styles.packageType, styles.packageTypo]}>
          Package Type
        </Text>
      </View>
      <View style={[styles.pryButton2, styles.pryFlexBox]}>
        <Text style={[styles.imSending, styles.sendingTypo]}>
          Confirm Order - N2,000
        </Text>
      </View>
      <View style={styles.passwordContainer}>
        <View style={styles.password7}>
          <View style={[styles.info, styles.infoPosition1]}>
            <Text style={[styles.johnChinedu, styles.locationTypo]}>
              Same Day delivery
            </Text>
          </View>
        </View>
        <Text
          style={[styles.deliveryPlan, styles.pickUpFlexBox]}
        >{`Delivery plan `}</Text>
        <Image
          style={[styles.scheduledDelivery1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/scheduleddelivery-1.png")}
        />
        <Pressable
          style={[styles.keyboardArrowRight21, styles.keyboardLayout]}
          onPress={() => navigation.navigate("ChangeDeliveryPlan1")}
        >
          <Image
            style={[styles.icon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/keyboardarrowright-2.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={[styles.pryButton3, styles.pryFlexBox]}
        onPress={() => navigation.navigate("Confirmation")}
      >
        <Text style={[styles.imSending, styles.sendingTypo]}>
          Confirm Order - N2,000
        </Text>
      </Pressable>
      <View style={[styles.rectangleParent1, styles.groupChild3Layout]}>
        <View style={[styles.groupChild3, styles.groupChild3Layout]} />
        <Text style={[styles.packageInformation, styles.packageTypo]}>
          Package Information
        </Text>
        <Text style={[styles.guideline, styles.guidelinePosition]}>
          Guideline
        </Text>
        <Text style={[styles.youCanSend, styles.text1Typo]}>
          You can send small or medium packages that:
        </Text>
        <Pressable
          style={[
            styles.dontContainAnyContainer,
            styles.areClosedSecurelyPosition,
          ]}
          onPress={() => navigation.navigate("ProhibitedItems")}
        >
          <Text style={[styles.text1, styles.text1Typo]}>
            <Text style={styles.dontContainAny}>{`Don't contain any `}</Text>
            <Text style={styles.pickUpTypo}>prohibited items.</Text>
            <Text style={styles.dontContainAny}>{` `}</Text>
          </Text>
        </Pressable>
        <Text
          style={[styles.areClosedSecurely, styles.areClosedSecurelyPosition]}
        >{`Are closed, securely sealed, and ready to be delivered.
`}</Text>
        <Image
          style={[styles.groupChild4, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-1296.png")}
        />
      </View>
      <Image
        style={[styles.reviewDeliveryRequestCardChild2, styles.childLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1296.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout2: {
    overflow: "hidden",
    width: "100%",
  },
  reviewCardLayout: {
    width: 428,
    position: "absolute",
  },
  infoPosition2: {
    left: "0%",
    top: "0%",
  },
  iconGroupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  pickUpFlexBox: {
    textAlign: "left",
    color: Color.black,
  },
  bWoleAriyoClr: {
    color: Color.mainAshColour,
    lineHeight: 18,
  },
  infoPosition1: {
    right: "0%",
    position: "absolute",
  },
  locationTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  textTypo: {
    color: Color.darkgray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
    left: "0%",
    position: "absolute",
  },
  passwordPosition3: {
    height: "1.41%",
    left: "14.72%",
    position: "absolute",
  },
  iconLayout1: {
    height: 18,
    width: 18,
    position: "absolute",
    overflow: "hidden",
  },
  pryFlexBox1: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_mid,
    paddingHorizontal: Padding.p_126xl,
    flexDirection: "row",
    height: 40,
    width: 125,
    borderRadius: Border.br_11xl,
    top: 108,
    position: "absolute",
  },
  sendingTypo: {
    fontFamily: FontFamily.boldNormalHeading,
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
    fontWeight: "700",
  },
  headerLayout: {
    height: 81,
    width: 428,
    left: 0,
    position: "absolute",
  },
  headerChildPosition: {
    left: 31,
    position: "absolute",
  },
  leftArrow11Layout: {
    height: 24,
    top: 57,
  },
  timeFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  keyboardLayout: {
    width: 24,
    height: 24,
    position: "absolute",
  },
  groupChildLayout: {
    width: 39,
    height: 18,
    position: "absolute",
  },
  groupLayout1: {
    height: 136,
    width: 428,
    position: "absolute",
  },
  n3000Typo: {
    top: 17,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  iconLayout: {
    height: 32,
    width: 32,
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout: {
    height: 237,
    width: 428,
    left: 0,
    position: "absolute",
  },
  passwordPosition2: {
    height: "26.58%",
    left: "7.48%",
    position: "absolute",
  },
  info6Position: {
    left: "10.98%",
    position: "absolute",
  },
  infoPosition: {
    top: "42.86%",
    height: "57.14%",
    right: "0%",
    bottom: "0%",
  },
  customizeYourRequestTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  wrapperPosition: {
    top: "3.17%",
    height: "30.16%",
    bottom: "66.67%",
    left: "0%",
    position: "absolute",
  },
  info8Position: {
    left: "10.54%",
    position: "absolute",
  },
  packageTypo: {
    left: 33,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  pryFlexBox: {
    width: 342,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_mid,
    paddingHorizontal: Padding.p_126xl,
    flexDirection: "row",
    backgroundColor: Color.colourMain2,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  groupChild3Layout: {
    height: 161,
    width: 428,
    left: 0,
    position: "absolute",
  },
  guidelinePosition: {
    left: 34,
    position: "absolute",
  },
  text1Typo: {
    color: Color.darkslategray_500,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
  },
  areClosedSecurelyPosition: {
    left: 47,
    position: "absolute",
  },
  childLayout: {
    height: 3,
    width: 3,
    left: 37,
    position: "absolute",
  },
  reviewDeliveryRequestCardChild: {
    top: 30,
    height: 408,
    backgroundColor: Color.mainWhite,
    left: 0,
  },
  reviewDeliveryRequestCardItem: {
    top: 1375,
    height: 110,
    backgroundColor: Color.mainWhite,
    left: 0,
  },
  reviewDeliveryRequestCardInner: {
    top: 674,
    height: 138,
    backgroundColor: Color.mainWhite,
    left: 0,
  },
  rectangleView: {
    top: 443,
    height: 225,
    backgroundColor: Color.mainWhite,
    left: 0,
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
    height: "100%",
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
    height: "0.76%",
    width: "5.68%",
    top: "0.74%",
    right: "5.69%",
    bottom: "98.5%",
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
  pickUp: {
    top: 178,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    left: 32,
    position: "absolute",
  },
  dropOff: {
    top: 463,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    left: 32,
    position: "absolute",
  },
  bWoleAriyo: {
    top: "14.41%",
    fontFamily: FontFamily.ptRegularNormalText,
    left: "7.48%",
    width: "62.85%",
    height: "1.35%",
    color: Color.mainAshColour,
    lineHeight: 18,
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
    position: "absolute",
  },
  muritalaEletuWay: {
    top: "33.6%",
    fontFamily: FontFamily.ptRegularNormalText,
    left: "7.48%",
    width: "62.85%",
    height: "1.35%",
    color: Color.mainAshColour,
    lineHeight: 18,
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
    position: "absolute",
  },
  turnOnTo: {
    height: "2.49%",
    width: "53.97%",
    top: "40.54%",
    left: "14.72%",
    color: Color.mainAshColour,
    fontFamily: FontFamily.ptRegularNormalText,
    lineHeight: 18,
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
    position: "absolute",
  },
  johnChinedu: {
    left: "0%",
    top: "0%",
  },
  text: {
    top: "58%",
  },
  info: {
    left: "0%",
    top: "0%",
    bottom: "0%",
    height: "100%",
    width: "100%",
  },
  password: {
    height: "3.37%",
    width: "23.13%",
    top: "16.97%",
    right: "63.08%",
    bottom: "79.66%",
    left: "13.79%",
    position: "absolute",
  },
  addRecipient: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.boldNormalHeading_size,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  password1: {
    width: "21.96%",
    top: "36.43%",
    right: "63.32%",
    bottom: "62.15%",
  },
  password2: {
    width: "41.36%",
    top: "39.26%",
    right: "43.93%",
    bottom: "59.33%",
  },
  location: {
    top: "22.9%",
    left: "13.79%",
  },
  user1Icon: {
    top: 255,
    left: 32,
  },
  user2Icon: {
    top: 540,
    left: 32,
  },
  lineIcon: {
    height: "0.07%",
    width: "80.61%",
    top: "21.45%",
    right: "12.03%",
    bottom: "78.48%",
    left: "7.36%",
    position: "absolute",
  },
  icModeEdit24px2Icon: {
    top: 279,
    left: 333,
  },
  location31: {
    top: 0,
    left: 0,
  },
  bWoleAriyo1: {
    top: "0%",
    color: Color.darkgray_300,
  },
  password3: {
    height: "45.65%",
    width: "75.55%",
    top: "54.35%",
    right: "16.93%",
    left: "7.52%",
    bottom: "0%",
    position: "absolute",
  },
  icModeEdit24px6Icon: {
    top: 21,
    left: 301,
  },
  location31Parent: {
    top: 340,
    width: 319,
    height: 46,
    left: 32,
    position: "absolute",
  },
  imSending: {
    color: Color.mainWhite,
  },
  pryButton: {
    left: 86,
    backgroundColor: Color.colourMain2,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_mid,
    paddingHorizontal: Padding.p_126xl,
    flexDirection: "row",
    height: 40,
    width: 125,
    borderRadius: Border.br_11xl,
    top: 108,
  },
  imSending1: {
    color: Color.black,
    fontFamily: FontFamily.boldNormalHeading,
  },
  pryButton1: {
    left: 221,
    backgroundColor: Color.gainsboro_100,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_mid,
    paddingHorizontal: Padding.p_126xl,
    flexDirection: "row",
    height: 40,
    width: 125,
    borderRadius: Border.br_11xl,
    top: 108,
  },
  headerChild: {
    width: 27,
    top: 57,
    left: 31,
  },
  icon: {
    height: "100%",
  },
  leftArrow11: {
    width: 25,
    left: 31,
    position: "absolute",
  },
  reviewOrder: {
    marginLeft: -157,
    fontSize: FontSize.h3Header320ptMediumRoboto_size,
    fontFamily: FontFamily.rubikRegular,
    color: Color.dark,
    width: 328,
    left: "50%",
    height: 24,
    top: 57,
  },
  time: {
    marginTop: -9,
    width: "13.15%",
    top: "50%",
    left: "5.11%",
    fontSize: FontSize.sFSubheadlineSemibold_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.sFSubheadlineSemibold,
    color: Color.darkslategray_400,
  },
  statusbar: {
    marginLeft: -214,
    height: 44,
    left: "50%",
    top: 0,
  },
  leftArrow11Parent: {
    top: 0,
  },
  header: {
    top: -3,
  },
  keyboardArrowRight1: {
    left: 349,
    top: 540,
  },
  passwordIcon: {
    top: 579,
    left: 32,
  },
  groupChild: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.silver_100,
    top: 0,
    left: 0,
  },
  groupItem: {
    top: 3,
    left: 3,
    width: 13,
    height: 12,
    position: "absolute",
  },
  rectangleParent: {
    top: 602,
    left: 326,
  },
  groupInner: {
    top: 0,
    backgroundColor: Color.mainWhite,
    left: 0,
  },
  password4: {
    height: "15.44%",
    width: "30.14%",
    top: "65.44%",
    right: "47.66%",
    bottom: "19.12%",
    left: "22.2%",
    position: "absolute",
  },
  paymentMethod: {
    left: 32,
  },
  n3000: {
    left: 286,
  },
  creditCard1Icon: {
    top: 85,
    left: 36,
  },
  keyboardArrowRight2: {
    top: 86,
    left: 333,
  },
  groupWrapper: {
    top: 0,
    left: 0,
  },
  groupView: {
    top: 1230,
    left: 2,
  },
  reviewDeliveryRequestCardChild1: {
    top: 3309,
    left: -1,
    backgroundColor: Color.mainWhite,
  },
  groupChild1: {
    top: 0,
    backgroundColor: Color.mainWhite,
  },
  groupIcon: {
    height: "0.42%",
    width: "68.69%",
    top: "56.75%",
    right: "15.3%",
    bottom: "42.83%",
    left: "16%",
    position: "absolute",
  },
  password5: {
    width: "39.17%",
    right: "49.85%",
    bottom: "66.67%",
    height: "33.33%",
    top: "0%",
  },
  documentsenvelopeSmallElec: {
    color: Color.darkgray_100,
  },
  info6: {
    width: "89.02%",
    left: "10.98%",
    position: "absolute",
  },
  ellipseIcon: {
    width: "5.64%",
    right: "94.36%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupChild2: {
    height: "19.05%",
    width: "3.56%",
    top: "9.52%",
    right: "95.55%",
    bottom: "71.43%",
    left: "0.89%",
    position: "absolute",
  },
  passwordParent: {
    width: "78.74%",
    top: "24.89%",
    right: "13.79%",
    bottom: "48.52%",
  },
  password6: {
    width: "32.48%",
    right: "56.98%",
    bottom: "66.67%",
    height: "33.33%",
    top: "0%",
  },
  customizeYourRequest: {
    color: Color.mainAshColour,
    lineHeight: 18,
    fontSize: FontSize.size_xs,
  },
  info8: {
    width: "89.46%",
    top: "42.86%",
    height: "57.14%",
    right: "0%",
    bottom: "0%",
  },
  icon3: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    right: "94.59%",
    width: "5.41%",
  },
  passwordGroup: {
    width: "82.01%",
    top: "62.03%",
    right: "10.51%",
    bottom: "11.39%",
  },
  rectangleContainer: {
    top: 0,
  },
  packageType: {
    top: 22,
    fontSize: FontSize.boldNormalHeading_size,
  },
  groupParent: {
    top: 986,
  },
  pryButton2: {
    top: 3334,
    left: 40,
  },
  password7: {
    height: "25.3%",
    width: "40.24%",
    top: "67.47%",
    right: "38.11%",
    bottom: "7.23%",
    left: "21.65%",
    position: "absolute",
  },
  deliveryPlan: {
    top: 0,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    left: 0,
    position: "absolute",
  },
  scheduledDelivery1Icon: {
    top: 51,
    left: 13,
  },
  keyboardArrowRight21: {
    left: 304,
    top: 53,
  },
  passwordContainer: {
    height: "5.59%",
    width: "76.64%",
    top: "47.47%",
    right: "15.65%",
    bottom: "46.94%",
    left: "7.71%",
    position: "absolute",
  },
  pryButton3: {
    top: 1393,
    left: 39,
  },
  groupChild3: {
    top: 0,
    backgroundColor: Color.mainWhite,
  },
  packageInformation: {
    top: 18,
    fontSize: FontSize.size_lg,
  },
  guideline: {
    top: 58,
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  youCanSend: {
    top: 87,
    width: 339,
    height: 15,
    lineHeight: 14,
    color: Color.darkslategray_500,
    fontSize: FontSize.size_3xs,
    left: 34,
    position: "absolute",
    fontFamily: FontFamily.poppinsRegular,
  },
  dontContainAny: {
    fontFamily: FontFamily.poppinsRegular,
  },
  pickUpTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  text1: {
    width: 273,
    height: 16,
    lineHeight: 14,
    color: Color.darkslategray_500,
    fontSize: FontSize.size_3xs,
  },
  dontContainAnyContainer: {
    top: 126,
  },
  areClosedSecurely: {
    top: 107,
    width: 286,
    height: 19,
    color: Color.darkslategray_500,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    left: 47,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 18,
  },
  groupChild4: {
    top: 115,
  },
  rectangleParent1: {
    top: 818,
  },
  reviewDeliveryRequestCardChild2: {
    top: 950,
  },
  reviewDeliveryRequestCard: {
    backgroundColor: Color.whitesmoke_100,
    flex: 1,
    height: 1485,
  },
});

export default ReviewDeliveryRequestCard1;
