import React, { useState,useEffect } from "react";
import { Text,View} from "react-native"
import GlobalStyles from "../../styles/GlobalStyles";
import DrawerScreenWrapper from "../../components/DrawerScreenWrapper";
import Constants from "../../utills/Constants";

const ShareApp = ({navigation}) =>{

   
 return(
           
 <DrawerScreenWrapper
          navigation={navigation}
          headerTitle={"Share App"}
          headerDes={"fahfahfgh"} 
          index={Constants.drawerIndex.HOME}
        >
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={GlobalStyles.txt_bold_primary_20}>ShareApp Screen</Text>
            </View>
            
    </DrawerScreenWrapper>
)

}
export default ShareApp