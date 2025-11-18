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
import { isValidEmail,showToast ,validatePassword,getPasswordError, clearScreenNavigation} from "../utills/GlobalFunctions";
import AuthScreenComponent from "../components/AuthScreenComponant";  


const Login = ({navigation}) =>{

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [isButtonDisabled, setIsButtonDisabled] = useState(true);

useEffect(() => {
    // enable button when both fields are non-empty
    if (email.trim() !== '' && password.trim() !== '') {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [email, password]);

const handleLogin = () => {
    console.log('Logging in with:', email, password);
};

   
return(

                                    <AuthScreenComponent
                                        navigation={navigation}
                                        screenName={ScreenNames.LOGIN}
                                    >
                                    
                                    <Text style={GlobalStyles.textinput_title}>{string.loginString.email}</Text> 
                                     <BorderdTextInput
                                            placeholder={string.loginString.placeholderEmail}
                                            value={email}
                                            onChangeText={setEmail}
                                    />

                                    <Text style={GlobalStyles.textinput_title}>{string.loginString.password}</Text> 
                                    <BorderdTextInput
                                            placeholder={string.loginString.placeholderPassword}
                                            value={password}
                                            secureTextEntry={true}
                                            onChangeText={setPassword}
                                    />                                        


                                    <TouchableOpacity 
                                    style={{alignSelf:'flex-end',padding:dimensions.dp_10}}
                                    onPress={()=>{
                                        navigation.navigate(ScreenNames.ForgotPassword)
                                    }}>
                                        <Text style={[GlobalStyles.txt_bold_black_16,{color:colors.primary}]}>{string.loginString.forgotPassword}</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity 
                                        disabled={isButtonDisabled}
                                        style={isButtonDisabled?GlobalStyles.button_primary_disable:GlobalStyles.button_primary}
                                        onPress={()=>{
                                          
                                            if(!isValidEmail(email)){
                                                showToast(string.errorString.invalid, string.errorString.invalidEmail, Constants.toastTypes.DANGER);
                                                return;
                                            }
                                            if(!validatePassword(password)){
                                                const error = getPasswordError(password,"Password")
                                                if(error){
                                                    showToast(string.errorString.invalid, error, Constants.toastTypes.DANGER);
                                                    return;
                                                }    
                                            }else{
                                                handleLogin();
                                                clearScreenNavigation(navigation,ScreenNames.Home)
                                                showToast(string.loginString.login, string.loginString.loginSuccess, Constants.toastTypes.SUCCESS);
                                            }
                                        }}>
                                        <Text style={GlobalStyles.button_text_white}>{string.loginString.login}</Text>
                                    </TouchableOpacity>

                                    <View style={{alignSelf:'center',marginTop:dimensions.dp_15,flexDirection:'row'}}>

                                        <Text style={GlobalStyles.txt_regular_black_16}>{string.loginString.createAccount}</Text>

                                        <TouchableOpacity 
                                        style={{marginLeft:dimensions.dp_5}}
                                        onPress={()=>{
                                            navigation.navigate(ScreenNames.Registration)
                                        }}>
                                            <Text style={[GlobalStyles.txt_bold_black_16,{color:colors.primary}]}>{string.registrationString.signUp}</Text>
                                        </TouchableOpacity>

                                    </View>


        </AuthScreenComponent>

                

                )

}
export default Login