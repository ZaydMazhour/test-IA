import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const AddNewContact = () => {
  return (
    <View style={styles.addNewContact}>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.background, styles.headerPosition]} />
        <Text style={styles.addNewContact1}>Add new contact</Text>
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
          <Text style={styles.time}>9:41</Text>
        </View>
      </View>
      <View style={styles.battery}>
        <View style={[styles.border, styles.borderBorder]} />
        <Image
          style={[styles.capIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/cap.png")}
        />
        <View style={styles.capacity} />
      </View>
      <Image
        style={styles.wifiIcon}
        contentFit="cover"
        source={require("../assets/wifi.png")}
      />
      <Image
        style={styles.cellularConnectionIcon}
        contentFit="cover"
        source={require("../assets/cellular-connection.png")}
      />
      <View style={styles.layer3}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={[styles.h, styles.hClr]}>3h</Text>
      </View>
      <View style={[styles.password, styles.passwordPosition]}>
        <View style={[styles.passwordChild, styles.borderBorder]} />
        <View style={[styles.info, styles.infoPosition]}>
          <Text style={[styles.enterNameOf, styles.namePosition]}>
            Enter name of contact
          </Text>
        </View>
        <Text style={[styles.name, styles.namePosition]}>Name</Text>
      </View>
      <View style={[styles.password1, styles.passwordPosition]}>
        <View style={[styles.passwordChild, styles.borderBorder]} />
        <View style={styles.info1}>
          <Text style={[styles.enterNameOf, styles.namePosition]}>
            Enter address here
          </Text>
        </View>
        <Text style={[styles.name, styles.namePosition]}>Location</Text>
      </View>
      <View style={[styles.password2, styles.passwordPosition]}>
        <View style={[styles.passwordChild, styles.borderBorder]} />
        <View style={[styles.info2, styles.infoPosition]}>
          <Text style={[styles.enterNameOf, styles.namePosition]}>
            08170000560
          </Text>
        </View>
        <Text style={[styles.name, styles.namePosition]}>Contact Number</Text>
      </View>
      <View style={styles.pryButton}>
        <Text style={[styles.next, styles.hClr]}>Add Contact</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerPosition: {
    width: 428,
    left: "50%",
    marginLeft: -214,
    position: "absolute",
  },
  icMoreIconLayout: {
    height: 24,
    width: 24,
    top: 63,
    position: "absolute",
    overflow: "hidden",
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  hClr: {
    color: Color.mainWhite,
    textAlign: "left",
  },
  passwordPosition: {
    left: "7.48%",
    right: "7.48%",
    width: "85.05%",
    height: "12.42%",
    position: "absolute",
  },
  infoPosition: {
    left: "10.16%",
    bottom: "25.22%",
    top: "51.3%",
    height: "23.48%",
    position: "absolute",
  },
  namePosition: {
    left: "0%",
    top: "0%",
  },
  background: {
    top: 6,
    backgroundColor: Color.backgroundBackground4,
    height: 47,
  },
  addNewContact1: {
    marginLeft: -143,
    fontSize: FontSize.h3Header320ptMediumRoboto_size,
    fontFamily: FontFamily.rubikBold,
    color: Color.dark,
    textAlign: "left",
    top: 63,
    fontWeight: "700",
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
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.sFSubheadlineSemibold,
    color: Color.darkslategray_400,
    textAlign: "center",
    position: "absolute",
  },
  statusbar: {
    top: 0,
    width: 375,
    height: 44,
    left: "50%",
    marginLeft: -214,
    position: "absolute",
  },
  header: {
    top: -6,
    height: 87,
  },
  border: {
    width: "90.43%",
    right: "9.57%",
    borderRadius: 3,
    borderColor: "#384144",
    opacity: 0.35,
    left: "0%",
    top: "0%",
    bottom: "0%",
    height: "100%",
  },
  capIcon: {
    height: "35.29%",
    width: "5.46%",
    top: "32.36%",
    bottom: "32.35%",
    left: "94.54%",
    opacity: 0.4,
  },
  capacity: {
    height: "64.71%",
    width: "73.99%",
    top: "17.65%",
    right: "17.79%",
    bottom: "17.65%",
    left: "8.22%",
    borderRadius: 1,
    backgroundColor: Color.darkslategray_400,
    position: "absolute",
  },
  battery: {
    height: "1.22%",
    width: "5.68%",
    top: "1.19%",
    right: "5.69%",
    bottom: "97.59%",
    left: "88.63%",
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  vectorIcon: {
    left: "0%",
    top: "0%",
    bottom: "0%",
    height: "100%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
  },
  h: {
    top: 3,
    left: 3,
    fontSize: FontSize.size_5xs,
    lineHeight: 10,
    fontFamily: FontFamily.rubikRegular,
    position: "absolute",
  },
  layer3: {
    height: "1.73%",
    width: "3.74%",
    top: "12.85%",
    right: "86.21%",
    bottom: "85.42%",
    left: "10.05%",
    position: "absolute",
  },
  passwordChild: {
    height: "74.78%",
    width: "100.27%",
    top: "25.65%",
    right: "-0.14%",
    bottom: "-0.43%",
    left: "-0.14%",
    borderRadius: Border.br_9xs,
    borderColor: "#c4c4c4",
    backgroundColor: Color.mainWhite,
    borderWidth: 1,
    borderStyle: "solid",
  },
  enterNameOf: {
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.gainsboro_200,
    top: "0%",
    left: "0%",
    textAlign: "left",
    position: "absolute",
  },
  info: {
    width: "56.87%",
    right: "32.97%",
  },
  name: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.gray_300,
    opacity: 0.5,
    top: "0%",
    left: "0%",
    textAlign: "left",
    position: "absolute",
  },
  password: {
    top: "11.56%",
    bottom: "76.03%",
  },
  info1: {
    width: "46.7%",
    top: "56.52%",
    right: "42.31%",
    bottom: "20%",
    left: "10.99%",
    height: "23.48%",
    position: "absolute",
  },
  password1: {
    top: "26.24%",
    bottom: "61.34%",
  },
  info2: {
    width: "33.24%",
    right: "56.59%",
  },
  password2: {
    top: "40.93%",
    bottom: "46.65%",
  },
  next: {
    fontSize: FontSize.boldNormalHeading_size,
    fontFamily: FontFamily.boldNormalHeading,
    fontWeight: "700",
    color: Color.mainWhite,
  },
  pryButton: {
    top: 525,
    left: 69,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colourMain2,
    width: 281,
    flexDirection: "row",
    paddingHorizontal: Padding.p_126xl,
    paddingVertical: Padding.p_mid,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  addNewContact: {
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.mainWhite,
  },
});

export default AddNewContact;
