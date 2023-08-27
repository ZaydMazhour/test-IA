import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const AccountPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.accountPage}>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.background, styles.headerPosition]} />
        <View style={[styles.statusbar, styles.headerPosition]}>
          <Text style={styles.time}>9:41</Text>
        </View>
      </View>
      <View style={styles.battery}>
        <View style={styles.border} />
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
      <Text style={[styles.johnDoe, styles.johnDoeFlexBox]}>John Doe</Text>
      <Text style={[styles.johndoegmailcom, styles.textTypo]}>
        john.doe@gmail.com
      </Text>
      <Text style={[styles.text, styles.textTypo]}>09030002629</Text>
      <View style={[styles.accountPageChild, styles.lineIconPosition]} />
      <View style={[styles.accountPageItem, styles.lineIconPosition]} />
      <View style={[styles.accountPageInner, styles.lineIconPosition]} />
      <View style={[styles.accountPageInner, styles.lineIconPosition]} />
      <View style={[styles.accountPageChild1, styles.lineIconPosition]} />
      <View style={[styles.accountPageChild2, styles.lineIconPosition]} />
      <Image
        style={[styles.lineIcon, styles.lineIconPosition]}
        contentFit="cover"
        source={require("../assets/line12.png")}
      />
      <Image
        style={[styles.lineIcon1, styles.lineIconPosition]}
        contentFit="cover"
        source={require("../assets/line12.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleLayout]} />
      <View style={[styles.dasunBrickTowerWrapper, styles.dasunPosition]}>
        <Text style={[styles.dasunBrickTower, styles.johnDoeFlexBox]}>
          Add Work
        </Text>
      </View>
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-108822.png")}
      />
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.rectangleLayout]} />
        <View style={[styles.dasunBrickTowerContainer, styles.dasunPosition]}>
          <Text style={[styles.dasunBrickTower, styles.johnDoeFlexBox]}>
            Add Home
          </Text>
        </View>
      </View>
      <View style={styles.frameParent}>
        <View style={styles.frameGroupFlexBox}>
          <Image
            style={styles.basicCreditCard}
            contentFit="cover"
            source={require("../assets/basic--credit-card.png")}
          />
          <Pressable
            style={styles.payments}
            onPress={() => navigation.navigate("AddCreditDebitCard")}
          >
            <Text style={[styles.payments1, styles.contactsTypo]}>
              Payments
            </Text>
          </Pressable>
        </View>
        <Pressable
          style={[styles.frameGroup, styles.frameGroupFlexBox]}
          onPress={() => navigation.navigate("Support")}
        >
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/frame-10831.png")}
          />
          <Text style={[styles.help, styles.helpTypo]}>Help</Text>
        </Pressable>
        <Pressable
          style={[styles.frameGroup, styles.frameGroupFlexBox]}
          onPress={() => navigation.navigate("AddToAddress")}
        >
          <Image
            style={styles.navIconProfileActive}
            contentFit="cover"
            source={require("../assets/nav-icon--profile--active.png")}
          />
          <Image
            style={styles.navIconProfileInactive}
            contentFit="cover"
            source={require("../assets/nav-icon--profile--inactive.png")}
          />
          <Text style={[styles.contacts, styles.contactsTypo]}>Contacts</Text>
        </Pressable>
        <Pressable
          style={[styles.frameGroup, styles.frameGroupFlexBox]}
          onPress={() => navigation.navigate("ShareAndEarn1")}
        >
          <Image
            style={styles.basicShare}
            contentFit="cover"
            source={require("../assets/basic--share.png")}
          />
          <Text style={[styles.rewardsAndPlans, styles.helpTypo]}>
            Rewards and plans
          </Text>
        </Pressable>
        <Pressable
          style={[styles.frameGroup, styles.frameGroupFlexBox]}
          onPress={() => navigation.navigate("PremiumMembership")}
        >
          <Image
            style={styles.basicShare}
            contentFit="cover"
            source={require("../assets/basic--share.png")}
          />
          <Text style={[styles.rewardsAndPlans, styles.helpTypo]}>
            Upgrade plan
          </Text>
        </Pressable>
        <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
          <Image
            style={styles.basicShare}
            contentFit="cover"
            source={require("../assets/basic--share.png")}
          />
          <Text style={[styles.contacts, styles.contactsTypo]}>Share App</Text>
        </View>
      </View>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.avatardefaultIcon, styles.lineLayout]}
        contentFit="cover"
        source={require("../assets/avatardefault2.png")}
      />
      <View style={[styles.homeIndicatorParent, styles.homeLayout]}>
        <View style={styles.homeIndicator}>
          <View style={[styles.line, styles.lineLayout]} />
        </View>
        <View style={styles.groupPosition}>
          <View style={[styles.groupItem, styles.groupPosition]} />
          <Image
            style={[styles.deliveryBox14, styles.deliveryPosition]}
            contentFit="cover"
            source={require("../assets/deliverybox-1-4.png")}
          />
          <Text style={[styles.home, styles.historyTypo]}>Home</Text>
          <Text style={[styles.send, styles.sendTypo]}>Send</Text>
          <Text style={[styles.history, styles.historyPosition1]}>History</Text>
          <Image
            style={[styles.history11, styles.historyIconLayout]}
            contentFit="cover"
            source={require("../assets/history-1-1.png")}
          />
          <Text style={[styles.account, styles.sendTypo]}>Account</Text>
          <Text style={[styles.receive, styles.sendTypo]}>Receive</Text>
          <Image
            style={[styles.iconProfile, styles.historyIconLayout]}
            contentFit="cover"
            source={require("../assets/icon--profile1.png")}
          />
          <Image
            style={[styles.iconHome, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/icon--home.png")}
          />
          <Image
            style={[styles.deliveryBox1Icon, styles.historyIconLayout]}
            contentFit="cover"
            source={require("../assets/deliverybox-11.png")}
          />
        </View>
      </View>
      <View style={[styles.homeIndicatorGroup, styles.homeLayout]}>
        <View style={styles.homeIndicator}>
          <View style={[styles.line, styles.lineLayout]} />
        </View>
        <View style={styles.groupPosition}>
          <View style={[styles.groupItem, styles.groupPosition]} />
          <Image
            style={[styles.deliveryBox14, styles.deliveryPosition]}
            contentFit="cover"
            source={require("../assets/deliverybox-1-4.png")}
          />
          <Text style={[styles.home, styles.historyTypo]}>Home</Text>
          <Text style={[styles.send, styles.sendTypo]}>Send</Text>
          <Pressable
            style={styles.historyPosition1}
            onPress={() => navigation.navigate("DeliveryHistoryHome")}
          >
            <Text style={styles.historyTypo}>History</Text>
          </Pressable>
          <Pressable
            style={[styles.history111, styles.historyIconLayout]}
            onPress={() => navigation.navigate("DeliveryHistoryHome")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/history-1-1.png")}
            />
          </Pressable>
          <Text style={[styles.account, styles.sendTypo]}>Account</Text>
          <Text style={[styles.receive, styles.sendTypo]}>Receive</Text>
          <Image
            style={[styles.iconProfile, styles.historyIconLayout]}
            contentFit="cover"
            source={require("../assets/icon--profile1.png")}
          />
          <Pressable
            style={styles.iconPosition}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/icon--home.png")}
            />
          </Pressable>
          <Image
            style={[styles.deliveryBox1Icon, styles.historyIconLayout]}
            contentFit="cover"
            source={require("../assets/deliverybox-11.png")}
          />
        </View>
      </View>
      <Pressable style={styles.leftArrow11} onPress={() => navigation.goBack()}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/leftarrow-1-12.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  headerPosition: {
    left: "50%",
    marginLeft: -214,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  johnDoeFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
    marginLeft: -92,
    left: "50%",
    position: "absolute",
  },
  lineIconPosition: {
    height: 1,
    left: 0,
    position: "absolute",
  },
  rectangleLayout: {
    height: 63,
    width: 428,
    position: "absolute",
  },
  dasunPosition: {
    height: 22,
    top: "50%",
    position: "absolute",
  },
  contactsTypo: {
    width: 130,
    height: 25,
    display: "flex",
    color: Color.blackDMS,
    fontFamily: FontFamily.ptRegularNormalText,
    fontSize: FontSize.ptBoldHeader5CardTitles_size,
    alignItems: "center",
    textAlign: "left",
  },
  frameGroupFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    width: 256,
  },
  helpTypo: {
    display: "flex",
    color: Color.blackDMS,
    fontFamily: FontFamily.ptRegularNormalText,
    fontSize: FontSize.ptBoldHeader5CardTitles_size,
    height: 25,
    marginLeft: 20,
    alignItems: "center",
    textAlign: "left",
  },
  lineLayout: {
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  homeLayout: {
    height: 138,
    width: 414,
    position: "absolute",
  },
  groupPosition: {
    height: 101,
    width: 414,
    left: 0,
    top: 0,
    position: "absolute",
  },
  deliveryPosition: {
    top: 27,
    overflow: "hidden",
  },
  historyTypo: {
    color: Color.black,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.ptRegularNormalText,
    textAlign: "left",
  },
  sendTypo: {
    top: 62,
    color: Color.black,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.ptRegularNormalText,
    textAlign: "left",
    position: "absolute",
  },
  historyPosition1: {
    left: 267,
    top: 62,
    position: "absolute",
  },
  historyIconLayout: {
    height: 26,
    width: 26,
    position: "absolute",
  },
  iconPosition: {
    left: 22,
    top: 25,
    height: 26,
    width: 26,
    position: "absolute",
  },
  background: {
    top: 6,
    backgroundColor: Color.backgroundBackground4,
    height: 47,
    width: 428,
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
  },
  header: {
    top: -6,
    height: 53,
    width: 428,
  },
  border: {
    width: "90.43%",
    top: "0%",
    right: "9.57%",
    bottom: "0%",
    borderRadius: 3,
    borderColor: "#384144",
    borderWidth: 1,
    opacity: 0.35,
    borderStyle: "solid",
    left: "0%",
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
  johnDoe: {
    top: 88,
    fontSize: FontSize.headingH4_size,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.dark,
    marginLeft: -92,
    textAlign: "left",
    left: "50%",
  },
  johndoegmailcom: {
    top: 120,
    color: Color.darkgray_300,
  },
  text: {
    top: 142,
    color: Color.dark,
  },
  accountPageChild: {
    top: 187,
    width: 429,
    borderTopWidth: 1,
    borderColor: "#dcdfe3",
    height: 1,
    borderStyle: "solid",
  },
  accountPageItem: {
    top: 388,
    width: 429,
    borderTopWidth: 1,
    borderColor: "#dcdfe3",
    height: 1,
    borderStyle: "solid",
  },
  accountPageInner: {
    top: 440,
    width: 429,
    borderTopWidth: 1,
    borderColor: "#dcdfe3",
    height: 1,
    borderStyle: "solid",
  },
  accountPageChild1: {
    top: 497,
    width: 429,
    borderTopWidth: 1,
    borderColor: "#dcdfe3",
    height: 1,
    borderStyle: "solid",
  },
  accountPageChild2: {
    top: 550,
    width: 429,
    borderTopWidth: 1,
    borderColor: "#dcdfe3",
    height: 1,
    borderStyle: "solid",
  },
  lineIcon: {
    top: 324,
    width: 428,
  },
  lineIcon1: {
    top: 260,
    width: 428,
  },
  rectangleView: {
    top: 197,
    left: 0,
    backgroundColor: Color.mainWhite,
  },
  dasunBrickTower: {
    marginTop: -11,
    lineHeight: 22,
    fontFamily: FontFamily.helvetica,
    color: Color.darkslategray_600,
    textAlign: "left",
    left: "0%",
    fontSize: FontSize.sFSubheadlineSemibold_size,
    top: "50%",
  },
  dasunBrickTowerWrapper: {
    marginTop: -245,
    width: "15.42%",
    right: "66.82%",
    left: "17.76%",
  },
  groupIcon: {
    top: 211,
    left: 33,
    width: 29,
    height: 29,
    position: "absolute",
  },
  groupChild: {
    left: 0,
    top: 0,
    backgroundColor: Color.mainWhite,
  },
  dasunBrickTowerContainer: {
    marginTop: -12.5,
    width: "16.59%",
    right: "61.68%",
    left: "21.73%",
  },
  rectangleParent: {
    top: 261,
    left: -17,
  },
  basicCreditCard: {
    width: 23,
    height: 24,
  },
  payments1: {
    height: 25,
  },
  payments: {
    marginLeft: 20,
  },
  frameChild: {
    width: 25,
    height: 25,
  },
  help: {
    width: 223,
    height: 25,
  },
  frameGroup: {
    marginTop: 30,
  },
  navIconProfileActive: {
    display: "none",
    width: 25,
    height: 25,
    overflow: "hidden",
  },
  navIconProfileInactive: {
    width: 25,
    height: 25,
    marginLeft: 20,
    overflow: "hidden",
  },
  contacts: {
    height: 25,
    marginLeft: 20,
  },
  basicShare: {
    height: 21,
    width: 25,
  },
  rewardsAndPlans: {
    width: 200,
    height: 25,
  },
  frameParent: {
    top: 347,
    left: 38,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    height: "2.16%",
    width: "4.44%",
    top: "30.35%",
    right: "86.45%",
    bottom: "67.49%",
    left: "9.11%",
    position: "absolute",
  },
  avatardefaultIcon: {
    height: "5.72%",
    width: "12.38%",
    top: "10.69%",
    right: "77.1%",
    bottom: "83.59%",
    left: "10.51%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  line: {
    marginTop: 4.5,
    marginLeft: -67.5,
    backgroundColor: Color.gray_200,
    width: 135,
    height: 5,
    top: "50%",
    borderRadius: Border.br_81xl,
    left: "50%",
  },
  homeIndicator: {
    bottom: 0,
    left: 1,
    width: 413,
    height: 37,
    position: "absolute",
  },
  groupItem: {
    backgroundColor: Color.mainWhite,
  },
  deliveryBox14: {
    left: 102,
    width: 28,
    height: 23,
    position: "absolute",
  },
  home: {
    top: 63,
    left: 20,
    position: "absolute",
  },
  send: {
    left: 188,
  },
  history: {
    color: Color.black,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.ptRegularNormalText,
    textAlign: "left",
  },
  history11: {
    left: 275,
    width: 26,
    top: 24,
    overflow: "hidden",
  },
  account: {
    left: 349,
  },
  receive: {
    left: 94,
  },
  iconProfile: {
    left: 359,
    top: 24,
    width: 26,
    overflow: "hidden",
  },
  iconHome: {
    overflow: "hidden",
  },
  deliveryBox1Icon: {
    left: 189,
    top: 27,
    overflow: "hidden",
  },
  homeIndicatorParent: {
    bottom: -552,
    left: -1,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  history111: {
    left: 275,
    width: 26,
    top: 24,
  },
  homeIndicatorGroup: {
    bottom: 2,
    left: 0,
  },
  leftArrow11: {
    left: 26,
    top: 51,
    width: 24,
    height: 24,
    position: "absolute",
  },
  accountPage: {
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.mainWhite,
  },
});

export default AccountPage;
