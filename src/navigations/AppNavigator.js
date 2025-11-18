import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenNames } from "../utills/ScreenName";

import LoginScreen from "../screens/Login";
import RegistrationScreen from "../screens/Registration";
import HomeScreen from "../screens/Home";
import ForgotPasswordScreen from '../screens/ForgotPassword';
import VerifyOtpScreen from '../screens/VerifyOTP';
import ResetPasswordScreen from '../screens/ResetPassword';
import ThankYouScreen from '../screens/ThankYou';
import DriverOnBoardProcessScreen from '../screens/DriverOnBoardProcess';
import MyAccountScreen from '../screens/drwerScreens/MyAccount';
import EarningScreen from '../screens/drwerScreens/Earning';
import SettingScreen from '../screens/drwerScreens/Settings';
import ContactUsScreen from '../screens/drwerScreens/ContactUs';
import PrivacyPolicyScreen from '../screens/drwerScreens/Privacy';
import TermsAndConditionsScreen from '../screens/drwerScreens/TermsCondition';
import ShareAppScreen from '../screens/drwerScreens/ShareApp';
import RateUsScreen from '../screens/drwerScreens/RateUs';
import ChangePassword from '../screens/drwerScreens/ChangePassword'

const Stack = createNativeStackNavigator();

export default function AppNavigator({initialRoute}) {

  return (

    <NavigationContainer>

        <Stack.Navigator initialRouteName={initialRoute}>

          <Stack.Screen 
            name={ScreenNames.LOGIN}
            options={{ headerShown: false }}
            component={LoginScreen}
            />
        
          <Stack.Screen
            name = {ScreenNames.Registration}
            component={RegistrationScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name = {ScreenNames.ForgotPassword}
            component={ForgotPasswordScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name = {ScreenNames.VerifyOTP}
            component={VerifyOtpScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name = {ScreenNames.ResetPassword}
            component={ResetPasswordScreen}
            options={{ headerShown: false }}
          />

           <Stack.Screen
            name = {ScreenNames.ThankYou}
            component={ThankYouScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name = {ScreenNames.Home}
            component={HomeScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name = {ScreenNames.DriverOnBoardProcess}
            component={DriverOnBoardProcessScreen}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name = {ScreenNames.MyAccount}
            component={MyAccountScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name = {ScreenNames.Earnings}
            component={EarningScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name = {ScreenNames.Settings}
            component={SettingScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name = {ScreenNames.ContactUs}
            component={ContactUsScreen}
            options={{ headerShown: false }}
          />

           <Stack.Screen
            name = {ScreenNames.PrivacyPolicy}
            component={PrivacyPolicyScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name = {ScreenNames.TermsCondition}
            component={TermsAndConditionsScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name = {ScreenNames.ShareApp}
            component={ShareAppScreen}
            options={{ headerShown: false }}
          />

           <Stack.Screen
            name = {ScreenNames.RateUs}
            component={RateUsScreen}
            options={{ headerShown: false }}
          />

            <Stack.Screen
            name = {ScreenNames.ChangePassword}
            component={ChangePassword}
            options={{ headerShown: false }}
          />

        </Stack.Navigator>

    </NavigationContainer>
  

  );
}
