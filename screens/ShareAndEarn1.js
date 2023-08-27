import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const ShareAndEarn1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.shareAndEarn, styles.shareAndEarnLayout]}>
      <View style={styles.statusBardark}>
        <View style={styles.back} />
        <View style={[styles.statusBardark1, styles.iconPosition]}>
          <View style={[styles.statusBarlight, styles.iconPosition]}>
            <Image
              style={[styles.fill17Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/fill-17.png")}
            />
            <Image
              style={[styles.iconsnetworkstatusBar, styles.barPosition]}
              contentFit="cover"
              source={require("../assets/iconsnetworkstatus-bar.png")}
            />
            <Image
              style={[styles.iconswifistatusBar, styles.barPosition]}
              contentFit="cover"
              source={require("../assets/iconswifistatus-bar1.png")}
            />
            <Image
              style={[styles.iconsbuttarystatusBar, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/iconsbuttarystatus-bar.png")}
            />
            <Text style={styles.text}>9:41</Text>
          </View>
        </View>
      </View>
      <Text
        style={[styles.shareEarn, styles.shareEarnFlexBox]}
      >{`Share & Earn`}</Text>
      <Text style={[styles.earnExcitingBenefits, styles.email1Typo]}>
        Earn exciting benefits by inviting more friends.
      </Text>
      <View style={styles.illustrations}>
        <Image
          style={[styles.illustrationIcon, styles.illustrationIconLayout]}
          contentFit="cover"
          source={require("../assets/illustration1.png")}
        />
        <Image
          style={styles.illustrationIcon1}
          contentFit="cover"
          source={require("../assets/illustration2.png")}
        />
        <Image
          style={[styles.illustrationIcon2, styles.illustrationIconLayout]}
          contentFit="cover"
          source={require("../assets/illustration3.png")}
        />
      </View>
      <View style={[styles.offers, styles.offersPosition]}>
        <View style={[styles.offer01, styles.offerPosition]}>
          <Text style={[styles.offYourNext, styles.offYourNextTypo]}>
            15% off your next order.
          </Text>
          <Image
            style={[styles.verifiedIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/verified2.png")}
          />
        </View>
        <View style={[styles.offer02, styles.offerPosition]}>
          <Text style={[styles.offYourNext, styles.offYourNextTypo]}>
            3 Free Shipping.
          </Text>
          <Image
            style={[styles.verifiedIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/verified2.png")}
          />
        </View>
        <View style={[styles.offer03, styles.offerPosition]}>
          <Text style={[styles.offYourNext, styles.offYourNextTypo]}>
            7 days of premium membership.
          </Text>
          <Image
            style={[styles.verifiedIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/verified2.png")}
          />
        </View>
      </View>
      <View style={styles.options}>
        <Pressable
          style={[styles.email, styles.codePosition2]}
          onPress={() => navigation.navigate("InviteFriendMobile1")}
        >
          <Text style={[styles.email1, styles.email1Typo]}>Email</Text>
          <View style={styles.emailChild} />
          <Image
            style={[styles.emailIcon, styles.qrCodePosition]}
            contentFit="cover"
            source={require("../assets/email.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.mobile, styles.codePosition2]}
          onPress={() => navigation.navigate("InviteFriendMobile2")}
        >
          <Text style={[styles.email1, styles.email1Typo]}>Mobile</Text>
          <View style={styles.emailChild} />
          <Image
            style={[styles.emailIcon, styles.qrCodePosition]}
            contentFit="cover"
            source={require("../assets/mobile-icon.png")}
          />
        </Pressable>
        <View style={[styles.code, styles.codePosition2]}>
          <Text style={[styles.email1, styles.email1Typo]}>Code</Text>
          <View style={styles.emailChild} />
          <View style={styles.qrCodePosition}>
            <View style={[styles.qrCodeChild, styles.codeLayout]} />
            <View style={[styles.qrCodeItem, styles.codeLayout]} />
            <View style={[styles.qrCodeInner, styles.codeLayout]} />
            <View style={[styles.rectangleView, styles.qrCodeChild5Bg]} />
            <View style={styles.qrCodeChild1} />
            <View style={[styles.qrCodeChild2, styles.codeChildPosition2]} />
            <View style={[styles.qrCodeChild3, styles.codeChildPosition2]} />
            <View style={[styles.qrCodeChild4, styles.codeChildPosition2]} />
            <View style={[styles.qrCodeChild5, styles.qrCodeChild5Bg]} />
            <View style={[styles.qrCodeChild6, styles.codeChildPosition1]} />
            <View style={[styles.qrCodeChild7, styles.codeChildPosition]} />
            <View style={[styles.qrCodeChild8, styles.codeChildPosition]} />
            <View style={[styles.qrCodeChild9, styles.codeChildPosition1]} />
          </View>
        </View>
      </View>
      <Text
        style={[styles.bothPartiesWill, styles.offYourNextTypo]}
      >{`Both parties will be receiving
the same offers.`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  shareAndEarnLayout: {
    overflow: "hidden",
    width: "100%",
  },
  iconPosition: {
    height: "100%",
    bottom: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  barPosition: {
    bottom: "27.56%",
    top: "46.02%",
    height: "26.42%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  shareEarnFlexBox: {
    justifyContent: "center",
    textAlign: "center",
  },
  email1Typo: {
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    lineHeight: 26,
    letterSpacing: 0.3,
    fontSize: FontSize.ptBoldHeader5CardTitles_size,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.lightPrimary,
    position: "absolute",
  },
  illustrationIconLayout: {
    bottom: "12.86%",
    top: "15.71%",
    width: "23.81%",
    height: "71.43%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  offersPosition: {
    left: "10.67%",
    width: "78.67%",
  },
  offerPosition: {
    height: "18.18%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  offYourNextTypo: {
    lineHeight: 22,
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    letterSpacing: 0.3,
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  codePosition2: {
    width: "23.08%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
  },
  qrCodePosition: {
    bottom: "56.99%",
    top: "21.51%",
    height: "21.51%",
    left: "33.33%",
    right: "33.33%",
    width: "33.33%",
    position: "absolute",
  },
  codeLayout: {
    borderWidth: 2,
    borderColor: "#6c7c93",
    borderStyle: "solid",
    width: "35%",
    height: "35%",
    position: "absolute",
  },
  qrCodeChild5Bg: {
    backgroundColor: Color.lightIcon,
    height: "10%",
    position: "absolute",
  },
  codeChildPosition2: {
    left: "45%",
    right: "45%",
    width: "10%",
    backgroundColor: Color.lightIcon,
    position: "absolute",
  },
  codeChildPosition1: {
    left: "90%",
    width: "10%",
    backgroundColor: Color.lightIcon,
    right: "0%",
    position: "absolute",
  },
  codeChildPosition: {
    right: "20%",
    width: "15%",
    backgroundColor: Color.lightIcon,
    left: "65%",
    position: "absolute",
  },
  back: {
    top: 0,
    left: 0,
    width: 375,
    height: 40,
    position: "absolute",
    backgroundColor: Color.mainWhite,
  },
  fill17Icon: {
    opacity: 0,
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    right: "0%",
    width: "100%",
  },
  iconsnetworkstatusBar: {
    width: "4.53%",
    right: "17.07%",
    left: "78.4%",
  },
  iconswifistatusBar: {
    width: "3.82%",
    right: "11.73%",
    left: "84.44%",
  },
  iconsbuttarystatusBar: {
    height: "27.5%",
    width: "6.47%",
    right: "3.8%",
    bottom: "27.5%",
    left: "89.73%",
    top: "45%",
    position: "absolute",
  },
  text: {
    marginTop: -5.91,
    top: "50%",
    left: "8.27%",
    fontSize: FontSize.sFSubheadlineSemibold_size,
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: FontFamily.sFProDisplay,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  statusBarlight: {
    bottom: "0%",
    right: "0%",
    overflow: "hidden",
    width: "100%",
  },
  statusBardark1: {
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  statusBardark: {
    height: "4.93%",
    bottom: "95.07%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  shareEarn: {
    height: "2.46%",
    top: "9.85%",
    fontSize: FontSize.size_7xl,
    letterSpacing: 0.5,
    lineHeight: 32,
    fontWeight: "800",
    fontFamily: FontFamily.manropeExtraBold,
    alignItems: "center",
    display: "flex",
    color: Color.lightPrimary,
    justifyContent: "center",
    textAlign: "center",
    left: "16%",
    width: "68%",
    position: "absolute",
  },
  earnExcitingBenefits: {
    height: "4.68%",
    top: "17.24%",
    left: "16%",
    width: "68%",
    fontWeight: "600",
    lineHeight: 26,
    letterSpacing: 0.3,
  },
  illustrationIcon: {
    right: "70.95%",
    left: "5.24%",
  },
  illustrationIcon1: {
    left: "33.33%",
    right: "33.33%",
    width: "33.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  illustrationIcon2: {
    left: "76.19%",
    right: "0%",
  },
  illustrations: {
    height: "17.24%",
    width: "112%",
    top: "26.85%",
    right: "-6.13%",
    bottom: "55.91%",
    left: "-5.87%",
    position: "absolute",
  },
  offYourNext: {
    height: "50%",
    width: "88.14%",
    top: "30%",
    left: "11.86%",
    fontSize: FontSize.ptBoldHeader5CardTitles_size,
    lineHeight: 22,
    color: Color.lightPrimary,
    textAlign: "left",
  },
  verifiedIcon: {
    width: "6.78%",
    right: "93.22%",
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  offer01: {
    bottom: "81.82%",
    top: "0%",
  },
  offer02: {
    top: "40.91%",
    bottom: "40.91%",
  },
  offer03: {
    top: "81.82%",
    bottom: "0%",
  },
  offers: {
    height: "13.55%",
    top: "49.01%",
    right: "10.67%",
    bottom: "37.44%",
    position: "absolute",
  },
  email1: {
    height: "13.98%",
    top: "86.02%",
    left: "0%",
    width: "100%",
  },
  emailChild: {
    height: "64.52%",
    bottom: "35.48%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.backgroundBackground1,
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  emailIcon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  email: {
    right: "76.92%",
    left: "0%",
  },
  mobile: {
    right: "38.46%",
    left: "38.46%",
  },
  qrCodeChild: {
    bottom: "65%",
    borderColor: "#6c7c93",
    borderStyle: "solid",
    width: "35%",
    top: "0%",
    right: "65%",
    left: "0%",
  },
  qrCodeItem: {
    top: "65%",
    right: "65%",
    left: "0%",
    borderColor: "#6c7c93",
    borderStyle: "solid",
    width: "35%",
    bottom: "0%",
  },
  qrCodeInner: {
    left: "65%",
    bottom: "65%",
    borderColor: "#6c7c93",
    borderStyle: "solid",
    width: "35%",
    top: "0%",
    right: "0%",
  },
  rectangleView: {
    width: "20%",
    right: "55%",
    left: "25%",
    bottom: "45%",
    top: "45%",
  },
  qrCodeChild1: {
    right: "85%",
    width: "15%",
    backgroundColor: Color.lightIcon,
    bottom: "45%",
    height: "10%",
    top: "45%",
    left: "0%",
    position: "absolute",
  },
  qrCodeChild2: {
    height: "30%",
    top: "25%",
    bottom: "45%",
  },
  qrCodeChild3: {
    bottom: "85%",
    height: "15%",
    top: "0%",
  },
  qrCodeChild4: {
    top: "65%",
    height: "35%",
    bottom: "0%",
  },
  qrCodeChild5: {
    width: "25%",
    top: "90%",
    right: "10%",
    left: "65%",
    bottom: "0%",
  },
  qrCodeChild6: {
    top: "65%",
    height: "35%",
    bottom: "0%",
  },
  qrCodeChild7: {
    bottom: "20%",
    height: "15%",
    top: "65%",
  },
  qrCodeChild8: {
    bottom: "45%",
    height: "10%",
    top: "45%",
  },
  qrCodeChild9: {
    bottom: "45%",
    height: "10%",
    top: "45%",
  },
  code: {
    left: "76.92%",
    right: "0%",
  },
  options: {
    height: "11.45%",
    width: "69.33%",
    top: "69.95%",
    right: "15.2%",
    bottom: "18.6%",
    left: "15.47%",
    position: "absolute",
  },
  bothPartiesWill: {
    height: "4.06%",
    top: "88.79%",
    fontSize: FontSize.boldNormalHeading_size,
    color: Color.darkDarkSecondaryText,
    left: "10.67%",
    width: "78.67%",
    justifyContent: "center",
    textAlign: "center",
    lineHeight: 22,
  },
  shareAndEarn: {
    flex: 1,
    height: 812,
    backgroundColor: Color.mainWhite,
  },
});

export default ShareAndEarn1;
