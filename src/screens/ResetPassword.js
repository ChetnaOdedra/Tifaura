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
import { clearScreenNavigation, showToast,getPasswordError,validatePassword} from "../utills/GlobalFunctions";
import AuthScreenComponent from "../components/AuthScreenComponant";  
import { ResetDeliveryBoyPassword } from "../api/graphQL/mutation/ResetDeliveryBoyPassword";
import APILoader from "../components/APILoader";
import { useRoute } from "@react-navigation/native";
import { useMutation } from "@apollo/client/react";


const ResetPassword = ({navigation}) =>{

const route = useRoute();
const { email , otp } = route.params || {};
console.log("params...",route.params)

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


const [ resetDeliveryBoyPassword , {  loading, error, data  }] = 
   useMutation ( ResetDeliveryBoyPassword,

  {
    errorPolicy: "all",
    onCompleted: (data) => {    
      if(data.ResetDeliveryBoyPassword.success){
        showToast(string.sucess,data.ResetDeliveryBoyPassword.message, Constants.toastTypes.SUCCESS);
        clearScreenNavigation(navigation,ScreenNames.LOGIN)
      }else{
        showToast(
            string.errorString.eroor,
            data.ResetDeliveryBoyPassword.message, 
            Constants.toastTypes.DANGER);
      }
    },
    onError: (error) => {
        showToast(string.errorString.eroor, error.message, Constants.toastTypes.DANGER);
    },
    }
  )  

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
    if(password !== consirmPsw){
        showToast(string.errorString.invalid, string.errorString.passwordNotMatch, Constants.toastTypes.DANGER);
        return;
    }

    handleResetPsw()
}

const handleResetPsw = () => {

        resetDeliveryBoyPassword({
        variables: {
            usrEmail: email,
            otp: otp,
            newPassword:password
        },
        });
};

 return(
            <AuthScreenComponent
                navigation={navigation}
                screenName={ScreenNames.ResetPassword}
            >
                {loading ?
                    <APILoader visible={loading}/> :null
                }
           
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