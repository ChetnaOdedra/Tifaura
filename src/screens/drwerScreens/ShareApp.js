import React, { useState,useEffect } from "react";
import { Image, Text,TouchableOpacity,View} from "react-native"
import GlobalStyles from "../../styles/GlobalStyles";
import Constants from "../../utills/Constants";
import dimensions from "../../res/dimenstion";
import colors from "../../res/color";
import ScreenWrapper from "../../components/ScreenWrapper";
import string from "../../res/string";

const ShareApp = ({navigation}) =>{

 
  
            return(
                
                      <ScreenWrapper
                            navigation={navigation}
                            headerTitle={string.screenNames.ShareApp}
                        >
               
                        <View style={{
                            flex: 1,
                            marginTop:dimensions.dp_30
                           
                            }}>

                                <View style={{
                                        backgroundColor:colors.white,
                                        padding:dimensions.dp_20,
                                        borderRadius:dimensions.dp_20,
                                        elevation:dimensions.cardElevation,
                                        margin:dimensions.dp_5,
                                        shadowColor: "#504e4eff",
                                        shadowOffset: { width: 0, height: 2 },
                                        shadowOpacity: 0.2,
                                        shadowRadius: 4,
                                        alignSelf:'center'
                                    }}>

                                    <Image
                                        source={Constants.imagePath.transparent_logo}
                                        style={{alignSelf:'center',width:dimensions.dp_200,height:dimensions.dp_200,resizeMode:'contain'}}
                                    />

                                    <View style={{
                                        marginTop:-20,
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

                     </ScreenWrapper>

            

                
            )

}
export default ShareApp