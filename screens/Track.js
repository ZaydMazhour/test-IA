import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Track = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.track}>
      <Image
        style={styles.mapIcon}
        contentFit="cover"
        source={require("../assets/map.png")}
      />
      <View style={[styles.image, styles.imagePosition]} />
      <Image
        style={styles.trackIcon}
        contentFit="cover"
        source={require("../assets/track.png")}
      />
      <View style={[styles.detailsTrack, styles.driverLayout]}>
        <View style={[styles.driver, styles.driverLayout]}>
          <Image
            style={[styles.bgIcon, styles.bgIconPosition]}
            contentFit="cover"
            source={require("../assets/bg.png")}
          />
          <View style={[styles.profile, styles.image1Layout]}>
            <Text style={[styles.name, styles.nameClr]}>Joni Daribur</Text>
            <Text style={[styles.shipper, styles.label1Typo]}>Shipper</Text>
            <View style={[styles.image1, styles.image1Layout]} />
          </View>
          <Image
            style={[styles.chatIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/chat.png")}
          />
          <Image
            style={[styles.callIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/call.png")}
          />
        </View>
        <View style={[styles.track1, styles.bgLayout]}>
          <View style={[styles.bg, styles.bgLayout]}>
            <View style={[styles.bg1, styles.bgLayout]} />
            <View style={[styles.line, styles.linePosition]} />
          </View>
          <View style={[styles.track2, styles.track2Layout]}>
            <View style={[styles.purpose, styles.track2Layout]}>
              <Text style={[styles.details, styles.label1Typo]}>
                30 Jul, 09:11
              </Text>
              <Text style={[styles.address, styles.label1Typo]}>
                1407 S Michigan Ave...
              </Text>
              <Image
                style={styles.iconMap}
                contentFit="cover"
                source={require("../assets/icon--map.png")}
              />
            </View>
          </View>
          <Image
            style={styles.lineIcon}
            contentFit="cover"
            source={require("../assets/line3.png")}
          />
          <View style={styles.status}>
            <View style={[styles.bg2, styles.bg2Layout]} />
            <Text style={[styles.label, styles.labelTypo]}>In-transit</Text>
          </View>
          <Text style={[styles.name1, styles.name1Position]}>John Doe</Text>
          <Text style={[styles.label1, styles.name1Position]}>Receiver</Text>
        </View>
      </View>
      <Pressable
        style={styles.line1}
        onPress={() => navigation.navigate("DeliveryHistoryHome")}
      >
        <Image
          style={[styles.icon, styles.bg2Layout]}
          contentFit="cover"
          source={require("../assets/line4.png")}
        />
      </Pressable>
      <View style={[styles.homeIndicator, styles.bgIconPosition]}>
        <View style={[styles.line2, styles.linePosition]} />
      </View>
      <Image
        style={[styles.statusBarIcon, styles.image1Layout]}
        contentFit="cover"
        source={require("../assets/status-bar.png")}
      />
      <Image
        style={styles.symbolsIcon}
        contentFit="cover"
        source={require("../assets/symbols.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imagePosition: {
    width: 375,
    left: 0,
    top: 0,
  },
  driverLayout: {
    height: 295,
    width: 428,
    left: 0,
    position: "absolute",
  },
  bgIconPosition: {
    width: 428,
    left: 0,
    position: "absolute",
  },
  image1Layout: {
    height: 44,
    position: "absolute",
  },
  nameClr: {
    color: Color.mainWhite,
    textAlign: "left",
    position: "absolute",
  },
  label1Typo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.boldNormalHeading_size,
  },
  iconLayout: {
    height: 40,
    width: 40,
    top: 26,
    position: "absolute",
  },
  bgLayout: {
    height: 203,
    width: 428,
    left: 0,
    position: "absolute",
  },
  linePosition: {
    height: 5,
    borderRadius: Border.br_81xl,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  track2Layout: {
    height: 20,
    width: 364,
    position: "absolute",
  },
  bg2Layout: {
    height: "100%",
    width: "100%",
  },
  labelTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  name1Position: {
    textAlign: "center",
    left: 28,
    lineHeight: 20,
    position: "absolute",
  },
  mapIcon: {
    width: 430,
    height: 770,
    left: 0,
    top: 0,
    position: "absolute",
  },
  image: {
    height: 553,
    position: "absolute",
  },
  trackIcon: {
    top: 128,
    left: 49,
    width: 306,
    height: 241,
    position: "absolute",
  },
  bgIcon: {
    top: -32,
    height: 327,
  },
  name: {
    top: 20,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    textAlign: "left",
    fontSize: FontSize.ptBoldHeader5CardTitles_size,
    left: 56,
  },
  shipper: {
    color: Color.neuturalsGreyLight1,
    lineHeight: 20,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.boldNormalHeading_size,
    top: 0,
    position: "absolute",
    textAlign: "left",
    left: 56,
  },
  image1: {
    borderRadius: 52,
    backgroundColor: Color.royalblue_100,
    width: 44,
    left: 0,
    top: 0,
  },
  profile: {
    top: 24,
    width: 157,
    left: 24,
  },
  chatIcon: {
    left: 351,
  },
  callIcon: {
    left: 284,
  },
  driver: {
    top: 0,
  },
  bg1: {
    borderTopLeftRadius: Border.br_5xl,
    borderTopRightRadius: Border.br_5xl,
    backgroundColor: Color.mainWhite,
    shadowColor: "rgba(198, 198, 198, 0.25)",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowRadius: 28,
    elevation: 28,
    shadowOpacity: 1,
    top: 0,
  },
  line: {
    marginTop: -89.5,
    marginLeft: -1.71,
    backgroundColor: Color.neuturalsGreyLight3,
    width: 64,
  },
  bg: {
    top: 0,
  },
  details: {
    left: 287,
    color: Color.neuturalsGrey3,
    textAlign: "right",
    lineHeight: 20,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.boldNormalHeading_size,
    top: 0,
    position: "absolute",
  },
  address: {
    left: 27,
    color: Color.neuturalsGrey4,
    lineHeight: 20,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.boldNormalHeading_size,
    top: 0,
    position: "absolute",
    textAlign: "left",
  },
  iconMap: {
    top: 2,
    width: 16,
    height: 16,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  purpose: {
    left: 0,
    top: 0,
  },
  track2: {
    top: 102,
    left: 24,
  },
  lineIcon: {
    top: 89,
    width: 328,
    height: 1,
    left: 24,
    position: "absolute",
  },
  bg2: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colourMain2,
    position: "absolute",
  },
  label: {
    width: "64.72%",
    top: "21.43%",
    left: "22.73%",
    fontSize: FontSize.size_xs,
    letterSpacing: 0.2,
    lineHeight: 16,
    textTransform: "capitalize",
    textAlign: "left",
    color: Color.mainWhite,
    position: "absolute",
  },
  status: {
    height: "13.79%",
    width: "23.47%",
    top: "20.2%",
    right: "6.4%",
    bottom: "66.01%",
    left: "70.13%",
    position: "absolute",
  },
  name1: {
    top: 56,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    color: Color.neuturalsGrey4,
    fontSize: FontSize.ptBoldHeader5CardTitles_size,
  },
  label1: {
    top: 32,
    color: Color.neuturalsGrey2,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "center",
    left: 28,
  },
  track1: {
    top: 92,
  },
  detailsTrack: {
    top: 716,
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  line1: {
    left: "6.78%",
    top: "6.23%",
    right: "87.62%",
    bottom: "92.09%",
    width: "5.61%",
    height: "1.68%",
    position: "absolute",
  },
  line2: {
    marginTop: 4,
    marginLeft: -68,
    backgroundColor: Color.gray_200,
    width: 135,
  },
  homeIndicator: {
    bottom: 0,
    height: 34,
    overflow: "hidden",
  },
  statusBarIcon: {
    width: 375,
    left: 0,
    top: 0,
  },
  symbolsIcon: {
    marginTop: -483.5,
    right: 24,
    width: 68,
    height: 13,
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  track: {
    backgroundColor: "#ebeef0",
    flex: 1,
    height: 1011,
    overflow: "hidden",
    width: "100%",
  },
});

export default Track;
