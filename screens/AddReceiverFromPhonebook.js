import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AddReceiverFromPhonebook = () => {
  return (
    <View style={styles.addReceiverFromPhonebook}>
      <View style={styles.password}>
        <View style={styles.info}>
          <View style={styles.infoChild} />
          <Text style={[styles.airtelNigeria, styles.anFlexBox]}>
            Allen Nuhu
          </Text>
        </View>
        <Image
          style={styles.passwordChild}
          contentFit="cover"
          source={require("../assets/ellipse-1295.png")}
        />
        <Text style={[styles.an, styles.anFlexBox]}>AN</Text>
      </View>
      <Text style={[styles.text, styles.textTypo]}>08170000560</Text>
      <View style={[styles.password1, styles.passwordPosition]}>
        <View style={styles.info}>
          <View style={styles.infoChild} />
          <Text style={[styles.airtelNigeria, styles.anFlexBox]}>
            Monday Niyi
          </Text>
        </View>
        <Image
          style={styles.passwordChild}
          contentFit="cover"
          source={require("../assets/ellipse-1295.png")}
        />
        <Text style={[styles.an, styles.anFlexBox]}>MN</Text>
      </View>
      <View style={styles.info2}>
        <Text style={styles.beneficiaries}>Beneficiaries</Text>
      </View>
      <View style={[styles.password2, styles.passwordPosition]}>
        <View style={styles.info}>
          <View style={styles.infoChild} />
          <Text style={[styles.airtelNigeria, styles.anFlexBox]}>
            Gabriel Nia
          </Text>
        </View>
        <Image
          style={styles.passwordChild}
          contentFit="cover"
          source={require("../assets/ellipse-1295.png")}
        />
        <Text style={[styles.an, styles.anFlexBox]}>GN</Text>
      </View>
      <View style={[styles.password3, styles.passwordPosition]}>
        <View style={styles.info}>
          <View style={styles.infoChild} />
          <Text style={[styles.airtelNigeria, styles.anFlexBox]}>
            Sasha Sule
          </Text>
        </View>
        <Image
          style={styles.passwordChild}
          contentFit="cover"
          source={require("../assets/ellipse-1295.png")}
        />
        <Text style={[styles.an, styles.anFlexBox]}>SS</Text>
      </View>
      <View style={[styles.password4, styles.passwordPosition]}>
        <View style={styles.info}>
          <View style={styles.infoChild} />
          <Text style={[styles.airtelNigeria, styles.anFlexBox]}>
            Festus Odu
          </Text>
        </View>
        <Image
          style={styles.passwordChild}
          contentFit="cover"
          source={require("../assets/ellipse-1295.png")}
        />
        <Text style={[styles.an, styles.anFlexBox]}>FO</Text>
      </View>
      <View style={styles.search}>
        <Image
          style={styles.searchChild}
          contentFit="cover"
          source={require("../assets/rectangle-1344.png")}
        />
        <Image
          style={styles.searchIcon}
          contentFit="cover"
          source={require("../assets/search.png")}
        />
        <Text style={[styles.searchBeneficiary, styles.timePosition]}>
          Search beneficiary
        </Text>
      </View>
      <Text style={[styles.text1, styles.textTypo]}>08090000110</Text>
      <Text style={[styles.text2, styles.textTypo]}>08080000110</Text>
      <Text style={[styles.text3, styles.textTypo]}>09090000110</Text>
      <Text style={[styles.text4, styles.textTypo]}>09090000110</Text>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.background, styles.headerPosition]} />
        <Text
          style={[styles.receiversInformation, styles.searchBeneficiaryTypo]}
        >
          Receiver’s Information
        </Text>
        <Image
          style={[styles.icMoreIcon, styles.icMoreIconLayout]}
          contentFit="cover"
          source={require("../assets/icmore.png")}
        />
        <Image
          style={[styles.leftArrow11, styles.icMoreIconLayout]}
          contentFit="cover"
          source={require("../assets/leftarrow-1-1.png")}
        />
        <View style={styles.statusbar}>
          <Text style={[styles.time, styles.timePosition]}>9:41</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  anFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    color: Color.darkgray_300,
    width: "48.87%",
    height: "2.4%",
    textAlign: "left",
    fontFamily: FontFamily.uberMove,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  passwordPosition: {
    left: "8.18%",
    right: "6.31%",
    width: "85.51%",
    height: "6.91%",
    position: "absolute",
  },
  timePosition: {
    letterSpacing: 0,
    position: "absolute",
  },
  headerPosition: {
    width: 428,
    left: "50%",
    marginLeft: -214,
    position: "absolute",
  },
  searchBeneficiaryTypo: {
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
  },
  icMoreIconLayout: {
    height: 24,
    width: 24,
    top: 63,
    position: "absolute",
    overflow: "hidden",
  },
  infoChild: {
    right: "0%",
    bottom: "0%",
    backgroundColor: Color.mainWhite,
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  airtelNigeria: {
    height: "22.46%",
    width: "49.1%",
    top: "38.38%",
    left: "25.35%",
    color: Color.gray_600,
    fontFamily: FontFamily.uberMove,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_lg,
  },
  info: {
    height: "154.69%",
    width: "116.39%",
    top: "-26.56%",
    right: "-6.56%",
    bottom: "-28.12%",
    left: "-9.84%",
    position: "absolute",
  },
  passwordChild: {
    height: "64.06%",
    width: "11.2%",
    top: "18.75%",
    right: "89.62%",
    bottom: "17.19%",
    left: "-0.82%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  an: {
    top: "39.06%",
    left: "1.91%",
    fontSize: FontSize.ptBoldHeader5CardTitles_size,
    fontWeight: "300",
    fontFamily: FontFamily.gilroy,
    color: Color.mediumslateblue,
  },
  password: {
    top: "21.6%",
    right: "6.07%",
    bottom: "71.49%",
    left: "8.41%",
    width: "85.51%",
    height: "6.91%",
    position: "absolute",
  },
  text: {
    top: "26.67%",
    left: "25.23%",
    color: Color.darkgray_300,
    width: "48.87%",
    height: "2.4%",
  },
  password1: {
    top: "32.61%",
    bottom: "60.48%",
  },
  beneficiaries: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.mainWhite,
    textAlign: "center",
    fontSize: FontSize.size_lg,
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  info2: {
    height: "2.16%",
    width: "31.78%",
    top: "4.43%",
    right: "32.71%",
    bottom: "93.41%",
    left: "35.51%",
    position: "absolute",
  },
  password2: {
    top: "43.63%",
    bottom: "49.46%",
  },
  password3: {
    top: "54.54%",
    bottom: "38.55%",
  },
  password4: {
    top: "65.55%",
    bottom: "27.54%",
  },
  searchChild: {
    left: 0,
    borderRadius: Border.br_3xs,
    top: 0,
    height: 62,
    width: 359,
    position: "absolute",
  },
  searchIcon: {
    left: 30,
    width: 17,
    height: 17,
    top: 23,
    position: "absolute",
  },
  searchBeneficiary: {
    left: 58,
    fontFamily: FontFamily.senRegular,
    color: "#676767",
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
    top: 23,
  },
  search: {
    top: 111,
    left: 35,
    height: 62,
    width: 359,
    position: "absolute",
  },
  text1: {
    top: "37.69%",
    left: "25%",
    color: Color.darkgray_300,
    width: "48.87%",
    height: "2.4%",
  },
  text2: {
    top: "48.81%",
    left: "25.47%",
    color: Color.darkgray_300,
    width: "48.87%",
    height: "2.4%",
  },
  text3: {
    top: "59.61%",
    left: "25.23%",
    color: Color.darkgray_300,
    width: "48.87%",
    height: "2.4%",
  },
  text4: {
    top: "70.73%",
    left: "25.23%",
    color: Color.darkgray_300,
    width: "48.87%",
    height: "2.4%",
  },
  background: {
    top: 6,
    backgroundColor: Color.backgroundBackground4,
    height: 47,
  },
  receiversInformation: {
    marginLeft: -80,
    top: 67,
    fontFamily: FontFamily.rubikRegular,
    color: Color.dark,
    left: "50%",
    position: "absolute",
  },
  icMoreIcon: {
    marginLeft: 165,
    left: "50%",
  },
  leftArrow11: {
    left: 27,
  },
  time: {
    marginTop: -9,
    width: "14.4%",
    top: "50%",
    left: "5.6%",
    fontSize: FontSize.sFSubheadlineSemibold_size,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.sFSubheadlineSemibold,
    color: Color.darkslategray_400,
    textAlign: "center",
  },
  statusbar: {
    width: 375,
    height: 44,
    left: "50%",
    marginLeft: -214,
    top: 0,
    position: "absolute",
  },
  header: {
    top: -3,
    height: 87,
  },
  addReceiverFromPhonebook: {
    backgroundColor: "#fafafc",
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
  },
});

export default AddReceiverFromPhonebook;
