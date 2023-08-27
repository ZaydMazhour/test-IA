import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const InviteFriendMobile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.inviteFriendMobile}>
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
      <Pressable
        style={[styles.arrowRightLarge, styles.phoneBookIconLayout]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/arrow-right-large.png")}
        />
      </Pressable>
      <Text style={styles.inviteFriend}>Invite Friend</Text>
      <Text style={styles.shareTheWord}>
        Share the word and earn exciting benefits.
      </Text>
      <Image
        style={styles.illustrationIcon}
        contentFit="cover"
        source={require("../assets/illustration.png")}
      />
      <View style={[styles.name, styles.namePosition]}>
        <View style={styles.txtBox} />
        <Text style={styles.josephSimon}>Joseph Simon</Text>
        <Text style={styles.friendsName}>Friend’s Name</Text>
      </View>
      <View style={[styles.mobile, styles.namePosition]}>
        <View style={[styles.txtBox1, styles.txtPosition]} />
        <View style={[styles.txtBox2, styles.txtPosition]} />
        <Text style={[styles.text1, styles.textTypo]}>+61</Text>
        <Text style={[styles.text2, styles.textTypo]}>8170000560</Text>
        <Text style={[styles.mobileNumber, styles.successTypo]}>
          Mobile Number
        </Text>
        <Text style={[styles.success, styles.successTypo]}>Success !</Text>
        <Image
          style={[styles.verifiedIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/verified1.png")}
        />
      </View>
      <View style={[styles.btn, styles.btnLayout]}>
        <View style={styles.sendInviteWrapper}>
          <Text style={styles.sendInvite}>Send Invite</Text>
        </View>
      </View>
      <Pressable
        style={[styles.btn1, styles.btnLayout]}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={styles.sendInviteWrapper}>
          <Text style={styles.sendInvite}>Continue</Text>
        </View>
      </Pressable>
      <Text style={styles.addContact}>Add contact</Text>
      <Image
        style={[styles.phoneBookIcon, styles.phoneBookIconLayout]}
        contentFit="cover"
        source={require("../assets/phonebook.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    bottom: "0%",
    left: "0%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
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
  phoneBookIconLayout: {
    height: 20,
    width: 20,
    position: "absolute",
  },
  namePosition: {
    left: "11.2%",
    right: "10.13%",
    width: "78.67%",
    position: "absolute",
  },
  txtPosition: {
    bottom: "28.42%",
    top: "29.47%",
    height: "42.11%",
    borderWidth: 1,
    borderColor: "#ebebeb",
    borderStyle: "solid",
    left: "0%",
    position: "absolute",
  },
  textTypo: {
    top: "43.16%",
    height: "13.68%",
    color: Color.lightSecondary,
    lineHeight: 26,
    letterSpacing: 0.3,
    fontSize: FontSize.ptBoldHeader5CardTitles_size,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "left",
    fontWeight: "500",
    position: "absolute",
  },
  successTypo: {
    fontWeight: "600",
    fontSize: FontSize.boldNormalHeading_size,
    letterSpacing: 0.3,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  btnLayout: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_11xl,
    backgroundColor: Color.colourMain2,
    borderRadius: Border.br_11xl,
    left: "11.2%",
    right: "10.13%",
    width: "78.67%",
    alignItems: "center",
    height: "4.46%",
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
    left: "0%",
    height: "100%",
    width: "100%",
    right: "0%",
    top: "0%",
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
    fontFamily: FontFamily.sFProDisplay,
    textAlign: "left",
    color: Color.black,
    fontWeight: "500",
    position: "absolute",
  },
  statusBarlight: {
    height: "100%",
    width: "100%",
    right: "0%",
    top: "0%",
    bottom: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  statusBardark1: {
    height: "100%",
    width: "100%",
    right: "0%",
    top: "0%",
    bottom: "0%",
    position: "absolute",
  },
  statusBardark: {
    bottom: "95.54%",
    left: "0%",
    height: "4.46%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  arrowRightLarge: {
    left: 27,
    top: 80,
  },
  inviteFriend: {
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
    left: "16%",
    width: "68%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  shareTheWord: {
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
    top: 218,
    left: 69,
    width: 238,
    height: 176,
    position: "absolute",
  },
  txtBox: {
    height: "58.82%",
    top: "41.18%",
    borderWidth: 1,
    borderColor: "#ebebeb",
    borderStyle: "solid",
    backgroundColor: Color.backgroundBackground4,
    borderRadius: Border.br_7xs,
    bottom: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  josephSimon: {
    width: "84.07%",
    top: "60.29%",
    color: Color.lightSecondary,
    fontSize: FontSize.boldNormalHeading_size,
    left: "5.08%",
    height: "19.12%",
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 26,
    letterSpacing: 0.3,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  friendsName: {
    fontSize: FontSize.boldNormalHeading_size,
    height: "19.12%",
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 26,
    letterSpacing: 0.3,
    alignItems: "center",
    display: "flex",
    color: Color.lightPrimary,
    textAlign: "left",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  name: {
    height: "7.59%",
    top: "48.33%",
    bottom: "44.08%",
  },
  txtBox1: {
    backgroundColor: Color.backgroundBackground4,
    borderRadius: Border.br_7xs,
    bottom: "28.42%",
    top: "29.47%",
    height: "42.11%",
    right: "0%",
    width: "100%",
  },
  txtBox2: {
    width: "20%",
    right: "80%",
    borderTopLeftRadius: Border.br_7xs,
    borderBottomLeftRadius: Border.br_7xs,
    backgroundColor: Color.mainWhite,
  },
  text1: {
    width: "9.83%",
    left: "5.08%",
    top: "43.16%",
  },
  text2: {
    width: "74.92%",
    left: "25.08%",
  },
  mobileNumber: {
    fontFamily: FontFamily.manropeSemiBold,
    height: "13.68%",
    fontWeight: "600",
    lineHeight: 26,
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
    lineHeight: 22,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.highlightsHighlight2,
  },
  verifiedIcon: {
    height: "14.74%",
    width: "4.75%",
    top: "85.26%",
    right: "95.25%",
    bottom: "0%",
    left: "0%",
  },
  mobile: {
    height: "10.6%",
    top: "59.26%",
    bottom: "30.13%",
  },
  sendInvite: {
    lineHeight: 20,
    color: Color.mainWhite,
    letterSpacing: 0.3,
    fontSize: FontSize.ptBoldHeader5CardTitles_size,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  sendInviteWrapper: {
    flexDirection: "row",
  },
  btn: {
    top: "74.33%",
    bottom: "21.21%",
  },
  btn1: {
    top: "80.69%",
    bottom: "14.84%",
  },
  addContact: {
    top: 473,
    left: 257,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "left",
    color: Color.black,
    fontWeight: "500",
    position: "absolute",
  },
  phoneBookIcon: {
    top: 471,
    left: 237,
    overflow: "hidden",
  },
  inviteFriendMobile: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.mainWhite,
  },
});

export default InviteFriendMobile;
