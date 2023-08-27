import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const EnterReceiverDetails = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.enterReceiverDetails}>
      <View
        style={[styles.enterReceiverDetailsChild, styles.enterChildLayout]}
      />
      <View
        style={[styles.enterReceiverDetailsItem, styles.enterChildLayout]}
      />
      <View
        style={[styles.enterReceiverDetailsInner, styles.enterChildLayout]}
      />
      <View style={[styles.rectangleView, styles.enterChildLayout]} />
      <View style={styles.battery}>
        <View style={[styles.border, styles.borderBorder]} />
        <Image
          style={[styles.capIcon, styles.iconLayout3]}
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
      <Text style={[styles.bWoleAriyo, styles.turnOnTo1Typo]}>
        14B wole ariyo street, lekki phase 1
      </Text>
      <Text style={[styles.muritalaEletuWay, styles.turnOnTo1Typo]}>
        55 Muritala Eletu way, Osapa London
      </Text>
      <Text style={styles.turnOnTo}>
        Turn on to confirm delivery with a 4-digit PIN
      </Text>
      <View style={styles.password}>
        <View style={[styles.info, styles.infoPosition]}>
          <Text style={[styles.johnChinedu, styles.locationTypo]}>
            John Chinedu
          </Text>
          <Text style={[styles.text, styles.textTypo]}>0812902934</Text>
        </View>
      </View>
      <View style={[styles.password1, styles.passwordPosition2]}>
        <View style={[styles.info, styles.infoPosition]}>
          <Text style={[styles.addRecipient, styles.pickUpFlexBox]}>
            Add recipient
          </Text>
        </View>
      </View>
      <View style={[styles.password2, styles.passwordPosition2]}>
        <View style={[styles.info, styles.infoPosition]}>
          <Text style={[styles.addRecipient, styles.pickUpFlexBox]}>
            Require PIN upon delivery
          </Text>
        </View>
      </View>
      <Text style={[styles.location, styles.locationTypo]}>Location</Text>
      <Image
        style={[styles.user1Icon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/user-1.png")}
      />
      <Image
        style={[styles.user2Icon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/user-1.png")}
      />
      <Image
        style={[styles.lineIcon, styles.iconLayout3]}
        contentFit="cover"
        source={require("../assets/line-3.png")}
      />
      <Image
        style={[styles.icModeEdit24px2Icon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/ic-mode-edit-24px-2.png")}
      />
      <View style={styles.location31Parent}>
        <Image
          style={[styles.location31, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/location-3-1.png")}
        />
        <View style={styles.password3}>
          <View style={[styles.info, styles.infoPosition]}>
            <Text style={[styles.bWoleAriyo1, styles.textTypo]}>
              14b wole ariyo street, Lekki phase 1
            </Text>
          </View>
        </View>
        <Image
          style={[styles.icModeEdit24px6Icon, styles.iconLayout2]}
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
          <Text style={[styles.reviewOrder, styles.timeFlexBox]}>
            Review order
          </Text>
          <View style={[styles.statusbar, styles.enterChildLayout]}>
            <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
          </View>
        </View>
      </View>
      <Image
        style={[styles.keyboardArrowRight1Icon, styles.keyboardIconLayout]}
        contentFit="cover"
        source={require("../assets/keyboardarrowright-11.png")}
      />
      <Image
        style={[styles.passwordIcon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/password.png")}
      />
      <View style={[styles.rectangleParent, styles.rectangleParentLayout]}>
        <View style={[styles.groupChild, styles.rectangleParentLayout]} />
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/ellipse-58.png")}
        />
      </View>
      <View style={[styles.groupView, styles.groupLayout1]}>
        <View style={[styles.groupWrapper, styles.groupLayout1]}>
          <View style={[styles.groupWrapper, styles.groupLayout1]}>
            <View style={[styles.groupInner, styles.groupLayout1]} />
            <View style={styles.password4}>
              <View style={[styles.info, styles.infoPosition]}>
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
              style={[styles.creditCard1Icon, styles.iconLayout1]}
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
      <View style={[styles.enterReceiverDetailsChild1, styles.groupLayout1]} />
      <View style={[styles.groupParent, styles.groupLayout]}>
        <View style={[styles.rectangleContainer, styles.groupLayout]}>
          <View style={[styles.groupChild1, styles.groupLayout]} />
          <Image
            style={[styles.groupIcon, styles.iconLayout3]}
            contentFit="cover"
            source={require("../assets/line-9.png")}
          />
          <View style={[styles.passwordParent, styles.passwordPosition1]}>
            <View style={[styles.password5, styles.info6Position]}>
              <View style={[styles.info, styles.infoPosition]}>
                <Text style={[styles.addRecipient, styles.pickUpFlexBox]}>
                  Standard package
                </Text>
              </View>
            </View>
            <View style={[styles.info6, styles.info6Position]}>
              <Text style={styles.documentsenvelopeSmallElec}>
                Documents/Envelope, small electronics, essential oils,
                cosmetics, single piece clothing
              </Text>
            </View>
            <Image
              style={[styles.ellipseIcon, styles.ellipseIconPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-223.png")}
            />
          </View>
          <View style={[styles.passwordGroup, styles.passwordPosition1]}>
            <View style={[styles.password6, styles.passwordPosition]}>
              <View style={[styles.info, styles.infoPosition]}>
                <Text style={[styles.addRecipient, styles.pickUpFlexBox]}>
                  Custom delivery
                </Text>
              </View>
            </View>
            <Image
              style={[styles.groupChild2, styles.ellipseIconPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-223.png")}
            />
          </View>
        </View>
        <Text style={[styles.packageType, styles.packageTypo]}>
          Package Type
        </Text>
      </View>
      <View style={styles.pryButton2}>
        <Text style={[styles.imSending, styles.sendingTypo]}>
          Confirm Order - N2,000
        </Text>
      </View>
      <View style={styles.passwordContainer}>
        <View style={styles.password7}>
          <View style={[styles.info, styles.infoPosition]}>
            <Text style={[styles.johnChinedu, styles.locationTypo]}>
              Same Day delivery
            </Text>
          </View>
        </View>
        <Text
          style={[styles.deliveryPlan, styles.pickUpFlexBox]}
        >{`Delivery plan `}</Text>
        <Image
          style={[styles.scheduledDelivery1Icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/scheduleddelivery-1.png")}
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
        <Text style={styles.guideline}>Guideline</Text>
        <Text style={styles.youCanSend}>
          You can send small or medium packages that:
        </Text>
        <Text
          style={[
            styles.dontContainAnyContainer,
            styles.areClosedSecurelyPosition,
          ]}
        >
          <Text style={styles.dontContainAny}>{`Don't contain any `}</Text>
          <Text style={styles.pickUpTypo}>prohibited items.</Text>
          <Text style={styles.dontContainAny}>{` `}</Text>
        </Text>
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
        style={[styles.enterReceiverDetailsChild2, styles.childLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1296.png")}
      />
      <View
        style={[styles.enterReceiverDetailsChild3, styles.enterChildLayout]}
      />
      <View style={[styles.rectangleParent2, styles.groupChild5Layout]}>
        <View style={[styles.groupChild5, styles.groupChild5Layout]} />
        <Image
          style={[styles.closeIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/close.png")}
        />
        <Text
          style={[styles.enterTheReceivers, styles.locationTypo]}
        >{`Enter the receiver’s details `}</Text>
        <View style={[styles.passwordParent1, styles.passwordParentPosition]}>
          <View style={[styles.info, styles.infoPosition]}>
            <View style={[styles.passwordChild, styles.passwordBorder]} />
            <Text style={[styles.receiversName, styles.phoneNumberPosition]}>
              Receiver’s name
            </Text>
          </View>
          <Text style={[styles.addContact, styles.addContactTypo]}>
            Add contact
          </Text>
          <Image
            style={[styles.phoneBookIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/phonebook1.png")}
          />
        </View>
        <View style={[styles.passwordParent2, styles.passwordParentPosition]}>
          <View style={[styles.info, styles.infoPosition]}>
            <View style={[styles.passwordItem, styles.passwordBorder]} />
            <Text style={[styles.phoneNumber, styles.phoneNumberPosition]}>
              Phone number
            </Text>
          </View>
          <Text style={[styles.eg08170000560, styles.addContactTypo]}>
            e.g 08170000560
          </Text>
        </View>
        <Text style={[styles.turnOnTo1, styles.turnOnTo1Position]}>
          Turn on to confirm delivery with a 4-digit PIN
        </Text>
        <View style={[styles.password10, styles.turnOnTo1Position]}>
          <View style={[styles.info, styles.infoPosition]}>
            <Text style={[styles.addRecipient, styles.pickUpFlexBox]}>
              Require PIN upon delivery
            </Text>
          </View>
        </View>
        <View style={[styles.rectangleParent3, styles.rectangleParentLayout]}>
          <View style={[styles.groupChild, styles.rectangleParentLayout]} />
          <Image
            style={styles.groupItem}
            contentFit="cover"
            source={require("../assets/ellipse-58.png")}
          />
        </View>
      </View>
      <Pressable style={styles.pryButton3} onPress={() => navigation.goBack()}>
        <Text style={[styles.imSending, styles.sendingTypo]}>
          Confirm recipient
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  enterChildLayout: {
    width: 428,
    position: "absolute",
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  iconLayout3: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  pickUpFlexBox: {
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  turnOnTo1Typo: {
    color: Color.mainAshColour,
    fontFamily: FontFamily.ptRegularNormalText,
    lineHeight: 18,
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
  },
  infoPosition: {
    left: "0%",
    top: "0%",
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
  passwordPosition2: {
    height: "1.41%",
    left: "14.72%",
    position: "absolute",
  },
  iconLayout2: {
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
  iconLayout1: {
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
  passwordPosition1: {
    height: "26.58%",
    left: "7.48%",
    position: "absolute",
  },
  info6Position: {
    left: "10.98%",
    position: "absolute",
  },
  ellipseIconPosition: {
    top: "3.17%",
    height: "30.16%",
    bottom: "66.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  passwordPosition: {
    bottom: "66.67%",
    height: "33.33%",
    top: "0%",
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
  areClosedSecurelyPosition: {
    left: 47,
    color: Color.darkslategray_500,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  childLayout: {
    height: 3,
    width: 3,
    left: 37,
    position: "absolute",
  },
  groupChild5Layout: {
    height: 445,
    width: 428,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 20,
    width: 20,
    position: "absolute",
    overflow: "hidden",
  },
  passwordParentPosition: {
    right: "10.28%",
    width: "82.24%",
    left: "7.48%",
    position: "absolute",
  },
  passwordBorder: {
    borderColor: "#c4c4c4",
    backgroundColor: Color.whitesmoke_500,
    borderRadius: Border.br_9xs,
    left: "-0.14%",
    right: "-0.14%",
    width: "100.28%",
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  phoneNumberPosition: {
    opacity: 0.5,
    left: "1.99%",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    top: "0%",
    position: "absolute",
  },
  addContactTypo: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  turnOnTo1Position: {
    left: "9.58%",
    position: "absolute",
  },
  enterReceiverDetailsChild: {
    top: 1375,
    height: 110,
    backgroundColor: Color.mainWhite,
    left: 0,
  },
  enterReceiverDetailsItem: {
    top: 674,
    height: 138,
    backgroundColor: Color.mainWhite,
    left: 0,
  },
  enterReceiverDetailsInner: {
    top: 30,
    height: 408,
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
    borderColor: "#384144",
    opacity: 0.35,
    left: "0%",
    top: "0%",
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
  },
  dropOff: {
    top: 463,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    left: 32,
  },
  bWoleAriyo: {
    top: "14.41%",
    left: "7.48%",
    width: "62.85%",
    height: "1.35%",
    fontFamily: FontFamily.ptRegularNormalText,
    position: "absolute",
  },
  muritalaEletuWay: {
    top: "33.6%",
    left: "7.48%",
    width: "62.85%",
    height: "1.35%",
    fontFamily: FontFamily.ptRegularNormalText,
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
    right: "0%",
    bottom: "0%",
    height: "100%",
    left: "0%",
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
    left: "0%",
    top: "0%",
  },
  password1: {
    width: "21.96%",
    top: "36.43%",
    right: "63.32%",
    bottom: "62.15%",
  },
  password2: {
    top: "39.26%",
    right: "43.93%",
    bottom: "59.33%",
    width: "41.36%",
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
  leftArrow11: {
    width: 25,
    left: 31,
    position: "absolute",
    overflow: "hidden",
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
    top: 3,
    left: 3,
    width: 13,
    height: 12,
    position: "absolute",
  },
  rectangleParent: {
    top: 602,
    left: 326,
    width: 39,
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
  enterReceiverDetailsChild1: {
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
    width: "5.64%",
    right: "94.36%",
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
    left: "10.54%",
    position: "absolute",
  },
  groupChild2: {
    width: "5.41%",
    right: "94.59%",
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
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
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
  pickUpTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  dontContainAnyContainer: {
    top: 126,
    width: 273,
    height: 16,
    lineHeight: 14,
    left: 47,
  },
  areClosedSecurely: {
    top: 107,
    width: 286,
    height: 19,
    fontFamily: FontFamily.poppinsRegular,
    left: 47,
    lineHeight: 18,
  },
  groupChild4: {
    top: 115,
  },
  rectangleParent1: {
    top: 818,
  },
  enterReceiverDetailsChild2: {
    top: 950,
  },
  enterReceiverDetailsChild3: {
    top: -13,
    backgroundColor: Color.darkslategray_800,
    height: 1489,
    left: 0,
  },
  groupChild5: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    borderColor: "#eae8e8",
    top: 0,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.mainWhite,
  },
  closeIcon: {
    top: 20,
    left: 369,
  },
  enterTheReceivers: {
    top: 35,
    left: 116,
  },
  passwordChild: {
    height: "65.79%",
    top: "34.87%",
    bottom: "-0.66%",
  },
  receiversName: {
    width: "51.14%",
    color: Color.black,
  },
  addContact: {
    top: 43,
    left: 270,
    color: Color.black,
  },
  phoneBookIcon: {
    top: 41,
    left: 250,
  },
  passwordParent1: {
    height: "17.08%",
    top: "17.3%",
    bottom: "65.62%",
  },
  passwordItem: {
    height: "66.67%",
    top: "34%",
    bottom: "-0.67%",
  },
  phoneNumber: {
    width: "43.18%",
    color: Color.gray_300,
  },
  eg08170000560: {
    top: 44,
    left: 26,
    color: "#bcb9b9",
  },
  passwordParent2: {
    height: "16.85%",
    top: "36.63%",
    bottom: "46.52%",
  },
  turnOnTo1: {
    height: "8.31%",
    width: "52.8%",
    top: "62.47%",
    color: Color.mainAshColour,
    fontFamily: FontFamily.ptRegularNormalText,
    lineHeight: 18,
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
  },
  password10: {
    height: "4.72%",
    top: "58.2%",
    right: "49.07%",
    bottom: "37.08%",
    width: "41.36%",
  },
  rectangleParent3: {
    top: 278,
    left: 326,
    width: 39,
  },
  rectangleParent2: {
    top: 1040,
  },
  pryButton3: {
    top: 1376,
    left: 37,
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
  enterReceiverDetails: {
    backgroundColor: Color.whitesmoke_100,
    flex: 1,
    height: 1485,
    overflow: "hidden",
    width: "100%",
  },
});

export default EnterReceiverDetails;
