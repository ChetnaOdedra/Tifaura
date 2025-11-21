// src/components/SafeAreaWrapper.tsx
import React ,{useState,useEffect}from "react";
import { View, StyleSheet,KeyboardAvoidingView,ScrollView} from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import GlobalStyles from "../styles/GlobalStyles";
import dimensions from "../res/dimenstion";
import CustomDrawerModal from "./CustomDrawerModal";
import { changeUi,loadLoggedInUser} from "../utills/GlobalFunctions";
import APILoader from "../components/APILoader"
import AppHeader from "./AppHeader";
import Constants from "../utills/Constants";

const DrawerScreenWrapper = ({ 
  children, 
  customExtraStyle ,
  index,
  navigation,
  headerTitle,
  isOnlineProvider
}) => 
  
  {

    const insets = useSafeAreaInsets();
    const [isDrawerOpen,setIsDrawerOpen] = useState(false)
    const [loading, setLoading] = useState(true)
    const [loginUser, setLoginUser] = useState(null)

     useEffect(() => {
      const fetchUser = async () => {
        const user = await loadLoggedInUser();
        if (user) {
          setLoginUser(user);
          setLoading(false)
        }
      };
      fetchUser();
    }, []);

      if (loading) {
          return (
              <APILoader visible = {loading}/>   
          );
      }
      
    return (

      <View
        style={[
          styles.container,
          {
            paddingTop: insets.top>40?insets.top:insets.top+dimensions.dp_20,
            paddingBottom: insets.top>0?insets.bottom:insets.bottom+dimensions.dp_20,
            paddingLeft: index == Constants.drawerIndex.HOME?0:insets.left+dimensions.screenHorizontalPadding,
            paddingRight:  index == Constants.drawerIndex.HOME?0:insets.right+dimensions.screenHorizontalPadding,
          },
          customExtraStyle, // allow custom styles this we carry while calling this component if needed 
        ]}
      >

                        <CustomDrawerModal
                            index={index}
                            visible={isDrawerOpen}
                            onClose={(i) => {
                              setIsDrawerOpen(false);
                              changeUi(i, navigation);
                            }}
                            navigation = {navigation}
                            isLoggedIn = {true}
                            loginUser = {loginUser}
                          /> 

                        <AppHeader
                            index={index}
                            header={headerTitle}
                            onMenuPress={() => setIsDrawerOpen(true)}
                            isOnlineProvider={isOnlineProvider}
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
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", 
    backgroundColor: "white", 
  },
});

export default DrawerScreenWrapper;
