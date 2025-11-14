import React, { useState,useEffect } from "react";
import { View, Text,Image, TouchableOpacity,TextInput,StyleSheet,Platform} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from "../utills/Constants";
import GlobalStyles from "../styles/GlobalStyles";
import colors from "../res/color";
import BorderdTextInput from "../components/BorderdTextInput";
import string from "../res/string";
import dimensions from "../res/dimenstion";
import { ScreenNames } from "../utills/ScreenName";
import { showToast } from "../utills/GlobalFunctions";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AuthScreenComponent from "../components/AuthScreenComponant";  


const VerifyOTP = ({navigation}) =>{

  const [otpOne, setOtpOne] = useState("");
  const [otpTwo, setOtpTwo] = useState("");
  const [otpThree, setOtpThree] = useState("");
  const [otpFour, setOtpFour] = useState("");
  const [otpFive, setOtpFive] = useState("");
  const [otpSix, setOtpSix] = useState("");
  const [otp, setOtp] = useState("");

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  
  const [loaderCount, setLoaderCount] = useState(0);

  let input1Ref = TextInput | null;
  let input2Ref =TextInput | null;
  let input3Ref = TextInput | null;
  let input4Ref = TextInput | null;
  let input5Ref = TextInput | null;
  let input6Ref = TextInput | null;

  useEffect(() => {
      if (otpOne.trim() !== '' && otpTwo.trim() !== '' && otpThree.trim() !== '' && otpFour.trim() !== '' && otpFive.trim() !== '' && otpSix.trim() !== '') {
        setIsButtonDisabled(false);
      } else {
        setIsButtonDisabled(true);
      }
    }, [otpOne, otpTwo, otpThree, otpFour, otpFive, otpSix]);
   
 return(
        <SafeAreaView style={GlobalStyles.mainScreenContainerAuth}>
            <Image
             source={Constants.imagePath.transparent_logo}
             style={GlobalStyles.logoImageStyle}
            />

             <KeyboardAwareScrollView
                    contentContainerStyle={{ 
                        flexGrow: 1, justifyContent: 'flex-end',
                     }}
                    extraScrollHeight={dimensions.spaceDimension.keyboardExrtaSpace}  
                    enableOnAndroid={true}
                    keyboardShouldPersistTaps="handled"
                    >

            <View style={GlobalStyles.dataContainerAuth}>

               <Text style={[GlobalStyles.txt_bold_primary_20,{textAlign:'center'}]}>Verify your account!</Text> 

               <Text style={[GlobalStyles.txt_bold_black_14,{
                marginTop:dimensions.dp_10,
                marginBottom:dimensions.dp_15,
                textAlign:'center'
               }]}>Enter the 6-digit OTP sent to your registered email address.</Text>

               <Text style={GlobalStyles.textinput_title}>{string.forgotpasswordString.otp}</Text> 
               
                <View style={styles.row}>

                    <TextInput
                        ref={(el) => (input1Ref = el)}
                        style={[styles.box]}
                        placeholder={string.forgotpasswordString.otpPlaceHolder}
                        value={otpOne}
                        maxLength = {1}
                        onChangeText={(text) => {
                          setOtpOne(text);
                          if (text.length === 1) {
                              input2Ref.focus(); // automatically go to next input
                          }
                        }}
                        keyboardType="numeric"
                    />

                    <TextInput
                        ref={(el) => (input2Ref = el)} 
                        style={[styles.box]}
                        placeholder={string.forgotpasswordString.otpPlaceHolder}
                        value={otpTwo}
                        onChangeText={(text) => {
                          setOtpTwo(text);
                          if (text.length === 1) {
                              input3Ref.focus(); // automatically go to next input
                          }
                        }}
                        maxLength = {1}
                        returnKeyType="done"
                        keyboardType="numeric"
                    />

                    <TextInput
                        ref={(el) => (input3Ref = el)}
                        style={[styles.box]}
                        placeholder={string.forgotpasswordString.otpPlaceHolder}
                        value={otpThree}
                         onChangeText={(text) => {
                          setOtpThree(text);
                          if (text.length === 1) {
                              input4Ref.focus(); // automatically go to next input
                          }
                        }}
                        maxLength = {1}
                        keyboardType="numeric"

                    />

                    <TextInput
                        ref={(el) => (input4Ref = el)}
                        style={[styles.box]}
                        placeholder={string.forgotpasswordString.otpPlaceHolder}
                        value={otpFour}
                        onChangeText={(text) => {
                          setOtpFour(text);
                          if (text.length === 1) {
                              input5Ref.focus(); // automatically go to next input
                          }
                        }}
                        maxLength = {1}
                        keyboardType="numeric"

                    />

                    <TextInput
                       ref={(el) => (input5Ref = el)}
                        style={[styles.box]}
                        placeholder={string.forgotpasswordString.otpPlaceHolder}
                        value={otpFive}
                        onChangeText={(text) => {
                          setOtpFive(text);
                          if (text.length === 1) {
                              input6Ref.focus(); // automatically go to next input
                          }
                        }}
                        maxLength = {1}
                        keyboardType="numeric"

                    />

                    <TextInput
                        ref={(el) => (input6Ref = el)}
                        style={[styles.box]}
                        placeholder={string.forgotpasswordString.otpPlaceHolder}
                        value={otpSix}
                        onChangeText={setOtpSix}
                        returnKeyType="done"
                        maxLength = {1}
                        keyboardType="numeric"
                    />
              </View>
               
                <TouchableOpacity 
                    disabled={isButtonDisabled}
                    style={isButtonDisabled ? GlobalStyles.button_primary_disable : GlobalStyles.button_primary}
                    onPress={()=>{
                        const  completeOtp = otpOne + otpTwo + otpThree + otpFour + otpFive + otpSix;
                        showToast("Success", "OTP Verified Successfully", Constants.toastTypes.SUCCESS);
                        navigation.navigate(ScreenNames.ResetPassword)
                    }}>
                    <Text style={GlobalStyles.button_text_white}>{string.forgotpasswordString.verify}</Text>
                </TouchableOpacity>

            </View>

            </KeyboardAwareScrollView>
        </SafeAreaView>
    )

}
export default VerifyOTP

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    width: "100%", 
    alignItems:'center',
    marginTop:dimensions.dp_10
  },

   box: {
    flex: 1,
    height:dimensions.textInputHeightIos,
    borderWidth: dimensions.dp_1,
    borderColor: colors.black,
    backgroundColor: colors.white,
    marginEnd:dimensions.dp_8,
    justifyContent:'center',
    includeFontPadding: false,
    alignItems:'center',
    textAlign:'center',
    fontSize:dimensions.textDimension.textInput,
    borderRadius: dimensions.dp_5, 
    padding:0,
    fontFamily: Platform.OS === "ios" ?Constants.fontNames.SEGOE_UI_IOS:Constants.fontNames.SEGOE_UI
  },
});