// src/components/SafeAreaWrapper.tsx
import React ,{useState,useEffect}from "react";
import { View, StyleSheet,KeyboardAvoidingView,ScrollView,Image, Touchable,TouchableOpacity} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import GlobalStyles from "../styles/GlobalStyles";
import dimensions from "../res/dimenstion";
import CustomDrawerModal from "./CustomDrawerModal";
import { changeUi } from "../utills/GlobalFunctions";
import PreferenceManager from "../utills/PreferenceManager";
import APILoader from "./APILoader"
import AppHeaderBack from "./AppHeaderBack";
import Constants from "../utills/Constants";
import { SafeAreaView } from "react-native-safe-area-context";


const ScreenWrapper = ({ 
  children, 
  navigation,
  headerTitle,
  customExtraStyle
}) => 
  
  {

    const insets = useSafeAreaInsets();
    const [loading, setLoading] = useState(true)
    const [loginUser, setLoginUser] = useState(null)

     useEffect(() => {
        const loadData = async () => {
          try {
            const user = await PreferenceManager.getItem(PreferenceManager.KEYS.USER);
          if(user != null){
              setLoginUser(user)
              console.log("..user.id...",user.id)
          }
          } catch (error) {
          } finally {
            setLoading(false);
          }
        };
        loadData();
      }, []);

        if (loading) {
          return (
              <APILoader visible = {loading}/>   
          );
      }
      
  return (

    <SafeAreaView
      style={[
        styles.container,
        {
          // paddingTop: insets.top>40?insets.top:insets.top+dimensions.dp_20,
          // paddingBottom: insets.top>0?insets.bottom:insets.bottom+dimensions.dp_20,
          paddingTop:dimensions.dp_20,
          paddingLeft: insets.left+dimensions.dp_20,
          paddingRight: insets.right+dimensions.dp_20,
        },
        customExtraStyle, // allow custom styles this we carry while calling this component if needed 
      ]}
    >

                    <AppHeaderBack
                      navigation={navigation}
                      header={headerTitle}
                    />
                    
                      <KeyboardAvoidingView
                            style={{ flex: 1 , marginTop:dimensions.spaceDimension.space_10 }}
                            behavior={Platform.OS === "ios" ? "padding" : undefined}
                            keyboardVerticalOffset={Platform.OS === "ios" ? dimensions.spaceDimension.keyboard_vertical_offset : 0} 
                      >

                          <ScrollView
                                showsVerticalScrollIndicator={false} 
                                contentContainerStyle={GlobalStyles.scrollViewContainer}
                                keyboardShouldPersistTaps="handled"
                              >
                                    
                             <View style={{flex: 1 , marginTop:dimensions.spaceDimension.space_10}}>{children} </View>

                          </ScrollView>

                      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", 
    backgroundColor: "white", 
  },
});

export default ScreenWrapper;
