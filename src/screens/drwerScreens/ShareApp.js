import React, { useState,useEffect } from "react";
import { Dimensions, Image, Text,TouchableOpacity,View} from "react-native"
import GlobalStyles from "../../styles/GlobalStyles";
import DrawerScreenWrapper from "../../components/DrawerScreenWrapper";
import Constants from "../../utills/Constants";
import dimensions from "../../res/dimenstion";
import colors from "../../res/color";
import AuthScreenComponent from "../../components/AuthScreenComponant"
import CustomDrawerModal from "../../components/CustomDrawerModal"
import AppHeader from '../../components/AppHeader'
import { changeUi } from "../../utills/GlobalFunctions";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";


const ShareApp = ({navigation}) =>{

       const [isDrawerOpen,setIsDrawerOpen] = useState(false)
       const insets = useSafeAreaInsets();
   
            return(
                
                     <DrawerScreenWrapper
                        navigation={navigation}
                        headerTitle={"Share App"}
                        headerDes={"fahfahfgh"} 
                        index={Constants.drawerIndex.SHARE_APP}
                        >
               
                        <View style={{
                            flex: 1,
                            marginTop:dimensions.dp_30
                            // justifyContent: 'center',
                            // alignItems: 'center'
                            }}>

    

                                <View style={{
                                        backgroundColor:colors.black,
                                        padding:dimensions.dp_20,
                                        borderRadius:dimensions.dp_20,
                                        elevation:5,
                                        margin:dimensions.dp_5,
                                        shadowColor: "#504e4eff",
                                        shadowOffset: { width: 0, height: 2 },
                                        shadowOpacity: 0.2,
                                        shadowRadius: 4,
                                        alignSelf:'center'
                                    }}>

                                    <Image
                                        source={Constants.imagePath.transparent_logo}
                                        style={{alignSelf:'center',width:dimensions.dp_150,height:dimensions.dp_150,resizeMode:'contain'}}
                                    />

                                    <View style={{
                                        backgroundColor:colors.cardPrimary,
                                        padding:dimensions.dp_15,
                                        borderRadius:dimensions.dp_10,
                                        alignSelf:'center',
                                        }}>
                                        <Text style={[GlobalStyles.txt_bold_black_16,{textAlign:'center'}]}>
                                            Invite your friends! Share TIFAURA and enjoy fresh meals deliverd daily.</Text>
                                    </View>

                                    <Text style={[GlobalStyles.txt_bold_primary_20,{
                                        alignSelf:'flex-start',marginTop:dimensions.dp_20
                                        }]}>Share via</Text>

                                    <View style={{
                                        flexDirection:'row',marginTop:dimensions.dp_10,
                                    }}>

                                        <TouchableOpacity
                                            style={{
                                                backgroundColor:colors.wpGreen,
                                                paddingHorizontal:dimensions.dp_15,
                                                paddingVertical:dimensions.dp_15,
                                                flexDirection:'row',
                                                borderRadius:dimensions.dp_10,
                                                alignItems:'center'
                                            }}
                                        >
                                            <Image
                                                source={Constants.imagePath.whatsup}
                                                style={{
                                                    width:dimensions.dp_15,
                                                    height:dimensions.dp_15,
                                                    resizeMode:'contain',
                                                    marginEnd:dimensions.dp_10
                                                }}
                                            />
                                            <Text style={GlobalStyles.txt_bold_white_12}>Whatsapp</Text>
                                        </TouchableOpacity>

                                         <TouchableOpacity
                                            style={{
                                                backgroundColor:colors.cream,
                                                paddingHorizontal:dimensions.dp_15,
                                                paddingVertical:dimensions.dp_15,
                                                flexDirection:'row',
                                                borderRadius:dimensions.dp_10,
                                                alignItems:'center',
                                                marginHorizontal:dimensions.dp_10
                                            }}
                                        >
                                            <Image
                                                source={Constants.imagePath.msg}
                                                style={{
                                                    width:dimensions.dp_15,
                                                    height:dimensions.dp_15,
                                                    resizeMode:'contain',
                                                    marginEnd:dimensions.dp_10
                                                }}
                                            />
                                            <Text style={GlobalStyles.txt_bold_black_12}>Message</Text>
                                        </TouchableOpacity>

                                         <TouchableOpacity
                                            style={{
                                                backgroundColor:colors.cream,
                                                paddingHorizontal:dimensions.dp_15,
                                                paddingVertical:dimensions.dp_15,
                                                flexDirection:'row',
                                                borderRadius:dimensions.dp_10,
                                                alignItems:'center'
                                            }}
                                        >
                                            <Image
                                                source={Constants.imagePath.send}
                                                style={{
                                                    width:dimensions.dp_15,
                                                    height:dimensions.dp_15,
                                                    resizeMode:'contain',
                                                    }}
                                            />
                                        </TouchableOpacity>

                                    </View>

                                </View>

                                </View>

                     </DrawerScreenWrapper>

            

                
            )

}
export default ShareApp