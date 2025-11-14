import {PixelRatio,Dimensions,Platform} from 'react-native';
import { format } from "date-fns";
import { CommonActions } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import dimensions from '../res/dimenstion';
import colors from '../res/color';
import Constants from './Constants';
import {ScreenNames} from  '../utills/ScreenName';


const { width: SCREEN_WIDTH } = Dimensions.get('window');
const scale = SCREEN_WIDTH /500; // based on iPhone 11 width // 375
const scaleAndroid = SCREEN_WIDTH /375; // based on iPhone 11 width // 375


export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const isValidEmail = (value) => EMAIL_REGEX.test(value.trim());

export function normalize(size) {

  const newSizeAndroid = size * scaleAndroid;
  const newSizeiOS = size * scale;
  const ios  = Platform.isPad? 
    Math.round(PixelRatio.roundToNearestPixel(newSizeiOS)):
    Math.round(PixelRatio.roundToNearestPixel(newSizeAndroid))

  const android = Math.round(PixelRatio.roundToNearestPixel(newSizeAndroid))
  

  return Platform.OS === 'ios' ? ios : android;
}

export const validatePassword = (password) => {
  const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
  return regex.test(password);
};

export const getPasswordError = (password) => {
  if (password.length < 8) return 'Password must be at least 8 characters long';
  if (!/[A-Z]/.test(password)) return 'Password must include at least one uppercase letter';
  if (!/\d/.test(password)) return 'Password must include at least one number';
  if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password))
    return 'Password must include at least one special character';
  return null; // valid
};

export const getConfirmPasswordError = (password) => {
  if (password.length < 8) return 'Confirm password must be at least 8 characters long';
  if (!/[A-Z]/.test(password)) return 'Confirm password must include at least one uppercase letter';
  if (!/\d/.test(password)) return 'Confirm password must include at least one number';
  if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password))
    return 'Confirm password must include at least one special character';
  return null; // valid
};

export const showToast = (message,description,type
) => {

  Toast.show({
      type: type,
      text1: message,
      text2: description,
      visibilityTime: 2000,
      text1Style: { 
        fontSize: dimensions.textDimension.text_14, 
        color: colors.black, fontWeight: '700',    
        flexWrap: 'wrap',
    },
      text2Style: { 
        fontSize: dimensions.textDimension.text_16, 
        color: colors.bg_black,flexWrap: 'wrap',
 
      },
    });
};


export const dp = (px) => {
  return normalize(px)
};

export const sp = (px) => {
  return normalize(px)
};

export const capitalizeFirstChar = (str) => {
  if (!str) return str; // handle empty or null
  const firstChar = str.charAt(0);
  
  // if already capitalized, return as is
  if (firstChar === firstChar.toUpperCase()) return str;
  
  // otherwise capitalize first char and keep rest same
  return firstChar.toUpperCase() + str.slice(1);
};

export const convertDateFormate =(dateString,inputFormate , outputFormate)=>{

    const output = format(dateString, outputFormate);
    return output
}

export const clearScreenNavigation = (navigation,destRoute) =>{

                    navigation.dispatch(
                        CommonActions.reset({
                        index: 0,
                        routes: [{ name: destRoute }]
                    })
              ); 
}

export const isValidPhoneNumber = (value,phoneMaxLength) => {
  var isValid = false
  const PHONE_REGEX = /^\d{10}$/;
  isValid = PHONE_REGEX.test(value.trim())
  if(value.length == phoneMaxLength){
    isValid = true
  }else{
    isValid = false
  }
  return isValid;
}

export const isValidPassword = (value)=>{
  if(value.length < 6){
    return false
  }else{
    return true
  }
}

export const getIntLength = (n) => {
  if (n === 0) return 1;                 // special case
  return Math.floor(Math.log10(Math.abs(n))) + 1;
};

export const  getInitials = (name) => {
  
  if (!name) return "";

  const parts = name.trim().split(" ").filter(Boolean);

  if (parts.length === 1) {
    // Only one word, take first 2 letters
    return parts[0].substring(0, 2).toUpperCase();
  } else {
    // More than one word, take first letter of first and last
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
}

export const changeUi = (index,navigation) =>{            

            if(index == Constants.drawerIndex.HOME){
              navigation.navigate(ScreenNames.Home)
            }
            else if(index == Constants.drawerIndex.MY_ACCOUNT){
              navigation.navigate(ScreenNames.MyAccount)
            }
            else if(index == Constants.drawerIndex.EARNING){
              navigation.navigate(ScreenNames.Earnings)
            }
            else if(index == Constants.drawerIndex.SETTINGS){
              navigation.navigate(ScreenNames.Settings)
            }
            else if(index == Constants.drawerIndex.CONTACT_US){
              navigation.navigate(ScreenNames.ContactUs)
            }
            else if(index == Constants.drawerIndex.PRIVACY_POLICY){
              navigation.navigate(ScreenNames.PrivacyPolicy)
            }
            else if(index == Constants.drawerIndex.TERMS_CONDITION){
              navigation.navigate(ScreenNames.TermsCondition)
            }
             else if(index == Constants.drawerIndex.SHARE_APP){
              navigation.navigate(ScreenNames.ShareApp)
            }
            else if(index == Constants.drawerIndex.RATE_US){
              navigation.navigate(ScreenNames.RateUs)
            }
            else if(index == Constants.drawerIndex.LOGOUT){
              return
            }
            else if(index == Constants.drawerIndex.DELETE_ACCOUNT){
               return
            }
  }

