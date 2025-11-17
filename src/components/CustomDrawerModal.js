import React, {useState,useRef, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  Modal,
  Animated,
  Dimensions,
  StyleSheet,
  PanResponder,
  Pressable,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import GlobalStyles from '../styles/GlobalStyles';
import colors from '../res/color';
import Constants from '../utills/Constants';
import { ScreenNames } from '../utills/ScreenName';
import { CommonActions } from '@react-navigation/native';
import { getInitials } from '../utills/GlobalFunctions';
import PreferenceManager from '../utills/PreferenceManager';
import dimensions from '../res/dimenstion';
import CustomDialog from './CustomDialog';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');


export default function  CustomDrawerModal ({
  index,
  visible,
  onClose,
  navigation,
  width = Math.min(dimensions.dp_250, SCREEN_WIDTH * 0.85),
  animationDuration = 250,
  swipeThreshold = 0.25, // fraction of drawer width to trigger close
}) {

  const [ selectedIndex, setSelectedIndex ] = useState(index);
  const [isCustomDialogVisible, setIsCustomDialogVisible] = useState(false)
  

  const menuItems = [
    { id: Constants.drawerIndex.HOME, title: "Home" , icon : Constants.imagePath.home},
   // { id: Constants.drawerIndex.MY_ACCOUNT, title: "My Account",icon : Constants.imagePath.profile },
    { id: Constants.drawerIndex.EARNING, title: "Earning",icon : Constants.imagePath.earning },
    { id: Constants.drawerIndex.SETTINGS, title: "Settings",icon : Constants.imagePath.setting},
    { id: Constants.drawerIndex.CONTACT_US, title: "Contact Us",icon : Constants.imagePath.contact_us },
   // { id: Constants.drawerIndex.PRIVACY_POLICY, title: "Privacy Policy",icon : Constants.imagePath.privacy },
   // { id: Constants.drawerIndex.TERMS_CONDITION, title: "Terms & Conditions",icon : Constants.imagePath.terms },
   // { id: Constants.drawerIndex.SHARE_APP, title: "Share App",icon : Constants.imagePath.share },
   // { id: Constants.drawerIndex.RATE_US, title: "Rate Us",icon : Constants.imagePath.ratting },

    {
      id: Constants.drawerIndex.LOGOUT,
      title: "Logout",
      isLogout: true,
      icon: Constants.imagePath.logout,
    },

    { 
      id: Constants.drawerIndex.DELETE_ACCOUNT, 
      title: "Delete Account",
      icon : Constants.imagePath.delete_account  
    },

  ];


  const translateX = useRef(new Animated.Value(-width)).current; // -width means hidden to left
  const backdropOpacity = useRef(new Animated.Value(0)).current;

  // Keep pan responder state
  const panX = useRef(0);

  useEffect(() => {
    // When visible changes, animate in/out
    if (visible) {
      // reset translateX start position to ensure correct when width prop changes
      translateX.setValue(-width);
      Animated.parallel([
        Animated.timing(translateX, {
          toValue: 0,
          duration: animationDuration,
          useNativeDriver: true,
        }),
        Animated.timing(backdropOpacity, {
          toValue: 0.5,
          duration: animationDuration,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(translateX, {
          toValue: -width,
          duration: animationDuration,
          useNativeDriver: true,
        }),
        Animated.timing(backdropOpacity, {
          toValue: 0,
          duration: animationDuration,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible, translateX, backdropOpacity, width, animationDuration]);

  const close = useCallback((number) => {
    // call parent's onClose after animation finishes to allow Modal to be dismissed
    Animated.parallel([
      Animated.timing(translateX, {
        toValue: -width,
        duration: animationDuration,
        useNativeDriver: true,
      }),
      Animated.timing(backdropOpacity, {
        toValue: 0,
        duration: animationDuration,
        useNativeDriver: true,
      }),
    ]).start(({finished}) => {
      if (finished && typeof onClose === 'function') onClose(number);
    });
  }, [translateX, backdropOpacity, width, animationDuration, onClose]);

  // PanResponder for swipe-to-close
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        // start responding when horizontal movement is larger than vertical and small threshold
        const dx = Math.abs(gestureState.dx);
        const dy = Math.abs(gestureState.dy);
        return dx > 5 && dx > dy;
      },
      onPanResponderGrant: () => {
        panX.current = 0;
      },
      onPanResponderMove: (evt, gestureState) => {
        const dx = gestureState.dx; // positive when dragging right
        panX.current = dx;
        // We allow dragging the drawer to left (negative) a little, but main case is closing -> dx > 0
        const newTranslate = Math.min(0, dx);
        translateX.setValue(newTranslate);
        // Fade backdrop proportional to how much drawer is open
        const openFraction = 1 + newTranslate / width; // when newTranslate is 0 => 1, when -width => 0
        backdropOpacity.setValue(0.5 * Math.max(0, openFraction));
      },
      onPanResponderRelease: (evt, gestureState) => {
        const dx = gestureState.dx;
        const vx = gestureState.vx;
        const movedFraction = dx / width; // positive to the right
        const shouldClose = movedFraction > swipeThreshold || vx > 0.5;
        if (shouldClose) {
          // animate out and call onClose
          Animated.parallel([
            Animated.timing(translateX, {
              toValue: -width,
              duration: animationDuration,
              useNativeDriver: true,
            }),
            Animated.timing(backdropOpacity, {
              toValue: 0,
              duration: animationDuration,
              useNativeDriver: true,
            }),
          ]).start(({finished}) => {
            if (finished && typeof onClose === 'function') onClose();
          });
        } else {
          // snap back open
          Animated.parallel([
            Animated.timing(translateX, {
              toValue: 0,
              duration: animationDuration,
              useNativeDriver: true,
            }),
            Animated.timing(backdropOpacity, {
              toValue: 0.5,
              duration: animationDuration,
              useNativeDriver: true,
            }),
          ]).start();
        }
      },
    }),
  ).current;

  // If not visible, still render Modal with transparent so it can animate out before dismiss
  return (
    <Modal
      visible={visible}
      animationType="none"
      transparent
      onRequestClose={() => close("")}
      statusBarTranslucent
    >
      <View style={styles.container} pointerEvents={visible ? 'auto' : 'none'}>

          <CustomDialog
            isAutoClose = {false}
            isHtml={false}
            visible = {isCustomDialogVisible}
            header={"Are you sure?"}
            description={"Are you sure you want to logout from the App?"}
            onRequestClose={() => setIsCustomDialogVisible(false)}
            positiveText="Logout"
            cancelText = "Cancel"
            onPositiveButtonClick={ ()=>

                 { 
                  PreferenceManager.clearAll();
                                close(Constants.drawerIndex.LOGOUT);
                                navigation.dispatch(
                                  CommonActions.reset({
                                    index: 0,
                                    routes: [{ name: ScreenNames.LOGIN }],
                                  })
                                );}
            }
          /> 

        {/* Backdrop */}
        <TouchableOpacity onPress={()=>{ close("")}}>
          <Animated.View
            style={[
              styles.backdrop,
              {opacity: backdropOpacity, width: SCREEN_WIDTH, height: SCREEN_HEIGHT},
            ]}
          />
        </TouchableOpacity>

        {/* Drawer */}
        <Animated.View
          {...panResponder.panHandlers}
          style={[
            styles.drawer,
            {width: width, transform: [{translateX: translateX}]},
          ]}
        >
          {/* A little drag handle for affordance */}
          <View style={styles.handleContainer} pointerEvents="none">
            <View style={styles.handle} />
          </View>

          {/* <View style={styles.content}>{children}</View> */}

             <ScrollView
                                showsVerticalScrollIndicator={false} 
                                contentContainerStyle={GlobalStyles.scrollViewContainer}
                                keyboardShouldPersistTaps="handled"
                              >

                  <View style={{
                      backgroundColor:colors.primary,
                      alignItems:'center',
                      justifyContent:'center',
                      flexDirection:'column',
                      paddingVertical:dimensions.dp_30,
                      paddingHorizontal:dimensions.dp_10
                    }}>
                    
                      <View style={{
                          backgroundColor:'white',
                          width:dimensions.dp_50,
                          height:dimensions.dp_50,
                          alignItems:'center',
                          justifyContent:'center',
                          borderRadius:dimensions.dp_25,
                          borderColor:'black',
                          borderWidth:dimensions.dp_1,
                          alignSelf:'center'
                        }}>

                         <Text style={[GlobalStyles.txt_bold_primary_16]}>{getInitials("Chetna Odedra")}</Text>

                      </View>

                      <View>

                        <Text style={[GlobalStyles.txt_regular_white_16,{textAlign:'center',marginTop:dimensions.dp_10}]}>Chetana</Text>

                        <Text style={[GlobalStyles.txt_regular_white_14,{textAlign:'center',marginTop:dimensions.dp_5}]}>chents@mailinator.com</Text>

                      </View>
                     
                  </View>

                   <View style={{ marginVertical: dimensions.dp_10 }}>
                        {menuItems.map((item) => (
                          <TouchableOpacity
                            key={item.id}
                            onPress={() => {
                              setSelectedIndex(item.id);

                              if (item.isLogout) {
                                setIsCustomDialogVisible(true)
                              } else {
                                close(item.id);
                              }
                            }}
                            style={[selectedIndex === item.id? styles.selectedItemViewStyle: styles.itemViewStyle,{marginTop:item.isLogout? 20:0}]}
                          >
                            <View style={{ 
                              flexDirection: "row",
                              paddingStart:dimensions.dp_20,
                              paddingVertical:dimensions.dp_10,
                              }}>

                                <Image
                                  source={item.icon}
                                  style={{
                                    width: dimensions.dp_20,
                                    height: dimensions.dp_20,
                                    resizeMode: 'contain',
                                    alignSelf: "center",
                                  }}
                                />
                                <Text
                                  style={[
                                    GlobalStyles.drawerText,
                                    { marginStart: dimensions.dp_10, alignSelf: "center" },
                                  ]}
                                >
                                  {item.title}
                                </Text>
                               </View>
                          </TouchableOpacity>
                        ))}

                    
                       

                   </View>

            </ScrollView>

             <Text
                style={[GlobalStyles.txt_bold_primary_14,{
                  marginBottom:dimensions.dp_30,alignSelf:'center'}]}
                        >App Version 1.00</Text>
        </Animated.View>

        {/* Click-catcher on the rest of the screen to close when tapped (optional) */}
        <Pressable style={styles.fill} onPress={() => {close(index)}} />

      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  itemViewStyle:{
   // paddingVertical:dimensions.spaceDimension.space_8,
    justifyContent:'center'
  },
  selectedItemViewStyle:{
    //paddingVertical:dimensions.spaceDimension.space_8,
    backgroundColor:colors.primaryLight,
    justifyContent:'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  backdrop: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: '#000',
  },
  drawer: {
    height: '100%',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 0},
    shadowOpacity: 0.25,
    shadowRadius: dimensions.dp_8,
    elevation: dimensions.dp_8,
    zIndex: 2,
    paddingTop: 0, //24
  },
  handleContainer: {
    position: 'absolute',
    right: -20,
    top: 12, 
    width: dimensions.dp_40,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex:3,
  },
  handle: {
    width: dimensions.dp_35,
    height: dimensions.dp_5,
    borderRadius: dimensions.dp_3,
    backgroundColor: '#e0e0e0',
  },
  content: {
    flex: 1,
    paddingHorizontal: 0,
    paddingTop: 0,
  },
  fill: {
    flex: 1,
  },
});