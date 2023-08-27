import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

const InviteFriendMobile1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.inviteFriendMobile}>
      <View style={[styles.statusBardark, styles.statusPosition]}>
        <View style={styles.back} />
        <View style={[styles.statusBardark1, styles.iconLayout1]}>
          <View style={[styles.statusBarlight, styles.iconLayout1]}>
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
      <Pressable
        style={styles.arrowRightLarge}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/arrow-right-large.png")}
        />
      </Pressable>
      <Text style={styles.inviteFriend}>Invite Friend</Text>
      <Text style={[styles.shareTheWord, styles.successTypo]}>
        Share the word and earn exciting benefits.
      </Text>
      <Image
        style={styles.illustrationIcon}
        contentFit="cover"
        source={require("../assets/illustration.png")}
      />
      <View style={[styles.name, styles.btnPosition]}>
        <View style={[styles.txtBox, styles.txtBorder]} />
        <Image
          style={[styles.verifiedIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/verified.png")}
        />
        <Text style={[styles.josephSimon, styles.emailClr]}>Joseph Simon</Text>
        <Text style={[styles.friendsName, styles.josephSimonTypo]}>
          Friend’s Name
        </Text>
      </View>
      <View style={[styles.mobile, styles.btnPosition]}>
        <View style={[styles.txtBox1, styles.txtBorder]} />
        <Text style={[styles.email, styles.emailTypo]}>Email</Text>
        <Text style={[styles.email1, styles.emailTypo]}>Email</Text>
        <Text style={[styles.success, styles.successTypo]}>Success !</Text>
        <Image
          style={[styles.verifiedIcon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/verified1.png")}
        />
      </View>
      <View style={[styles.btn, styles.btnPosition]}>
        <View style={styles.sendInviteWrapper}>
          <Text style={styles.sendInvite}>Send Invite</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusPosition: {
    right: "0%",
    top: "0%",
    left: "0%",
  },
  iconLayout1: {
    height: "100%",
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
  successTypo: {
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    letterSpacing: 0.3,
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  btnPosition: {
    left: "11.2%",
    right: "10.13%",
    width: "78.67%",
    position: "absolute",
  },
  txtBorder: {
    borderWidth: 1,
    borderColor: "#ebebeb",
    borderStyle: "solid",
    backgroundColor: Color.backgroundBackground4,
    borderRadius: Border.br_7xs,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  emailClr: {
    color: Color.lightSecondary,
    left: "5.08%",
  },
  josephSimonTypo: {
    height: "19.12%",
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    lineHeight: 26,
    letterSpacing: 0.3,
    fontSize: FontSize.ptBoldHeader5CardTitles_size,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  emailTypo: {
    height: "13.68%",
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    lineHeight: 26,
    letterSpacing: 0.3,
    fontSize: FontSize.ptBoldHeader5CardTitles_size,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
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
    width: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
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
    bottom: "0%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  statusBardark1: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  statusBardark: {
    bottom: "95.07%",
    left: "0%",
    height: "4.93%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  arrowRightLarge: {
    left: 27,
    top: 80,
    width: 20,
    height: 20,
    position: "absolute",
  },
  inviteFriend: {
    height: "2.46%",
    top: "9.85%",
    fontSize: FontSize.size_7xl,
    letterSpacing: 0.5,
    lineHeight: 32,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.manropeExtraBold,
    fontWeight: "800",
    left: "16%",
    width: "68%",
    alignItems: "center",
    color: Color.lightPrimary,
    position: "absolute",
  },
  shareTheWord: {
    height: "4.68%",
    top: "17.24%",
    lineHeight: 26,
    fontWeight: "600",
    fontSize: FontSize.ptBoldHeader5CardTitles_size,
    justifyContent: "center",
    textAlign: "center",
    color: Color.lightPrimary,
    left: "16%",
    width: "68%",
  },
  illustrationIcon: {
    top: 218,
    left: 69,
    width: 238,
    height: 176,
    position: "absolute",
  },
  txtBox: {
    height: "58.82%",
    top: "41.18%",
    bottom: "0%",
  },
  verifiedIcon: {
    height: "29.41%",
    width: "6.78%",
    top: "55.88%",
    right: "5.08%",
    bottom: "14.71%",
    left: "88.14%",
  },
  josephSimon: {
    width: "84.07%",
    top: "60.29%",
    height: "19.12%",
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    lineHeight: 26,
    letterSpacing: 0.3,
    fontSize: FontSize.ptBoldHeader5CardTitles_size,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  friendsName: {
    color: Color.lightPrimary,
    left: "0%",
    top: "0%",
    width: "100%",
  },
  name: {
    height: "8.37%",
    top: "53.33%",
    bottom: "38.3%",
  },
  txtBox1: {
    height: "42.11%",
    top: "29.47%",
    bottom: "28.42%",
  },
  email: {
    width: "37.29%",
    top: "43.16%",
    color: Color.lightSecondary,
    left: "5.08%",
  },
  email1: {
    color: Color.lightPrimary,
    left: "0%",
    top: "0%",
    width: "100%",
  },
  success: {
    height: "10.53%",
    width: "91.86%",
    top: "87.37%",
    left: "8.14%",
    fontSize: FontSize.boldNormalHeading_size,
    lineHeight: 22,
    color: Color.highlightsHighlight2,
    textAlign: "left",
  },
  verifiedIcon1: {
    height: "14.74%",
    width: "4.75%",
    top: "85.26%",
    right: "95.25%",
    bottom: "0%",
    left: "0%",
  },
  mobile: {
    height: "11.7%",
    top: "65.39%",
    bottom: "22.91%",
  },
  sendInvite: {
    lineHeight: 20,
    color: Color.mainWhite,
    letterSpacing: 0.3,
    fontSize: FontSize.ptBoldHeader5CardTitles_size,
    textAlign: "center",
    fontFamily: FontFamily.manropeExtraBold,
    fontWeight: "800",
  },
  sendInviteWrapper: {
    flexDirection: "row",
  },
  btn: {
    top: "82.02%",
    bottom: "13.05%",
    borderRadius: Border.br_11xl,
    backgroundColor: Color.lightPrimary,
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
    right: "10.13%",
    width: "78.67%",
    height: "4.93%",
  },
  inviteFriendMobile: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.mainWhite,
  },
});

export default InviteFriendMobile1;
