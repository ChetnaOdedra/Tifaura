import React, { useState,useEffect } from "react";
import { View, Text,Image, TouchableOpacity,Platform} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from "../utills/Constants";
import GlobalStyles from "../styles/GlobalStyles";
import colors from "../res/color";
import string from "../res/string";
import dimensions from "../res/dimenstion";
import { ScreenNames } from "../utills/ScreenName";
import { clearScreenNavigation } from "../utills/GlobalFunctions";
import RenderHTML from 'react-native-render-html';

const ThankYou = ({navigation}) =>{

 const thankYou = `
 <p>Thank you for trusting us and being a part of the <b>TIFAURA Team.</b> Our admin team will review and approve your profile shortly. Once approved, you’ll be able to start working with us.</p>
 `;   
   
 return(
        <SafeAreaView style={GlobalStyles.mainScreenContainerAuth}>
            <Image
             source={Constants.imagePath.transparent_logo}
             style={GlobalStyles.logoImageStyle}
            />

            <View style={GlobalStyles.dataContainerAuth}>

               <Image
                source={Constants.imagePath.thank_you}
                style={GlobalStyles.thankYouImageStyle}
               /> 

                <RenderHTML
                  contentWidth={dimensions.screenWidth}
                  source={{ html: thankYou }}
                  tagsStyles={{
                    p: {
                      fontSize:dimensions.textDimension.text_16,
                      color:colors.black,
                      fontFamily: Platform.OS === "ios" ?Constants.fontNames.SEGOE_UI_IOS:Constants.fontNames.SEGOE_UI,

                    },
                    b:{
                      fontSize:dimensions.textDimension.text_16,
                      color:colors.primary,
                      fontWeight:'bold',
                      fontFamily: Platform.OS === "ios" ?Constants.fontNames.SEGOE_UI_BOLD_IOS:Constants.fontNames.SEGOE_UI_BOLD,
                    }
                  }}
                />

                <TouchableOpacity 
                    style={GlobalStyles.button_primary}
                    onPress={()=>{
                     clearScreenNavigation(navigation,ScreenNames.LOGIN)       
                    }}>
                    <Text style={GlobalStyles.button_text_white}>{string.registrationString.ok}</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )

}
export default ThankYou