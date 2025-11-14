import React, { useState,useEffect } from "react";
import { View, Text,Image, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from "../utills/Constants";
import GlobalStyles from "../styles/GlobalStyles";
import colors from "../res/color";
import BorderdTextInput from "../components/BorderdTextInput";
import string from "../res/string";
import dimensions from "../res/dimenstion";
import { ScreenNames } from "../utills/ScreenName";
import { clearScreenNavigation, showToast,getPasswordError,validatePassword ,getConfirmPasswordError} from "../utills/GlobalFunctions";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AuthScreenComponent from "../components/AuthScreenComponant";  


const ResetPassword = ({navigation}) =>{


const [password, setPassword] = useState("");
const [consirmPsw, setConfirmPsw] = useState("");
const [isButtonDisabled, setIsButtonDisabled] = useState(true);

useEffect(() => {
    if (password.trim() !== '' && consirmPsw.trim() !== '') {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [password, consirmPsw]);

const verifyInputData = (password,consirmPsw) => {

   
    if(!validatePassword(password)){
        const passwordError = getPasswordError(password);
        showToast(string.errorString.invalid, passwordError, Constants.toastTypes.DANGER);
        return;
    }
    if(!validatePassword(consirmPsw)){
        const passwordError = getConfirmPasswordError(consirmPsw);
        showToast(string.errorString.invalid, passwordError, Constants.toastTypes.DANGER);
        return;
    }
    if(password !== consirmPsw){
        showToast(string.errorString.invalid, string.errorString.passwordNotMatch, Constants.toastTypes.DANGER);
        return;
    }

    showToast(string.successString.success, string.successString.passwordResetSuccess, Constants.toastTypes.SUCCESS);
    clearScreenNavigation(navigation, ScreenNames.LOGIN);

}

 return(
        <AuthScreenComponent>
           
               <Text style={[GlobalStyles.txt_bold_primary_20,{textAlign:'center'}]}>Reset password!</Text> 

               <Text style={[GlobalStyles.txt_bold_black_14,{
                marginTop:dimensions.dp_10,
                marginBottom:dimensions.dp_15,
                textAlign:'center'
               }]}>Reset your password and log in again using your new password.</Text>

                <Text style={GlobalStyles.textinput_title}>{string.loginString.password}</Text> 
                <BorderdTextInput
                    placeholder={string.loginString.placeholderPassword}
                    value={password}
                    secureTextEntry={true}
                    onChangeText={setPassword}
                />

                <Text style={GlobalStyles.textinput_title}>{string.registrationString.confirmPassword}</Text> 
                <BorderdTextInput
                    placeholder={string.registrationString.placeholderConfirmPassword}
                    value={consirmPsw}
                    secureTextEntry={true}
                    onChangeText={setConfirmPsw}
                />

                <TouchableOpacity 
                    disabled={isButtonDisabled}
                    style={isButtonDisabled ? GlobalStyles.button_primary_disable : GlobalStyles.button_primary} 
                    onPress={()=>{
                        verifyInputData(password,consirmPsw);
                    }}>
                    <Text style={GlobalStyles.button_text_white}>{string.forgotpasswordString.resetPassword}</Text>
                </TouchableOpacity>

           </AuthScreenComponent>
    )

}
export default ResetPassword