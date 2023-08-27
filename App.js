const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import InviteFriendMobile from "./screens/InviteFriendMobile";
import ShareAndEarn from "./screens/ShareAndEarn";
import HomeText from "./screens/HomeText";
import StTimeLogin from "./screens/StTimeLogin";
import SendReceive from "./screens/SendReceive";
import ChangeAddressText from "./screens/ChangeAddressText";
import SenderReceiver from "./screens/SenderReceiver";
import SaveAnAddress from "./screens/SaveAnAddress";
import ViewSavedPlaces from "./screens/ViewSavedPlaces";
import ReviewDeliveryRequestCard from "./screens/ReviewDeliveryRequestCard";
import ChangeDeliveryPlan from "./screens/ChangeDeliveryPlan";
import ChangeDeliveryPlan1 from "./screens/ChangeDeliveryPlan1";
import EnterReceiverDetails from "./screens/EnterReceiverDetails";
import ReviewDeliveryRequestCard1 from "./screens/ReviewDeliveryRequestCard1";
import Group from "./screens/Group";
import ReceiveAPackage from "./screens/ReceiveAPackage";
import AddReceiverFromPhonebook from "./screens/AddReceiverFromPhonebook";
import InviteFriendMobile1 from "./screens/InviteFriendMobile1";
import InviteFriendMobile2 from "./screens/InviteFriendMobile2";
import ShareAndEarn1 from "./screens/ShareAndEarn1";
import TermsOfService from "./screens/TermsOfService";
import PremiumMembershipPricing from "./screens/PremiumMembershipPricing";
import PremiumMembership from "./screens/PremiumMembership";
import QRCodeScanSuccess2 from "./screens/QRCodeScanSuccess2";
import QRCodeScanSuccess01 from "./screens/QRCodeScanSuccess01";
import Track from "./screens/Track";
import HistoryText from "./screens/HistoryText";
import NoInternetDetected from "./screens/NoInternetDetected";
import SupportText from "./screens/SupportText";
import AddWork from "./screens/AddWork";
import ContactListText from "./screens/ContactListText";
import AccountText from "./screens/AccountText";
import ConfirmationPageText from "./screens/ConfirmationPageText";
import ChangePaymentMethod from "./screens/ChangePaymentMethod";
import ChangeDeliveryPlan2 from "./screens/ChangeDeliveryPlan2";
import EnterReceiverDetails1 from "./screens/EnterReceiverDetails1";
import ProhibitedItemDetails from "./screens/ProhibitedItemDetails";
import OrderReviewWith from "./screens/OrderReviewWith";
import OrderReviewText from "./screens/OrderReviewText";
import MorePricesAccording from "./screens/MorePricesAccording";
import PriceAccordingTo from "./screens/PriceAccordingTo";
import HomeText1 from "./screens/HomeText1";
import PlansText from "./screens/PlansText";
import RewardsText from "./screens/RewardsText";
import ForgotPasswordText from "./screens/ForgotPasswordText";
import RegisterText from "./screens/RegisterText";
import LoginText from "./screens/LoginText";
import SplashText from "./screens/SplashText";
import Onboarding1 from "./screens/Onboarding1";
import Onboarding4 from "./screens/Onboarding4";
import Onboarding3 from "./screens/Onboarding3";
import Onboarding2 from "./screens/Onboarding2";
import CreateNewPassword from "./screens/CreateNewPassword";
import PasswordChangedSuccess from "./screens/PasswordChangedSuccess";
import WelcomeVerifyPasswordEmai from "./screens/WelcomeVerifyPasswordEmai";
import WelcomeVerifyEmail from "./screens/WelcomeVerifyEmail";
import Home from "./screens/Home";
import Welcome from "./screens/Welcome";
import RegisterEnterPassword from "./screens/RegisterEnterPassword";
import RegisterName from "./screens/RegisterName";
import ForgotPassword from "./screens/ForgotPassword";
import WelcomeBackLogin from "./screens/WelcomeBackLogin";
import Welcome1 from "./screens/Welcome1";
import ReviewSuccess from "./screens/ReviewSuccess";
import RateRider from "./screens/RateRider";
import DeliveryHistoryText from "./screens/DeliveryHistoryText";
import AddCard from "./screens/AddCard";
import ContactListText1 from "./screens/ContactListText1";
import SaveAnAddress1 from "./screens/SaveAnAddress1";
import PoolDeliveryPriceMoreOp from "./screens/PoolDeliveryPriceMoreOp";
import ProhibitedItems from "./screens/ProhibitedItems";
import Confirmation from "./screens/Confirmation";
import DeliveryDetailsWithReview from "./screens/DeliveryDetailsWithReview";
import DeliveryDetails from "./screens/DeliveryDetails";
import DeliveryHistoryHomeNone from "./screens/DeliveryHistoryHomeNone";
import DeliveryHistoryHome from "./screens/DeliveryHistoryHome";
import SaveAddressToContact from "./screens/SaveAddressToContact";
import AddContactConfirmation from "./screens/AddContactConfirmation";
import EditContact from "./screens/EditContact";
import AddNewContact from "./screens/AddNewContact";
import LineVector from "./screens/LineVector";
import LineVector1 from "./screens/LineVector1";
import AddToAddress from "./screens/AddToAddress";
import PoolDeliveryPrice from "./screens/PoolDeliveryPrice";
import AccountPage from "./screens/AccountPage";
import InternetError from "./screens/InternetError";
import AboutApp from "./screens/AboutApp";
import ReportIssue from "./screens/ReportIssue";
import Support from "./screens/Support";
import TopUpWallet from "./screens/TopUpWallet";
import AddCreditDebitCard from "./screens/AddCreditDebitCard";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "DMSans-Regular": require("./assets/fonts/DMSans-Regular.ttf"),
    "DMSans-Bold": require("./assets/fonts/DMSans-Bold.ttf"),
    "Manrope-SemiBold": require("./assets/fonts/Manrope-SemiBold.ttf"),
    "Manrope-Bold": require("./assets/fonts/Manrope-Bold.ttf"),
    "Manrope-ExtraBold": require("./assets/fonts/Manrope-ExtraBold.ttf"),
    "Rubik-Regular": require("./assets/fonts/Rubik-Regular.ttf"),
    "Rubik-Bold": require("./assets/fonts/Rubik-Bold.ttf"),
    "Sen-Regular": require("./assets/fonts/Sen-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Quicksand-Regular": require("./assets/fonts/Quicksand-Regular.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="InviteFriendMobile"
              component={InviteFriendMobile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ShareAndEarn"
              component={ShareAndEarn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeText"
              component={HomeText}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StTimeLogin"
              component={StTimeLogin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SendReceive"
              component={SendReceive}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChangeAddressText"
              component={ChangeAddressText}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SenderReceiver"
              component={SenderReceiver}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SaveAnAddress"
              component={SaveAnAddress}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ViewSavedPlaces"
              component={ViewSavedPlaces}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ReviewDeliveryRequestCard"
              component={ReviewDeliveryRequestCard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChangeDeliveryPlan"
              component={ChangeDeliveryPlan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChangeDeliveryPlan1"
              component={ChangeDeliveryPlan1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EnterReceiverDetails"
              component={EnterReceiverDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ReviewDeliveryRequestCard1"
              component={ReviewDeliveryRequestCard1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group"
              component={Group}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ReceiveAPackage"
              component={ReceiveAPackage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddReceiverFromPhonebook"
              component={AddReceiverFromPhonebook}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InviteFriendMobile1"
              component={InviteFriendMobile1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InviteFriendMobile2"
              component={InviteFriendMobile2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ShareAndEarn1"
              component={ShareAndEarn1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TermsOfService"
              component={TermsOfService}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PremiumMembershipPricing"
              component={PremiumMembershipPricing}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PremiumMembership"
              component={PremiumMembership}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QRCodeScanSuccess2"
              component={QRCodeScanSuccess2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QRCodeScanSuccess01"
              component={QRCodeScanSuccess01}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Track"
              component={Track}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HistoryText"
              component={HistoryText}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NoInternetDetected"
              component={NoInternetDetected}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SupportText"
              component={SupportText}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddWork"
              component={AddWork}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ContactListText"
              component={ContactListText}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AccountText"
              component={AccountText}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ConfirmationPageText"
              component={ConfirmationPageText}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChangePaymentMethod"
              component={ChangePaymentMethod}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChangeDeliveryPlan2"
              component={ChangeDeliveryPlan2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EnterReceiverDetails1"
              component={EnterReceiverDetails1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProhibitedItemDetails"
              component={ProhibitedItemDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OrderReviewWith"
              component={OrderReviewWith}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OrderReviewText"
              component={OrderReviewText}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MorePricesAccording"
              component={MorePricesAccording}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PriceAccordingTo"
              component={PriceAccordingTo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeText1"
              component={HomeText1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PlansText"
              component={PlansText}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RewardsText"
              component={RewardsText}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPasswordText"
              component={ForgotPasswordText}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterText"
              component={RegisterText}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginText"
              component={LoginText}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SplashText"
              component={SplashText}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding1"
              component={Onboarding1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding4"
              component={Onboarding4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding3"
              component={Onboarding3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding2"
              component={Onboarding2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateNewPassword"
              component={CreateNewPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PasswordChangedSuccess"
              component={PasswordChangedSuccess}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WelcomeVerifyPasswordEmai"
              component={WelcomeVerifyPasswordEmai}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WelcomeVerifyEmail"
              component={WelcomeVerifyEmail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterEnterPassword"
              component={RegisterEnterPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterName"
              component={RegisterName}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WelcomeBackLogin"
              component={WelcomeBackLogin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Welcome1"
              component={Welcome1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ReviewSuccess"
              component={ReviewSuccess}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RateRider"
              component={RateRider}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DeliveryHistoryText"
              component={DeliveryHistoryText}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddCard"
              component={AddCard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ContactListText1"
              component={ContactListText1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SaveAnAddress1"
              component={SaveAnAddress1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PoolDeliveryPriceMoreOp"
              component={PoolDeliveryPriceMoreOp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProhibitedItems"
              component={ProhibitedItems}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Confirmation"
              component={Confirmation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DeliveryDetailsWithReview"
              component={DeliveryDetailsWithReview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DeliveryDetails"
              component={DeliveryDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DeliveryHistoryHomeNone"
              component={DeliveryHistoryHomeNone}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DeliveryHistoryHome"
              component={DeliveryHistoryHome}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SaveAddressToContact"
              component={SaveAddressToContact}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddContactConfirmation"
              component={AddContactConfirmation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditContact"
              component={EditContact}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddNewContact"
              component={AddNewContact}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LineVector"
              component={LineVector}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LineVector1"
              component={LineVector1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddToAddress"
              component={AddToAddress}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PoolDeliveryPrice"
              component={PoolDeliveryPrice}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AccountPage"
              component={AccountPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InternetError"
              component={InternetError}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AboutApp"
              component={AboutApp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ReportIssue"
              component={ReportIssue}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Support"
              component={Support}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TopUpWallet"
              component={TopUpWallet}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddCreditDebitCard"
              component={AddCreditDebitCard}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
