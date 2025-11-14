import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import dimensions from "../res/dimenstion";
import colors from "../res/color";
import Constants from "../utills/Constants";

const ImagePickerModal = ({ visible, onClose, onCamera, onGallery }) => {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <View style={styles.modalContainer}>

          <Text style={GlobalStyles.txt_bold_black_16}>Select Image</Text>

          <View style={{flexDirection:'row',marginTop:dimensions.dp_20}}>

              <TouchableOpacity style={styles.optionButton} onPress={onCamera}>
                <Image
                source={Constants.imagePath.pickCamera}
                style={{width:dimensions.dp_40,height:dimensions.dp_40,marginBottom:dimensions.dp_5}}
                />
                <Text style={GlobalStyles.txt_regular_primary_14}>Open Camera</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.optionButton} onPress={onGallery}>
                <Image
                source={Constants.imagePath.pickGallery}
                style={{width:dimensions.dp_40,height:dimensions.dp_40,marginBottom:dimensions.dp_5}}
                />
                <Text style={GlobalStyles.txt_regular_primary_14}>Open Gallery</Text>
              </TouchableOpacity>

           </View>

          <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
            <Text style={GlobalStyles.txt_bold_primary_16}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </Modal>
  );
};

export default ImagePickerModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#fff",
    width: "80%",
    borderRadius: dimensions.dp_20,
    padding: dimensions.dp_20,
    alignItems: "center",
    elevation: 8,
    flexWrap:'wrap',
  },
  optionButton: {
    borderColor:colors.primary,
    borderWidth:1,
    borderRadius: dimensions.dp_10,
    paddingVertical: dimensions.dp_10,
    height:'auto',
    flex:1,
    marginHorizontal:dimensions.dp_5,
    alignItems:'center',
    justifyContent:'center'
  },
  cancelButton: {
    marginTop: 5,
    paddingVertical: 8,
  },
});
