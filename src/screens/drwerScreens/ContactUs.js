import React, { useState,useEffect } from "react";
import { Dimensions, Image, Text,TouchableOpacity,View} from "react-native"
import GlobalStyles from "../../styles/GlobalStyles";
import DrawerScreenWrapper from "../../components/DrawerScreenWrapper";
import Constants from "../../utills/Constants";
import dimensions from "../../res/dimenstion";
import colors from "../../res/color";
import { useSafeAreaInsets } from "react-native-safe-area-context";


const ContactUs = ({navigation}) =>{

       const [isDrawerOpen,setIsDrawerOpen] = useState(false)
       const insets = useSafeAreaInsets();
       const [rating, setRating] = useState(0);

   
            return(
                
                     <DrawerScreenWrapper
                        navigation={navigation}
                        headerTitle={"Contact Us"}
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
                                             For any queary or feedback feel free to contact us.</Text>    

                                    </View>

                                        <TouchableOpacity
                                            style={[GlobalStyles.button_primary,{
                                                flexDirection:'row',alignItems:'center',
                                                justifyContent:'center'}]}
                                        >
                                            <Image
                                                source={Constants.imagePath.mail}
                                                style={{marginEnd:dimensions.dp_10,width:dimensions.dp_15,height:dimensions.dp_15,resizeMode:'contain'}}
                                            />

                                            <Text style={GlobalStyles.txt_bold_white_14}>Tifaura@gmail.com</Text>
                                        </TouchableOpacity>

                                    <TouchableOpacity
                                        style={[GlobalStyles.button_white,
                                            {
                                                marginBottom:dimensions.dp_20,
                                                marginTop:dimensions.dp_15,
                                                flexDirection:'row',
                                                justifyContent:'center'
                                            }
                                        ]}
                                    >
                                         <Image
                                                source={Constants.imagePath.phone}
                                                style={{marginEnd:dimensions.dp_10,width:dimensions.dp_15,height:dimensions.dp_15,resizeMode:'contain'}}
                                            />
                                        <Text style={GlobalStyles.txt_bold_black_14}>+44123456789</Text>
                                    </TouchableOpacity>

                                </View>

                                </View>

                     </DrawerScreenWrapper>

            

                
            )

}
export default ContactUs