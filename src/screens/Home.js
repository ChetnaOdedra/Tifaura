import React, { useState,useEffect } from "react";
import { View, Text ,Image,TouchableOpacity} from "react-native";
import DrawerScreenWrapper from "../components/DrawerScreenWrapper";
import Constants from "../utills/Constants";
import GlobalStyles from "../styles/GlobalStyles";

const Home = ({navigation}) =>{

 return(

     <DrawerScreenWrapper
          navigation={navigation}
          headerTitle={"Home"}
          headerDes={"fahfahfgh"} 
          index={Constants.drawerIndex.HOME}
        >
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={GlobalStyles.txt_bold_primary_20}>Home Screen</Text>
            </View>
            
    </DrawerScreenWrapper>

    )

}
export default Home