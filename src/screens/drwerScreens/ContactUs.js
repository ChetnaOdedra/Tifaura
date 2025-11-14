import React, { useState,useEffect } from "react";
import { Text,View} from "react-native"
import GlobalStyles from "../../styles/GlobalStyles";
import DrawerScreenWrapper from "../../components/DrawerScreenWrapper";
import Constants from "../../utills/Constants";

const ContactUs = ({navigation}) =>{

   
 return(
           
 <DrawerScreenWrapper
          navigation={navigation}
          headerTitle={"Contact Us"}
          headerDes={"fahfahfgh"} 
          index={Constants.drawerIndex.HOME}
        >
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={GlobalStyles.txt_bold_primary_20}>ContactUs Screen</Text>
            </View>
            
    </DrawerScreenWrapper>
)

}
export default ContactUs