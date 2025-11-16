import React, { useState,useEffect } from "react";
import { Text,View,FlatList,StyleSheet,TouchableOpacity,Switch,Image} from "react-native"
import GlobalStyles from "../../styles/GlobalStyles";
import DrawerScreenWrapper from "../../components/DrawerScreenWrapper";
import Constants from "../../utills/Constants";
import { ScreenNames } from "../../utills/ScreenName";
import dimensions from "../../res/dimenstion";
import colors from "../../res/color";

const Settings = ({navigation}) =>{

    const [notifications, setNotifications] = useState(true);

    const settingsOptions = [
        { id: "1", title: "Partner Registration", screen: ScreenNames.DriverOnBoardProcess },
        { id: "2", title: "Notifications setting", type: "toggle" },
        { id: "3", title: "Change Password", screen: ScreenNames.ResetPassword},
        { id: "4", title: "Vehicle Info", screen: "VehicleInfo" },
        { id: "5", title: "Bank Account Info", screen: "BankInfo" },
        { id: "6", title: "Terms & Conditions", screen: ScreenNames.TermsCondition },
        { id: "7", title: "Privacy Policy", screen: ScreenNames.PrivacyPolicy },
        { id: "8", title: "Share App", screen: ScreenNames.ShareApp },
        { id: "9", title: "Rate Us", screen: ScreenNames.RateUs },
    ];

    const renderItem = ({ item }) => {
        return (
                <TouchableOpacity
                disabled={item.type === "toggle"}
                onPress={() => item.screen && navigation.navigate(item.screen)}
                style={styles.itemContainer}
                >
                <Text style={GlobalStyles.txt_regular_black_16}>{item.title}</Text>


                {item.type === "toggle" ? (
                <Switch 
                value={notifications} 
                onValueChange={setNotifications}
                trackColor={{ false: "#ccc", true: colors.primary }}
                thumbColor={notifications ? "#ffffff" : "#f4f3f4" }
                />
                ) : (
                    <Image
                        source={Constants.imagePath.arrow}
                        style={{width:dimensions.dp_10,height:dimensions.dp_10}}
                    />

                )}
                </TouchableOpacity>
        );
        };
        
 return(
           
 <DrawerScreenWrapper
          navigation={navigation}
          headerTitle={"Settings"}
          headerDes={"fahfahfgh"} 
          index={Constants.drawerIndex.HOME}
        >
           <FlatList
            data={settingsOptions}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            />
            
    </DrawerScreenWrapper>
)

}
export default Settings

const styles = StyleSheet.create({
container: { flex: 1, backgroundColor: "#fff", padding: 16 },
itemContainer: {
flexDirection: "row",
justifyContent: "space-between",
alignItems: "center",
paddingVertical: 16,
borderBottomWidth: 1,
borderBottomColor: "#eee",
},
title: { fontSize: 16 },
arrow: { fontSize: 18, color: "#888" },
});