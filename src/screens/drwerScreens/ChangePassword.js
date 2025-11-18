import React, { useState,useEffect } from "react";
import { View, Text,Image, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from "../../utills/Constants";
import GlobalStyles from "../../styles/GlobalStyles";
import BorderdTextInput from "../../components/BorderdTextInput";
import string from "../../res/string";
import colors from "../../res/color";
import dimensions from "../../res/dimenstion";
import { ScreenNames } from "../../utills/ScreenName";
import { clearScreenNavigation, showToast,getPasswordError,validatePassword} from "../../utills/GlobalFunctions";
import ScreenWrapper from "../../components/ScreenWrapper";

const ChangePassword = ({navigation}) =>{

const [password, setPassword] = useState("");
const [consirmPsw, setConfirmPsw] = useState("");
const [newPsw, setNewPsw] = useState("");

const [isButtonDisabled, setIsButtonDisabled] = useState(true);

useEffect(() => {
    if (password.trim() !== '' && consirmPsw.trim() !== '' && newPsw.trim() !== '') {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [password, consirmPsw]);

const verifyInputData = (password,consirmPsw) => {

   
    if(!validatePassword(password)){
        const passwordError = getPasswordError(password,"Password");
        showToast(string.errorString.invalid, passwordError, Constants.toastTypes.DANGER);
        return;
    }
    if(!validatePassword(consirmPsw)){
        const passwordError = getPasswordError(consirmPsw,"Confirm password");
        showToast(string.errorString.invalid, passwordError, Constants.toastTypes.DANGER);
        return;
    }
     if(!validatePassword(newPsw)){
        const passwordError = getPasswordError(consirmPsw,"New password");
        showToast(string.errorString.invalid, passwordError, Constants.toastTypes.DANGER);
        return;
    }
    if(newPsw !== consirmPsw){
        showToast(string.errorString.invalid, string.errorString.passwordNotMatch, Constants.toastTypes.DANGER);
        return;
    }

    showToast(string.successString.success, string.successString.passwordResetSuccess, Constants.toastTypes.SUCCESS);
    navigation.goBack()

}

 return(
        <ScreenWrapper 
        navigation={navigation}
        headerTitle={string.screenNames.ChangePsw}
        >
           
                <Text style={GlobalStyles.textinput_title}>{string.loginString.password}</Text> 
                <BorderdTextInput
                    placeholder={string.loginString.placeholderPassword}
                    value={password}
                    secureTextEntry={true}
                    onChangeText={setPassword}
                />

                <Text style={GlobalStyles.textinput_title}>{string.registrationString.newPsw}</Text> 
                <BorderdTextInput
                    placeholder={string.registrationString.placeHolderNewPsw}
                    value={newPsw}
                    secureTextEntry={true}
                    onChangeText={setNewPsw}
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
                        verifyInputData(password,consirmPsw,newPsw);
                    }}>
                    <Text style={GlobalStyles.button_text_white}>{string.save}</Text>
                </TouchableOpacity>

        </ScreenWrapper>
    )

}
export default ChangePassword