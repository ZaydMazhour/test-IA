import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const ChangeDeliveryPlan1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.changeDeliveryPlan}>
      <View style={styles.changeDeliveryPlanChild} />
      <View style={styles.changeDeliveryPlanItem} />
      <View style={styles.changeDeliveryPlanInner} />
      <View style={styles.rectangleView} />
      <View style={styles.battery}>
        <View style={styles.border} />
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
      <Text style={[styles.pickUp, styles.pickUpTypo]}>Pick-up</Text>
      <Text style={[styles.dropOff, styles.pickUpTypo]}>Drop-off</Text>
      <Text style={[styles.bWoleAriyo, styles.bWoleAriyoTypo]}>
        14B wole ariyo street, lekki phase 1
      </Text>
      <Text style={[styles.muritalaEletuWay, styles.bWoleAriyoTypo]}>
        55 Muritala Eletu way, Osapa London
      </Text>
      <Text style={styles.turnOnTo}>
        Turn on to confirm delivery with a 4-digit PIN
      </Text>
      <View style={styles.password}>
        <View style={styles.info}>
          <Text style={[styles.johnChinedu, styles.locationTypo]}>
            John Chinedu
          </Text>
          <Text style={[styles.text, styles.textTypo]}>0812902934</Text>
        </View>
      </View>
      <View style={[styles.password1, styles.passwordPosition]}>
        <View style={styles.info}>
          <Text style={styles.addRecipient}>Add recipient</Text>
        </View>
      </View>
      <View style={[styles.password2, styles.passwordPosition]}>
        <View style={styles.info}>
          <Text style={styles.addRecipient}>Require PIN upon delivery</Text>
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
          <View style={styles.info}>
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
      <View style={[styles.pryButton, styles.pryFlexBox]}>
        <Text style={[styles.imSending, styles.sendingTypo]}>I’m sending</Text>
      </View>
      <View style={[styles.pryButton1, styles.pryFlexBox]}>
        <Text style={[styles.imSending1, styles.sendingTypo]}>I’m sending</Text>
      </View>
      <View style={[styles.header, styles.headerLayout]}>
        <View style={[styles.headerChild, styles.headerChildPosition]} />
        <View style={[styles.leftArrow11Parent, styles.headerLayout]}>
          <Image
            style={[styles.leftArrow11, styles.leftArrow11Layout]}
            contentFit="cover"
            source={require("../assets/leftarrow-1-11.png")}
          />
          <Text style={[styles.reviewOrder, styles.statusbarPosition]}>
            Review order
          </Text>
          <View style={[styles.statusbar, styles.statusbarPosition]}>
            <Text style={[styles.time, styles.timePosition]}>9:41</Text>
          </View>
        </View>
      </View>
      <Image
        style={[styles.keyboardArrowRight1Icon, styles.keyboardIconLayout]}
        contentFit="cover"
        source={require("../assets/keyboardarrowright-11.png")}
      />
      <Image
        style={[styles.passwordIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/password.png")}
      />
      <View style={[styles.rectangleParent, styles.rectangleParentLayout]}>
        <View style={[styles.groupChild, styles.rectangleParentLayout]} />
        <Image
          style={[styles.groupItem, styles.hPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-58.png")}
        />
      </View>
      <View style={[styles.groupView, styles.groupLayout2]}>
        <View style={[styles.groupWrapper, styles.groupLayout2]}>
          <View style={[styles.groupWrapper, styles.groupLayout2]}>
            <View style={[styles.groupInner, styles.groupLayout2]} />
            <View style={styles.password4}>
              <View style={styles.info}>
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
            <Image
              style={[
                styles.keyboardArrowRight2Icon,
                styles.keyboardIconLayout,
              ]}
              contentFit="cover"
              source={require("../assets/keyboardarrowright-2.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.changeDeliveryPlanChild1, styles.groupLayout2]} />
      <View style={[styles.groupParent, styles.groupLayout1]}>
        <View style={[styles.rectangleContainer, styles.groupLayout1]}>
          <View style={[styles.groupChild1, styles.groupLayout1]} />
          <Image
            style={[styles.groupIcon, styles.iconGroupLayout]}
            contentFit="cover"
            source={require("../assets/line-9.png")}
          />
          <View style={[styles.passwordParent, styles.passwordPosition1]}>
            <View style={[styles.password5, styles.info6Position]}>
              <View style={styles.info}>
                <Text style={styles.addRecipient}>Standard package</Text>
              </View>
            </View>
            <View style={[styles.info6, styles.info6Position]}>
              <Text style={styles.documentsenvelopeSmallElec}>
                Documents/Envelope, small electronics, essential oils,
                cosmetics, single piece clothing
              </Text>
            </View>
            <Image
              style={[styles.ellipseIcon, styles.iconGroupLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-223.png")}
            />
          </View>
          <View style={[styles.passwordGroup, styles.passwordPosition1]}>
            <View style={styles.password6}>
              <View style={styles.info}>
                <Text style={styles.addRecipient}>Custom delivery</Text>
              </View>
            </View>
            <Image
              style={[styles.groupChild2, styles.iconGroupLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-223.png")}
            />
          </View>
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
          <View style={styles.info}>
            <Text style={[styles.johnChinedu, styles.locationTypo]}>
              Same Day delivery
            </Text>
          </View>
        </View>
        <Text
          style={[styles.deliveryPlan, styles.pickUpTypo]}
        >{`Delivery plan `}</Text>
        <Image
          style={[styles.scheduledDelivery1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/scheduleddelivery-11.png")}
        />
        <Image
          style={[styles.keyboardArrowRight2Icon1, styles.keyboardIconLayout]}
          contentFit="cover"
          source={require("../assets/keyboardarrowright-2.png")}
        />
      </View>
      <View style={[styles.rectangleParent1, styles.groupChild3Layout]}>
        <View style={[styles.groupChild3, styles.groupChild3Layout]} />
        <Text style={[styles.packageInformation, styles.packageTypo]}>
          Package Information
        </Text>
        <Text style={[styles.guideline, styles.pickUpTypo]}>Guideline</Text>
        <Text style={styles.youCanSend}>
          You can send small or medium packages that:
        </Text>
        <Text style={styles.dontContainAnyContainer}>
          <Text style={styles.dontContainAny}>{`Don't contain any `}</Text>
          <Text style={styles.pickUpTypo}>prohibited items.</Text>
          <Text style={styles.dontContainAny}>{` `}</Text>
        </Text>
        <Text
          style={styles.areClosedSecurely}
        >{`Are closed, securely sealed, and ready to be delivered.
`}</Text>
        <Image
          style={[styles.groupChild4, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-1296.png")}
        />
      </View>
      <Image
        style={[styles.changeDeliveryPlanChild2, styles.childLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1296.png")}
      />
      <View style={styles.changeDeliveryPlanChild3} />
      <View style={[styles.vectorParent, styles.vectorParentLayout]}>
        <Image
          style={[styles.rectangleIcon, styles.vectorParentLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-19301.png")}
        />
        <Pressable style={styles.close} onPress={() => navigation.goBack()}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/close.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.groupContainer, styles.groupLayout]}
          onPress={() => navigation.goBack()}
        >
          <View style={[styles.groupParent1, styles.groupLayout]}>
            <View style={[styles.rectangleParent2, styles.groupChild5Layout]}>
              <View style={[styles.groupChild5, styles.groupChild5Layout]} />
              <View style={[styles.dasunBrickTowerParent, styles.timePosition]}>
                <Text style={[styles.dasunBrickTower, styles.dasunTypo2]}>
                  Express
                </Text>
                <Text style={[styles.dasunBrickTower1, styles.dasunTypo2]}>
                  ₦2,000
                </Text>
                <Text style={styles.dasunTravelPlaza}>
                  Delivered in minutes
                </Text>
                <Text style={styles.dasunTravelPlaza1}>{`Pickup in 10m `}</Text>
              </View>
              <Image
                style={[styles.groupChild6, styles.groupChildLayout1]}
                contentFit="cover"
                source={require("../assets/group-10892.png")}
              />
              <Image
                style={styles.clock11}
                contentFit="cover"
                source={require("../assets/clock-1-1.png")}
              />
            </View>
            <View style={styles.dasunTravelPlazaParent}>
              <Text
                style={[styles.dasunTravelPlaza2, styles.dasunTypo1]}
              >{`Pickup in 20m `}</Text>
              <View
                style={[styles.dasunBrickTowerGroup, styles.dasunPosition1]}
              >
                <Text style={[styles.dasunBrickTower2, styles.dasunTypo2]}>
                  3-hour
                </Text>
                <Text style={[styles.dasunBrickTower3, styles.dasunTypo]}>
                  ₦1,000
                </Text>
                <Text style={[styles.dasunTravelPlaza3, styles.dasunPosition]}>
                  Delivered within 3 hours
                </Text>
              </View>
              <Image
                style={[styles.groupChild7, styles.groupChildLayout1]}
                contentFit="cover"
                source={require("../assets/group-108921.png")}
              />
              <Image
                style={[styles.clock111, styles.clockPosition]}
                contentFit="cover"
                source={require("../assets/clock-1-11.png")}
              />
            </View>
            <View style={[styles.groupParent2, styles.groupParent2Position]}>
              <View
                style={[styles.dasunBrickTowerContainer, styles.dasunPosition1]}
              >
                <Text style={[styles.dasunBrickTower2, styles.dasunTypo2]}>
                  Same Day
                </Text>
                <Text style={[styles.dasunBrickTower5, styles.dasunTypo]}>
                  ₦800
                </Text>
                <Text style={[styles.dasunTravelPlaza4, styles.dasunPosition]}>
                  Delivered same day
                </Text>
              </View>
              <Image
                style={[styles.clock112, styles.clockPosition]}
                contentFit="cover"
                source={require("../assets/clock-1-11.png")}
              />
              <Text
                style={[styles.dasunTravelPlaza5, styles.dasunTypo1]}
              >{`Pickup in 60m `}</Text>
            </View>
            <Pressable
              style={[styles.pryButton3, styles.pryFlexBox]}
              onPress={() => navigation.goBack()}
            >
              <Text
                style={[styles.imSending, styles.sendingTypo]}
              >{`Confirm `}</Text>
            </Pressable>
            <View
              style={[
                styles.dasunBrickTowerWrapper,
                styles.groupParent2Position,
              ]}
            >
              <Text style={[styles.dasunBrickTower6, styles.dasunTypo]}>
                Pay with stored Card
              </Text>
            </View>
            <Image
              style={[styles.groupChild8, styles.groupChildLayout1]}
              contentFit="cover"
              source={require("../assets/group-10905.png")}
            />
            <Image
              style={[styles.deliveryBox11, styles.layer2Position]}
              contentFit="cover"
              source={require("../assets/deliverybox-1-1.png")}
            />
            <Image
              style={[styles.groupChild9, styles.groupChildLayout1]}
              contentFit="cover"
              source={require("../assets/group-10903.png")}
            />
            <View style={[styles.layer2, styles.layer2Position]}>
              <Image
                style={[styles.vectorIcon, styles.iconGroupLayout]}
                contentFit="cover"
                source={require("../assets/vector1.png")}
              />
              <Text style={[styles.h, styles.hPosition]}>3h</Text>
            </View>
            <Image
              style={[styles.groupChild10, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/line-2.png")}
            />
            <Image
              style={[styles.groupChild11, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/line-31.png")}
            />
            <View
              style={[styles.rectangleParent3, styles.rectangleParentLayout]}
            >
              <View style={[styles.groupChild, styles.rectangleParentLayout]} />
              <Image
                style={[styles.groupItem, styles.hPosition]}
                contentFit="cover"
                source={require("../assets/ellipse-581.png")}
              />
            </View>
          </View>
        </Pressable>
      </View>
      <Text
        style={[styles.enterTheReceivers, styles.locationTypo]}
      >{`Enter the receiver’s details `}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconGroupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  pickUpTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  bWoleAriyoTypo: {
    color: Color.mainAshColour,
    fontFamily: FontFamily.ptRegularNormalText,
    lineHeight: 18,
    width: "62.85%",
    height: "1.35%",
    fontSize: FontSize.boldNormalHeading_size,
    left: "7.48%",
    textAlign: "left",
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
  passwordPosition: {
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
  pryFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_mid,
    paddingHorizontal: Padding.p_126xl,
    flexDirection: "row",
    borderRadius: Border.br_11xl,
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
  statusbarPosition: {
    left: "50%",
    position: "absolute",
  },
  timePosition: {
    top: "50%",
    position: "absolute",
  },
  keyboardIconLayout: {
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParentLayout: {
    width: 39,
    height: 18,
    position: "absolute",
  },
  hPosition: {
    left: 3,
    top: 3,
    position: "absolute",
  },
  groupLayout2: {
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
  groupLayout1: {
    height: 237,
    width: 428,
    left: 0,
    position: "absolute",
  },
  passwordPosition1: {
    left: "7.48%",
    position: "absolute",
  },
  info6Position: {
    left: "10.98%",
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
  groupChild3Layout: {
    height: 161,
    width: 428,
    left: 0,
    position: "absolute",
  },
  childLayout: {
    height: 3,
    width: 3,
    left: 37,
    position: "absolute",
  },
  vectorParentLayout: {
    height: 620,
    position: "absolute",
  },
  groupLayout: {
    height: 479,
    width: 437,
    left: 0,
    position: "absolute",
  },
  groupChild5Layout: {
    height: 88,
    top: 0,
    width: 428,
    position: "absolute",
  },
  dasunTypo2: {
    fontFamily: FontFamily.helvetica,
    lineHeight: 22,
    top: "50%",
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  groupChildLayout1: {
    height: 28,
    width: 30,
    position: "absolute",
  },
  dasunTypo1: {
    color: Color.royalblue_100,
    height: "24.59%",
    fontWeight: "300",
    fontFamily: FontFamily.helvetica,
    fontSize: FontSize.size_3xs,
    lineHeight: 18,
    textAlign: "left",
    position: "absolute",
  },
  dasunPosition1: {
    height: 37,
    marginTop: -30.5,
    top: "50%",
    right: "0%",
    position: "absolute",
  },
  dasunTypo: {
    color: Color.darkslategray_600,
    fontFamily: FontFamily.helvetica,
    lineHeight: 22,
    fontSize: FontSize.sFSubheadlineSemibold_size,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  dasunPosition: {
    color: Color.dimgray_100,
    top: "56.76%",
    height: "40.54%",
    fontFamily: FontFamily.helvetica,
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    textAlign: "left",
    left: "0%",
    position: "absolute",
  },
  clockPosition: {
    top: 45,
    width: 16,
    height: 16,
    position: "absolute",
    overflow: "hidden",
  },
  groupParent2Position: {
    left: "20.73%",
    top: "50%",
    position: "absolute",
  },
  layer2Position: {
    left: "9.28%",
    right: "87.06%",
    width: "3.67%",
    height: "3.34%",
    position: "absolute",
  },
  groupChildLayout: {
    left: "0.92%",
    right: "-0.8%",
    width: "99.89%",
    height: "0.21%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  changeDeliveryPlanChild: {
    top: 1375,
    height: 110,
    width: 428,
    backgroundColor: Color.mainWhite,
    left: 0,
    position: "absolute",
  },
  changeDeliveryPlanItem: {
    top: 674,
    height: 138,
    width: 428,
    backgroundColor: Color.mainWhite,
    left: 0,
    position: "absolute",
  },
  changeDeliveryPlanInner: {
    top: 30,
    height: 408,
    width: 428,
    backgroundColor: Color.mainWhite,
    left: 0,
    position: "absolute",
  },
  rectangleView: {
    top: 443,
    height: 225,
    width: 428,
    backgroundColor: Color.mainWhite,
    left: 0,
    position: "absolute",
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
    bottom: "0%",
    top: "0%",
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
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_lg,
    left: 32,
    position: "absolute",
  },
  dropOff: {
    top: 463,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_lg,
    left: 32,
    position: "absolute",
  },
  bWoleAriyo: {
    top: "14.41%",
  },
  muritalaEletuWay: {
    top: "33.6%",
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
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
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
    textAlign: "left",
    color: Color.black,
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
    left: 301,
    top: 21,
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
    height: 40,
    width: 125,
    top: 108,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_mid,
    paddingHorizontal: Padding.p_126xl,
    flexDirection: "row",
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colourMain2,
  },
  imSending1: {
    color: Color.black,
  },
  pryButton1: {
    left: 221,
    backgroundColor: Color.gainsboro_100,
    height: 40,
    width: 125,
    top: 108,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_mid,
    paddingHorizontal: Padding.p_126xl,
    flexDirection: "row",
    borderRadius: Border.br_11xl,
  },
  headerChild: {
    width: 27,
    top: 57,
    left: 31,
  },
  leftArrow11: {
    width: 25,
    left: 31,
    position: "absolute",
    overflow: "hidden",
  },
  reviewOrder: {
    marginLeft: -157,
    color: Color.dark,
    width: 328,
    textAlign: "center",
    fontFamily: FontFamily.rubikRegular,
    fontSize: FontSize.h3Header320ptMediumRoboto_size,
    height: 24,
    top: 57,
  },
  time: {
    marginTop: -9,
    width: "13.15%",
    left: "5.11%",
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.sFSubheadlineSemibold,
    color: Color.darkslategray_400,
    fontSize: FontSize.sFSubheadlineSemibold_size,
    textAlign: "center",
  },
  statusbar: {
    marginLeft: -214,
    height: 44,
    top: 0,
    width: 428,
  },
  leftArrow11Parent: {
    top: 0,
  },
  header: {
    top: -3,
  },
  keyboardArrowRight1Icon: {
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
    width: 13,
    height: 12,
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
  keyboardArrowRight2Icon: {
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
  changeDeliveryPlanChild1: {
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
    height: "33.33%",
    width: "39.17%",
    right: "49.85%",
    bottom: "66.67%",
    top: "0%",
  },
  documentsenvelopeSmallElec: {
    color: Color.darkgray_100,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  info6: {
    height: "57.14%",
    width: "89.02%",
    top: "42.86%",
    right: "0%",
    bottom: "0%",
  },
  ellipseIcon: {
    height: "30.16%",
    width: "5.64%",
    top: "3.17%",
    right: "94.36%",
    bottom: "66.67%",
    left: "0%",
    position: "absolute",
  },
  passwordParent: {
    height: "26.58%",
    width: "78.74%",
    top: "24.89%",
    right: "13.79%",
    bottom: "48.52%",
  },
  password6: {
    width: "75.5%",
    left: "24.5%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  groupChild2: {
    height: "90.48%",
    width: "12.58%",
    top: "9.52%",
    right: "87.42%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
  },
  passwordGroup: {
    height: "8.86%",
    width: "35.28%",
    top: "62.03%",
    right: "57.24%",
    bottom: "29.11%",
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
    width: 342,
    backgroundColor: Color.colourMain2,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_mid,
    paddingHorizontal: Padding.p_126xl,
    flexDirection: "row",
    borderRadius: Border.br_11xl,
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
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_lg,
    left: 0,
    position: "absolute",
  },
  scheduledDelivery1Icon: {
    top: 51,
    left: 13,
  },
  keyboardArrowRight2Icon1: {
    top: 53,
    left: 304,
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
    left: 34,
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  youCanSend: {
    top: 87,
    width: 339,
    height: 15,
    color: Color.darkslategray_500,
    lineHeight: 14,
    fontSize: FontSize.size_3xs,
    left: 34,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  dontContainAny: {
    fontFamily: FontFamily.poppinsRegular,
  },
  dontContainAnyContainer: {
    top: 126,
    width: 273,
    height: 16,
    left: 47,
    color: Color.darkslategray_500,
    lineHeight: 14,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  areClosedSecurely: {
    top: 107,
    width: 286,
    height: 19,
    left: 47,
    color: Color.darkslategray_500,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 18,
    textAlign: "left",
    position: "absolute",
  },
  groupChild4: {
    top: 115,
  },
  rectangleParent1: {
    top: 818,
  },
  changeDeliveryPlanChild2: {
    top: 950,
  },
  changeDeliveryPlanChild3: {
    top: -13,
    backgroundColor: Color.darkslategray_800,
    height: 1498,
    width: 428,
    left: 0,
    position: "absolute",
  },
  rectangleIcon: {
    left: 4,
    borderRadius: Border.br_6xl,
    top: 0,
    width: 428,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  close: {
    left: 369,
    top: 20,
    width: 20,
    height: 20,
    position: "absolute",
  },
  groupChild5: {
    backgroundColor: Color.colourMain2,
    left: 0,
  },
  dasunBrickTower: {
    marginTop: -29.5,
    fontSize: FontSize.sFSubheadlineSemibold_size,
    color: Color.mainWhite,
    left: "0%",
  },
  dasunBrickTower1: {
    marginTop: -6.5,
    left: "78.59%",
    fontSize: FontSize.h3Header320ptMediumRoboto_size,
    color: Color.mainWhite,
  },
  dasunTravelPlaza: {
    width: "82.43%",
    top: "35.59%",
    color: Color.whitesmoke_400,
    height: "25.42%",
    fontFamily: FontFamily.helvetica,
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    textAlign: "left",
    left: "0%",
    position: "absolute",
  },
  dasunTravelPlaza1: {
    width: "25.88%",
    top: "74.58%",
    left: "7.03%",
    fontWeight: "300",
    height: "25.42%",
    fontFamily: FontFamily.helvetica,
    fontSize: FontSize.size_3xs,
    color: Color.mainWhite,
    lineHeight: 18,
    textAlign: "left",
    position: "absolute",
  },
  dasunBrickTowerParent: {
    marginTop: -32,
    width: "73.13%",
    right: "7.01%",
    left: "19.86%",
    height: 59,
  },
  groupChild6: {
    left: 28,
    top: 21,
  },
  clock11: {
    left: 85,
    width: 16,
    height: 16,
    top: 57,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent2: {
    left: 6,
  },
  dasunTravelPlaza2: {
    width: "22.19%",
    top: "72.13%",
    left: "22.47%",
  },
  dasunBrickTower2: {
    marginTop: -18.5,
    fontSize: FontSize.sFSubheadlineSemibold_size,
    color: Color.black,
    left: "0%",
  },
  dasunBrickTower3: {
    left: "83.77%",
    marginTop: -3.5,
    color: Color.darkslategray_600,
    fontWeight: "700",
  },
  dasunTravelPlaza3: {
    width: "83.77%",
  },
  dasunBrickTowerGroup: {
    width: "84.38%",
    left: "15.62%",
  },
  groupChild7: {
    top: 9,
    left: 0,
  },
  clock111: {
    left: 57,
  },
  dasunTravelPlazaParent: {
    height: "12.73%",
    width: "83.62%",
    top: "22.96%",
    right: "8.71%",
    bottom: "64.3%",
    left: "7.67%",
    position: "absolute",
  },
  dasunBrickTower5: {
    left: "87.16%",
    marginTop: -3.5,
    color: Color.darkslategray_600,
    fontWeight: "700",
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
  groupParent2: {
    marginTop: -31.5,
    width: "67.81%",
    right: "11.45%",
    height: 61,
  },
  pryButton3: {
    top: 427,
    left: 79,
    width: 281,
    backgroundColor: Color.colourMain2,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_mid,
    paddingHorizontal: Padding.p_126xl,
    flexDirection: "row",
    borderRadius: Border.br_11xl,
  },
  dasunBrickTower6: {
    marginTop: -11,
    left: "0%",
  },
  dasunBrickTowerWrapper: {
    marginTop: 135.5,
    width: "32.07%",
    right: "47.19%",
    height: 22,
  },
  groupChild8: {
    top: 372,
    left: 34,
  },
  deliveryBox11: {
    top: "64.09%",
    bottom: "32.57%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupChild9: {
    top: 217,
    left: 34,
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
    fontSize: FontSize.size_5xs,
    lineHeight: 10,
    fontFamily: FontFamily.rubikRegular,
    color: Color.mainWhite,
    textAlign: "left",
  },
  layer2: {
    top: "26.1%",
    bottom: "70.56%",
  },
  groupChild10: {
    top: "39.25%",
    bottom: "60.54%",
  },
  groupChild11: {
    top: "59.6%",
    bottom: "40.19%",
  },
  rectangleParent3: {
    top: 375,
    left: 349,
  },
  groupParent1: {
    top: 0,
  },
  groupContainer: {
    top: 76,
  },
  vectorParent: {
    top: 885,
    left: -4,
    width: 437,
    height: 620,
  },
  enterTheReceivers: {
    top: 912,
    left: 121,
  },
  changeDeliveryPlan: {
    backgroundColor: Color.whitesmoke_100,
    flex: 1,
    height: 1485,
    overflow: "hidden",
    width: "100%",
  },
});

export default ChangeDeliveryPlan1;
