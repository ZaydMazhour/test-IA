import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const ReviewDeliveryRequestCard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.reviewDeliveryRequestCard}>
      <View style={styles.reviewDeliveryRequestCardChild} />
      <View style={styles.reviewDeliveryRequestCardItem} />
      <View style={styles.reviewDeliveryRequestCardInner} />
      <View style={styles.battery}>
        <View style={styles.border} />
        <Image
          style={[styles.capIcon, styles.iconLayout4]}
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
      <Text style={[styles.pickUp, styles.packageTypo]}>Pick-up</Text>
      <Text style={[styles.dropOff, styles.packageTypo]}>Drop-off</Text>
      <Text style={[styles.bWoleAriyo, styles.yourClr]}>
        14B wole ariyo street, lekki phase 1
      </Text>
      <Text style={[styles.muritalaEletuWay, styles.yourClr]}>
        55 Muritala Eletu way, Osapa London
      </Text>
      <Text style={styles.turnOnTo}>
        Turn on to confirm delivery with a 4-digit PIN
      </Text>
      <View style={[styles.password, styles.passwordPosition6]}>
        <View style={[styles.info, styles.iconLayout5]}>
          <Text style={[styles.johnChinedu, styles.textTypo1]}>
            John Chinedu
          </Text>
          <Text style={[styles.text, styles.textTypo]}>0812902934</Text>
        </View>
      </View>
      <View style={[styles.password1, styles.passwordPosition5]}>
        <View style={[styles.info, styles.iconLayout5]}>
          <Text style={[styles.addRecipient, styles.packageContainerTypo]}>
            Add recipient
          </Text>
        </View>
      </View>
      <View style={[styles.password2, styles.passwordPosition5]}>
        <View style={[styles.info, styles.iconLayout5]}>
          <Text style={[styles.addRecipient, styles.packageContainerTypo]}>
            Require PIN upon delivery
          </Text>
        </View>
      </View>
      <Text style={[styles.location, styles.textTypo1]}>Location</Text>
      <Image
        style={[styles.user1Icon, styles.iconLayout3]}
        contentFit="cover"
        source={require("../assets/user-1.png")}
      />
      <Image
        style={[styles.user2Icon, styles.iconLayout3]}
        contentFit="cover"
        source={require("../assets/user-1.png")}
      />
      <Image
        style={[styles.lineIcon, styles.iconLayout4]}
        contentFit="cover"
        source={require("../assets/line-3.png")}
      />
      <Image
        style={[styles.icModeEdit24px2Icon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/ic-mode-edit-24px-2.png")}
      />
      <View style={styles.location31Parent}>
        <Image
          style={[styles.location31, styles.iconLayout3]}
          contentFit="cover"
          source={require("../assets/location-3-1.png")}
        />
        <View style={[styles.password3, styles.passwordLayout]}>
          <View style={[styles.info, styles.iconLayout5]}>
            <Text style={[styles.bWoleAriyo1, styles.textTypo]}>
              14b wole ariyo street, Lekki phase 1
            </Text>
          </View>
        </View>
        <Image
          style={[styles.icModeEdit24px6Icon, styles.iconLayout3]}
          contentFit="cover"
          source={require("../assets/ic-mode-edit-24px-2.png")}
        />
      </View>
      <View style={[styles.pryButton, styles.pryFlexBox]}>
        <Text style={[styles.imSending, styles.sendingTypo]}>I’m sending</Text>
      </View>
      <View style={[styles.pryButton1, styles.pryFlexBox]}>
        <Text style={[styles.imSending1, styles.sendingTypo]}>I’m sending</Text>
      </View>
      <View style={[styles.header, styles.headerLayout]}>
        <View style={[styles.headerChild, styles.headerChildPosition]} />
        <View style={[styles.leftArrow11Parent, styles.headerLayout]}>
          <Image
            style={[styles.leftArrow11, styles.leftArrow11Layout]}
            contentFit="cover"
            source={require("../assets/leftarrow-1-11.png")}
          />
          <Text style={[styles.reviewOrder, styles.statusbarPosition]}>
            Review order
          </Text>
          <View style={[styles.statusbar, styles.statusbarPosition]}>
            <Text style={[styles.time, styles.timePosition]}>9:41</Text>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.keyboardArrowRight1, styles.iconLayout2]}
        onPress={() => navigation.navigate("EnterReceiverDetails")}
      >
        <Image
          style={[styles.icon, styles.iconLayout5]}
          contentFit="cover"
          source={require("../assets/keyboardarrowright-11.png")}
        />
      </Pressable>
      <Image
        style={[styles.passwordIcon, styles.iconLayout3]}
        contentFit="cover"
        source={require("../assets/password.png")}
      />
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout5]}
        onPress={() => navigation.navigate("EnterReceiverDetails")}
      >
        <View style={[styles.groupChild, styles.groupChildLayout5]} />
        <Image
          style={[styles.groupItem, styles.hPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-58.png")}
        />
      </Pressable>
      <View style={[styles.groupParent, styles.groupLayout1]}>
        <View style={[styles.rectangleGroup, styles.groupLayout1]}>
          <View style={styles.groupInner} />
          <Text style={styles.customDeliveryDetails}>
            Custom delivery details
          </Text>
          <Text style={[styles.selectYourPackage, styles.yourClr]}>
            Select your package size from the following options or enter your
            custom size.
          </Text>
          <View style={styles.layer2Parent}>
            <View style={styles.layer2}>
              <Image
                style={[styles.vectorIcon, styles.iconLayout4]}
                contentFit="cover"
                source={require("../assets/vector.png")}
              />
              <Text style={[styles.h, styles.hPosition]}>3h</Text>
            </View>
            <View style={[styles.rectangleView, styles.groupChild14Border]} />
            <Text
              style={[styles.smallSizedParcel, styles.smallSizedParcelPosition]}
            >
              Small sized parcel
            </Text>
            <Text
              style={[
                styles.documentsenvelopeSmallElec,
                styles.documentsenvelopeClr,
              ]}
            >
              Documents/Envelope, small electronics, essential oils, cosmetics,
              single piece clothing
            </Text>
            <Text style={[styles.maxDimension40, styles.maxTypo]}>
              Max dimension (40 cm x 30 cm x 20 cm, 5 kg)
            </Text>
            <View
              style={[
                styles.illustrationWrapper,
                styles.illustrationWrapperPosition,
              ]}
            >
              <Image
                style={[styles.vectorIcon, styles.iconLayout4]}
                contentFit="cover"
                source={require("../assets/illustration4.png")}
              />
            </View>
            <View
              style={[styles.rectangleContainer, styles.groupContainerPosition]}
            >
              <View
                style={[styles.groupChild1, styles.groupContainerPosition]}
              />
              <Text
                style={[
                  styles.mediumSizedParcel,
                  styles.mediumSizedParcelPosition,
                ]}
              >
                Medium sized parcel
              </Text>
              <Text style={[styles.shoeboxLaptop, styles.documentsenvelopeClr]}>
                Shoebox, laptop + charger, fruit basket, small hamper
              </Text>
              <Text style={[styles.maxDimension50, styles.maxTypo]}>
                Max dimension (50 cm x 40 cm x 30 cm, 10 kg)
              </Text>
              <View
                style={[
                  styles.illustrationContainer,
                  styles.mediumSizedParcelPosition,
                ]}
              >
                <Image
                  style={[styles.vectorIcon, styles.iconLayout4]}
                  contentFit="cover"
                  source={require("../assets/illustration4.png")}
                />
              </View>
            </View>
            <View style={[styles.groupView, styles.groupContainerPosition]}>
              <View
                style={[styles.groupChild1, styles.groupContainerPosition]}
              />
              <Text
                style={[
                  styles.mediumSizedParcel,
                  styles.mediumSizedParcelPosition,
                ]}
              >
                Large sized parcel
              </Text>
              <Text style={[styles.shoeboxLaptop, styles.documentsenvelopeClr]}>
                Shoebox, laptop + charger, fruit basket, small hamper
              </Text>
              <Text style={[styles.maxDimension50, styles.maxTypo]}>
                Max dimension (50 cm x 40 cm x 30 cm, 10 kg)
              </Text>
              <View
                style={[
                  styles.illustrationContainer,
                  styles.mediumSizedParcelPosition,
                ]}
              >
                <Image
                  style={[styles.vectorIcon, styles.iconLayout4]}
                  contentFit="cover"
                  source={require("../assets/illustration4.png")}
                />
              </View>
            </View>
            <View
              style={[styles.groupContainer, styles.groupContainerPosition]}
            >
              <View style={styles.groupChild3Position}>
                <View
                  style={[styles.groupChild3, styles.groupChild3Position]}
                />
                <Text style={[styles.manualInput, styles.manualInputPosition]}>
                  Manual Input
                </Text>
                <Text style={[styles.ifTheAbove, styles.documentsenvelopeClr]}>
                  If the above options do not fit your needs, feel free to input
                  them manually
                </Text>
                <View
                  style={[
                    styles.illustrationWrapper1,
                    styles.manualInputPosition,
                  ]}
                >
                  <Image
                    style={[styles.vectorIcon, styles.iconLayout4]}
                    contentFit="cover"
                    source={require("../assets/illustration4.png")}
                  />
                </View>
              </View>
              <View style={styles.lengthParent}>
                <Text style={[styles.length, styles.packageContainerTypo]}>
                  <Text style={styles.length1}>{`Length `}</Text>
                  <Text style={styles.text1}>*</Text>
                </Text>
                <Text style={[styles.height, styles.packageContainerTypo]}>
                  <Text style={styles.length1}>{`Height `}</Text>
                  <Text style={styles.text1}>*</Text>
                </Text>
                <Text style={[styles.width, styles.packageContainerTypo]}>
                  <Text style={styles.length1}>{`Width `}</Text>
                  <Text style={styles.text1}>*</Text>
                </Text>
                <Text style={[styles.weight, styles.packageContainerTypo]}>
                  <Text style={styles.length1}>{`Weight `}</Text>
                  <Text style={styles.text1}>*</Text>
                </Text>
                <View style={[styles.groupChild4, styles.groupChildLayout4]} />
                <View style={[styles.groupChild5, styles.groupChildLayout4]} />
                <View style={[styles.groupChild6, styles.groupChildLayout4]} />
                <View style={[styles.groupChild7, styles.groupChildLayout4]} />
              </View>
            </View>
          </View>
          <View style={[styles.rectangleParent2, styles.groupChild8Layout]}>
            <View style={[styles.groupChild8, styles.groupChild8Layout]} />
            <Text
              style={[
                styles.optionalPackageInformation,
                styles.packageContainerTypo,
              ]}
            >
              Optional package information
            </Text>
            <Text style={[styles.weHaveUsed, styles.yourClr]}>
              We have used our standard option for this request. Customize as it
              matches your package.
            </Text>
            <View
              style={[styles.passwordParent, styles.passwordParentPosition]}
            >
              <View style={styles.password4}>
                <View style={[styles.info, styles.iconLayout5]}>
                  <Text style={[styles.package, styles.packageContainerTypo]}>
                    Package
                  </Text>
                </View>
              </View>
              <Image
                style={[styles.groupChild9, styles.groupChildPosition1]}
                contentFit="cover"
                source={require("../assets/line-3.png")}
              />
              <View style={[styles.passwordGroup, styles.passwordPosition4]}>
                <View style={[styles.password5, styles.passwordLayout]}>
                  <View style={[styles.info, styles.iconLayout5]}>
                    <Text
                      style={[styles.addRecipient, styles.packageContainerTypo]}
                    >
                      Description
                    </Text>
                  </View>
                </View>
                <View style={styles.passwordContainer}>
                  <View style={[styles.password6, styles.passwordPosition3]}>
                    <View style={[styles.info, styles.iconLayout5]}>
                      <Text style={[styles.egShoeBox, styles.textTypo]}>
                        e.g Shoe Box
                      </Text>
                    </View>
                  </View>
                  <Image
                    style={[styles.icModeEdit24px6Icon1, styles.iconLayout3]}
                    contentFit="cover"
                    source={require("../assets/ic-mode-edit-24px-6.png")}
                  />
                </View>
              </View>
              <View style={[styles.passwordParent1, styles.passwordPosition4]}>
                <View style={[styles.password7, styles.passwordPosition2]}>
                  <View style={[styles.info, styles.iconLayout5]}>
                    <Text
                      style={[styles.addRecipient, styles.packageContainerTypo]}
                    >
                      Quantity
                    </Text>
                  </View>
                </View>
                <View style={[styles.passwordParent2, styles.timePosition]}>
                  <View style={[styles.password8, styles.passwordPosition3]}>
                    <View style={[styles.info, styles.iconLayout5]}>
                      <Text style={[styles.egShoeBox, styles.textTypo]}>
                        e.g 1
                      </Text>
                    </View>
                  </View>
                  <Image
                    style={[styles.icModeEdit24px6Icon1, styles.iconLayout3]}
                    contentFit="cover"
                    source={require("../assets/ic-mode-edit-24px-6.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.optionalDetailsParent, styles.parentPosition]}>
              <Text
                style={[styles.optionalDetails, styles.packageContainerTypo]}
              >
                Optional Details
              </Text>
              <View style={styles.fragileSelectThisOptionIfParent}>
                <Text
                  style={[
                    styles.fragileSelectThisContainer,
                    styles.packageContainerTypo,
                  ]}
                >
                  <Text style={[styles.fragile, styles.packageTypo]}>{`Fragile
`}</Text>
                  <Text style={styles.documentsenvelopeClr}>
                    Select this option if your item is fragile
                  </Text>
                </Text>
                <Image
                  style={[styles.fragile1Icon, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/fragile-1.png")}
                />
                <View style={[styles.groupChild10, styles.groupChildLayout3]} />
              </View>
              <View style={[styles.groupWrapper, styles.sms1ParentLayout]}>
                <View style={[styles.sms1Parent, styles.sms1ParentLayout]}>
                  <Image
                    style={[styles.sms1Icon, styles.iconLayout1]}
                    contentFit="cover"
                    source={require("../assets/sms-1.png")}
                  />
                  <Text
                    style={[
                      styles.pickUpSmsContainer,
                      styles.packageContainerTypo,
                    ]}
                  >
                    <Text
                      style={[styles.fragile, styles.packageTypo]}
                    >{`Pick up SMS
`}</Text>
                    <Text style={styles.documentsenvelopeClr}>
                      Select if you want sender to receive order number and
                      instructions to prepare for pick up via SMS notification
                      after order created.
                    </Text>
                  </Text>
                  <View
                    style={[styles.groupChild10, styles.groupChildLayout3]}
                  />
                </View>
              </View>
              <View style={styles.deliveryNoteSelectIfYouHaParent}>
                <Text
                  style={[
                    styles.pickUpSmsContainer,
                    styles.packageContainerTypo,
                  ]}
                >
                  <Text style={[styles.fragile, styles.packageTypo]}>
                    Delivery Note
                  </Text>
                  <Text style={styles.documentsenvelopeClr}>{` 
Select if you have a delivery note to drop-off along with your item`}</Text>
                </Text>
                <View style={[styles.groupChild12, styles.groupChildLayout3]} />
                <Image
                  style={[styles.notepad1Icon, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/notepad-1.png")}
                />
              </View>
              <Image
                style={[styles.calendar1Icon, styles.iconLayout2]}
                contentFit="cover"
                source={require("../assets/calendar-1.png")}
              />
              <Text style={[styles.now, styles.nowPosition]}>Now</Text>
              <Text
                style={[styles.later, styles.documentsenvelopeClr]}
              >{`Later `}</Text>
              <Image
                style={[styles.groupIcon, styles.groupIconPosition]}
                contentFit="cover"
                source={require("../assets/group-10851.png")}
              />
              <Image
                style={[styles.groupChild13, styles.groupLayout]}
                contentFit="cover"
                source={require("../assets/group-10852.png")}
              />
              <View style={[styles.groupChild14, styles.groupChild14Border]} />
              <Text style={[styles.selectTime, styles.groupIconPosition]}>
                Select time
              </Text>
              <Text
                style={[styles.pleaseGetYour, styles.insuranceTypo]}
              >{`Please get your package ready by this time, and there will be a time range for agent to come pick up, please refer to the timeline depending 
on service type chosen in the next step.`}</Text>
              <Text
                style={[styles.packageReadyTime, styles.pleaseGetYourLayout]}
              >
                Package Ready Time
              </Text>
              <View style={styles.addInsuranceParent}>
                <Text style={[styles.package, styles.packageContainerTypo]}>
                  Add Insurance
                </Text>
                <View style={styles.standardInsuranceParent}>
                  <Text
                    style={[styles.standardInsurance, styles.insuranceTypo]}
                  >
                    Standard Insurance
                  </Text>
                  <Text style={[styles.none, styles.insuranceTypo]}>None</Text>
                  <Image
                    style={[styles.ellipseIcon, styles.groupChildLayout2]}
                    contentFit="cover"
                    source={require("../assets/ellipse-223.png")}
                  />
                  <Image
                    style={[styles.groupChild15, styles.groupChildLayout2]}
                    contentFit="cover"
                    source={require("../assets/ellipse-223.png")}
                  />
                  <Image
                    style={[styles.groupChild16, styles.groupChildLayout2]}
                    contentFit="cover"
                    source={require("../assets/ellipse-223.png")}
                  />
                  <Image
                    style={[
                      styles.shippingInsurance1Icon,
                      styles.shippingIconLayout,
                    ]}
                    contentFit="cover"
                    source={require("../assets/shippinginsurance-1.png")}
                  />
                  <View style={styles.comprehensiveInsuranceParent}>
                    <Text
                      style={[
                        styles.comprehensiveInsurance,
                        styles.insuranceTypo,
                      ]}
                    >
                      Comprehensive Insurance
                    </Text>
                    <Image
                      style={[
                        styles.shippingInsurance2Icon,
                        styles.shippingIconLayout,
                      ]}
                      contentFit="cover"
                      source={require("../assets/shippinginsurance-1.png")}
                    />
                  </View>
                </View>
              </View>
              <Text style={[styles.deliveryTime, styles.packageContainerTypo]}>
                Delivery time
              </Text>
              <Text style={[styles.chooseTheDelivery, styles.insuranceTypo]}>
                Choose the delivery time for this package or leave it blank and
                we will deliver as soon as we can.
              </Text>
              <View style={styles.arrowsPlus1} />
            </View>
            <View style={styles.groupParent1}>
              <Image
                style={[styles.groupChild17, styles.iconLayout2]}
                contentFit="cover"
                source={require("../assets/calendar-1.png")}
              />
              <View style={styles.passwordWrapper}>
                <View style={[styles.info, styles.iconLayout5]}>
                  <View style={[styles.info, styles.iconLayout5]}>
                    <Text style={[styles.egShoeBox, styles.textTypo]}>
                      Select a different delivery time
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={[
                styles.extraNotificationContactsParent,
                styles.parentPosition,
              ]}
            >
              <Text style={[styles.package, styles.packageContainerTypo]}>
                Extra Notification Contacts
              </Text>
              <View style={styles.passwordParent3}>
                <View style={[styles.password10, styles.passwordPosition2]}>
                  <View style={[styles.info, styles.iconLayout5]}>
                    <Text
                      style={[styles.addRecipient, styles.packageContainerTypo]}
                    >
                      Contact 1
                    </Text>
                  </View>
                </View>
                <View style={styles.password11}>
                  <View style={[styles.info, styles.iconLayout5]}>
                    <Text style={styles.addMore}>Add more</Text>
                  </View>
                </View>
                <View style={[styles.passwordFrame, styles.passwordPosition2]}>
                  <View style={[styles.info, styles.iconLayout5]}>
                    <View style={[styles.info, styles.iconLayout5]}>
                      <Text style={[styles.egShoeBox, styles.textTypo]}>
                        e.g 08170000560
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <Image
                style={[styles.groupChild18, styles.timePosition]}
                contentFit="cover"
                source={require("../assets/ellipse-223.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.groupFrame, styles.groupChildLayout1]}>
          <View style={[styles.groupWrapper1, styles.groupChildLayout1]}>
            <View style={[styles.groupWrapper1, styles.groupChildLayout1]}>
              <View style={[styles.groupChild19, styles.groupChildLayout1]} />
              <View style={styles.password13}>
                <View style={[styles.info, styles.iconLayout5]}>
                  <Text style={[styles.johnChinedu, styles.textTypo1]}>
                    Pay now with card
                  </Text>
                </View>
              </View>
              <Text style={[styles.paymentMethod, styles.n3000Typo]}>
                Payment Method
              </Text>
              <Text style={[styles.n3000, styles.n3000Typo]}>N3,000</Text>
              <Image
                style={[styles.creditCard1Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/creditcard-1.png")}
              />
              <Image
                style={[styles.keyboardArrowRight2Icon, styles.iconLayout2]}
                contentFit="cover"
                source={require("../assets/keyboardarrowright-2.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.groupChild20, styles.groupChildLayout1]} />
        <View style={styles.groupChild21Position}>
          <View style={[styles.groupChild21, styles.groupChild21Position]} />
          <View style={[styles.groupWrapper2, styles.groupWrapper2Layout]}>
            <View
              style={[
                styles.packageInformationParent,
                styles.groupWrapper2Layout,
              ]}
            >
              <Text style={[styles.packageInformation, styles.packageTypo]}>
                Package Information
              </Text>
              <Image
                style={[styles.groupChild22, styles.groupChildPosition1]}
                contentFit="cover"
                source={require("../assets/line-9.png")}
              />
            </View>
          </View>
          <Pressable
            style={[styles.groupPressable, styles.groupPressablePosition]}
            onPress={() => navigation.navigate("ReviewDeliveryRequestCard1")}
          >
            <View style={[styles.password14, styles.info15Position]}>
              <View style={[styles.info, styles.iconLayout5]}>
                <Text
                  style={[styles.addRecipient, styles.packageContainerTypo]}
                >
                  Standard delivery
                </Text>
              </View>
            </View>
            <View style={[styles.info15, styles.infoPosition]}>
              <Text
                style={[
                  styles.documentsenvelopeSmallElec1,
                  styles.documentsenvelopeClr,
                ]}
              >
                Documents/Envelope, small electronics, essential oils,
                cosmetics, single piece clothing
              </Text>
            </View>
            <Image
              style={[styles.groupChild23, styles.groupChildPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-223.png")}
            />
          </Pressable>
          <View style={[styles.passwordParent4, styles.groupPressablePosition]}>
            <View style={[styles.password15, styles.info17Position]}>
              <View style={[styles.info, styles.iconLayout5]}>
                <Text
                  style={[styles.addRecipient, styles.packageContainerTypo]}
                >
                  Custom delivery
                </Text>
              </View>
            </View>
            <View style={[styles.info17, styles.info17Position]}>
              <Text style={[styles.customizeYourRequest, styles.maxTypo]}>
                Customize your request to matches your need by providing more
                information or adding requirements
              </Text>
            </View>
            <Image
              style={[styles.groupChild24, styles.groupChildPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-223.png")}
            />
          </View>
        </View>
        <Pressable
          style={[styles.wrapper, styles.iconLayout2]}
          onPress={() => navigation.navigate("ReviewDeliveryRequestCard1")}
        >
          <Image
            style={styles.iconLayout5}
            contentFit="cover"
            source={require("../assets/group-10965.png")}
          />
        </Pressable>
        <View style={[styles.pryButton2, styles.pryFlexBox]}>
          <Text style={[styles.imSending, styles.sendingTypo]}>
            Confirm Order - N2,000
          </Text>
        </View>
      </View>
      <View style={[styles.passwordParent5, styles.passwordParentPosition]}>
        <View style={styles.password16}>
          <View style={[styles.info, styles.iconLayout5]}>
            <Text style={[styles.johnChinedu, styles.textTypo1]}>
              Same Day delivery
            </Text>
          </View>
        </View>
        <Text
          style={[styles.packageInformation, styles.packageTypo]}
        >{`Delivery plan `}</Text>
        <Image
          style={[styles.scheduledDelivery1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/scheduleddelivery-1.png")}
        />
        <Image
          style={[styles.keyboardArrowRight2Icon1, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/keyboardarrowright-2.png")}
        />
      </View>
      <View style={[styles.rectangleParent5, styles.groupChild25Layout]}>
        <View style={[styles.groupChild25, styles.groupChild25Layout]} />
        <Text style={[styles.packageInformation1, styles.packageTypo]}>
          Package Information
        </Text>
        <Text style={styles.guideline}>Guideline</Text>
        <Text style={styles.youCanSend}>
          You can send small or medium packages that:
        </Text>
        <Text
          style={[
            styles.dontContainAnyContainer,
            styles.areClosedSecurelyPosition,
          ]}
        >
          <Text style={styles.dontContainAny}>{`Don't contain any `}</Text>
          <Text style={styles.packageTypo}>prohibited items.</Text>
          <Text style={styles.dontContainAny}>{` `}</Text>
        </Text>
        <Text
          style={[styles.areClosedSecurely, styles.areClosedSecurelyPosition]}
        >{`Are closed, securely sealed, and ready to be delivered.
`}</Text>
        <Image
          style={[styles.groupChild26, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-1296.png")}
        />
        <Image
          style={[styles.groupChild27, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-1296.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout4: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  packageTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  yourClr: {
    color: Color.mainAshColour,
    lineHeight: 18,
  },
  passwordPosition6: {
    left: "13.79%",
    position: "absolute",
  },
  iconLayout5: {
    height: "100%",
    width: "100%",
  },
  textTypo1: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  textTypo: {
    color: Color.darkgray_300,
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
    left: "0%",
    position: "absolute",
  },
  passwordPosition5: {
    height: "0.58%",
    left: "14.72%",
    position: "absolute",
  },
  packageContainerTypo: {
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
  },
  iconLayout3: {
    height: 18,
    width: 18,
    position: "absolute",
  },
  iconPosition1: {
    left: 333,
    overflow: "hidden",
  },
  passwordLayout: {
    height: "45.65%",
    position: "absolute",
  },
  pryFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_mid,
    paddingHorizontal: Padding.p_126xl,
    flexDirection: "row",
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  sendingTypo: {
    fontFamily: FontFamily.boldNormalHeading,
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
    fontWeight: "700",
  },
  headerLayout: {
    height: 81,
    width: 428,
    left: 0,
    position: "absolute",
  },
  headerChildPosition: {
    left: 31,
    position: "absolute",
  },
  leftArrow11Layout: {
    height: 24,
    top: 57,
  },
  statusbarPosition: {
    left: "50%",
    position: "absolute",
  },
  timePosition: {
    top: "50%",
    position: "absolute",
  },
  iconLayout2: {
    width: 24,
    height: 24,
    position: "absolute",
  },
  groupChildLayout5: {
    width: 39,
    height: 18,
    position: "absolute",
  },
  hPosition: {
    left: 3,
    top: 3,
    position: "absolute",
  },
  groupLayout1: {
    width: 430,
    position: "absolute",
  },
  groupChild14Border: {
    borderColor: "#053582",
    borderRadius: Border.br_mini,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  smallSizedParcelPosition: {
    top: "4.68%",
    position: "absolute",
  },
  documentsenvelopeClr: {
    color: Color.darkgray_100,
    fontFamily: FontFamily.poppinsRegular,
  },
  maxTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  illustrationWrapperPosition: {
    left: "3.99%",
    right: "81.8%",
    width: "14.21%",
  },
  groupContainerPosition: {
    width: 401,
    left: 0,
    position: "absolute",
  },
  mediumSizedParcelPosition: {
    top: "20.69%",
    position: "absolute",
  },
  groupChild3Position: {
    height: 153,
    width: 401,
    top: 0,
    left: 0,
    position: "absolute",
  },
  manualInputPosition: {
    top: "15.69%",
    position: "absolute",
  },
  groupChildLayout4: {
    height: 34,
    width: 41,
    borderWidth: 0.5,
    borderColor: "rgba(5, 53, 130, 0.1)",
    backgroundColor: Color.ghostwhite_100,
    borderStyle: "solid",
    top: 30,
    position: "absolute",
  },
  groupChild8Layout: {
    height: 1411,
    width: 428,
    left: 0,
    position: "absolute",
  },
  passwordParentPosition: {
    left: "7.71%",
    position: "absolute",
  },
  groupChildPosition1: {
    right: "-0.15%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  passwordPosition4: {
    right: "12.79%",
    width: "85.76%",
    left: "1.45%",
    position: "absolute",
  },
  passwordPosition3: {
    top: "16%",
    height: "84%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
  },
  passwordPosition2: {
    height: "42%",
    left: "0%",
    position: "absolute",
  },
  parentPosition: {
    left: "8.64%",
    position: "absolute",
  },
  iconLayout1: {
    height: 16,
    width: 16,
    borderRadius: Border.br_mini,
    position: "absolute",
    overflow: "hidden",
  },
  groupChildLayout3: {
    height: 13,
    borderColor: "#000",
    borderRadius: Border.br_mini,
    width: 15,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  sms1ParentLayout: {
    height: 105,
    width: 345,
    position: "absolute",
  },
  nowPosition: {
    top: "16.12%",
    position: "absolute",
  },
  groupIconPosition: {
    top: "16.22%",
    position: "absolute",
  },
  groupLayout: {
    width: "6.52%",
    height: "2.45%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  insuranceTypo: {
    color: Color.darkslategray_100,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
    position: "absolute",
  },
  pleaseGetYourLayout: {
    width: "97.28%",
    left: "0%",
  },
  groupChildLayout2: {
    width: "7.45%",
    height: "17.12%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  shippingIconLayout: {
    height: 28,
    width: 28,
    borderRadius: Border.br_mini,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  groupChildLayout1: {
    height: 136,
    width: 428,
    left: 0,
    position: "absolute",
  },
  n3000Typo: {
    top: 17,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  iconLayout: {
    height: 32,
    width: 32,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild21Position: {
    height: 244,
    top: 0,
    width: 428,
    left: 0,
    position: "absolute",
  },
  groupWrapper2Layout: {
    height: 118,
    width: 334,
    position: "absolute",
  },
  groupPressablePosition: {
    height: "25.82%",
    left: "7.48%",
    position: "absolute",
  },
  info15Position: {
    left: "10.98%",
    position: "absolute",
  },
  infoPosition: {
    top: "42.86%",
    height: "57.14%",
    right: "0%",
    bottom: "0%",
  },
  groupChildPosition: {
    top: "3.17%",
    height: "30.16%",
    bottom: "66.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  info17Position: {
    left: "10.54%",
    position: "absolute",
  },
  groupChild25Layout: {
    height: 161,
    width: 428,
    position: "absolute",
  },
  areClosedSecurelyPosition: {
    left: 47,
    color: Color.darkslategray_500,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout: {
    height: 3,
    width: 3,
    left: 37,
    position: "absolute",
  },
  reviewDeliveryRequestCardChild: {
    top: 674,
    height: 138,
    width: 428,
    backgroundColor: Color.mainWhite,
    left: 0,
    position: "absolute",
  },
  reviewDeliveryRequestCardItem: {
    height: 408,
    top: 30,
    width: 428,
    backgroundColor: Color.mainWhite,
    left: 0,
    position: "absolute",
  },
  reviewDeliveryRequestCardInner: {
    height: 225,
    top: 443,
    width: 428,
    backgroundColor: Color.mainWhite,
    left: 0,
    position: "absolute",
  },
  border: {
    width: "90.43%",
    right: "9.57%",
    borderRadius: 3,
    borderColor: "#384144",
    opacity: 0.35,
    borderWidth: 1,
    borderStyle: "solid",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  capIcon: {
    height: "35.29%",
    width: "5.46%",
    top: "32.35%",
    bottom: "32.35%",
    left: "94.54%",
    opacity: 0.4,
    right: "0%",
    position: "absolute",
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
    height: "0.31%",
    width: "5.68%",
    top: "0.3%",
    right: "5.69%",
    bottom: "99.38%",
    left: "88.63%",
    position: "absolute",
  },
  wifiIcon: {
    height: 11,
    width: 15,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  pickUp: {
    top: 178,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_lg,
    left: 32,
    position: "absolute",
  },
  dropOff: {
    top: 463,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_lg,
    left: 32,
    position: "absolute",
  },
  bWoleAriyo: {
    top: "5.92%",
    fontFamily: FontFamily.ptRegularNormalText,
    color: Color.mainAshColour,
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
    position: "absolute",
    left: "7.48%",
    width: "62.85%",
    height: "0.55%",
  },
  muritalaEletuWay: {
    top: "13.81%",
    fontFamily: FontFamily.ptRegularNormalText,
    color: Color.mainAshColour,
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
    position: "absolute",
    left: "7.48%",
    width: "62.85%",
    height: "0.55%",
  },
  turnOnTo: {
    height: "1.02%",
    width: "53.97%",
    top: "16.66%",
    left: "14.72%",
    color: Color.mainAshColour,
    fontFamily: FontFamily.ptRegularNormalText,
    lineHeight: 18,
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
    position: "absolute",
  },
  johnChinedu: {
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
    color: Color.black,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  text: {
    top: "58%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  info: {
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  password: {
    height: "1.38%",
    width: "23.13%",
    top: "6.97%",
    right: "63.08%",
    bottom: "91.64%",
  },
  addRecipient: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.black,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  password1: {
    width: "21.96%",
    top: "14.97%",
    bottom: "84.45%",
    right: "63.32%",
  },
  password2: {
    width: "41.36%",
    top: "16.14%",
    right: "43.93%",
    bottom: "83.28%",
  },
  location: {
    top: "9.41%",
    left: "13.79%",
    position: "absolute",
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
    color: Color.black,
  },
  user1Icon: {
    top: 255,
    left: 32,
    overflow: "hidden",
  },
  user2Icon: {
    top: 540,
    left: 32,
    overflow: "hidden",
  },
  lineIcon: {
    height: "0.03%",
    width: "80.61%",
    top: "8.82%",
    right: "12.03%",
    bottom: "91.16%",
    left: "7.36%",
    position: "absolute",
  },
  icModeEdit24px2Icon: {
    top: 279,
    height: 18,
    width: 18,
    position: "absolute",
  },
  location31: {
    top: 0,
    left: 0,
    overflow: "hidden",
  },
  bWoleAriyo1: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: "0%",
  },
  password3: {
    width: "75.55%",
    top: "54.35%",
    right: "16.93%",
    left: "7.52%",
    bottom: "0%",
  },
  icModeEdit24px6Icon: {
    top: 21,
    left: 301,
    overflow: "hidden",
  },
  location31Parent: {
    top: 340,
    width: 319,
    height: 46,
    left: 32,
    position: "absolute",
  },
  imSending: {
    color: Color.mainWhite,
  },
  pryButton: {
    left: 86,
    height: 40,
    width: 125,
    top: 108,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_mid,
    paddingHorizontal: Padding.p_126xl,
    flexDirection: "row",
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colourMain2,
  },
  imSending1: {
    color: Color.black,
  },
  pryButton1: {
    backgroundColor: Color.gainsboro_100,
    left: 221,
    height: 40,
    width: 125,
    top: 108,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_mid,
    paddingHorizontal: Padding.p_126xl,
    flexDirection: "row",
    borderRadius: Border.br_11xl,
  },
  headerChild: {
    width: 27,
    top: 57,
    left: 31,
  },
  leftArrow11: {
    width: 25,
    left: 31,
    position: "absolute",
    overflow: "hidden",
  },
  reviewOrder: {
    marginLeft: -157,
    fontSize: FontSize.h3Header320ptMediumRoboto_size,
    color: Color.dark,
    width: 328,
    textAlign: "center",
    fontFamily: FontFamily.rubikRegular,
    height: 24,
    top: 57,
  },
  time: {
    marginTop: -9,
    width: "13.15%",
    left: "5.11%",
    fontSize: FontSize.sFSubheadlineSemibold_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.sFSubheadlineSemibold,
    color: Color.darkslategray_400,
    textAlign: "center",
  },
  statusbar: {
    marginLeft: -214,
    height: 44,
    top: 0,
    width: 428,
  },
  leftArrow11Parent: {
    top: 0,
  },
  header: {
    top: -3,
  },
  icon: {
    overflow: "hidden",
  },
  keyboardArrowRight1: {
    left: 349,
    top: 540,
  },
  passwordIcon: {
    top: 579,
    left: 32,
    overflow: "hidden",
  },
  groupChild: {
    backgroundColor: Color.silver_100,
    borderRadius: Border.br_mini,
    top: 0,
    left: 0,
  },
  groupItem: {
    width: 13,
    height: 12,
  },
  rectangleParent: {
    top: 602,
    left: 326,
  },
  groupInner: {
    left: 2,
    height: 702,
    top: 0,
    width: 428,
    backgroundColor: Color.mainWhite,
    position: "absolute",
  },
  customDeliveryDetails: {
    top: 47,
    color: Color.colourMain2,
    left: 34,
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  selectYourPackage: {
    height: "0.94%",
    width: "83.02%",
    top: "3.91%",
    left: "7.91%",
    fontFamily: FontFamily.ptRegularNormalText,
    color: Color.mainAshColour,
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
    position: "absolute",
  },
  vectorIcon: {
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  h: {
    fontSize: FontSize.size_5xs,
    lineHeight: 10,
    fontFamily: FontFamily.rubikRegular,
    color: Color.mainWhite,
    textAlign: "left",
  },
  layer2: {
    height: "3.12%",
    width: "3.99%",
    top: "6.43%",
    right: "92.52%",
    bottom: "90.45%",
    left: "3.49%",
    position: "absolute",
  },
  rectangleView: {
    width: 382,
    height: 116,
    backgroundColor: Color.colourMain2,
    top: 0,
    left: 0,
  },
  smallSizedParcel: {
    left: "22.44%",
    color: Color.mainWhite,
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  documentsenvelopeSmallElec: {
    top: "8.97%",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
    width: "72.82%",
    color: Color.darkgray_100,
    left: "22.44%",
  },
  maxDimension40: {
    top: "16.37%",
    left: "22.44%",
    color: Color.mainWhite,
    fontFamily: FontFamily.poppinsRegular,
  },
  illustrationWrapper: {
    height: "11.11%",
    bottom: "84.21%",
    top: "4.68%",
    position: "absolute",
  },
  groupChild1: {
    height: 116,
    borderRadius: Border.br_mini,
    top: 0,
    backgroundColor: Color.mainWhite,
  },
  mediumSizedParcel: {
    left: "22.44%",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
    color: Color.black,
  },
  shoeboxLaptop: {
    top: "39.66%",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
    width: "72.82%",
    color: Color.darkgray_100,
    left: "22.44%",
  },
  maxDimension50: {
    top: "69.83%",
    color: Color.darkslategray_300,
    left: "22.44%",
    fontFamily: FontFamily.poppinsRegular,
  },
  illustrationContainer: {
    height: "49.14%",
    bottom: "30.17%",
    left: "3.99%",
    right: "81.8%",
    width: "14.21%",
  },
  rectangleContainer: {
    top: 123,
    height: 116,
  },
  groupView: {
    top: 246,
    height: 116,
  },
  groupChild3: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.mainWhite,
  },
  manualInput: {
    left: "22.44%",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
    color: Color.black,
  },
  ifTheAbove: {
    top: "30.07%",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
    width: "72.82%",
    color: Color.darkgray_100,
    left: "22.44%",
  },
  illustrationWrapper1: {
    height: "37.25%",
    bottom: "47.06%",
    left: "3.99%",
    right: "81.8%",
    width: "14.21%",
  },
  length1: {
    color: Color.darkslategray_300,
  },
  text1: {
    color: Color.red,
  },
  length: {
    fontFamily: FontFamily.poppinsRegular,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  height: {
    left: "52.9%",
    fontFamily: FontFamily.poppinsRegular,
    top: "0%",
    position: "absolute",
  },
  width: {
    left: "26.09%",
    fontFamily: FontFamily.poppinsRegular,
    top: "0%",
    position: "absolute",
  },
  weight: {
    left: "78.26%",
    fontFamily: FontFamily.poppinsRegular,
    top: "0%",
    position: "absolute",
  },
  groupChild4: {
    left: 0,
  },
  groupChild5: {
    left: 72,
  },
  groupChild6: {
    left: 149,
  },
  groupChild7: {
    left: 221,
  },
  lengthParent: {
    height: "41.03%",
    width: "68.83%",
    top: "58.97%",
    right: "8.73%",
    left: "22.44%",
    bottom: "0%",
    position: "absolute",
  },
  groupContainer: {
    top: 357,
    height: 156,
  },
  layer2Parent: {
    height: "24.14%",
    width: "93.26%",
    top: "7.25%",
    right: "2.33%",
    bottom: "68.61%",
    left: "4.42%",
    position: "absolute",
  },
  groupChild8: {
    borderRadius: Border.br_mini,
    top: 0,
    backgroundColor: Color.mainWhite,
  },
  optionalPackageInformation: {
    top: 27,
    color: Color.black,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: 32,
    position: "absolute",
  },
  weHaveUsed: {
    height: "2.91%",
    width: "83.41%",
    top: "4.46%",
    fontFamily: FontFamily.ptRegularNormalText,
    color: Color.mainAshColour,
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
    position: "absolute",
    left: "7.48%",
  },
  package: {
    color: Color.black,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  password4: {
    height: "13.38%",
    width: "18.31%",
    right: "80.23%",
    bottom: "86.62%",
    left: "1.45%",
    top: "0%",
    position: "absolute",
  },
  groupChild9: {
    height: "0.64%",
    width: "100.29%",
    top: "62.74%",
    bottom: "36.62%",
    left: "-0.15%",
    borderRadius: Border.br_mini,
  },
  password5: {
    width: "26.78%",
    right: "73.22%",
    bottom: "54.35%",
    left: "0%",
    top: "0%",
  },
  egShoeBox: {
    fontFamily: FontFamily.poppinsRegular,
    top: "0%",
  },
  password6: {
    width: "29.83%",
    right: "70.17%",
  },
  icModeEdit24px6Icon1: {
    left: 277,
    borderRadius: Border.br_mini,
    top: 0,
    overflow: "hidden",
  },
  passwordContainer: {
    height: "54.35%",
    top: "45.65%",
    right: "0%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  passwordGroup: {
    height: "29.3%",
    top: "26.11%",
    bottom: "44.59%",
  },
  password7: {
    width: "20.34%",
    right: "79.66%",
    bottom: "58%",
    top: "0%",
  },
  password8: {
    width: "10.17%",
    right: "89.83%",
  },
  passwordParent2: {
    height: "50%",
    right: "0%",
    left: "0%",
    bottom: "0%",
    width: "100%",
  },
  passwordParent1: {
    height: "31.85%",
    top: "68.15%",
    bottom: "0%",
  },
  passwordParent: {
    height: "11.13%",
    width: "80.37%",
    top: "9.14%",
    right: "11.92%",
    bottom: "79.73%",
  },
  optionalDetails: {
    top: "24.39%",
    color: Color.black,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: "0%",
    position: "absolute",
  },
  fragile: {
    color: Color.black,
  },
  fragileSelectThisContainer: {
    width: "82.73%",
    left: "17.27%",
    top: "0%",
    position: "absolute",
  },
  fragile1Icon: {
    left: 27,
    width: 16,
    top: 4,
  },
  groupChild10: {
    top: 4,
  },
  fragileSelectThisOptionIfParent: {
    height: "4.29%",
    width: "89.67%",
    top: "30.51%",
    right: "10.05%",
    bottom: "65.2%",
    left: "0.27%",
    position: "absolute",
  },
  sms1Icon: {
    left: 28,
    top: 4,
  },
  pickUpSmsContainer: {
    width: "83.48%",
    left: "16.52%",
    top: "0%",
    position: "absolute",
  },
  sms1Parent: {
    top: 0,
    left: 0,
  },
  groupWrapper: {
    left: 1,
    top: 443,
  },
  groupChild12: {
    top: 3,
    height: 13,
    borderColor: "#000",
  },
  notepad1Icon: {
    top: 1,
    left: 27,
    width: 16,
  },
  deliveryNoteSelectIfYouHaParent: {
    height: "6.43%",
    width: "93.75%",
    top: "36.73%",
    right: "6.25%",
    bottom: "56.84%",
    left: "0%",
    position: "absolute",
  },
  calendar1Icon: {
    top: 155,
    left: 325,
    borderRadius: Border.br_mini,
    overflow: "hidden",
  },
  now: {
    left: "14.13%",
    color: Color.darkgray_100,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    fontSize: FontSize.size_lg,
  },
  later: {
    top: "15.71%",
    left: "41.58%",
    textAlign: "left",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  groupIcon: {
    right: "90.76%",
    bottom: "81.33%",
    left: "2.72%",
    width: "6.52%",
    height: "2.45%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupChild13: {
    bottom: "81.43%",
    left: "30.16%",
    top: "16.12%",
    position: "absolute",
    right: "63.32%",
  },
  groupChild14: {
    top: 154,
    left: 220,
    width: 100,
    height: 29,
    backgroundColor: Color.mainWhite,
  },
  selectTime: {
    left: "61.96%",
    color: "#e0e0e0",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
  },
  pleaseGetYour: {
    top: "3.67%",
    width: "97.28%",
    left: "0%",
  },
  packageReadyTime: {
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    top: "0%",
    position: "absolute",
  },
  standardInsurance: {
    left: "29.02%",
    top: "2.7%",
  },
  none: {
    top: "81.08%",
    left: "13.33%",
  },
  ellipseIcon: {
    top: "44.14%",
    right: "92.16%",
    bottom: "38.74%",
    left: "0.39%",
  },
  groupChild15: {
    right: "92.55%",
    bottom: "80.18%",
    top: "2.7%",
    left: "0%",
  },
  groupChild16: {
    top: "81.98%",
    right: "91.76%",
    bottom: "0.9%",
    left: "0.78%",
  },
  shippingInsurance1Icon: {
    left: 32,
  },
  comprehensiveInsurance: {
    top: "10.71%",
    left: "17.41%",
  },
  shippingInsurance2Icon: {
    left: 0,
  },
  comprehensiveInsuranceParent: {
    height: "25.23%",
    width: "87.84%",
    top: "40.54%",
    bottom: "34.23%",
    left: "12.16%",
    right: "0%",
    position: "absolute",
  },
  standardInsuranceParent: {
    height: "68.1%",
    top: "31.9%",
    right: "0%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  addInsuranceParent: {
    height: "16.63%",
    width: "69.29%",
    top: "60%",
    right: "30.71%",
    bottom: "23.37%",
    left: "0%",
    position: "absolute",
  },
  deliveryTime: {
    top: "91.43%",
    left: "0.27%",
    color: Color.black,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  chooseTheDelivery: {
    width: "98.37%",
    top: "95.71%",
    left: "0.27%",
  },
  arrowsPlus1: {
    top: 877,
    width: 19,
    height: 19,
    borderRadius: Border.br_mini,
    left: 349,
    position: "absolute",
    overflow: "hidden",
  },
  optionalDetailsParent: {
    height: "69.45%",
    width: "85.98%",
    top: "22.11%",
    right: "5.37%",
    bottom: "8.43%",
  },
  groupChild17: {
    top: 29,
    left: 0,
  },
  passwordWrapper: {
    height: "39.62%",
    width: "99.53%",
    bottom: "60.38%",
    left: "0.47%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  groupParent1: {
    top: 1313,
    left: 40,
    width: 214,
    height: 53,
    position: "absolute",
  },
  password10: {
    width: "20.95%",
    top: "8%",
    right: "79.05%",
    bottom: "50%",
  },
  addMore: {
    fontSize: FontSize.size_3xs,
    color: Color.colourMain2,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  password11: {
    height: "30%",
    width: "15.87%",
    bottom: "70%",
    left: "84.13%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  passwordFrame: {
    width: "37.14%",
    right: "62.86%",
    top: "58%",
    bottom: "0%",
  },
  passwordParent3: {
    height: "59.52%",
    width: "90.26%",
    top: "40.48%",
    left: "9.74%",
    right: "0%",
    bottom: "0%",
    position: "absolute",
  },
  groupChild18: {
    height: "22.62%",
    width: "5.44%",
    right: "94.56%",
    bottom: "27.38%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    left: "0%",
  },
  extraNotificationContactsParent: {
    height: "5.95%",
    width: "81.54%",
    top: "77.18%",
    right: "9.81%",
    bottom: "16.87%",
  },
  rectangleParent2: {
    top: 714,
  },
  rectangleGroup: {
    top: 215,
    height: 2125,
    left: 0,
  },
  groupChild19: {
    top: 0,
    backgroundColor: Color.mainWhite,
  },
  password13: {
    height: "15.44%",
    width: "30.14%",
    top: "65.44%",
    right: "47.66%",
    bottom: "19.12%",
    left: "22.2%",
    position: "absolute",
  },
  paymentMethod: {
    left: 32,
  },
  n3000: {
    left: 286,
  },
  creditCard1Icon: {
    top: 85,
    left: 36,
  },
  keyboardArrowRight2Icon: {
    top: 86,
    left: 333,
    overflow: "hidden",
  },
  groupWrapper1: {
    top: 0,
  },
  groupFrame: {
    top: 2348,
  },
  groupChild20: {
    top: 2492,
    backgroundColor: Color.mainWhite,
  },
  groupChild21: {
    backgroundColor: Color.mainWhite,
  },
  packageInformation: {
    top: 0,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_lg,
    left: 0,
    position: "absolute",
  },
  groupChild22: {
    height: "0.85%",
    width: "88.02%",
    top: "99.58%",
    bottom: "-0.42%",
    left: "12.13%",
  },
  packageInformationParent: {
    top: 0,
    left: 0,
  },
  groupWrapper2: {
    top: 19,
    left: 32,
  },
  password14: {
    width: "36.8%",
    right: "52.23%",
    bottom: "66.67%",
    height: "33.33%",
    top: "0%",
  },
  documentsenvelopeSmallElec1: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
    left: "0%",
    top: "0%",
    width: "100%",
  },
  info15: {
    width: "89.02%",
    left: "10.98%",
    position: "absolute",
  },
  groupChild23: {
    width: "5.64%",
    right: "94.36%",
  },
  groupPressable: {
    width: "78.74%",
    top: "26.23%",
    right: "13.79%",
    bottom: "47.95%",
  },
  password15: {
    width: "32.48%",
    right: "56.98%",
    bottom: "66.67%",
    height: "33.33%",
    top: "0%",
  },
  customizeYourRequest: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.mainAshColour,
    lineHeight: 18,
    left: "0%",
    top: "0%",
    width: "100%",
  },
  info17: {
    width: "89.46%",
    top: "42.86%",
    height: "57.14%",
    right: "0%",
    bottom: "0%",
  },
  groupChild24: {
    width: "5.41%",
    right: "94.59%",
  },
  passwordParent4: {
    width: "82.01%",
    top: "62.3%",
    right: "10.51%",
    bottom: "11.89%",
  },
  wrapper: {
    left: 367,
    top: 264,
  },
  pryButton2: {
    top: 2517,
    left: 41,
    width: 342,
    backgroundColor: Color.colourMain2,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_mid,
    paddingHorizontal: Padding.p_126xl,
    flexDirection: "row",
    borderRadius: Border.br_11xl,
  },
  groupParent: {
    top: 985,
    left: -2,
    height: 2628,
  },
  password16: {
    height: "25.3%",
    width: "40.24%",
    top: "67.47%",
    right: "38.11%",
    bottom: "7.23%",
    left: "21.65%",
    position: "absolute",
  },
  scheduledDelivery1Icon: {
    top: 51,
    left: 13,
  },
  keyboardArrowRight2Icon1: {
    top: 53,
    left: 304,
    overflow: "hidden",
  },
  passwordParent5: {
    height: "2.3%",
    width: "76.64%",
    top: "19.51%",
    right: "15.65%",
    bottom: "78.19%",
  },
  groupChild25: {
    top: 0,
    backgroundColor: Color.mainWhite,
    left: 0,
  },
  packageInformation1: {
    top: 18,
    left: 33,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  guideline: {
    top: 58,
    left: 34,
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  youCanSend: {
    top: 87,
    width: 339,
    height: 15,
    color: Color.darkslategray_500,
    lineHeight: 14,
    fontSize: FontSize.size_3xs,
    left: 34,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  dontContainAny: {
    fontFamily: FontFamily.poppinsRegular,
  },
  dontContainAnyContainer: {
    top: 126,
    width: 273,
    lineHeight: 14,
    left: 47,
    height: 16,
  },
  areClosedSecurely: {
    top: 107,
    width: 286,
    height: 19,
    fontFamily: FontFamily.poppinsRegular,
    left: 47,
    lineHeight: 18,
  },
  groupChild26: {
    top: 115,
  },
  groupChild27: {
    top: 132,
  },
  rectangleParent5: {
    top: 818,
    left: 1,
  },
  reviewDeliveryRequestCard: {
    backgroundColor: Color.whitesmoke_100,
    flex: 1,
    height: 3613,
    overflow: "hidden",
    width: "100%",
  },
});

export default ReviewDeliveryRequestCard;
