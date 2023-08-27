import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Padding, Border, Color } from "../GlobalStyles";

const PremiumMembershipPricing = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.premiumMembershipPricing}>
      <View style={styles.statusBardark}>
        <View style={[styles.back, styles.backLayout]} />
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
      <Text style={[styles.joinPremium, styles.joinPremiumFlexBox]}>
        Join Premium
      </Text>
      <Image
        style={styles.illustrationIcon}
        contentFit="cover"
        source={require("../assets/illustration6.png")}
      />
      <Text
        style={[styles.oneSimpleMembership, styles.termsOfServiceTypo]}
      >{`One simple membership,
many benefits. Join now.`}</Text>
      <View style={[styles.months, styles.monthsPosition]}>
        <View style={[styles.monthsChild, styles.childLayout]} />
        <Image
          style={[styles.monthsItem, styles.itemLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-37.png")}
        />
        <Text
          style={[
            styles.monthsCanelAnytimeContainer,
            styles.anytimeContainerPosition,
          ]}
        >
          <Text style={styles.monthsCanelAnytimeContainer1}>
            <Text style={styles.text1}>{`$20.49
`}</Text>
            <Text
              style={[styles.monthsCanelAnytime, styles.termsOfServiceTypo]}
            >
              3 months, canel anytime.
            </Text>
          </Text>
        </Text>
      </View>
      <View style={[styles.months1, styles.monthsLayout]}>
        <View style={[styles.monthsInner, styles.monthsLayout]} />
        <Image
          style={[styles.ellipseIcon, styles.itemLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-371.png")}
        />
        <Image
          style={styles.monthsChild1}
          contentFit="cover"
          source={require("../assets/ellipse-38.png")}
        />
        <Text style={[styles.monthsOneTimeContainer, styles.oneLayout]}>
          <Text style={styles.monthsCanelAnytimeContainer1}>
            <Text style={styles.text1}>{`$35.00
`}</Text>
            <Text
              style={[styles.monthsCanelAnytime, styles.termsOfServiceTypo]}
            >
              6 months, one time.
            </Text>
          </Text>
        </Text>
        <View style={[styles.tag, styles.tagSpaceBlock]}>
          <Text style={[styles.save5, styles.joinClr]}>Save $5</Text>
        </View>
        <View style={[styles.selected, styles.tag1Position]} />
      </View>
      <View style={[styles.yearly, styles.monthsPosition]}>
        <View style={[styles.yearlyChild, styles.childLayout]} />
        <Image
          style={[styles.yearlyItem, styles.itemLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-37.png")}
        />
        <Text
          style={[
            styles.yearlyCancelAnytimeContainer,
            styles.anytimeContainerPosition,
          ]}
        >
          <Text style={styles.monthsCanelAnytimeContainer1}>
            <Text style={styles.text1}>{`$79.49
`}</Text>
            <Text
              style={[styles.monthsCanelAnytime, styles.termsOfServiceTypo]}
            >
              Yearly, cancel anytime.
            </Text>
          </Text>
        </Text>
        <View style={[styles.tag1, styles.tag1Position]}>
          <Text style={[styles.save5, styles.joinClr]}>Popular</Text>
        </View>
      </View>
      <View style={[styles.btn, styles.btnPosition]}>
        <View style={styles.joinWrapper}>
          <Text style={[styles.join, styles.joinClr]}>Join</Text>
        </View>
      </View>
      <Pressable
        style={[styles.termsOfServiceContainer, styles.btnPosition]}
        onPress={() => navigation.navigate("TermsOfService")}
      >
        <Text style={[styles.termsOfService, styles.btnLayout]}>
          Terms of Service
        </Text>
      </Pressable>
      <Text style={[styles.yourSubscriptionWas, styles.save5Typo]}>
        Your subscription was successful
      </Text>
      <Image
        style={[styles.verifiedIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/verified1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backLayout: {
    width: 375,
    position: "absolute",
  },
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
  joinPremiumFlexBox: {
    justifyContent: "center",
    textAlign: "center",
  },
  termsOfServiceTypo: {
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    fontSize: FontSize.ptBoldHeader5CardTitles_size,
  },
  monthsPosition: {
    width: 255,
    left: 40,
    position: "absolute",
  },
  childLayout: {
    display: "none",
    left: -40,
    height: 85,
    borderWidth: 1,
    borderColor: "#ebebeb",
    borderStyle: "solid",
    width: 375,
    position: "absolute",
  },
  itemLayout: {
    height: 20,
    width: 20,
    position: "absolute",
  },
  anytimeContainerPosition: {
    left: "15.69%",
    width: "84.31%",
    lineHeight: 26,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  monthsLayout: {
    height: 85,
    left: 0,
  },
  oneLayout: {
    lineHeight: 26,
    display: "flex",
  },
  tagSpaceBlock: {
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_3xs,
    borderRadius: Border.br_7xs,
    flexDirection: "row",
    justifyContent: "center",
  },
  joinClr: {
    color: Color.mainWhite,
    lineHeight: 20,
    letterSpacing: 0.3,
    textAlign: "center",
  },
  tag1Position: {
    backgroundColor: Color.cornflowerblue,
    top: 0,
    position: "absolute",
  },
  btnPosition: {
    left: "10.67%",
    position: "absolute",
  },
  btnLayout: {
    width: "78.67%",
    alignItems: "center",
  },
  save5Typo: {
    fontSize: FontSize.boldNormalHeading_size,
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
  },
  back: {
    height: 40,
    left: 0,
    top: 0,
    width: 375,
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
  joinPremium: {
    fontSize: FontSize.size_7xl,
    letterSpacing: 0.5,
    lineHeight: 32,
    alignItems: "center",
    position: "absolute",
    display: "flex",
    color: Color.lightPrimary,
    fontFamily: FontFamily.manropeExtraBold,
    fontWeight: "800",
    textAlign: "center",
    left: "16%",
    width: "68%",
    height: "2.46%",
    top: "9.85%",
  },
  illustrationIcon: {
    top: 140,
    left: 155,
    width: 65,
    height: 93,
    position: "absolute",
  },
  oneSimpleMembership: {
    height: "4.68%",
    top: "33.62%",
    lineHeight: 26,
    display: "flex",
    letterSpacing: 0.3,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    position: "absolute",
    color: Color.lightPrimary,
    left: "16%",
    width: "68%",
    fontWeight: "600",
  },
  monthsChild: {
    top: -20,
  },
  monthsItem: {
    top: 13,
    left: 0,
  },
  text1: {
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    color: Color.lightPrimary,
  },
  monthsCanelAnytime: {
    color: Color.lightSecondary,
  },
  monthsCanelAnytimeContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  monthsCanelAnytimeContainer: {
    height: "100%",
    top: "0%",
    left: "15.69%",
    width: "84.31%",
  },
  months: {
    top: 371,
    height: 45,
  },
  monthsInner: {
    backgroundColor: Color.backgroundBackground4,
    borderWidth: 1,
    borderColor: "#ebebeb",
    borderStyle: "solid",
    height: 85,
    width: 375,
    top: 0,
    position: "absolute",
  },
  ellipseIcon: {
    top: 33,
    left: 40,
    width: 20,
  },
  monthsChild1: {
    top: 38,
    left: 45,
    width: 10,
    height: 10,
    position: "absolute",
  },
  monthsOneTimeContainer: {
    height: "52.94%",
    width: "57.33%",
    top: "23.53%",
    left: "21.33%",
    alignItems: "center",
    position: "absolute",
    textAlign: "left",
  },
  save5: {
    fontSize: FontSize.boldNormalHeading_size,
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
  },
  tag: {
    top: 17,
    left: 152,
    backgroundColor: Color.highlightsHighlight1,
    width: 68,
    position: "absolute",
  },
  selected: {
    width: 4,
    height: 85,
    left: 0,
  },
  months1: {
    top: 435,
    width: 375,
    position: "absolute",
  },
  yearlyChild: {
    top: -17,
  },
  yearlyItem: {
    top: 16,
    left: 0,
  },
  yearlyCancelAnytimeContainer: {
    height: "93.75%",
    top: "6.25%",
  },
  tag1: {
    left: 110,
    width: 73,
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_3xs,
    borderRadius: Border.br_7xs,
    flexDirection: "row",
    justifyContent: "center",
  },
  yearly: {
    top: 536,
    height: 48,
  },
  join: {
    fontSize: FontSize.ptBoldHeader5CardTitles_size,
    lineHeight: 20,
    fontFamily: FontFamily.manropeExtraBold,
    fontWeight: "800",
  },
  joinWrapper: {
    flexDirection: "row",
  },
  btn: {
    top: "79.31%",
    right: "10.67%",
    bottom: "15.76%",
    borderRadius: Border.br_11xl,
    backgroundColor: Color.lightPrimary,
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_3xs,
    width: "78.67%",
    alignItems: "center",
    height: "4.93%",
    left: "10.67%",
  },
  termsOfService: {
    height: "1.6%",
    color: Color.cornflowerblue,
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    fontSize: FontSize.ptBoldHeader5CardTitles_size,
    lineHeight: 26,
    display: "flex",
    letterSpacing: 0.3,
    justifyContent: "center",
    textAlign: "center",
  },
  termsOfServiceContainer: {
    top: "89.16%",
  },
  yourSubscriptionWas: {
    height: "1.23%",
    width: "72.27%",
    top: "86.45%",
    left: "19.73%",
    lineHeight: 22,
    color: Color.highlightsHighlight2,
    letterSpacing: 0.3,
    alignItems: "center",
    position: "absolute",
    display: "flex",
    textAlign: "left",
  },
  verifiedIcon: {
    height: "1.72%",
    width: "3.73%",
    top: "86.21%",
    right: "82.93%",
    bottom: "12.07%",
    left: "13.33%",
    position: "absolute",
  },
  premiumMembershipPricing: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.mainWhite,
  },
});

export default PremiumMembershipPricing;
