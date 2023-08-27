import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const DeliveryHistoryHome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.deliveryHistoryHome}>
      <View style={[styles.background, styles.statusbarPosition]} />
      <Pressable style={styles.leftArrow11} onPress={() => navigation.goBack()}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/leftarrow-1-12.png")}
        />
      </Pressable>
      <View style={[styles.statusbar, styles.statusbarLayout]}>
        <Text style={styles.time}>9:41</Text>
      </View>
      <View style={styles.battery}>
        <View style={styles.border} />
        <Image
          style={styles.capIcon}
          contentFit="cover"
          source={require("../assets/cap1.png")}
        />
        <View style={styles.capacity} />
      </View>
      <Image
        style={styles.wifiIcon}
        contentFit="cover"
        source={require("../assets/wifi2.png")}
      />
      <Image
        style={styles.cellularConnectionIcon}
        contentFit="cover"
        source={require("../assets/cellular-connection2.png")}
      />
      <View style={[styles.shipmentHistory, styles.statusbarLayout]}>
        <View style={[styles.card1, styles.cardLayout]}>
          <View style={[styles.bg, styles.cardLayout]} />
          <View style={[styles.track, styles.trackLayout]}>
            <View style={[styles.purpose, styles.purposeLayout]}>
              <Text style={[styles.details, styles.detailsTypo]}>
                30 Jul, 09:11
              </Text>
              <Text style={[styles.address, styles.addressPosition]}>
                1407 S Michigan Ave...
              </Text>
              <Image
                style={[styles.iconMap, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/icon--map2.png")}
              />
            </View>
            <Image
              style={styles.lineIcon}
              contentFit="cover"
              source={require("../assets/line6.png")}
            />
            <View style={[styles.startingLocation, styles.trackLayout]}>
              <Text style={[styles.details1, styles.detailsTypo]}>
                25 Jul, 16:40
              </Text>
              <Text style={[styles.address1, styles.addressPosition]}>
                1457 N Halsted St, Ch...
              </Text>
              <Image
                style={[styles.iconLocation, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/icon--location.png")}
              />
            </View>
          </View>
          <Image
            style={styles.lineIcon1}
            contentFit="cover"
            source={require("../assets/line7.png")}
          />
          <Pressable
            style={styles.status}
            onPress={() => navigation.navigate("Track")}
          >
            <View style={[styles.bg1, styles.bg1Position]} />
            <Text style={[styles.label, styles.labelTypo]}>Track</Text>
          </Pressable>
          <Text style={[styles.name, styles.nameTypo]}>Cooking Tools</Text>
          <Text style={styles.label1}>Package Name</Text>
        </View>
        <Pressable
          style={[styles.card2, styles.cardLayout]}
          onPress={() => navigation.navigate("DeliveryDetailsWithReview")}
        >
          <View style={[styles.bg, styles.cardLayout]} />
          <View style={[styles.track, styles.trackLayout]}>
            <View style={[styles.purpose, styles.purposeLayout]}>
              <Text style={[styles.details, styles.detailsTypo]}>
                30 Jul, 09:11
              </Text>
              <Text style={[styles.address, styles.addressPosition]}>
                1407 S Michigan Ave...
              </Text>
              <Image
                style={[styles.iconMap, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/icon--map3.png")}
              />
            </View>
            <Image
              style={styles.lineIcon}
              contentFit="cover"
              source={require("../assets/line8.png")}
            />
            <View style={[styles.startingLocation, styles.trackLayout]}>
              <Text style={[styles.details1, styles.detailsTypo]}>
                12 Jul, 06:40
              </Text>
              <Text style={[styles.address1, styles.addressPosition]}>
                1457 N Halsted St, Ch...
              </Text>
              <Image
                style={[styles.iconLocation, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/icon--location1.png")}
              />
            </View>
          </View>
          <Image
            style={styles.lineIcon1}
            contentFit="cover"
            source={require("../assets/line9.png")}
          />
          <View style={styles.status}>
            <View style={[styles.bg3, styles.bg1Position]} />
            <Text style={[styles.label2, styles.labelTypo]}>Delivered</Text>
          </View>
          <Text style={[styles.name1, styles.nameTypo]}>Monitor 24 inch</Text>
          <Text style={styles.label1}>Package Name</Text>
        </Pressable>
        <Pressable
          style={[styles.card3, styles.cardLayout]}
          onPress={() => navigation.navigate("DeliveryDetailsWithReview")}
        >
          <View style={[styles.bg, styles.cardLayout]} />
          <View style={[styles.track, styles.trackLayout]}>
            <View style={[styles.purpose, styles.purposeLayout]}>
              <Text style={[styles.details, styles.detailsTypo]}>
                30 Jul, 09:11
              </Text>
              <Text style={[styles.address, styles.addressPosition]}>
                1407 S Michigan Ave...
              </Text>
              <Image
                style={[styles.iconMap, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/icon--map4.png")}
              />
            </View>
            <Image
              style={styles.lineIcon}
              contentFit="cover"
              source={require("../assets/line10.png")}
            />
            <View style={[styles.startingLocation, styles.trackLayout]}>
              <Text style={[styles.details1, styles.detailsTypo]}>
                12 Jul, 06:40
              </Text>
              <Text style={[styles.address1, styles.addressPosition]}>
                1457 N Halsted St, Ch...
              </Text>
              <Image
                style={[styles.iconLocation, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/icon--location2.png")}
              />
            </View>
          </View>
          <Image
            style={styles.lineIcon1}
            contentFit="cover"
            source={require("../assets/line11.png")}
          />
          <View style={styles.status}>
            <View style={[styles.bg3, styles.bg1Position]} />
            <Text style={[styles.label2, styles.labelTypo]}>Delivered</Text>
          </View>
          <Text style={[styles.name1, styles.nameTypo]}>Monitor 24 inch</Text>
          <Text style={styles.label1}>Package Name</Text>
        </Pressable>
        <Pressable
          style={[styles.card4, styles.cardLayout]}
          onPress={() => navigation.navigate("DeliveryDetailsWithReview")}
        >
          <View style={[styles.bg, styles.cardLayout]} />
          <View style={[styles.track, styles.trackLayout]}>
            <View style={[styles.purpose, styles.purposeLayout]}>
              <Text style={[styles.details, styles.detailsTypo]}>
                30 Jul, 09:11
              </Text>
              <Text style={[styles.address, styles.addressPosition]}>
                1407 S Michigan Ave...
              </Text>
              <Image
                style={[styles.iconMap, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/icon--map4.png")}
              />
            </View>
            <Image
              style={styles.lineIcon}
              contentFit="cover"
              source={require("../assets/line10.png")}
            />
            <View style={[styles.startingLocation, styles.trackLayout]}>
              <Text style={[styles.details1, styles.detailsTypo]}>
                12 Jul, 06:40
              </Text>
              <Text style={[styles.address1, styles.addressPosition]}>
                1457 N Halsted St, Ch...
              </Text>
              <Image
                style={[styles.iconLocation, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/icon--location2.png")}
              />
            </View>
          </View>
          <Image
            style={styles.lineIcon1}
            contentFit="cover"
            source={require("../assets/line11.png")}
          />
          <View style={styles.status}>
            <View style={[styles.bg3, styles.bg1Position]} />
            <Text style={[styles.label2, styles.labelTypo]}>Delivered</Text>
          </View>
          <Text style={[styles.name1, styles.nameTypo]}>Monitor 24 inch</Text>
          <Text style={styles.label1}>Package Name</Text>
        </Pressable>
        <Text style={styles.label8}>Order History</Text>
      </View>
      <View style={styles.homeIndicatorParent}>
        <View style={styles.homeIndicator}>
          <View style={styles.line} />
        </View>
        <View style={styles.groupChildPosition}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Image
            style={[styles.deliveryBox14, styles.deliveryPosition]}
            contentFit="cover"
            source={require("../assets/deliverybox-1-4.png")}
          />
          <Text style={styles.home}>Home</Text>
          <Text style={[styles.send, styles.sendTypo]}>Send</Text>
          <Text style={[styles.history, styles.sendTypo]}>History</Text>
          <Image
            style={[styles.history11, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/history-1-1.png")}
          />
          <Text style={[styles.account, styles.sendTypo]}>Account</Text>
          <Text style={[styles.receive, styles.sendTypo]}>Receive</Text>
          <Image
            style={[styles.iconProfile, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon--profile1.png")}
          />
          <Pressable
            style={[styles.iconHome, styles.iconLayout]}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/icon--home.png")}
            />
          </Pressable>
          <Image
            style={[styles.deliveryBox1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/deliverybox-11.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusbarPosition: {
    left: "50%",
    marginLeft: -214,
  },
  statusbarLayout: {
    width: 375,
    position: "absolute",
  },
  cardLayout: {
    height: 183,
    left: 0,
    width: 375,
    position: "absolute",
  },
  trackLayout: {
    width: 335,
    position: "absolute",
  },
  purposeLayout: {
    height: 23,
    position: "absolute",
  },
  detailsTypo: {
    textAlign: "right",
    color: Color.neuturalsGrey3,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.boldNormalHeading_size,
    height: 23,
    lineHeight: 20,
    position: "absolute",
  },
  addressPosition: {
    color: Color.neuturalsGrey4,
    left: 31,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.boldNormalHeading_size,
    height: 23,
    lineHeight: 20,
    top: 0,
    position: "absolute",
  },
  iconLayout1: {
    height: 18,
    width: 18,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  bg1Position: {
    borderRadius: Border.br_5xs,
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  labelTypo: {
    color: Color.mainWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    textTransform: "capitalize",
    lineHeight: 16,
    letterSpacing: 0.2,
    fontSize: FontSize.size_xs,
    top: "21.43%",
    height: "57.14%",
    fontWeight: "600",
    position: "absolute",
  },
  nameTypo: {
    fontSize: FontSize.ptBoldHeader5CardTitles_size,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.neuturalsGrey4,
    height: 23,
    top: 46,
    left: 18,
    fontWeight: "600",
    lineHeight: 20,
    position: "absolute",
  },
  groupChildPosition: {
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
  sendTypo: {
    top: 62,
    color: Color.black,
    fontFamily: FontFamily.ptRegularNormalText,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: 26,
    width: 26,
    position: "absolute",
  },
  background: {
    backgroundColor: Color.backgroundBackground4,
    width: 428,
    height: 47,
    top: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  leftArrow11: {
    top: 60,
    width: 24,
    height: 24,
    left: 26,
    position: "absolute",
  },
  time: {
    marginTop: -9,
    width: "14.4%",
    left: "5.6%",
    fontSize: FontSize.sFSubheadlineSemibold_size,
    letterSpacing: 0,
    fontFamily: FontFamily.sFSubheadlineSemibold,
    color: Color.darkslategray_400,
    textAlign: "center",
    fontWeight: "600",
    lineHeight: 20,
    top: "50%",
    position: "absolute",
  },
  statusbar: {
    top: -6,
    height: 44,
    left: "50%",
    marginLeft: -214,
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
    top: "32.36%",
    bottom: "32.35%",
    left: "94.54%",
    maxWidth: "100%",
    maxHeight: "100%",
    opacity: 0.4,
    right: "0%",
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
    height: "1.5%",
    width: "5.68%",
    top: "1.46%",
    right: "5.69%",
    bottom: "97.04%",
    left: "88.63%",
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 15,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 15,
  },
  bg: {
    borderRadius: Border.br_xs,
    top: 0,
    backgroundColor: Color.mainWhite,
  },
  details: {
    left: 247,
    width: 88,
    top: 0,
  },
  address: {
    width: 171,
    textAlign: "left",
  },
  iconMap: {
    top: 2,
  },
  purpose: {
    top: 46,
    height: 23,
    width: 335,
    left: 0,
  },
  lineIcon: {
    top: 20,
    left: 9,
    width: 1,
    height: 25,
    position: "absolute",
  },
  details1: {
    top: 1,
    left: 242,
    width: 93,
  },
  address1: {
    width: 175,
    textAlign: "left",
  },
  iconLocation: {
    top: 0,
  },
  startingLocation: {
    left: 0,
    width: 335,
    height: 24,
    top: 0,
  },
  track: {
    top: 96,
    height: 69,
    left: 18,
  },
  lineIcon1: {
    top: 82,
    width: 338,
    height: 1,
    left: 18,
    position: "absolute",
  },
  bg1: {
    backgroundColor: Color.colourMain2,
  },
  label: {
    width: "55.68%",
    left: "22.73%",
    textAlign: "center",
  },
  status: {
    height: "17.5%",
    width: "26.91%",
    top: "13.75%",
    right: "4.89%",
    bottom: "68.75%",
    left: "68.2%",
    position: "absolute",
  },
  name: {
    width: 132,
    textAlign: "center",
  },
  label1: {
    top: 18,
    color: Color.neuturalsGrey2,
    width: 124,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.boldNormalHeading_size,
    height: 23,
    left: 18,
    textAlign: "center",
    lineHeight: 20,
    position: "absolute",
  },
  card1: {
    top: 55,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(206, 206, 206, 0.25)",
    height: 183,
  },
  bg3: {
    backgroundColor: Color.neuturalsGrey1,
  },
  label2: {
    width: "59.09%",
    left: "20.45%",
    textAlign: "left",
  },
  name1: {
    width: 145,
    textAlign: "left",
  },
  card2: {
    top: 257,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(206, 206, 206, 0.25)",
    height: 183,
  },
  card3: {
    top: 449,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(206, 206, 206, 0.25)",
    height: 183,
  },
  card4: {
    top: 643,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(206, 206, 206, 0.25)",
    height: 183,
  },
  label8: {
    fontSize: FontSize.h3Header320ptMediumRoboto_size,
    lineHeight: 32,
    width: 202,
    height: 37,
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "left",
    color: Color.neuturalsGrey4,
    left: 0,
    fontWeight: "600",
    top: 0,
    position: "absolute",
  },
  shipmentHistory: {
    top: 98,
    height: 826,
    left: 26,
    width: 375,
  },
  line: {
    marginTop: 4.5,
    marginLeft: -67.5,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.gray_200,
    width: 135,
    height: 5,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  homeIndicator: {
    left: 1,
    width: 413,
    bottom: 0,
    height: 37,
    position: "absolute",
  },
  groupChild: {
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
    color: Color.black,
    fontFamily: FontFamily.ptRegularNormalText,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  send: {
    left: 188,
  },
  history: {
    left: 267,
  },
  history11: {
    left: 275,
    top: 24,
    width: 26,
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
    left: 22,
    top: 25,
  },
  deliveryBox1Icon: {
    left: 189,
    top: 27,
    overflow: "hidden",
  },
  homeIndicatorParent: {
    left: 6,
    height: 138,
    width: 414,
    bottom: 0,
    position: "absolute",
  },
  deliveryHistoryHome: {
    flex: 1,
    height: 1047,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.mainWhite,
  },
});

export default DeliveryHistoryHome;
