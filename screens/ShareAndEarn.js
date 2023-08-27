import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const ShareAndEarn = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.shareAndEarn, styles.shareAndEarnLayout]}>
      <View style={[styles.statusBardark, styles.statusLayout]}>
        <View style={styles.back} />
        <View style={[styles.statusBardark1, styles.iconPosition]}>
          <View style={[styles.statusBarlight, styles.iconPosition]}>
            <Image
              style={[styles.fill17Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/fill-17.png")}
            />
            <Image
              style={[styles.iconsnetworkstatusBar, styles.barLayout]}
              contentFit="cover"
              source={require("../assets/iconsnetworkstatus-bar.png")}
            />
            <Image
              style={[styles.iconswifistatusBar, styles.barLayout]}
              contentFit="cover"
              source={require("../assets/iconswifistatus-bar.png")}
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
      <Text style={styles.shareEarn}>{`Share & Earn`}</Text>
      <Text style={styles.earnExcitingBenefits}>
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
      <View style={[styles.offers, styles.btnPosition]}>
        <View style={[styles.offer01, styles.offerPosition]}>
          <Text style={[styles.offYourNext, styles.skip1Layout]}>
            15% off your next order.
          </Text>
          <Image
            style={[styles.verifiedIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/verified2.png")}
          />
        </View>
        <View style={[styles.offer02, styles.offerPosition]}>
          <Text style={[styles.offYourNext, styles.skip1Layout]}>
            3 Free Shipping.
          </Text>
          <Image
            style={[styles.verifiedIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/verified2.png")}
          />
        </View>
        <View style={styles.offer03}>
          <Text style={[styles.daysOfPremium, styles.skip1Layout]}>
            7 days of premium membership
          </Text>
          <Image
            style={[styles.verifiedIcon2, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/verified2.png")}
          />
        </View>
      </View>
      <View style={styles.options}>
        <View style={[styles.email, styles.codePosition2]}>
          <Text style={[styles.email1, styles.skip1Typo]}>Email</Text>
          <View style={[styles.emailChild, styles.statusLayout]} />
          <Image
            style={[styles.emailIcon, styles.qrCodePosition]}
            contentFit="cover"
            source={require("../assets/email.png")}
          />
        </View>
        <View style={[styles.mobile, styles.codePosition2]}>
          <Text style={[styles.email1, styles.skip1Typo]}>Mobile</Text>
          <View style={[styles.emailChild, styles.statusLayout]} />
          <Image
            style={[styles.emailIcon, styles.qrCodePosition]}
            contentFit="cover"
            source={require("../assets/mobile-icon.png")}
          />
        </View>
        <View style={[styles.code, styles.codePosition2]}>
          <Text style={[styles.email1, styles.skip1Typo]}>Code</Text>
          <View style={[styles.emailChild, styles.statusLayout]} />
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
      <Pressable
        style={[styles.skip, styles.btnPosition]}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={[styles.skip1, styles.btnLayout]}>Skip</Text>
      </Pressable>
      <Pressable
        style={[styles.btn, styles.btnLayout]}
        onPress={() => navigation.navigate("InviteFriendMobile")}
      >
        <View style={styles.inviteAndEarnWrapper}>
          <Text style={styles.inviteAndEarn}>Invite and earn</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  shareAndEarnLayout: {
    overflow: "hidden",
    width: "100%",
  },
  statusLayout: {
    width: "100%",
    right: "0%",
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
  barLayout: {
    bottom: "27.56%",
    height: "26.42%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
  btnPosition: {
    left: "10.67%",
    position: "absolute",
  },
  offerPosition: {
    right: "2.96%",
    width: "97.04%",
    height: "18.18%",
    left: "0%",
    position: "absolute",
  },
  skip1Layout: {
    lineHeight: 22,
    fontSize: FontSize.boldNormalHeading_size,
  },
  codePosition2: {
    width: "23.08%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
  },
  skip1Typo: {
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    letterSpacing: 0.3,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
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
  btnLayout: {
    width: "78.67%",
    alignItems: "center",
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
    top: "46.02%",
    right: "17.07%",
    left: "78.4%",
  },
  iconswifistatusBar: {
    width: "3.82%",
    top: "46.01%",
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
    fontFamily: FontFamily.sFProDisplay,
    textAlign: "left",
    fontWeight: "500",
    color: Color.black,
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
    bottom: "95.54%",
    left: "0%",
    right: "0%",
    top: "0%",
    height: "4.46%",
    position: "absolute",
  },
  shareEarn: {
    height: "2.23%",
    top: "8.93%",
    fontSize: FontSize.size_7xl,
    letterSpacing: 0.5,
    lineHeight: 32,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.lightPrimary,
    fontFamily: FontFamily.poppinsMedium,
    left: "16%",
    width: "68%",
    fontWeight: "500",
    position: "absolute",
  },
  earnExcitingBenefits: {
    height: "4.24%",
    top: "15.63%",
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 26,
    letterSpacing: 0.3,
    fontSize: FontSize.ptBoldHeader5CardTitles_size,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.lightPrimary,
    left: "16%",
    width: "68%",
    position: "absolute",
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
    height: "15.63%",
    width: "112%",
    top: "24.33%",
    right: "-6.13%",
    bottom: "60.04%",
    left: "-5.87%",
    position: "absolute",
  },
  offYourNext: {
    width: "88.14%",
    left: "11.86%",
    top: "30%",
    height: "50%",
    fontSize: FontSize.boldNormalHeading_size,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 0.3,
    alignItems: "center",
    display: "flex",
    color: Color.lightPrimary,
    textAlign: "left",
    position: "absolute",
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
  daysOfPremium: {
    width: "88.49%",
    left: "11.51%",
    top: "30%",
    height: "50%",
    fontSize: FontSize.boldNormalHeading_size,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 0.3,
    alignItems: "center",
    display: "flex",
    color: Color.lightPrimary,
    textAlign: "left",
    position: "absolute",
  },
  verifiedIcon2: {
    width: "6.58%",
    right: "93.42%",
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  offer03: {
    top: "81.82%",
    height: "18.18%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  offers: {
    height: "12.28%",
    width: "81.07%",
    top: "44.42%",
    right: "8.27%",
    bottom: "43.3%",
  },
  email1: {
    height: "13.98%",
    top: "86.02%",
    lineHeight: 26,
    fontWeight: "600",
    fontSize: FontSize.ptBoldHeader5CardTitles_size,
    alignItems: "center",
    color: Color.lightPrimary,
    left: "0%",
    position: "absolute",
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
    height: "10.38%",
    width: "69.33%",
    top: "63.39%",
    right: "15.2%",
    bottom: "26.23%",
    left: "15.47%",
    position: "absolute",
  },
  skip1: {
    height: "3.68%",
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    letterSpacing: 0.3,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    lineHeight: 22,
    fontSize: FontSize.boldNormalHeading_size,
    color: Color.black,
    width: "78.67%",
  },
  skip: {
    top: "89.73%",
  },
  inviteAndEarn: {
    lineHeight: 20,
    color: Color.mainWhite,
    letterSpacing: 0.3,
    fontSize: FontSize.ptBoldHeader5CardTitles_size,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  inviteAndEarnWrapper: {
    flexDirection: "row",
  },
  btn: {
    top: "83.15%",
    right: "10.67%",
    bottom: "12.39%",
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colourMain2,
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_3xs,
    left: "10.67%",
    position: "absolute",
    height: "4.46%",
  },
  shareAndEarn: {
    flex: 1,
    height: 896,
    backgroundColor: Color.mainWhite,
  },
});

export default ShareAndEarn;
