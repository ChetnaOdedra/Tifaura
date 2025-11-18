import React, { useState,useEffect } from "react";
import { Dimensions, Image, Text,TouchableOpacity,View} from "react-native"
import GlobalStyles from "../../styles/GlobalStyles";
import DrawerScreenWrapper from "../../components/DrawerScreenWrapper";
import Constants from "../../utills/Constants";
import dimensions from "../../res/dimenstion";
import colors from "../../res/color";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import StarRating from 'react-native-star-rating-widget';
import ScreenWrapper from "../../components/ScreenWrapper";
import string from "../../res/string";
import AuthScreenComponent from "../../components/AuthScreenComponant";
import { ScreenNames } from "../../utills/ScreenName";

const RateUs = ({navigation}) =>{

       const [isDrawerOpen,setIsDrawerOpen] = useState(false)
       const insets = useSafeAreaInsets();
       const [rating, setRating] = useState(0);

   
            return(
                
                     <AuthScreenComponent
                            navigation={navigation}
                            screenName={ScreenNames.ShareApp}
                            headerTitle={string.screenNames.RateApp}
                        >
               

                                    <View style={{
                                        marginTop:dimensions.dp_20,
                                        backgroundColor:colors.cream,
                                        padding:dimensions.dp_15,
                                        borderRadius:dimensions.dp_10,
                                        alignSelf:'center',
                                        }}>
                                        <Text style={[GlobalStyles.txt_bold_black_16,{textAlign:'center'}]}>
                                             How would you rate our app experience?</Text>
                                    </View>


                                    <StarRating
                                        rating={rating}
                                        onChange={setRating}
                                        starSize={dimensions.dp_40}
                                        color={colors.primary}
                                        style={{marginTop:dimensions.dp_20,alignSelf:'center'}}
                                    />

                                    <TouchableOpacity
                                        style={GlobalStyles.button_primary}
                                    >
                                        <Text style={GlobalStyles.txt_bold_white_14}>Submit</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={[GlobalStyles.button_white,
                                            {marginBottom:dimensions.dp_20,marginTop:dimensions.dp_15}
                                        ]}
                                    >
                                        <Text style={GlobalStyles.txt_bold_black_14}>Remind me later</Text>
                                    </TouchableOpacity>


                     </AuthScreenComponent>

            

                
            )

}
export default RateUs