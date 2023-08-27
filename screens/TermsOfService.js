import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const TermsOfService = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.termsOfService}>
      <View style={styles.statusBardark}>
        <View style={styles.back} />
        <View style={styles.statusPosition}>
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
      <Pressable
        style={styles.arrowRightLarge}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/arrow-right-large.png")}
        />
      </Pressable>
      <Text style={[styles.termsOfService1, styles.iDisagree1FlexBox]}>
        Terms of Service
      </Text>
      <Image
        style={[styles.illustrationIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/illustration5.png")}
      />
      <Text style={[styles.theTermsOfContainer, styles.iDisagree1Typo]}>
        <Text
          style={styles.theTermsOf}
        >{`The Terms of Service Agreement is mainly used for legal purposes by companies which provide `}</Text>
        <Text style={styles.softwareOrServices}>software or services</Text>
        <Text
          style={styles.theTermsOf}
        >{`, such as web browsers, e-commerce, web search engines, social media, and transport services.

A legitimate terms-of-service agreement is legally binding and may be subject to change.[2] Companies can enforce the terms by refusing service. Customers can enforce by filing a lawsuit or arbitration case if they can show they were...`}</Text>
      </Text>
      <Pressable
        style={[styles.btn, styles.btnPosition]}
        onPress={() => navigation.navigate("PremiumMembershipPricing")}
      >
        <View style={styles.iAgreeWrapper}>
          <Text style={[styles.iAgree, styles.iAgreeTypo]}>I agree</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.iDisagree, styles.btnPosition]}
        onPress={() => navigation.navigate("PremiumMembership")}
      >
        <Text style={[styles.iDisagree1, styles.iAgreeTypo]}>I disagree.</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  statusPosition: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
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
  iDisagree1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  iDisagree1Typo: {
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    lineHeight: 26,
    width: "78.67%",
  },
  btnPosition: {
    left: "10.67%",
    position: "absolute",
  },
  iAgreeTypo: {
    fontSize: FontSize.ptBoldHeader5CardTitles_size,
    letterSpacing: 0.3,
    textAlign: "center",
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
    position: "absolute",
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
    overflow: "hidden",
  },
  statusBardark: {
    bottom: "95.07%",
    left: "0%",
    right: "0%",
    top: "0%",
    height: "4.93%",
    position: "absolute",
    width: "100%",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    width: "100%",
  },
  arrowRightLarge: {
    left: "7.2%",
    right: "87.47%",
    bottom: "87.68%",
    width: "5.33%",
    height: "2.46%",
    top: "9.85%",
    position: "absolute",
  },
  termsOfService1: {
    width: "68%",
    left: "16%",
    fontSize: FontSize.size_7xl,
    letterSpacing: 0.5,
    lineHeight: 32,
    color: Color.lightPrimary,
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.manropeExtraBold,
    fontWeight: "800",
    height: "2.46%",
    top: "9.85%",
    position: "absolute",
  },
  illustrationIcon: {
    height: "14.2%",
    width: "30.67%",
    top: "17.24%",
    right: "34.67%",
    bottom: "68.56%",
    left: "34.67%",
    position: "absolute",
  },
  theTermsOf: {
    color: Color.lightSecondary,
  },
  softwareOrServices: {
    color: Color.cornflowerblue,
  },
  theTermsOfContainer: {
    height: "40.76%",
    top: "36.33%",
    fontSize: FontSize.boldNormalHeading_size,
    letterSpacing: 0.3,
    fontWeight: "600",
    lineHeight: 26,
    left: "10.67%",
    textAlign: "left",
    position: "absolute",
  },
  iAgree: {
    lineHeight: 20,
    color: Color.mainWhite,
    fontFamily: FontFamily.manropeExtraBold,
    fontWeight: "800",
    fontSize: FontSize.ptBoldHeader5CardTitles_size,
  },
  iAgreeWrapper: {
    flexDirection: "row",
  },
  btn: {
    top: "82.02%",
    right: "10.67%",
    bottom: "13.05%",
    borderRadius: Border.br_11xl,
    backgroundColor: Color.lightPrimary,
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_3xs,
    width: "78.67%",
    left: "10.67%",
    alignItems: "center",
    height: "4.93%",
  },
  iDisagree1: {
    height: "1.6%",
    color: Color.cornflowerblue,
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    lineHeight: 26,
    width: "78.67%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  iDisagree: {
    top: "91.87%",
  },
  termsOfService: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.mainWhite,
  },
});

export default TermsOfService;
