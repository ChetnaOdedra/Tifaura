import React, { useState,useEffect } from "react";
import {  View,Text, TouchableOpacity,PermissionsAndroid,Platform,StyleSheet,Alert, Image} from "react-native";
import Constants from "../utills/Constants";
import GlobalStyles from "../styles/GlobalStyles";
import BorderdTextInput from "../components/BorderdTextInput";
import string from "../res/string";
import dimensions from "../res/dimenstion";
import RadioGroup from "../components/RadioGroup";
import { ScreenNames } from "../utills/ScreenName";
import { showToast,clearScreenNavigation} from "../utills/GlobalFunctions";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import ImagePickerModal from "../components/ImagePickerModal";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AppHeaderBack from '../components/AppHeaderBack'

const DriverOnBoardProcess = ({ navigation }) =>{

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [nationalInsNo, seetNationalInsNo] = useState("");
const [drivingLicenseNo, setDrivingLicenseNo] = useState("");
const [vehicalType, setVehicalType] = useState(true);
const [imageUri, setImageUri] = useState(null);

const [modalVisible, setModalVisible] = useState(false);

const openModal = () => setModalVisible(true);
const closeModal = () => setModalVisible(false);

  
const vehicalTypeOptions = [
    { label: "Bike", value: true },
    { label: "Car", value: false },
  ];
const [vehicalRegNo, setVehicalRegNo] = useState("");


const [isButtonDisabled, setIsButtonDisabled] = useState(true);

useEffect(() => {
    if (firstName.trim() !== '' && lastName.trim() !== '' && nationalInsNo.trim() !== ''  && vehicalRegNo.trim() !== '') {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [firstName, lastName, nationalInsNo, vehicalRegNo]);

  const requestCameraPermission = async () => {
    if (Platform.OS === "android") {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Camera Permission",
          message: "App needs access to your camera",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  }; 

  const openCamera = async () => {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) return;

    launchCamera({ mediaType: "photo" }, (response) => {
      if (response.didCancel) return;
      if (response.errorMessage) {
        Alert.alert("Error", response.errorMessage);
      } else {
        setImageUri(response.assets?.[0]?.uri);
      }
    });
  };

  const openGallery = () => {
    launchImageLibrary({ mediaType: "photo" }, (response) => {
      if (response.didCancel) return;
      if (response.errorMessage) {
        Alert.alert("Error", response.errorMessage);
      } else {
        setImageUri(response.assets?.[0]?.uri);
      }
    });
  };

   const chooseOption = () => {
    Alert.alert("Select Option", "Choose image from:", [
      { text: "Camera", onPress: openCamera },
      { text: "Gallery", onPress: openGallery },
      { text: "Cancel", style: "cancel" },
    ]);
  };

 return(
        <SafeAreaView style={GlobalStyles.container}>

                <AppHeaderBack
                  header={string.screenNames.PartnerReg}
                  navigation={navigation}
                />

                <ImagePickerModal
                    visible={modalVisible}
                    onClose={closeModal}
                    onCamera={() => {
                        closeModal();
                        openCamera(); // your camera function
                    }}
                    onGallery={() => {
                        closeModal();
                        openGallery(); // your gallery function
                    }}
                    />

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
                              

                <View style={styles.imageContainer}>
                    <Image
                    source={
                        imageUri
                        ? { uri: imageUri }
                        : Constants.imagePath.profile // replace with your placeholder
                    }
                    style={styles.image}
                    />
                    <TouchableOpacity style={styles.cameraButton} onPress={openModal}>
                    <Image
                        source={Constants.imagePath.camera} // replace with your camera icon
                        style={styles.cameraButton}
                    />
                    </TouchableOpacity>
                </View>

               <Text style={GlobalStyles.textinput_title}>{string.registrationString.firstName}</Text> 
               <BorderdTextInput
                    placeholder={string.registrationString.placeholderFirstName}
                    value={firstName}
                    onChangeText={setFirstName}
                />

               <Text style={GlobalStyles.textinput_title}>{string.registrationString.lastName}</Text> 
               <BorderdTextInput
                    placeholder={string.registrationString.placeholderLastName}
                    value={lastName}
                    onChangeText={setLastName}
                />

                <Text style={GlobalStyles.textinput_title}>{string.registrationString.vehicalInsNo}</Text> 
                <BorderdTextInput
                    placeholder={string.registrationString.placeholderVehicalInsNo}
                    value={nationalInsNo}
                    onChangeText={seetNationalInsNo}
                />

                <Text style={GlobalStyles.textinput_title}>{string.registrationString.drivingLicenseNo}</Text> 
                <BorderdTextInput
                    placeholder={string.registrationString.placeholderDrivingLicenseNo}
                    value={drivingLicenseNo}
                    secureTextEntry={true}
                    onChangeText={setDrivingLicenseNo}
                />

                <Text style={GlobalStyles.textinput_title}>{string.registrationString.vehicalType}</Text> 
                 <RadioGroup
                        options={vehicalTypeOptions}
                        selectedValue={vehicalType}
                        onSelect={(value) => 
                            setVehicalType(value === "Bike" ? true : value === "Car" ? false : value)}
                      />

                <Text style={GlobalStyles.textinput_title}>{string.registrationString.vehicalRegNo}</Text> 
                <BorderdTextInput
                    placeholder={string.registrationString.placeholderVehicalRegNo}
                    value={vehicalRegNo}
                    onChangeText={setVehicalRegNo}
                />

                 </KeyboardAwareScrollView>  

                  <TouchableOpacity 
                    disabled={isButtonDisabled}
                    style={[isButtonDisabled?GlobalStyles.button_primary_disable:GlobalStyles.button_primary,{marginTop:dimensions.dp_15}]}
                    onPress={()=>{
                        showToast(string.registrationString.completeProfile,string.registrationString.completeProfileSuccess,Constants.toastTypes.SUCCESS);
                        clearScreenNavigation(navigation,ScreenNames.Home)
                    }}
                    >
                    <Text style={GlobalStyles.button_text_white}>{string.registrationString.completeProfile}</Text>
                </TouchableOpacity>

           </SafeAreaView>
    )

}
export default DriverOnBoardProcess

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    marginBottom:-30
  },
  image: {
    width: dimensions.dp_80,
    height: dimensions.dp_80,
    borderRadius: dimensions.dp_40,
    backgroundColor: "#ddd",
    resizeMode:'contain'
  },
 cameraButton: {
    width:dimensions.dp_30,
    height:dimensions.dp_30,
    bottom:15,
    left:15,
  },
});