import React, { useState, useEffect, useRef } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Platform, PermissionsAndroid, Alert } from "react-native";
import DrawerScreenWrapper from "../components/DrawerScreenWrapper";
import Constants from "../utills/Constants";
import GlobalStyles from "../styles/GlobalStyles";
import MapView, { Marker, Polyline } from "react-native-maps";
import string from "../res/string";
import Geolocation from "react-native-geolocation-service";
import { request, PERMISSIONS, RESULTS } from "react-native-permissions";
import dimensions from "../res/dimenstion";
import PreferenceManager from "../utills/PreferenceManager";
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';

// ✅ NEW IMPORT
import PolylineDecoder from "@mapbox/polyline";

const Home = ({ navigation }) => {

const mapRef = useRef(null);
const [loginUser, setLoginUser] = useState(null);

const origin = { latitude: 21.6566296, longitude: 69.6070868 };     
const destination = { latitude:21.642843, longitude: 69.5884066 }; 

const [location, setLocation] = useState(null);
const [routeCoords, setRouteCoords] = useState([]);


const [showDeliveryDialog, setShowDeliveryDialog] = useState(false);
const [showFullDetailDialog, setShowFullDetailDialog] = useState(false);
const [selectedOrder, setSelectedOrder] = useState(null);

const deliveries = [
    {
      id: "1",
      address: "Galaxy Plaza, Street 5",
      km: "1.2 km",
      count: 2,
      details: "Order 1 full details goes here..."
    },
    {
      id: "2",
      address: "Madhav Park, Block - C",
      km: "2.5 km",
      count: 1,
      details: "Order 2 full details goes here..."
    },
    {
      id: "3",
      address: "Rajkot City Center",
      km: "4.8 km",
      count: 3,
      details: "Order 3 full details goes here..."
    }
  ];

  const enableDeviceLocation = async () => {
    try {
      await RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
        interval: 10000,
        fastInterval: 5000,
      });

      console.log("GPS Enabled");
    } catch (error) {
      console.log("User did not enable GPS", error);
    }
  };

  // Check GPS
  const checkIfGPSEnabled = () => {
    return new Promise((resolve) => {
      Geolocation.getCurrentPosition(
        () => resolve(true), // GPS ON
        (error) => {
          if (error.code === 2) resolve(false); // GPS OFF
          else resolve(true);
        },
        { enableHighAccuracy: false, timeout: 3000 }
      );
    });
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const user = await PreferenceManager.getItem(PreferenceManager.KEYS.USER);
        setLoginUser(user);
      } catch (e) {
        console.log("error getUserData..", e);
      }
    };
    getUserData();
  }, []);


  const askPermission = async () => {
    try {
      let result;

      if (Platform.OS === "android") {
        result = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );

        if (result !== PermissionsAndroid.RESULTS.GRANTED) {
          Alert.alert("Location Permission", "Please enable location from Settings.");
          return false;
        } else {
          const isGPSEnabled = await checkIfGPSEnabled();
          if (!isGPSEnabled) {
            enableDeviceLocation();
          }
        }

      } else {
        result = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        if (result !== RESULTS.GRANTED) {
          Alert.alert("Location Permission", "Please enable location from Settings.");
          return false;
        }
      }

      return true;
    } catch (e) {
      console.log("Permission Error: ", e);
      return false;
    }
  };

  const getRoute = async (src, dest) => {
    try {
      const apiKey = Constants.GoogleAPIKey;

      const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${src.latitude},${src.longitude}&destination=${dest.latitude},${dest.longitude}&mode=driving&key=${apiKey}`;

      const response = await fetch(url);
      const json = await response.json();

      if (!json.routes.length) return;

      const points = PolylineDecoder.decode(json.routes[0].overview_polyline.points);

      const routePath = points.map((p) => ({
        latitude: p[0],
        longitude: p[1],
      }));

      setRouteCoords(routePath);

       setTimeout(() => {
          mapRef.current?.fitToCoordinates(routePath, {
            edgePadding: { top: 80, right: 80, bottom: 80, left: 80 },
            animated: true,
          });
        }, 500);

    } catch (error) {
      console.log("Route error:", error);
    }
  };

  // Get Live Location + Draw Route
  const getLiveLocation = () => {
    Geolocation.watchPosition(
      (pos) => {
        const newLoc = {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        };

        setLocation(newLoc);
        getRoute(newLoc, origin);
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
        const isGPSEnabled = await checkIfGPSEnabled();
        if (!isGPSEnabled) enableDeviceLocation();

        //getLiveLocation();
        getRoute(origin, destination);

      }
    };

    init();
  }, []);


  const zoomToMarker = (zoomTo) => {
    if (!mapRef.current) {
    console.log("Map not ready yet");
    return;
  }
    mapRef.current.animateToRegion(
      {
        ...zoomTo,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      },
      1000
    );
  };

  return (
    <DrawerScreenWrapper
      navigation={navigation}
      headerTitle={string.screenNames.Home}
      index={Constants.drawerIndex.HOME}
    >
      <View style={styles.container}>

        <MapView
          style={{ flex: 1 }}
          ref={mapRef}
          showsUserLocation={true}
          initialRegion={{
            ...origin,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >

         {/* START POINT */}
        <Marker 
          coordinate={origin}
          title="Your location"
          pinColor="blue"
         // onPress={zoomToMarker(origin)}
         />

        {/* END POINT */}
        <Marker 
          coordinate={destination}
          title="Destination"
          pinColor="red"
          onPress={zoomToMarker(destination)}
         />

        {/* POLYLINE
        <Polyline
          coordinates={[origin, destination]}
          strokeColor="blue"
          strokeWidth={4}
        /> */}

          {/* Polyline Route */}
          {routeCoords.length > 0 && (
            <Polyline
              coordinates={routeCoords}
              strokeWidth={4}
              strokeColor="blue"
            />  
          )}
        </MapView>

        <TouchableOpacity
         style={[GlobalStyles.button_primary,{marginHorizontal:dimensions.dp_20,marginBottom:dimensions.dp_20}]}

        >
          <Text style={GlobalStyles.txt_bold_white_14}>Start delivery</Text>
        </TouchableOpacity>

      </View>
    </DrawerScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
