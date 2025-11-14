import React from "react";
import { View,Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from "../utills/Constants";
import GlobalStyles from "../styles/GlobalStyles";
import dimensions from "../res/dimenstion";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const AuthScreenComponent = ({children, customExtraStyle }) =>{

   return(
    
        <SafeAreaView style={GlobalStyles.mainScreenContainerAuth}>
            
                <Image
                source={Constants.imagePath.transparent_logo}
                style={GlobalStyles.logoImageStyle}
                />

                    <View style={GlobalStyles.dataContainerAuth}>    


                        <KeyboardAwareScrollView
                            contentContainerStyle={{
                                flexGrow: 1,
                                justifyContent: 'flex-end',
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