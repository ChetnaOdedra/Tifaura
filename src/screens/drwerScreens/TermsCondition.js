import React, { useState,useEffect } from "react";
import { Text,View} from "react-native"
import GlobalStyles from "../../styles/GlobalStyles";
import DrawerScreenWrapper from "../../components/DrawerScreenWrapper";
import Constants from "../../utills/Constants";
import RenderHTML from 'react-native-render-html';
import dimensions from "../../res/dimenstion";
import colors from "../../res/color";
import ScreenWrapper from "../../components/ScreenWrapper";
import string from "../../res/string";

const TermsCondition = ({navigation}) =>{

    const data = `
    <h2>Terms & Conditions – Tiffin Delivery Application (UK)</h2>
    <p>Welcome to Tifaura. These Terms & Conditions (“Terms”) govern your use of our <b>Tiffin / Meal Delivery Application.</b>
    By downloading, accessing, or using our App, <b>you agree to these Terms.</b>
    If you do not agree, please do not use our App.<p>
    
    <h2>1.Eligibility</h2>

    <p>You must be:</p>

    <ul>
    <li>At least <b>16 years old</b> to use our App</li>
    <li>Legally capable of entering into a binding contract in the UK</li>
    </ul>

    <h2>2.Creating an Account</h2>

    <ul>
    <li>To use our services, you must create an account with accurate and complete information.</li>
    <li>you must not share your login credentials with others.</li>
    <li>You are responsible for all activity under your account.</li>
    </ul>

    <h2>3.Our Service</h2>

    <p>Our App allows you to:<p>

    <ul>
    <li>Browse meal/tiffin options</li>
    <li>Place orders</li>
    <li>Schedule deliveries</li>
    <li>Track orders</li>
    </ul>

    <b>We reserve the right to modify or discontinue any part of the service at any time.</b>

    <h2>4.Orders & Payments</h2>

    <ul>
    <li>You must review all order details before confirming.</li>
    <li>Prices include applicable taxes unless otherwise stated.</li>
    <li>Orders become final once confirmed.</li>
    <li>We do not store your card details; payments are processed by secure third-party gateways.</li>
    </ul>

    <h3>Refusal of Orders</h3>
    <p>We may refuse an order if:</p>
    <ul>
    <li>Items are unavailable</li>
    <li>Your payment fails</li>
    <li>There is suspicion of fraud or misuse</li>
    </ul>

    <h2>5.Delivery</h2>
    <p>We aim to deliver meals within the estimated time but delays may occur due to traffic, weather, or other factors.</p>
    <p>We are not responsible for delays outside our control.</p>

    <h3>Delivery Address</h3>

    <ul>
    <li>You are responsible for providing an accurate delivery address.</li>
    <li>If the driver cannot reach you or the address is incorrect, the order may be marked as delivered or cancelled with no refund.<br><br></li>
    </ul>


    `
   
 return(
           
    <ScreenWrapper
        navigation={navigation}
        headerTitle={string.screenNames.TermsCondition}
      >

         <RenderHTML
                  contentWidth={dimensions.screenWidth}
                  source={{ html: data }}
                  tagsStyles={{
                    p: {
                      fontSize:dimensions.textDimension.text_16,
                      color:colors.black,
                      fontFamily: Platform.OS === "ios" ?Constants.fontNames.SEGOE_UI_IOS:Constants.fontNames.SEGOE_UI,
                    },
                    ul:{
                        margin:dimensions.dp_10
                    },
                    li: {
                      fontSize:dimensions.textDimension.text_16,
                      color:colors.black,
                      fontFamily: Platform.OS === "ios" ?Constants.fontNames.SEGOE_UI_IOS:Constants.fontNames.SEGOE_UI,
                    },
                    b:{
                      fontSize:dimensions.textDimension.text_16,
                      color:colors.black,
                      fontWeight:'bold',
                      fontFamily: Platform.OS === "ios" ?Constants.fontNames.SEGOE_UI_BOLD_IOS:Constants.fontNames.SEGOE_UI_BOLD,
                    },
                    h2:{
                      fontSize:dimensions.textDimension.text_16,
                      color:colors.primary,
                      marginVertical:dimensions.dp_10,
                      fontWeight:'bold',
                      fontFamily: Platform.OS === "ios" ?Constants.fontNames.SEGOE_UI_BOLD_IOS:Constants.fontNames.SEGOE_UI_BOLD,
                    },
                    h3:{
                      fontSize:dimensions.textDimension.text_16,
                      color:colors.black,
                      marginVertical:dimensions.dp_10,
                      fontWeight:'bold',
                      fontFamily: Platform.OS === "ios" ?Constants.fontNames.SEGOE_UI_BOLD_IOS:Constants.fontNames.SEGOE_UI_BOLD,
                    }
                  }}
                />        

    </ScreenWrapper>
)

}
export default TermsCondition