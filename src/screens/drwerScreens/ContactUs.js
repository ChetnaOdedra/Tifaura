import React, { useState,useEffect } from "react";
import { Dimensions, Image, Text,TouchableOpacity,View} from "react-native"
import GlobalStyles from "../../styles/GlobalStyles";
import DrawerScreenWrapper from "../../components/DrawerScreenWrapper";
import Constants from "../../utills/Constants";
import dimensions from "../../res/dimenstion";
import colors from "../../res/color";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import string from "../../res/string";


const ContactUs = ({navigation}) =>{

       const [isDrawerOpen,setIsDrawerOpen] = useState(false)
       const insets = useSafeAreaInsets();
       const [rating, setRating] = useState(0);

   
            return(
                     <DrawerScreenWrapper
                        navigation={navigation}
                        headerTitle={string.screenNames.ContactUs}
                        index={Constants.drawerIndex.CONTACT_US}
                        >
               
                        <View style={{
                            flex: 1,
                            marginTop:dimensions.dp_3
                            }}>

                               <Image
                                        source={Constants.imagePath.transparent_logo}
                                        style={GlobalStyles.logoShare}
                                    />

                                <View style={GlobalStyles.dataContainerAuth}>


                                    <View style={{
                                        backgroundColor:colors.cardPrimary,
                                        padding:dimensions.dp_15,
                                        borderRadius:dimensions.dp_10,
                                        alignSelf:'center',
                                        marginTop:dimensions.dp_20
                                        }}>

                                        <Text style={[GlobalStyles.txt_bold_black_16,{textAlign:'center'}]}>
                                             For any queary or feedback feel free to contact us.</Text>    

                                    </View>

                                        <TouchableOpacity
                                            style={[GlobalStyles.button_white,{
                                                flexDirection:'row',alignItems:'center',
                                                justifyContent:'center'}]}
                                        >
                                            <Image
                                                source={Constants.imagePath.phone}
                                                style={{marginEnd:dimensions.dp_10,width:dimensions.dp_15,height:dimensions.dp_15,resizeMode:'contain'}}
                                            />

                                            <Text style={GlobalStyles.txt_bold_black_14}>Tifaura@gmail.com</Text>
                                        </TouchableOpacity>

                                </View>

                                </View>

                     </DrawerScreenWrapper>
            )

}
export default ContactUs