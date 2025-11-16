import React, { useState,useEffect } from "react";
import { View, Text ,Image,TouchableOpacity,StyleSheet,Platform,PermissionsAndroid,Alert} from "react-native";
import DrawerScreenWrapper from "../components/DrawerScreenWrapper";
import Constants from "../utills/Constants";
import GlobalStyles from "../styles/GlobalStyles";
import MapView, { Marker } from "react-native-maps";

import Geolocation from "react-native-geolocation-service";
import { request, PERMISSIONS, RESULTS } from "react-native-permissions";


const Home = ({navigation}) =>{

 const [location, setLocation] = useState(null);

// Ask permission
  const askPermission = async () => {
    try {
      let result;

      if (Platform.OS === "android") {
        result = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        if (result !== PermissionsAndroid.RESULTS.GRANTED) {
          Alert.alert(
            "Location Permission",
            "Please enable location from Settings."
          );
          return false;
        }
      } else {
        result = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        if (result !== RESULTS.GRANTED) {
          Alert.alert(
            "Location Permission",
            "Please enable location from Settings."
          );
          return false;
        }
      }

      return true;
    } catch (e) {
      console.log("Permission Error: ", e);
      return false;
    }
  };

  // Get Live Location
  const getLiveLocation = () => {
    Geolocation.watchPosition(
      (pos) => {
        console.log("pos....",pos.coords.latitude ,"....", pos.coords.longitude)
        setLocation({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      },
      (error) => {
        console.log(error);
        Alert.alert("Location Error", "Please enable GPS");
      },
      {
        enableHighAccuracy: true,
        distanceFilter: 0,
        interval: 2000,
        fastestInterval: 1000,
      }
    );
  };

  useEffect(() => {
    const init = async () => {
      const granted = await askPermission();
      if (granted) {
        getLiveLocation();
      }
    };

    init();
  }, []);

  if (!location) return null;

    return(

     <DrawerScreenWrapper
          navigation={navigation}
          headerTitle={"Home"}
          headerDes={"fahfahfgh"} 
          index={Constants.drawerIndex.HOME}
        >
          <View style={styles.container}>

            <MapView
                style={{flex:1}}
                showsUserLocation={true}
                initialRegion={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
                >
                <Marker
                    coordinate={location}
                    title="You are here"
                    pinColor="blue"
                />
                </MapView>
            
          </View>

            
    </DrawerScreenWrapper>

    )

}
export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});