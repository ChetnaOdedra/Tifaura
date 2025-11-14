// AppHeader.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet ,Image} from 'react-native';
import Constants from '../utills/Constants';
import dimensions from '../res/dimenstion';
import colors from '../res/color';
import { normalize } from '../utills/GlobalFunctions';
import GlobalStyles from '../styles/GlobalStyles';

const AppHeader = ({ onMenuPress,header,des }) => {

  return (

    <View style={{flexDirection:'row',alignItems:'center'}}>


          <TouchableOpacity
            style={{alignSelf:'center'}}
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

          
          <View style={styles.headerView}>

              <Text style={GlobalStyles.txt_bold_primary_16}>{header}</Text>

          </View>

    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  headerView:{
    flex:1,
    marginStart:dimensions.spaceDimension.space_10,
    textAlign:'flex-start',
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
