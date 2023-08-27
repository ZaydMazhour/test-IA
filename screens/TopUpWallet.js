import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const TopUpWallet = () => {
  return (
    <View style={styles.topUpWallet}>
      <Image
        style={[styles.bgIcon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/bg8.png")}
      />
      <Image
        style={[styles.backdropIcon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/backdrop2.png")}
      />
      <View style={[styles.backButtonParent, styles.parentFlexBox]}>
        <Image
          style={styles.backButtonIcon}
          contentFit="cover"
          source={require("../assets/back-button1.png")}
        />
        <Text style={styles.scheduleADelivery}>Top Up Wallet</Text>
      </View>
      <View style={styles.topUpWalletChild} />
      <View style={[styles.keyboardnumeric, styles.iconPosition1]}>
        <View style={[styles.base, styles.basePosition]} />
        <View style={[styles.blank, styles.basePosition]} />
        <Image
          style={[styles.deleteIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/delete.png")}
        />
        <Image
          style={styles.backIcon}
          contentFit="cover"
          source={require("../assets/back.png")}
        />
        <View style={[styles.view, styles.viewPosition6]}>
          <View style={[styles.view1, styles.viewPosition5]} />
          <Text style={styles.text}>0</Text>
        </View>
        <View style={[styles.view2, styles.viewPosition4]}>
          <View style={[styles.view3, styles.iconPosition]} />
          <Text style={[styles.text1, styles.textPosition1]}>9</Text>
        </View>
        <View style={[styles.view4, styles.viewPosition4]}>
          <View style={[styles.view1, styles.viewPosition5]} />
          <Text style={[styles.text2, styles.textPosition1]}>8</Text>
        </View>
        <View style={[styles.view6, styles.viewPosition3]}>
          <View style={[styles.view7, styles.viewPosition2]} />
          <Text style={[styles.text3, styles.textPosition1]}>7</Text>
        </View>
        <View style={[styles.view8, styles.viewPosition1]}>
          <View style={[styles.view3, styles.iconPosition]} />
          <Text style={[styles.text4, styles.textPosition]}>6</Text>
        </View>
        <View style={[styles.view10, styles.viewPosition1]}>
          <View style={[styles.view1, styles.viewPosition5]} />
          <Text style={[styles.text5, styles.textPosition]}>5</Text>
        </View>
        <View style={[styles.view12, styles.viewPosition1]}>
          <View style={[styles.view7, styles.viewPosition2]} />
          <Text style={[styles.text6, styles.textPosition]}>4</Text>
        </View>
        <View style={[styles.view14, styles.viewPosition]}>
          <Image
            style={[styles.icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/3.png")}
          />
          <Text style={[styles.text7, styles.textPosition1]}>3</Text>
        </View>
        <View style={[styles.view15, styles.viewPosition]}>
          <View style={[styles.base, styles.basePosition]} />
          <Text style={[styles.text8, styles.textPosition1]}>2</Text>
        </View>
        <View style={[styles.view17, styles.viewPosition]}>
          <View style={[styles.view18, styles.viewPosition2]} />
          <Text style={[styles.text3, styles.textPosition1]}>1</Text>
        </View>
      </View>
      <View style={[styles.walletBalanceParent, styles.parentFlexBox]}>
        <Text style={styles.walletBalance}>Wallet balance:</Text>
        <Text style={[styles.n45000, styles.n000Typo]}>N450.00</Text>
      </View>
      <View style={styles.topUpWalletItem} />
      <View style={[styles.topUpWalletInner, styles.rectangleViewBorder]} />
      <Text style={[styles.n000, styles.n000Typo]}>
        <Text style={styles.n}>N</Text>
        <Text style={styles.text10}>0.00</Text>
      </Text>
      <View style={styles.password}>
        <View style={[styles.info, styles.basePosition]}>
          <Text style={[styles.saveCard, styles.basePosition]}>Save Card</Text>
        </View>
      </View>
      <View style={[styles.rectangleView, styles.rectangleViewBorder]} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition1: {
    left: 0,
    position: "absolute",
  },
  parentFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  basePosition: {
    left: "0%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  viewPosition6: {
    left: "32.8%",
    right: "32.8%",
    width: "34.4%",
  },
  viewPosition5: {
    top: "0.93%",
    height: "99.07%",
  },
  viewPosition4: {
    bottom: "25%",
    top: "50%",
    height: "25%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    left: "0.41%",
    width: "99.59%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  textPosition1: {
    marginTop: -15.5,
    textAlign: "center",
    color: Color.gray_400,
    fontFamily: FontFamily.headingH4,
    fontWeight: "500",
    lineHeight: 32,
    letterSpacing: 0,
    fontSize: FontSize.headingH4_size,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  viewPosition3: {
    right: "67.2%",
    width: "32.8%",
    left: "0%",
  },
  viewPosition2: {
    right: "0.41%",
    width: "99.59%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
    backgroundColor: Color.mainWhite,
  },
  viewPosition1: {
    bottom: "50%",
    top: "25%",
    height: "25%",
    position: "absolute",
    overflow: "hidden",
  },
  textPosition: {
    marginTop: -15.31,
    textAlign: "center",
    color: Color.gray_400,
    fontFamily: FontFamily.headingH4,
    fontWeight: "500",
    lineHeight: 32,
    letterSpacing: 0,
    fontSize: FontSize.headingH4_size,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  viewPosition: {
    bottom: "75%",
    height: "25%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  n000Typo: {
    fontSize: FontSize.size_8xl,
    textAlign: "left",
    fontFamily: FontFamily.boldNormalHeading,
    fontWeight: "700",
  },
  rectangleViewBorder: {
    borderColor: "#000",
    borderStyle: "solid",
    position: "absolute",
  },
  bgIcon: {
    top: 0,
    width: 1032,
    height: 976,
  },
  backdropIcon: {
    top: 85,
    width: 0,
    height: 0,
  },
  backButtonIcon: {
    width: 21,
    height: 12,
  },
  scheduleADelivery: {
    marginLeft: 39,
    textAlign: "left",
    color: Color.notBlack,
    fontFamily: FontFamily.boldNormalHeading,
    fontWeight: "700",
    fontSize: FontSize.h3Header320ptMediumRoboto_size,
  },
  backButtonParent: {
    top: 45,
    left: 42,
    flexDirection: "row",
  },
  topUpWalletChild: {
    top: 128,
    left: -9,
    backgroundColor: Color.whitesmoke_700,
    width: 433,
    height: 419,
    display: "none",
    position: "absolute",
  },
  base: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
    backgroundColor: Color.mainWhite,
  },
  blank: {
    height: "24.77%",
    width: "32.67%",
    top: "75.23%",
    right: "67.33%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.mainWhite,
  },
  deleteIcon: {
    left: "67.2%",
    width: "32.8%",
    right: "0%",
    top: "75%",
    height: "25%",
    bottom: "0%",
    position: "absolute",
  },
  backIcon: {
    width: 25,
    height: 19,
  },
  view1: {
    left: "0%",
    position: "absolute",
    bottom: "0%",
    right: "0%",
    width: "100%",
    backgroundColor: Color.mainWhite,
  },
  text: {
    marginTop: -16,
    marginLeft: -8.21,
    textAlign: "center",
    color: Color.gray_400,
    fontFamily: FontFamily.headingH4,
    fontWeight: "500",
    lineHeight: 32,
    letterSpacing: 0,
    fontSize: FontSize.headingH4_size,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  view: {
    top: "75%",
    height: "25%",
    bottom: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  view3: {
    top: "0.93%",
    height: "99.07%",
    backgroundColor: Color.mainWhite,
  },
  text1: {
    marginLeft: -7,
  },
  view2: {
    left: "67.2%",
    width: "32.8%",
    right: "0%",
  },
  text2: {
    marginLeft: -6.71,
  },
  view4: {
    left: "32.8%",
    right: "32.8%",
    width: "34.4%",
  },
  view7: {
    top: "0.93%",
    height: "99.07%",
  },
  text3: {
    marginLeft: -3.9,
  },
  view6: {
    bottom: "25%",
    top: "50%",
    height: "25%",
    position: "absolute",
    overflow: "hidden",
  },
  text4: {
    marginLeft: -7,
  },
  view8: {
    left: "67.2%",
    width: "32.8%",
    right: "0%",
  },
  text5: {
    marginLeft: -7.5,
  },
  view10: {
    left: "32.8%",
    right: "32.8%",
    width: "34.4%",
  },
  text6: {
    marginLeft: -8.34,
    width: 19,
  },
  view12: {
    right: "67.2%",
    width: "32.8%",
    left: "0%",
  },
  icon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    top: "0%",
    height: "100%",
  },
  text7: {
    marginLeft: -7.34,
  },
  view14: {
    left: "67.2%",
    width: "32.8%",
    right: "0%",
  },
  text8: {
    marginLeft: -6.81,
  },
  view15: {
    left: "32.8%",
    right: "32.8%",
    width: "34.4%",
  },
  view18: {
    top: "0%",
    height: "100%",
  },
  view17: {
    right: "67.2%",
    width: "32.8%",
    left: "0%",
  },
  keyboardnumeric: {
    top: 600,
    width: 414,
    height: 296,
  },
  walletBalance: {
    letterSpacing: 0.1,
    lineHeight: 18,
    fontFamily: FontFamily.ptRegularNormalText,
    display: "flex",
    justifyContent: "center",
    width: 150,
    height: 36,
    color: Color.mainAshColour,
    textAlign: "center",
    fontSize: FontSize.h3Header320ptMediumRoboto_size,
    alignItems: "center",
  },
  n45000: {
    color: Color.notBlack,
  },
  walletBalanceParent: {
    top: 119,
    left: 126,
    width: 162,
    height: 63,
  },
  topUpWalletItem: {
    top: 435,
    left: 40,
    backgroundColor: Color.yellow,
    width: 334,
    height: 4,
    position: "absolute",
  },
  topUpWalletInner: {
    top: 396,
    left: 43,
    borderRightWidth: 0.7,
    width: 1,
    height: 38,
  },
  n: {
    color: Color.mainAshColour,
  },
  text10: {
    color: Color.notBlack,
  },
  n000: {
    top: "44.42%",
    left: "12.8%",
    position: "absolute",
  },
  saveCard: {
    fontSize: FontSize.boldNormalHeading_size,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.black,
    top: "0%",
    textAlign: "left",
  },
  info: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
  },
  password: {
    height: "2.34%",
    width: "17.63%",
    top: "56.58%",
    right: "42.27%",
    bottom: "41.07%",
    left: "40.1%",
    position: "absolute",
  },
  rectangleView: {
    top: 512,
    left: 127,
    borderRadius: Border.br_8xs,
    borderWidth: 1,
    width: 17,
    height: 16,
  },
  topUpWallet: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.mainWhite,
  },
});

export default TopUpWallet;
