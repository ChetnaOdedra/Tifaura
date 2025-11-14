import React from "react";
import { Modal,ActivityIndicator,View,StyleSheet} from "react-native";

const APILoader = ({loading}) =>{
    return(
            <Modal 
            
            transparent={true} animationType="none" visible={loading}>
                    <View style={styles.overlay}>
                      <ActivityIndicator size="large" color="#fff" />
                    </View>
            </Modal>
    )
}

const styles = StyleSheet.create({
     overlay: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.4)", // semi-transparent
      justifyContent: "center",
      alignItems: "center",
  },
  
  })
export default APILoader
