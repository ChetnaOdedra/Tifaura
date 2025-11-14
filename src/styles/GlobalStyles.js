import { Platform, StyleSheet } from "react-native";
import colors from "../res/color";
import constants from "../utills/Constants";
import dimensions from "../res/dimenstion";
import {Dimensions} from "react-native";

const { height: SCREEN_HEIGHT } = Dimensions.get('window');


const GlobalStyles = StyleSheet.create({

  // Thease are for containers / views styles

    scrollViewContainer: {
      flexGrow: 1,
    },

    container: {
      flex: 1,
      backgroundColor: colors.white,
      padding:dimensions.spaceDimension.screen_padding,
    },
    scrollContainer: {
      flexGrow: 1,
      justifyContent: 'flex-end', // optional for bottom placement
    },  

    mainScreenContainerAuth: {
        flex: 1,
        backgroundColor: colors.bg_black,
        justifyContent:'flex-end'
    },  

    dataContainerAuth: {
       backgroundColor:colors.white,
       borderTopRightRadius:dimensions.dp_20,
       borderTopLeftRadius:dimensions.dp_20,
       padding:dimensions.dp_20,
       maxHeight: SCREEN_HEIGHT * 0.7, // 👈 70% of screen height
    }, 

    mainScreenContainer: {
        flex: 1,
        backgroundColor: colors.white,
        padding:dimensions.spaceDimension.screen_padding, 
    },

    textInputView:{
        width: "100%",
        borderWidth: 1, 
        borderColor: colors.black,
        backgroundColor: colors.white,
        borderRadius: dimensions.dp_10, 
        alignItems: "center",
        flexDirection:'row',
        marginTop: dimensions.dp_5,
        paddingVertical: Platform.OS === "ios" ? dimensions.dp_10 : dimensions.dp_5,
        paddingHorizontal:Platform.OS === "ios" ?dimensions.dp_15 : dimensions.dp_10
      },
       textInput: {
        justifyContent: "center",
        width: "100%",
        fontFamily: Platform.OS === "ios" ?constants.fontNames.SEGOE_UI_IOS:constants.fontNames.SEGOE_UI,
        fontSize:dimensions.text_14,
        includeFontPadding: false,
        textAlignVertical: 'center'
      },

      // Thease are for logo image styles

    logoImageStyle: {
        width: dimensions.imageSize.logo_width,
        height: dimensions.imageSize.logo_height,
        resizeMode: "contain",
        alignSelf: "center",
        justifyContent:'flex-start',
        flex:1
      },

      thankYouImageStyle: {
        width: dimensions.dp_80,
        height: dimensions.dp_80,
        resizeMode: "contain",
        alignSelf: "center",
        marginVertical:dimensions.dp_20
      },

   // primary - bold
   
   txt_bold_primary_20: {  
        alignItems: "center", 
        textAlign: "center",
        color: colors.primary,
        fontSize: dimensions.textDimension.text_20,
        fontFamily: Platform.OS === "ios" ?constants.fontNames.SEGOE_UI_BOLD_IOS:constants.fontNames.SEGOE_UI_BOLD,
      },   
    txt_bold_primary_16: {  
      textAlignVertical:'center',
      color: colors.primary,
      fontSize: dimensions.textDimension.text_16,
      fontFamily: Platform.OS === "ios" ?constants.fontNames.SEGOE_UI_BOLD_IOS:constants.fontNames.SEGOE_UI_BOLD,
    }, 
    txt_bold_primary_12: {  
      textAlignVertical:'center',
      color: colors.primary,
      fontSize: dimensions.textDimension.text_12,
      fontFamily: Platform.OS === "ios" ?constants.fontNames.SEGOE_UI_BOLD_IOS:constants.fontNames.SEGOE_UI_BOLD,
    },
    
    txt_bold_primary_14: {  
      textAlignVertical:'center',
      color: colors.primary,
      fontSize: dimensions.textDimension.text_14,
      fontFamily: Platform.OS === "ios" ?constants.fontNames.SEGOE_UI_BOLD_IOS:constants.fontNames.SEGOE_UI_BOLD,
    },

    // primary - regular

    txt_regular_primary_14: {
      fontSize: dimensions.textDimension.text_14,
      color: colors.primary,
      fontFamily: Platform.OS === "ios" ?constants.fontNames.SEGOE_UI_IOS:constants.fontNames.SEGOE_UI
    },
    txt_regular_primary_16: {
      fontSize: dimensions.textDimension.text_16,
      color: colors.primary,
      fontFamily: Platform.OS === "ios" ?constants.fontNames.SEGOE_UI_IOS:constants.fontNames.SEGOE_UI
    },

    // white - bold
      
    txt_bold_white_14: {  
        alignItems: "center", 
        textAlign: "center",
        color: colors.white,
        fontSize: dimensions.textDimension.text_14,
        fontFamily: Platform.OS === "ios" ?constants.fontNames.SEGOE_UI_BOLD_IOS:constants.fontNames.SEGOE_UI_BOLD,
    }, 

    // white - regular

    txt_regular_white_16: {
      fontSize: dimensions.textDimension.text_16,
      color: colors.white,
      fontFamily: Platform.OS === "ios" ?constants.fontNames.SEGOE_UI_IOS:constants.fontNames.SEGOE_UI
    },
    txt_regular_white_14: {
      fontSize: dimensions.textDimension.text_14,
      color: colors.white,
      fontFamily: constants.fontNames.SEGOE_UI,
      fontFamily: Platform.OS === "ios" ?constants.fontNames.SEGOE_UI_IOS:constants.fontNames.SEGOE_UI
    },
    txt_regular_white_12: {
      fontSize: dimensions.textDimension.text_12,
      color: colors.white,
      fontFamily: constants.fontNames.SEGOE_UI,
      fontFamily: Platform.OS === "ios" ?constants.fontNames.SEGOE_UI_IOS:constants.fontNames.SEGOE_UI
    },

    // black - bold

    txt_bold_black_12: {
      fontSize: dimensions.textDimension.text_12,
      color: colors.black,
      fontFamily: Platform.OS === "ios" ?constants.fontNames.SEGOE_UI_BOLD_IOS:constants.fontNames.SEGOE_UI_BOLD
    }, 

    txt_bold_black_14: {
      fontSize: dimensions.textDimension.text_14,
      color: colors.black,
      fontFamily: Platform.OS === "ios" ?constants.fontNames.SEGOE_UI_BOLD_IOS:constants.fontNames.SEGOE_UI_BOLD
    },

    txt_bold_black_16: {
      fontSize: dimensions.textDimension.text_16,
      color: colors.black,
      fontFamily: Platform.OS === "ios" ?constants.fontNames.SEGOE_UI_BOLD_IOS:constants.fontNames.SEGOE_UI_BOLD
    },

     txt_bold_black_18: {
      fontSize: dimensions.textDimension.text_18,
      color: colors.black,
      fontFamily: Platform.OS === "ios" ?constants.fontNames.SEGOE_UI_BOLD_IOS:constants.fontNames.SEGOE_UI_BOLD
    },

    txt_bold_black_10: {
      fontSize: dimensions.textDimension.text_10,
      color: colors.black,
      fontFamily: Platform.OS === "ios" ?constants.fontNames.SEGOE_UI_BOLD_IOS:constants.fontNames.SEGOE_UI_BOLD
    }, 
  
  // black - regular

  txt_regular_black_16: {  
      color: colors.black,
      fontSize: dimensions.textDimension.text_16,
      fontFamily: Platform.OS === "ios" ?constants.fontNames.SEGOE_UI_IOS:constants.fontNames.SEGOE_UI,
  },
  txt_regular_black_14: {
      fontSize: dimensions.textDimension.text_14,
      color: colors.black,
      fontFamily: Platform.OS === "ios" ?constants.fontNames.SEGOE_UI_IOS:constants.fontNames.SEGOE_UI
  },
  txt_regular_black_12: {
    fontSize: dimensions.textDimension.text_12,
    color: colors.black,
    fontFamily: Platform.OS === "ios" ?constants.fontNames.SEGOE_UI_IOS:constants.fontNames.SEGOE_UI
  },
  txt_regular_black_10: {
    fontSize: dimensions.textDimension.text_10,
    color: colors.black,
    fontFamily: Platform.OS === "ios" ?constants.fontNames.SEGOE_UI_IOS:constants.fontNames.SEGOE_UI
  },

  // drawer text style

   drawer_text: {
    fontSize: dimensions.textDimension.text_16,
    color: colors.black,
    fontFamily: Platform.OS === "ios" ?constants.fontNames.SEGOE_UI_IOS:constants.fontNames.SEGOE_UI
  },

  drawer_text_selected: {
    fontSize: dimensions.textDimension.text_16,
    color: colors.primary,
    fontFamily: Platform.OS === "ios" ?constants.fontNames.SEGOE_UI_BOLD_IOS:constants.fontNames.SEGOE_UI_BOLD
  },

  // Thease are for buttons styles

  button: {
    width: "100%",            
    backgroundColor: colors.lightGray, 
    paddingVertical: dimensions.dp_10,
    borderRadius: dimensions.dp_10,    
    marginTop: dimensions.spaceDimension.button_space_top_50    
  },
  
  button_primary: {
    backgroundColor: colors.primary, 
    paddingVertical: dimensions.dp_10,
    borderRadius: dimensions.dp_20,   
    alignItems:'center' ,
    marginTop:dimensions.dp_30,
  },

  button_red: {
    backgroundColor: colors.red, 
    paddingVertical: dimensions.dp_10,
    borderRadius: dimensions.dp_20,   
    alignItems:'center' ,
    marginTop:dimensions.dp_30,
  },
  button_primary_disable: {
    backgroundColor: colors.primary_disable, 
    paddingVertical: dimensions.dp_10,
    borderRadius: dimensions.dp_20,   
    alignItems:'center' ,
    marginTop:dimensions.dp_30,
  },
 
  buttonTextWhite: {
    fontFamily: Platform.OS === "ios" || Platform.isPad ?constants.fontNames.SEGOE_UI_BOLD_IOS:constants.fontNames.SEGOE_UI_BOLD,
    fontSize: dimensions.textDimension.text_16,
    color: colors.white,
    textAlign: "center",
  },
  button_text_primary: {
    fontFamily: Platform.OS === "ios" ?constants.fontNames.SEGOE_UI_BOLD_IOS:constants.fontNames.SEGOE_UI_BOLD,
    fontSize: dimensions.textDimension.text_16,
    color: colors.primary,
    textAlign: "center",
  },

  button_text_white: {
    fontFamily: Platform.OS === "ios" || Platform.isPad ?constants.fontNames.SEGOE_UI_BOLD_IOS:constants.fontNames.SEGOE_UI_BOLD,
    fontSize: dimensions.textDimension.text_16,
    color: colors.white,
    textAlign: "center",
  },

  textinput_title: {
    fontSize: dimensions.textDimension.text_14,
    color: colors.primary,
    marginStart:dimensions.dp_2,
    marginTop:dimensions.dp_10,
    fontFamily: Platform.OS === "ios" ?constants.fontNames.SEGOE_UI_BOLD_IOS:constants.fontNames.SEGOE_UI_BOLD
    },

    drawerText: {
    fontSize: dimensions.textDimension.text_16,
    color: colors.black,
    fontFamily: Platform.OS === "ios" ?constants.fontNames.SEGOE_UI_IOS:constants.fontNames.SEGOE_UI
  },

  drawerTextSelected: {
    fontSize: dimensions.textDimension.text_16,
    color: colors.primary,
    fontFamily: Platform.OS === "ios" ?constants.fontNames.SEGOE_UI_BOLD_IOS:constants.fontNames.SEGOE_UI_BOLD
  },
 
}
);

export default GlobalStyles;
