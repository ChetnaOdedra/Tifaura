import React, { useState,useEffect } from "react";
import { View, Text,Image, TouchableOpacity,StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from "../utills/Constants";
import GlobalStyles from "../styles/GlobalStyles";
import colors from "../res/color";
import BorderdTextInput from "../components/BorderdTextInput";
import string from "../res/string";
import dimensions from "../res/dimenstion";
import { ScreenNames } from "../utills/ScreenName";
import { isValidEmail,showToast ,validatePassword,getPasswordError} from "../utills/GlobalFunctions";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Register } from "../api/graphQL/mutation/RegisterDeliveryBoy";
import { useMutation } from "@apollo/client/react";
import APILoader from "../components/APILoader";
import DropDownPicker from "react-native-dropdown-picker";
import AddressSearch from '../components/AddressSearch'


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
const [loadingRegistration,setLoginRegistration] = useState(false)

const [open, setOpen] = useState(false);

const [selectedPhoneCode, setPhoneCode] = useState("44");
const [itemsPhoneCode, setPhoneCodeItem] = useState([
    { label: "+44", value: "44" },
    { label: "+91", value: "91" }
]);


const [isButtonDisabled, setIsButtonDisabled] = useState(true);

// Register api call

const [registerDeliveryBoy, { loading, errorRegistration, dataRegistration }] = useMutation(Register,
  {
    errorPolicy: "all",

    onCompleted: (data) => {
      setLoginRegistration(false)
      const dataRegister = data.RegisterDeliveryBoy  
      console.log("dataRegister...",dataRegister)
      
      if(dataRegister.success){

       showToast(string.sucess,dataRegister.message, Constants.toastTypes.SUCCESS);

       navigation.navigate(ScreenNames.VerifyOTP,{
        from:ScreenNames.Registration,email:email,phone:phone,password:password})

      }else{
        showToast(string.errorString.eroor,dataRegister.message, Constants.toastTypes.DANGER);
      }
    },
    onError: (err) => {
      setLoginRegistration(false)  
      showToast(string.errorString.eroor, err.message, Constants.toastTypes.DANGER);
    },
  }
)


useEffect(() => {
    if (fullname.trim() !== '' &&email.trim() !== '' && password.trim() !== '', phone.trim() !== '' && consirmPsw.trim() !== '' && 
        addressLine1.trim() !== '' && postCode.trim() !== '') {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [fullname,email, password,phone,consirmPsw,addressLine1,postCode]);

const validateRegistrationInput = (email,password,consirmPsw) => {

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

        console.log('register in with:', email, password, fullname,phone,consirmPsw,
        addressLine1,addressLine2,town,postCode);

        setLoginRegistration(true)

        registerDeliveryBoy({
        variables: {
            usrFullName:fullname,
            usrEmail: email,
            usrPhoneNumber:phone,
            usrPassword: password,
            usrAddressLine1:addressLine1,
            usrAddressLine2:addressLine2,
            usrCity:town,
            usrPostcode:postCode
        },
        });
};

 return(
        <SafeAreaView style={GlobalStyles.mainScreenContainerAuth}>

                 {loadingRegistration ? (
                    <APILoader
                    visible = {loadingRegistration}
                    />                     
                    ):null}

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


                    <View style={{flexDirection:'row'}}>

                     <View style={{flex:0.3,marginEnd:dimensions.dp_10}}>

                       <DropDownPicker
                        open={open}
                        value={selectedPhoneCode}
                        items={itemsPhoneCode}
                        setOpen={setOpen}
                        setValue={setPhoneCode}
                        setItems={setPhoneCodeItem}
                        placeholder="Select"
                        dropDownDirection="BOTTOM"
                        zIndex={5000}
                        zIndexInverse={3000}
                        style={[GlobalStyles.textInputView]}
                        dropDownContainerStyle={{ borderColor: "#ccc",marginTop:dimensions.dp_5 }}
                        placeholderStyle={GlobalStyles.txt_regular_black_14}
                        listItemContainerStyle={styles.listItemContainerStyle}
                        listItemLabelStyle={GlobalStyles.txt_regular_black_14}
                        selectedItemContainerStyle={styles.selectedItemContainerStyle}
                        selectedItemLabelStyle={[GlobalStyles.textInput]}
                    /> 

                     </View>

                     <View style={{flex:0.7}}>
                        <BorderdTextInput
                        placeholder={string.registrationString.placeholderPhone}
                        value={phone}
                        keyboardType="numeric"
                        onChangeText={setPhone}
                        maxLength={10}
                        />
                     </View>

                    {/* <AddressSearch
                    onSelect={(details) => {
                        console.log("on address select..",details)
                        setAddressLine1(details.address_components[0].long_name); // example
                        setTown(details.address_components.find(c => c.types.includes('locality'))?.long_name || '');
                        setPostCode(details.address_components.find(c => c.types.includes('postal_code'))?.long_name || '');
                    }}
                    /> */}

                    </View>                    

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
                    validateRegistrationInput(email, password,consirmPsw);    
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

const styles = StyleSheet.create({

  selectedItemContainerStyle:{
    backgroundColor: colors.primary_light,      
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  listItemContainerStyle:{
    paddingVertical: dimensions.dp_0,
    paddingHorizontal: dimensions.dp_10,
    height:dimensions.dp_40
  },
 
});
export default Registration