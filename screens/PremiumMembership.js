import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const PremiumMembership = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.premiumMembership}>
      <View style={styles.statusBardark}>
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
      <Text style={[styles.premium, styles.premiumFlexBox]}>Premium</Text>
      <Image
        style={styles.illustrationIcon}
        contentFit="cover"
        source={require("../assets/illustration7.png")}
      />
      <Text
        style={[styles.getTheBest, styles.getTheBestTypo]}
      >{`Get the best services with a
Premium Membership.`}</Text>
      <View style={[styles.freeShipping, styles.btnPosition]}>
        <Text style={[styles.freeShippingOnContainer, styles.getTheBestTypo]}>
          <Text style={styles.freeShippingOnContainer1}>
            <Text style={styles.freeShipping1}>{`Free Shipping
`}</Text>
            <Text style={styles.onEligibleOrders}>On eligible orders</Text>
          </Text>
        </Text>
        <Image
          style={[styles.freeShippingChild, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-32.png")}
        />
      </View>
      <Image
        style={[styles.lineIcon, styles.lineIconLayout]}
        contentFit="cover"
        source={require("../assets/line1.png")}
      />
      <View style={[styles.bonusDiscounts, styles.btnPosition]}>
        <Text style={[styles.freeShippingOnContainer, styles.getTheBestTypo]}>
          <Text style={styles.freeShippingOnContainer1}>
            <Text style={styles.freeShipping1}>{`Bonus Discounts
`}</Text>
            <Text style={styles.onEligibleOrders}>Extra 5% OFF</Text>
          </Text>
        </Text>
        <Image
          style={[styles.freeShippingChild, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-321.png")}
        />
      </View>
      <Image
        style={[styles.lineIcon1, styles.lineIconLayout]}
        contentFit="cover"
        source={require("../assets/line1.png")}
      />
      <View style={[styles.earlySale, styles.btnPosition]}>
        <Text style={[styles.freeShippingOnContainer, styles.getTheBestTypo]}>
          <Text style={styles.freeShippingOnContainer1}>
            <Text style={styles.freeShipping1}>{`Early Sale Access
`}</Text>
            <Text style={styles.onEligibleOrders}>Get 2 hour early access</Text>
          </Text>
        </Text>
        <Image
          style={[styles.freeShippingChild, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-322.png")}
        />
      </View>
      <Pressable
        style={[styles.btn, styles.btnLayout]}
        onPress={() => navigation.navigate("PremiumMembershipPricing")}
      >
        <View style={styles.continueWrapper}>
          <Text style={[styles.continue, styles.continueTypo]}>Continue</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.termsOfServiceContainer, styles.btnPosition]}
        onPress={() => navigation.navigate("TermsOfService")}
      >
        <Text style={[styles.termsOfService, styles.btnLayout]}>
          Terms of Service
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  statusPosition: {
    bottom: "0%",
    left: "0%",
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
  premiumFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  getTheBestTypo: {
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    lineHeight: 26,
    display: "flex",
  },
  btnPosition: {
    left: "10.67%",
    position: "absolute",
  },
  lineIconLayout: {
    height: 1,
    width: 375,
    left: 0,
    position: "absolute",
  },
  btnLayout: {
    width: "78.67%",
    alignItems: "center",
  },
  continueTypo: {
    letterSpacing: 0.3,
    fontSize: FontSize.ptBoldHeader5CardTitles_size,
    textAlign: "center",
  },
  back: {
    top: 0,
    height: 40,
    width: 375,
    left: 0,
    position: "absolute",
    backgroundColor: Color.mainWhite,
  },
  fill17Icon: {
    opacity: 0,
    bottom: "0%",
    left: "0%",
    position: "absolute",
    height: "100%",
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
    height: "100%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    width: "100%",
    overflow: "hidden",
  },
  statusBardark1: {
    height: "100%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    width: "100%",
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
  premium: {
    fontSize: FontSize.size_7xl,
    letterSpacing: 0.5,
    lineHeight: 32,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    color: Color.lightPrimary,
    fontFamily: FontFamily.manropeExtraBold,
    fontWeight: "800",
    left: "16%",
    width: "68%",
    height: "2.46%",
    top: "9.85%",
  },
  illustrationIcon: {
    top: 76,
    left: 255,
    width: 20,
    height: 28,
    position: "absolute",
  },
  getTheBest: {
    height: "4.68%",
    top: "17.24%",
    letterSpacing: 0.3,
    fontSize: FontSize.ptBoldHeader5CardTitles_size,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    color: Color.lightPrimary,
    left: "16%",
    width: "68%",
    fontWeight: "600",
    lineHeight: 26,
  },
  freeShipping1: {
    fontSize: FontSize.ptBoldHeader5CardTitles_size,
    color: Color.lightPrimary,
  },
  onEligibleOrders: {
    fontSize: FontSize.boldNormalHeading_size,
    color: Color.lightSecondary,
  },
  freeShippingOnContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  freeShippingOnContainer: {
    width: "65%",
    left: "35%",
    alignItems: "center",
    position: "absolute",
    textAlign: "left",
    height: "100%",
    top: "0%",
    fontWeight: "600",
    lineHeight: 26,
  },
  freeShippingChild: {
    height: "102.5%",
    width: "27.33%",
    top: "-2.5%",
    right: "72.67%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  freeShipping: {
    top: "32.27%",
    bottom: "57.88%",
    right: "9.33%",
    width: "80%",
    height: "9.85%",
    left: "10.67%",
  },
  lineIcon: {
    top: 362,
  },
  bonusDiscounts: {
    top: "47.04%",
    bottom: "43.1%",
    right: "9.33%",
    width: "80%",
    height: "9.85%",
    left: "10.67%",
  },
  lineIcon1: {
    top: 482,
  },
  earlySale: {
    top: "61.82%",
    bottom: "28.33%",
    right: "9.33%",
    width: "80%",
    height: "9.85%",
    left: "10.67%",
  },
  continue: {
    lineHeight: 20,
    color: Color.mainWhite,
    fontFamily: FontFamily.manropeExtraBold,
    fontWeight: "800",
    letterSpacing: 0.3,
  },
  continueWrapper: {
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
    left: "10.67%",
    position: "absolute",
    height: "4.93%",
    width: "78.67%",
  },
  termsOfService: {
    height: "1.6%",
    color: Color.cornflowerblue,
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    lineHeight: 26,
    display: "flex",
    letterSpacing: 0.3,
    fontSize: FontSize.ptBoldHeader5CardTitles_size,
    textAlign: "center",
    justifyContent: "center",
  },
  termsOfServiceContainer: {
    top: "91.87%",
  },
  premiumMembership: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.mainWhite,
  },
});

export default PremiumMembership;
