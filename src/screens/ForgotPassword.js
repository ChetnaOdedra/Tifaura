import React, { useState,useEffect } from "react";
import { Text, TouchableOpacity} from "react-native";
import Constants from "../utills/Constants";
import GlobalStyles from "../styles/GlobalStyles";
import BorderdTextInput from "../components/BorderdTextInput";
import string from "../res/string";
import dimensions from "../res/dimenstion";
import { ScreenNames } from "../utills/ScreenName";
import { isValidEmail,showToast } from "../utills/GlobalFunctions";
import AuthScreenComponent from "../components/AuthScreenComponant";  


const ForgotPassword = ({navigation}) =>{

const [email, setEmail] = useState("");
const [isButtonDisabled, setIsButtonDisabled] = useState(true);

useEffect(() => {
    if (email.trim() !== '') {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [email]);

const handleSendOtp = () => {
    console.log('send otp with:', email);
    showToast("Success", "OTP sent to " + email, Constants.toastTypes.SUCCESS);
};
   
 return(
        <AuthScreenComponent
            navigation={navigation}
            screenName={ScreenNames.ForgotPassword}
        >
           
               <Text style={[GlobalStyles.txt_bold_primary_20,{textAlign:'center'}]}>Forgot your password?</Text> 

               <Text style={[GlobalStyles.txt_bold_black_14,{
                marginTop:dimensions.dp_10,
                marginBottom:dimensions.dp_15,
                textAlign:'center'
               }]}>No worries! Just enter your registered email below, and we’ll send you an OTP so you can reset your password.</Text>

               <Text style={GlobalStyles.textinput_title}>{string.loginString.email}</Text> 
               <BorderdTextInput
                    placeholder={string.loginString.placeholderEmail}
                    value={email}
                    onChangeText={setEmail}
                />

                <TouchableOpacity 
                    disabled={isButtonDisabled}
                    style={isButtonDisabled ? GlobalStyles.button_primary_disable : GlobalStyles.button_primary}
                    onPress={()=>{
                        if(!isValidEmail(email)){
                            showToast(string.errorString.invalid, string.errorString.invalidEmail, Constants.toastTypes.DANGER);
                            return;
                        }else{
                            handleSendOtp();
                            navigation.navigate(ScreenNames.VerifyOTP, 
                                { email: email, fromScreen: ScreenNames.ForgotPassword });
                        }           
                    }}>
                    <Text style={GlobalStyles.button_text_white}>{string.loginString.sendOTP}</Text>
                </TouchableOpacity>

            </AuthScreenComponent>
    )

}
export default ForgotPassword