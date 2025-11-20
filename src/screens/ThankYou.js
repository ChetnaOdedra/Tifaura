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
 <p>Welcome to the <b>TIFAURA</b> family!
We appreciate your trust. Our team is reviewing your profile and will approve it soon.
You’ll be able to begin using the platform once the process is complete.</p>
 `;   
   
 return(
        <SafeAreaView style={GlobalStyles.mainScreenContainerAuth}>
          
             <Image
                    source={Constants.imagePath.new_logo}
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