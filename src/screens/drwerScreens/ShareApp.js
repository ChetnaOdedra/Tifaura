import React, { useState,useEffect } from "react";
import { Dimensions, Image, Text,TouchableOpacity,View} from "react-native"
import GlobalStyles from "../../styles/GlobalStyles";
import Constants from "../../utills/Constants";
import dimensions from "../../res/dimenstion";
import colors from "../../res/color";
import ScreenWrapper from "../../components/ScreenWrapper";
import string from "../../res/string";
import AuthScreenComponent from "../../components/AuthScreenComponant";
import { ScreenNames } from "../../utills/ScreenName";

const ShareApp = ({navigation}) =>{


            return(
                
                      <AuthScreenComponent
                            navigation={navigation}
                            screenName={ScreenNames.ShareApp}
                            headerTitle={string.screenNames.ShareApp}
                        >

                                    <View style={{
                                        backgroundColor:colors.cream,
                                        padding:dimensions.dp_15,
                                        borderRadius:dimensions.dp_10,
                                        alignSelf:'center',
                                        marginTop:dimensions.dp_20
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
                                                backgroundColor:colors.white,
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
                                                backgroundColor:colors.white,
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



                     </AuthScreenComponent>

            

                
            )

}
export default ShareApp