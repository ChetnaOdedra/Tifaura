import React from "react";
import { View,Image,TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from "../utills/Constants";
import GlobalStyles from "../styles/GlobalStyles";
import dimensions from "../res/dimenstion";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AppHeaderBack from "./AppHeaderBack";
import { ScreenNames } from "../utills/ScreenName";

const AuthScreenComponent = ({children, customExtraStyle,screenName,navigation,headerTitle }) =>{

   return(
    
        <SafeAreaView style={GlobalStyles.mainScreenContainerAuth}>

                    {
                        screenName!=ScreenNames.LOGIN ?

                    <AppHeaderBack
                      navigation={navigation}
                      header={headerTitle?headerTitle:''}
                    />:null

                    }

                   
                    <Image
                    source={Constants.imagePath.new_logo}
                    style={GlobalStyles.logoImageStyle}
                    />

                    <View style={GlobalStyles.dataContainerAuth}>    


                        <KeyboardAwareScrollView
                            contentContainerStyle={{
                                flexGrow: 1,
                            }}
                            showsVerticalScrollIndicator={false}
                            extraScrollHeight={dimensions.spaceDimension.keyboardExrtaSpace}  
                            enableOnAndroid={true}
                            keyboardShouldPersistTaps="handled"
                            >


                                    {children}


                        </KeyboardAwareScrollView>

                    </View>


        </SafeAreaView>
    )
}
export default AuthScreenComponent;