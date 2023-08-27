import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const QRCodeScanSuccess2 = () => {
  return (
    <View style={styles.qrCodeScanSuccess2}>
      <View style={[styles.statusBardark, styles.avatar5Position]}>
        <View style={styles.back} />
        <View style={[styles.statusBardark1, styles.statusPosition]}>
          <View style={[styles.statusBarlight, styles.statusPosition]}>
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
      <Image
        style={styles.arrowRightLargeIcon}
        contentFit="cover"
        source={require("../assets/arrow-right-large.png")}
      />
      <Text style={[styles.success, styles.successFlexBox]}>Success</Text>
      <Text style={styles.youAreInvited}>
        You are invited by Natalie, You both will receive.
      </Text>
      <View style={[styles.user, styles.btnPosition]}>
        <View style={[styles.statusBardark1, styles.statusPosition]}>
          <View style={[styles.accountsChild, styles.statusPosition]} />
          <View style={styles.avatar5Parent}>
            <View style={[styles.avatar5, styles.avatar5Position]}>
              <Image
                style={styles.subtractIcon}
                contentFit="cover"
                source={require("../assets/subtract1.png")}
              />
              <Text style={styles.de}>DE</Text>
              <Image
                style={[styles.avatar5Child, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-23.png")}
              />
            </View>
            <Text
              style={[styles.natalie92samplecom, styles.inviteMoreFriendsTypo]}
            >
              natalie92@sample.com
            </Text>
            <Text style={[styles.natalie, styles.natalieTypo]}>Natalie</Text>
          </View>
        </View>
      </View>
      <Text style={[styles.freeShipping, styles.freeShippingPosition]}>
        3 Free Shipping
      </Text>
      <Image
        style={[styles.illustrationIcon, styles.illustrationIconLayout]}
        contentFit="cover"
        source={require("../assets/illustration8.png")}
      />
      <Text style={[styles.daysPremium, styles.daysPremiumPosition]}>{`7 Days
Premium`}</Text>
      <Image
        style={[styles.illustrationIcon1, styles.daysPremiumPosition]}
        contentFit="cover"
        source={require("../assets/illustration9.png")}
      />
      <View style={[styles.btn, styles.btnPosition]}>
        <View style={styles.createAccountWrapper}>
          <Text style={styles.createAccount}>Create account</Text>
        </View>
      </View>
      <Text
        style={[styles.inviteMoreFriends, styles.inviteMoreFriendsTypo]}
      >{`Invite more friends to earn
exciting offers.`}</Text>
      <Image
        style={[styles.lineIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/line2.png")}
      />
      <Text
        style={[styles.ourTermsOf, styles.natalieTypo]}
      >{`Our Terms of Use & Privacy Policy.`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar5Position: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  statusPosition: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
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
  successFlexBox: {
    justifyContent: "center",
    textAlign: "center",
  },
  btnPosition: {
    left: "10.67%",
    width: "78.67%",
  },
  inviteMoreFriendsTypo: {
    color: Color.lightSecondary,
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    letterSpacing: 0.3,
    position: "absolute",
  },
  natalieTypo: {
    lineHeight: 22,
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    letterSpacing: 0.3,
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  freeShippingPosition: {
    left: "14.13%",
    width: "30.67%",
    position: "absolute",
  },
  illustrationIconLayout: {
    bottom: "44.21%",
    top: "41.63%",
    height: "14.16%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  daysPremiumPosition: {
    left: "55.47%",
    width: "30.67%",
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
    right: "0%",
    top: "0%",
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
    top: "45%",
    right: "3.8%",
    bottom: "27.5%",
    left: "89.73%",
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
    position: "absolute",
    overflow: "hidden",
  },
  statusBardark1: {
    position: "absolute",
  },
  statusBardark: {
    bottom: "95.07%",
    right: "0%",
    height: "4.93%",
    width: "100%",
  },
  arrowRightLargeIcon: {
    width: "5.33%",
    right: "87.47%",
    bottom: "87.68%",
    left: "7.2%",
    top: "9.85%",
    height: "2.46%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  success: {
    fontSize: FontSize.size_7xl,
    letterSpacing: 0.5,
    lineHeight: 32,
    alignItems: "center",
    display: "flex",
    color: Color.lightPrimary,
    fontFamily: FontFamily.manropeExtraBold,
    fontWeight: "800",
    left: "16%",
    width: "68%",
    justifyContent: "center",
    textAlign: "center",
    top: "9.85%",
    height: "2.46%",
    position: "absolute",
  },
  youAreInvited: {
    top: "17.24%",
    fontFamily: FontFamily.manropeSemiBold,
    lineHeight: 26,
    height: "4.68%",
    fontWeight: "600",
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
  accountsChild: {
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
    borderColor: "#ebebeb",
    borderWidth: 1,
    position: "absolute",
  },
  subtractIcon: {
    width: 40,
    height: 40,
  },
  de: {
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.lightColorsPurple,
    display: "none",
    lineHeight: 20,
    fontWeight: "600",
    letterSpacing: 0.3,
    fontSize: FontSize.ptBoldHeader5CardTitles_size,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  avatar5Child: {
    height: "20%",
    width: "20%",
    bottom: "80%",
    left: "80%",
    right: "0%",
    top: "0%",
    maxWidth: "100%",
  },
  avatar5: {
    height: "88.89%",
    width: "18.02%",
    right: "81.98%",
    bottom: "11.11%",
  },
  natalie92samplecom: {
    top: "55.56%",
    fontSize: FontSize.boldNormalHeading_size,
    left: "27.03%",
    textAlign: "left",
    lineHeight: 20,
  },
  natalie: {
    height: "44.44%",
    width: "58.56%",
    left: "27.03%",
    textAlign: "left",
    fontSize: FontSize.ptBoldHeader5CardTitles_size,
    lineHeight: 22,
    color: Color.lightPrimary,
    top: "0%",
  },
  avatar5Parent: {
    height: "56.25%",
    width: "75.25%",
    top: "25%",
    right: "17.97%",
    bottom: "18.75%",
    left: "6.78%",
    position: "absolute",
  },
  user: {
    height: "9.85%",
    top: "26.85%",
    bottom: "63.3%",
    right: "10.67%",
    left: "10.67%",
    width: "78.67%",
    position: "absolute",
  },
  freeShipping: {
    top: "58.25%",
    height: "4.8%",
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
  },
  illustrationIcon: {
    right: "55.2%",
    left: "14.13%",
    width: "30.67%",
    position: "absolute",
  },
  daysPremium: {
    top: "58.25%",
    height: "4.8%",
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
  },
  illustrationIcon1: {
    right: "13.87%",
    bottom: "44.21%",
    top: "41.63%",
    height: "14.16%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  createAccount: {
    color: Color.mainWhite,
    lineHeight: 20,
    letterSpacing: 0.3,
    fontSize: FontSize.ptBoldHeader5CardTitles_size,
    textAlign: "center",
    fontFamily: FontFamily.manropeExtraBold,
    fontWeight: "800",
  },
  createAccountWrapper: {
    flexDirection: "row",
  },
  btn: {
    top: "67.98%",
    bottom: "27.09%",
    borderRadius: Border.br_11xl,
    backgroundColor: Color.lightPrimary,
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_3xs,
    right: "10.67%",
    left: "10.67%",
    width: "78.67%",
    position: "absolute",
    alignItems: "center",
    height: "4.93%",
  },
  inviteMoreFriends: {
    top: "77.83%",
    left: "10.67%",
    width: "78.67%",
    color: Color.lightSecondary,
    lineHeight: 26,
    fontSize: FontSize.ptBoldHeader5CardTitles_size,
    height: "4.68%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
  },
  lineIcon: {
    height: "0.12%",
    width: "28%",
    top: "86.76%",
    right: "36%",
    bottom: "13.12%",
    left: "36%",
  },
  ourTermsOf: {
    height: "1.23%",
    width: "76%",
    top: "91.75%",
    left: "12%",
    color: Color.darkDarkSecondaryText,
    fontSize: FontSize.boldNormalHeading_size,
    justifyContent: "center",
    textAlign: "center",
    lineHeight: 22,
  },
  qrCodeScanSuccess2: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.mainWhite,
  },
});

export default QRCodeScanSuccess2;
