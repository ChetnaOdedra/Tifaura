// AppHeader.js
import React,{useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet ,Image, Dimensions} from 'react-native';
import Constants from '../utills/Constants';
import dimensions from '../res/dimenstion';
import colors from '../res/color';
import { normalize } from '../utills/GlobalFunctions';
import GlobalStyles from '../styles/GlobalStyles';

const AppHeader = ({ onMenuPress,header,index,isOnlineProvider}) => {

  const [isOnline,setIsOnline] = useState(isOnlineProvider)

  console.log(index,"....index....")

  return (

      <View style={
        [{flexDirection:'row',
          marginHorizontal:index==Constants.drawerIndex.HOME?dimensions.screenHorizontalPadding:0
        }]
        }>

                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>

                    <TouchableOpacity
                      onPress={onMenuPress} // 👈 use the prop here
                    >
                      <Image
                        source={Constants.imagePath.menu}
                        style={{
                          tintColor:colors.black,
                          width:dimensions.dp_25, 
                          height:dimensions.dp_25, 
                          resizeMode:'contain'}}
                      />
                    </TouchableOpacity>

                    <Text style={[GlobalStyles.txt_bold_black_18,{marginStart:dimensions.dp_10}]}>{header}</Text>
              
                </View>

               {/* {index === Constants.drawerIndex.HOME ?
               
                <TouchableOpacity
                  style={[isOnline?GlobalStyles.button_online_green:GlobalStyles.button_online_primary,{
                    alignSelf:'flex-end'
                  }]}
                  >
                    <Text style={GlobalStyles.txt_bold_white_12}>
                      {isOnline?'Complete delivery':'Start your delivery'}
                    </Text>
              </TouchableOpacity>:null
               }      */}
             


    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  headerView:{
    flex:1,
    marginStart:dimensions.spaceDimension.space_10,
    textAlign:'flex-start',
    flexDirection:'row',
    alignItems:'center'
  },
  title:{
      textAlign:'center',
      color: colors.primary,
      fontSize: normalize(dimensions.textDimension.text_18),
      fontFamily: Platform.OS === "ios" ?Constants.fontNames.SEGOE_UI_BOLD_IOS:Constants.fontNames.SEGOE_UI_BOLD,
    },   
  description: {
    textAlign:'center',
    fontSize: normalize(dimensions.textDimension.text_10),
    color: colors.black,
    fontFamily: Platform.OS === "ios" ?Constants.fontNames.SEGOE_UI_BOLD_IOS:Constants.fontNames.SEGOE_UI_BOLD
  }, 
  
})
