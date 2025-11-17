// AppHeader.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet ,Image} from 'react-native';
import Constants from '../utills/Constants';
import dimensions from '../res/dimenstion';
import colors from '../res/color';
import { normalize } from '../utills/GlobalFunctions';
import GlobalStyles from '../styles/GlobalStyles';

const AppHeaderBack = ({ header ,customExtraStyleDrawer,navigation}) => {

  return (

    <View style={
      [{flexDirection:'row',alignItems:'center',backgroundColor:colors.white},customExtraStyleDrawer]
      }>


          <TouchableOpacity
            style={{alignItems:'center' }}
            onPress={()=>{
              navigation.goBack()
            }} 
          >
            <Image
              source={Constants.imagePath.back}
              style={{
                tintColor:colors.black,
                width:dimensions.dp_20, 
                height:dimensions.dp_20, 
                resizeMode:'contain'}}
             />
          </TouchableOpacity>

          

          <Text style={[GlobalStyles.txt_bold_black_18,{
            marginStart:dimensions.dp_10,textAlign:'center',alignSelf:'center'}
          ]}>{header}</Text>


    </View>
  );
};

export default AppHeaderBack;

const styles = StyleSheet.create({
  title:{
      textAlign:'center',
      color: colors.primary,
      fontSize: normalize(dimensions.textDimension.text_18),
      fontFamily: Platform.OS === "ios" ?Constants.fontNames.SEGOE_UI_BOLD_IOS:Constants.fontNames.SEGOE_UI_BOLD,
    },     
})
