import React, { useState,useEffect } from "react";
import { View, Text,Image, TouchableOpacity,Platform,KeyboardAvoidingView,ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from "../utills/Constants";
import GlobalStyles from "../styles/GlobalStyles";
import colors from "../res/color";
import BorderdTextInput from "../components/BorderdTextInput";
import string from "../res/string";
import dimensions from "../res/dimenstion";
import { ScreenNames } from "../utills/ScreenName";
import { isValidEmail,showToast ,validatePassword,getPasswordError,clearScreenNavigation} from "../utills/GlobalFunctions";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Registration = ({ navigation }) =>{

const [fullname, setFullName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [consirmPsw, setConfirmPsw] = useState("");
const [phone, setPhone] = useState("");
const [addressLine1, setAddressLine1] = useState("");
const [addressLine2, setAddressLine2] = useState("");
const [town, setTown] = useState("");
const [postCode, setPostCode] = useState("");


const [isButtonDisabled, setIsButtonDisabled] = useState(true);

useEffect(() => {
    if (fullname.trim() !== '' &&email.trim() !== '' && password.trim() !== '', phone.trim() !== '' && consirmPsw.trim() !== '' && 
        addressLine1.trim() !== '' && postCode.trim() !== '') {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [fullname,email, password,phone,consirmPsw,addressLine1,postCode]);

const validateRegistrationInput = (fullname,email, password,phone,consirmPsw,addressLine1,postCode) => {

    
    if(!isValidEmail(email)){
        showToast(string.errorString.invalid, string.errorString.invalidEmail, Constants.toastTypes.DANGER);
        return;
    }
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
    handleRegister();
}  

const handleRegister = () => {
    console.log('register in with:', email, password, fullname,phone,consirmPsw,addressLine1,addressLine2,town,postCode);
    showToast(string.registrationString.signUp, string.registrationString.signUpSuccess, Constants.toastTypes.SUCCESS);
    navigation.navigate(ScreenNames.ThankYou);
};

 return(
        <SafeAreaView style={GlobalStyles.mainScreenContainerAuth}>

                <Image
                source={Constants.imagePath.new_logo}
                style={GlobalStyles.logoImageStyle}
                />


                <KeyboardAwareScrollView
                        contentContainerStyle={{ 
                            flexGrow: 1,backgroundColor:colors.white
                        }}
                        extraScrollHeight={dimensions.spaceDimension.keyboardExrtaSpace}  
                        enableOnAndroid={true}
                        keyboardShouldPersistTaps="handled"
                        >

                <Text style={GlobalStyles.textinput_title}>{string.registrationString.fullname}</Text> 
                <BorderdTextInput
                        placeholder={string.registrationString.placeHolderFullName}
                        value={fullname}
                        onChangeText={setFullName}
                    />

                <Text style={GlobalStyles.textinput_title}>{string.loginString.email}</Text> 
                <BorderdTextInput
                        placeholder={string.loginString.placeholderEmail}
                        value={email}
                        onChangeText={setEmail}
                    />

                    <Text style={GlobalStyles.textinput_title}>{string.registrationString.phone}</Text> 
                    <BorderdTextInput
                        placeholder={string.registrationString.placeholderPhone}
                        value={phone}
                        keyboardType="numeric"
                        onChangeText={setPhone}
                    />

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

                    <Text style={GlobalStyles.textinput_title}>{string.registrationString.addressLine1}</Text> 
                    <BorderdTextInput
                        placeholder={string.registrationString.placeholderAddressLine1}
                        value={addressLine1}
                        onChangeText={setAddressLine1}
                    />

                    <Text style={GlobalStyles.textinput_title}>{string.registrationString.addressLine2}</Text> 
                    <BorderdTextInput
                        placeholder={string.registrationString.placeholderAddressLine2}
                        value={addressLine2}
                        onChangeText={setAddressLine2}
                    />

                    <Text style={GlobalStyles.textinput_title}>{string.registrationString.town}</Text> 
                    <BorderdTextInput
                        placeholder={string.registrationString.placeholderTown}
                        value={town}
                        onChangeText={setTown}
                    />

                    <Text style={GlobalStyles.textinput_title}>{string.registrationString.postCode}</Text> 
                    <BorderdTextInput
                        placeholder={string.registrationString.placeholderPostCode}
                        value={postCode}
                        onChangeText={setPostCode}
                    />

                </KeyboardAwareScrollView>

                <TouchableOpacity 
                disabled={isButtonDisabled}
                style={isButtonDisabled?GlobalStyles.button_primary_disable:GlobalStyles.button_primary}
                onPress={()=>{
                    validateRegistrationInput(fullname,email, password,phone,consirmPsw,addressLine1,postCode);    
                }}
                >
                    <Text style={GlobalStyles.button_text_white}>{string.registrationString.signUp}</Text>
                </TouchableOpacity>

                <View style={{alignSelf:'center',marginVertical:dimensions.dp_15,flexDirection:'row'}}>

                    <Text style={GlobalStyles.txt_regular_black_16}>{string.registrationString.haveAccount}</Text>

                    <TouchableOpacity 
                     style={{marginLeft:dimensions.dp_5}}
                     onPress={()=>{
                        navigation.navigate(ScreenNames.LOGIN)
                     }}>
                        <Text style={[GlobalStyles.txt_bold_black_16,{color:colors.primary}]}>{string.loginString.login}</Text>
                    </TouchableOpacity>

                </View>
              
        </SafeAreaView>
    )

}
export default Registration