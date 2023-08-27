import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const AddCreditDebitCard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.addCreditDebitCard}>
      <Image
        style={[styles.bgIcon, styles.bgIconPosition]}
        contentFit="cover"
        source={require("../assets/bg9.png")}
      />
      <Image
        style={[styles.backdropIcon, styles.credit11Layout]}
        contentFit="cover"
        source={require("../assets/backdrop4.png")}
      />
      <Image
        style={styles.backdropIcon1}
        contentFit="cover"
        source={require("../assets/backdrop2.png")}
      />
      <Text style={[styles.enterPickupAnd, styles.enterPickupAndTypo]}>
        Enter Pickup and Dropoff
      </Text>
      <View style={styles.backButtonParent}>
        <Image
          style={styles.backButtonIcon}
          contentFit="cover"
          source={require("../assets/back-button1.png")}
        />
        <Text style={[styles.scheduleADelivery, styles.enterPickupAndTypo]}>
          Card payment
        </Text>
      </View>
      <View style={styles.addCreditDebitCardChild} />
      <View style={[styles.groupParent, styles.groupParentLayout]}>
        <View style={[styles.triviaTokenCardWrapper, styles.groupParentLayout]}>
          <View
            style={[styles.triviaTokenCardWrapper, styles.groupParentLayout]}
          >
            <View style={styles.cardRectangle} />
            <Text style={styles.text}>★</Text>
            <Image
              style={styles.starBackgroundIcon}
              contentFit="cover"
              source={require("../assets/star-background.png")}
            />
            <View style={[styles.cardRectangle1, styles.infoPosition]} />
            <Pressable
              style={styles.addFunds}
              onPress={() => navigation.navigate("TopUpWallet")}
            >
              <Text style={[styles.addFunds1, styles.text1Clr]}>Add funds</Text>
            </Pressable>
            <Text style={[styles.text1, styles.text1Typo]}>{`60,000    `}</Text>
            <Text style={[styles.parcelCash, styles.text1Typo]}>
              Parcel Cash
            </Text>
          </View>
        </View>
        <Image
          style={[styles.mcSymbolIcon, styles.mcSymbolIconPosition]}
          contentFit="cover"
          source={require("../assets/mc-symbol.png")}
        />
      </View>
      <Text style={[styles.cards, styles.cardsTypo]}>4 Cards</Text>
      <Text style={[styles.dasunBrickTower, styles.mcSymbolIconPosition]}>
        Payment Methods
      </Text>
      <Image
        style={styles.keyboardArrowRight1Icon}
        contentFit="cover"
        source={require("../assets/keyboardarrowright-14.png")}
      />
      <View style={[styles.password, styles.passwordPosition]}>
        <View style={styles.infoPosition}>
          <Text style={[styles.addCredit, styles.text2Position]}>
            Add credit / debit card
          </Text>
        </View>
      </View>
      <View style={[styles.password1, styles.passwordPosition]}>
        <View style={styles.infoPosition}>
          <Text style={[styles.addCredit, styles.text2Position]}>Cash</Text>
        </View>
      </View>
      <View style={[styles.password2, styles.credit11Position]}>
        <View style={styles.infoPosition}>
          <Text style={[styles.text2, styles.text2Position]}>**** 5314</Text>
        </View>
      </View>
      <Image
        style={[styles.cash11, styles.cash11Layout]}
        contentFit="cover"
        source={require("../assets/cash-1-11.png")}
      />
      <Image
        style={[styles.credit11, styles.credit11Position]}
        contentFit="cover"
        source={require("../assets/credit-1-1.png")}
      />
      <Image
        style={[styles.bankCard1Icon, styles.cash11Layout]}
        contentFit="cover"
        source={require("../assets/bankcard-11.png")}
      />
      <Image
        style={styles.addCreditDebitCardItem}
        contentFit="cover"
        source={require("../assets/ellipse-60.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bgIconPosition: {
    top: 0,
    left: 0,
  },
  credit11Layout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  enterPickupAndTypo: {
    textAlign: "left",
    fontWeight: "700",
  },
  groupParentLayout: {
    height: 198,
    width: 331,
    position: "absolute",
  },
  infoPosition: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  text1Clr: {
    color: Color.whitesmoke_200,
    fontSize: FontSize.ptBoldHeader5CardTitles_size,
  },
  text1Typo: {
    left: "8.76%",
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.boldNormalHeading,
    fontWeight: "700",
    position: "absolute",
  },
  mcSymbolIconPosition: {
    top: "50%",
    position: "absolute",
  },
  cardsTypo: {
    fontFamily: FontFamily.ptRegularNormalText,
    display: "flex",
    textAlign: "left",
  },
  passwordPosition: {
    left: "21.74%",
    height: "2.34%",
  },
  text2Position: {
    color: Color.black,
    left: "0%",
    top: "0%",
    textAlign: "left",
    fontSize: FontSize.boldNormalHeading_size,
    position: "absolute",
  },
  credit11Position: {
    top: "52.9%",
    position: "absolute",
  },
  cash11Layout: {
    height: 16,
    left: 46,
    width: 16,
    position: "absolute",
    overflow: "hidden",
  },
  bgIcon: {
    width: 965,
    height: 976,
    left: 0,
    position: "absolute",
  },
  backdropIcon: {
    top: 83,
    right: 0,
    bottom: 2,
    left: 0,
    position: "absolute",
  },
  backdropIcon1: {
    top: 85,
    width: 0,
    height: 0,
    left: 0,
    position: "absolute",
  },
  enterPickupAnd: {
    top: "24.44%",
    color: Color.mainWhite,
    fontFamily: FontFamily.boldNormalHeading,
    textAlign: "left",
    fontWeight: "700",
    fontSize: FontSize.boldNormalHeading_size,
    left: "9.66%",
    position: "absolute",
  },
  backButtonIcon: {
    width: 21,
    height: 12,
  },
  scheduleADelivery: {
    fontSize: FontSize.h3Header320ptMediumRoboto_size,
    color: Color.notBlack,
    marginLeft: 39,
    fontFamily: FontFamily.boldNormalHeading,
    textAlign: "left",
    fontWeight: "700",
  },
  backButtonParent: {
    top: 45,
    left: 42,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  addCreditDebitCardChild: {
    top: 128,
    left: -9,
    backgroundColor: Color.whitesmoke_700,
    width: 433,
    height: 419,
    display: "none",
    position: "absolute",
  },
  cardRectangle: {
    height: "100.18%",
    width: "100.91%",
    bottom: "-0.14%",
    left: "-0.91%",
    backgroundColor: Color.colourMain2,
    borderRadius: Border.br_3xs,
    right: "0%",
    top: "-0.04%",
    position: "absolute",
  },
  text: {
    height: "0.14%",
    width: "0.08%",
    top: "26%",
    left: "99.75%",
    fontSize: 81,
    letterSpacing: 0,
    fontFamily: FontFamily.sFSubheadlineSemibold,
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
    lineHeight: 18,
    alignItems: "center",
    fontWeight: "700",
    position: "absolute",
  },
  starBackgroundIcon: {
    height: "110%",
    width: "65.67%",
    right: "-32.54%",
    bottom: "-9.96%",
    left: "66.87%",
    borderRadius: Border.br_8xs,
    top: "-0.04%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  cardRectangle1: {
    borderRadius: Border.br_3xs,
  },
  addFunds1: {
    height: "15%",
    width: "58.51%",
    fontFamily: FontFamily.ptRegularNormalText,
    display: "flex",
    textAlign: "left",
    alignItems: "center",
  },
  addFunds: {
    left: "7.55%",
    top: "72.31%",
    position: "absolute",
  },
  text1: {
    height: "12.65%",
    width: "82.01%",
    top: "43.51%",
    color: Color.whitesmoke_200,
    fontSize: FontSize.ptBoldHeader5CardTitles_size,
  },
  parcelCash: {
    height: "10.62%",
    width: "19.94%",
    top: "12.65%",
    fontSize: 11,
    color: "#f28796",
  },
  triviaTokenCardWrapper: {
    left: 0,
    top: 0,
  },
  mcSymbolIcon: {
    marginTop: -40.94,
    left: 301,
    width: 2,
    height: 1,
  },
  groupParent: {
    top: 159,
    left: 43,
  },
  cards: {
    height: "2.12%",
    width: "14.25%",
    top: "11.83%",
    color: Color.mainAshColour,
    alignItems: "flex-end",
    lineHeight: 18,
    fontFamily: FontFamily.ptRegularNormalText,
    fontSize: FontSize.boldNormalHeading_size,
    left: "9.66%",
    position: "absolute",
  },
  dasunBrickTower: {
    marginTop: -18,
    left: "9.9%",
    fontSize: FontSize.sFSubheadlineSemibold_size,
    lineHeight: 22,
    fontFamily: FontFamily.helvetica,
    color: Color.darkslategray_600,
    textAlign: "left",
    fontWeight: "700",
    top: "50%",
  },
  keyboardArrowRight1Icon: {
    top: 550,
    left: 346,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  addCredit: {
    fontFamily: FontFamily.poppinsRegular,
  },
  password: {
    width: "38.65%",
    top: "61.38%",
    right: "39.61%",
    bottom: "36.27%",
    position: "absolute",
  },
  password1: {
    width: "8.94%",
    top: "57.03%",
    right: "69.32%",
    bottom: "40.63%",
    position: "absolute",
  },
  text2: {
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
  },
  password2: {
    width: "15.46%",
    right: "62.8%",
    bottom: "44.75%",
    left: "21.74%",
    height: "2.34%",
  },
  cash11: {
    top: 514,
  },
  credit11: {
    height: "1.79%",
    width: "3.86%",
    right: "85.02%",
    bottom: "45.31%",
    left: "11.11%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  bankCard1Icon: {
    top: 555,
  },
  addCreditDebitCardItem: {
    top: 516,
    left: 348,
    height: 15,
    width: 16,
    position: "absolute",
  },
  addCreditDebitCard: {
    backgroundColor: Color.mainWhite,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default AddCreditDebitCard;
