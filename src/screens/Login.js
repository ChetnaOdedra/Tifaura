import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useMutation } from "@apollo/client/react";
import BorderdTextInput from "../components/BorderdTextInput";
import AuthScreenComponent from "../components/AuthScreenComponant";
import APILoader from "../components/APILoader";
import PreferenceManager from "../utills/PreferenceManager";
import { LoginBoy } from "../api/graphQL/mutation/LoginDeliveryBoy";
import { ScreenNames } from "../utills/ScreenName";
import { isValidEmail, showToast, validatePassword, getPasswordError, clearScreenNavigation } from "../utills/GlobalFunctions";
import GlobalStyles from "../styles/GlobalStyles";
import string from "../res/string";
import colors from "../res/color";
import dimensions from "../res/dimenstion";
import Constants from "../utills/Constants";

const Login = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);


  // ✅ Save user data after successful login
  const saveUserData = async (user, token) => {
    try {
      await PreferenceManager.setItem(PreferenceManager.KEYS.USER, user);
      await PreferenceManager.setItem(PreferenceManager.KEYS.TOKEN, token);
      await PreferenceManager.setItem(PreferenceManager.KEYS.IS_LOGGED_IN, "true");  
      clearScreenNavigation(navigation, ScreenNames.Home);
    } catch (e) {
      console.log("Error saving user data:", e);
    }
  };

  // ✅ GraphQL mutation
  const [loginDeliveryBoyMutation, { loading: loadingLogin }] = useMutation(LoginBoy, {
    errorPolicy: "all",
    onCompleted: (response) => {
      const loginData = response.LoginDeliveryBoy;
      console.log("login repo....",response)
      if (loginData.success == true) {

        const userData = loginData.data;
        showToast(string.sucess, loginData.message, Constants.toastTypes.SUCCESS);

        if (userData?.usr_is_verified) {
          saveUserData(userData, userData.token);
        }else{
          if (!loginData.data?.usr_is_verified) {
          navigation.navigate(ScreenNames.VerifyOTP, { from: ScreenNames.LOGIN, email, password });
        }
        }
      } else {
        showToast(string.errorString.eroor, loginData.message, Constants.toastTypes.DANGER);
      }
    },
    onError: (error) => {
      console.log("Login error:", error);
      showToast(string.errorString.eroor, error.message, Constants.toastTypes.DANGER);
    },
  });

  const handleLogin = () => {
    loginDeliveryBoyMutation({
      variables: {
        usrEmail: email,
        usrPassword: password,
      },
    });
  };

  // ✅ Enable/disable login button based on input
  useEffect(() => {
    setIsButtonDisabled(email.trim() === "" || password.trim() === "");
  }, [email, password]);

  return (
    <AuthScreenComponent navigation={navigation} screenName={ScreenNames.LOGIN}>

      {loadingLogin ? (
                <APILoader
                  visible = {loadingLogin}
                />                     
                ):null}

      <Text style={GlobalStyles.textinput_title}>{string.loginString.email}</Text>
      <BorderdTextInput placeholder={string.loginString.placeholderEmail} value={email} onChangeText={setEmail} />

      <Text style={GlobalStyles.textinput_title}>{string.loginString.password}</Text>
      <BorderdTextInput placeholder={string.loginString.placeholderPassword} value={password} secureTextEntry onChangeText={setPassword} />

      <TouchableOpacity
        style={{ alignSelf: 'flex-end', padding: dimensions.dp_10 }}
        onPress={() => navigation.navigate(ScreenNames.ForgotPassword)}
      >
        <Text style={[GlobalStyles.txt_bold_black_16, { color: colors.primary }]}>
          {string.loginString.forgotPassword}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        disabled={isButtonDisabled}
        style={isButtonDisabled ? GlobalStyles.button_primary_disable : GlobalStyles.button_primary}
        onPress={() => {
          if (!isValidEmail(email)) {
            showToast(string.errorString.invalid, string.errorString.invalidEmail, Constants.toastTypes.DANGER);
            return;
          }
          if (!validatePassword(password)) {
            const error = getPasswordError(password, "Password");
            if (error) {
              showToast(string.errorString.invalid, error, Constants.toastTypes.DANGER);
              return;
            }
          }
          handleLogin();
        }}
      >
        <Text style={GlobalStyles.button_text_white}>{string.loginString.login}</Text>
      </TouchableOpacity>

      <View style={{ alignSelf: 'center', marginTop: dimensions.dp_15, flexDirection: 'row' }}>
        <Text style={GlobalStyles.txt_regular_black_16}>{string.loginString.createAccount}</Text>
        <TouchableOpacity
          style={{ marginLeft: dimensions.dp_5 }}
          onPress={() => navigation.navigate(ScreenNames.Registration)}
        >
          <Text style={[GlobalStyles.txt_bold_black_16, { color: colors.primary }]}>
            {string.registrationString.signUp}
          </Text>
        </TouchableOpacity>
      </View>
    </AuthScreenComponent>
  );
};

export default Login;
