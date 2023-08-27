import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const QRCodeScanSuccess01 = () => {
  return (
    <View style={[styles.qrCodeScanSuccess01, styles.statusBarlightLayout]}>
      <View style={[styles.statusBardark, styles.avatar5Position]}>
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
      <Image
        style={styles.arrowRightLargeIcon}
        contentFit="cover"
        source={require("../assets/arrow-right-large.png")}
      />
      <Text style={[styles.success, styles.successFlexBox]}>Success</Text>
      <Text style={styles.youWereInvited}>
        You were invited by Natalie, You both will receive.
      </Text>
      <View style={[styles.user, styles.optionPosition]}>
        <View style={[styles.statusBardark1, styles.iconPosition]}>
          <View style={[styles.accountsChild, styles.iconPosition]} />
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
      <View style={[styles.option01, styles.optionPosition]}>
        <Text style={[styles.offYourNext, styles.natalieTypo]}>
          15% off your next order.
        </Text>
        <Image
          style={[styles.verifiedIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/verified3.png")}
        />
      </View>
      <View style={[styles.option02, styles.optionPosition]}>
        <Text style={[styles.offYourNext, styles.natalieTypo]}>
          3 Free Shipping.
        </Text>
        <Image
          style={[styles.verifiedIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/verified3.png")}
        />
      </View>
      <View style={[styles.option03, styles.optionPosition]}>
        <Image
          style={[styles.verifiedIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/verified3.png")}
        />
        <Text style={[styles.offYourNext, styles.natalieTypo]}>
          7 days of premium membership.
        </Text>
      </View>
      <View style={[styles.btn, styles.optionPosition]}>
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
  statusBarlightLayout: {
    overflow: "hidden",
    width: "100%",
  },
  avatar5Position: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  iconPosition: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
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
  optionPosition: {
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
    right: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  statusBardark1: {
    right: "0%",
    position: "absolute",
    width: "100%",
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
  youWereInvited: {
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
    right: "0%",
    position: "absolute",
    width: "100%",
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
    top: "34.11%",
    bottom: "56.03%",
    right: "10.67%",
    left: "10.67%",
    width: "78.67%",
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
  },
  option01: {
    top: "48.77%",
    bottom: "48.77%",
    right: "10.67%",
    left: "10.67%",
    width: "78.67%",
    position: "absolute",
    height: "2.46%",
  },
  option02: {
    top: "54.31%",
    bottom: "43.23%",
    right: "10.67%",
    left: "10.67%",
    width: "78.67%",
    position: "absolute",
    height: "2.46%",
  },
  option03: {
    top: "59.85%",
    bottom: "37.68%",
    right: "10.67%",
    left: "10.67%",
    width: "78.67%",
    position: "absolute",
    height: "2.46%",
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
    top: "67.36%",
    bottom: "27.71%",
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
    top: "77.22%",
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
  qrCodeScanSuccess01: {
    flex: 1,
    height: 812,
    backgroundColor: Color.mainWhite,
  },
});

export default QRCodeScanSuccess01;
