import React ,{useEffect,useState}from "react";
import {Text,View,StyleSheet,TouchableOpacity,Image} from "react-native"; 
import dimensions from "../res/dimenstion";
import colors from "../res/color";
import constants from "../utills/Constants";
import Modal from "react-native-modal";
import Constants from "../utills/Constants";
import GlobalStyles from "../styles/GlobalStyles";


const CustomDialog = ({ visible,header,onRequestClose,description,
                        isHtml,isAutoClose ,positiveText ,cancelText,onPositiveButtonClick }) =>{

    const [successTimeoutObj, setSuccessTimeoutObj] = useState(null);

    useEffect(() => {
        if(isAutoClose != false){
                if(visible ){
                    setSuccessTimeoutObj(() => setTimeout(() => {
                    if(visible) {
                    onRequestClose();       
                    }          
                    },3000)); }
                else {
                    if(successTimeoutObj) {
                    clearTimeout(successTimeoutObj);
                    setSuccessTimeoutObj(null);
                    }
                }
        }
       
}, [visible]);


    return(
       
            <Modal 
               isVisible={visible}
               transparent={true} 
               animationType="slide"
               onBackButtonPress={() => {onRequestClose()}}
               onBackdropPress={() => {onRequestClose()}}
               onModalHide={() => {onRequestClose()}}
               onSwipeComplete={() => {onRequestClose()}}
               animationInTiming={Constants.ANIMATION_TIME_MODEL}
               animationOutTiming={Constants.ANIMATION_TIME_MODEL}
               backdropTransitionInTiming={Constants.ANIMATION_TIME_MODEL}
               backdropTransitionOutTiming={Constants.ANIMATION_TIME_MODEL}
               hideModalContentWhileAnimating={true}
               useNativeDriver={true}
               coverScreen={true}
               useNativeDriverForBackdrop={true}
               propagateSwipe={true}
               statusBarTranslucent={true}
               style={{margin: 0, justifyContent: 'center', alignItems: 'center', }}               >

                    <TouchableOpacity 
                       onPress={()=>{onRequestClose()}}
                       style={styles.overlay}>

                        <View style={styles.dialog}>

                                <Text style={styles.header}>{header}</Text>

                                <Text style={styles.description}>{description}</Text>

                                {positiveText && positiveText!= "" ?(

                                    <View style={{flexDirection:'row',justifyContent:"center"}}>

                                        {cancelText && cancelText!="" ?(

                                              <TouchableOpacity 
                                                    onPress={()=>{onRequestClose()}}
                                                    style={[GlobalStyles.button_red,{width:'45%',marginEnd:5}]}>
                                                    <Text style={GlobalStyles.buttonTextWhite}>{cancelText}</Text>
                                                </TouchableOpacity>
                                                ):null}

                                                <TouchableOpacity 
                                                    onPress={()=>{
                                                        onRequestClose()
                                                        onPositiveButtonClick()
                                                    }}
                                                    style={[GlobalStyles.button_primary,{width:'45%',marginStart:5}]}>
                                                    <Text style={GlobalStyles.buttonTextWhite}>{positiveText}</Text>
                                                </TouchableOpacity>
                                    </View>
                                ):null}

                        </View>  

                    </TouchableOpacity>

            </Modal>

    )
}

const styles = StyleSheet.create({
       overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:colors.dialogBg
     },
        drawer: {
        height: '100%',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {width: 2, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: dimensions.dp_8,
        elevation:  dimensions.cardElevation,
        zIndex: 2,
        paddingTop: 0, //24
    },
    dialog:{
        backgroundColor:colors.white,
        borderColor:colors.white,
        borderRadius:dimensions.dp_10,
        borderWidth: dimensions.dp_1,
        marginHorizontal:dimensions.spaceDimension.space_15,
        paddingHorizontal:dimensions.spaceDimension.space_15,
        paddingVertical:dimensions.spaceDimension.space_20,
     },
      description:{
        textAlign:'center',
        marginTop:dimensions.spaceDimension.componenat_space_top_15,
        fontSize: dimensions.textDimension.custom_dialog_des,
        color: colors.black,
        fontFamily: Platform.OS === "ios" ?constants.fontNames.SEGOE_UI_IOS:constants.fontNames.SEGOE_UI
     }
    ,
     header:{
        textAlign:'center',
        fontSize: dimensions.textDimension.custom_dialog_header,
        color: colors.black,
        fontFamily: Platform.OS === "ios" ?constants.fontNames.SEGOE_UI_BOLD_IOS:constants.fontNames.SEGOE_UI_BOLD
     }
  
  })
export default CustomDialog
