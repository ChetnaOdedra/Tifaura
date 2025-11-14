import React, { useState,useEffect } from "react";
import { Text,View} from "react-native"
import GlobalStyles from "../../styles/GlobalStyles";
import DrawerScreenWrapper from "../../components/DrawerScreenWrapper";
import Constants from "../../utills/Constants";
import RenderHTML from 'react-native-render-html';
import dimensions from "../../res/dimenstion";
import colors from "../../res/color";

const Privacy = ({navigation}) =>{

    const data = `
    <h2>Privacy Policy – Tiffin Delivery Application (UK)</h2>
    <p>This Privacy Policy describes how collects, uses, stores, and protects your personal data when you use our <b>Tiffin / Meal Delivery Application.</b>
    We are committed to complying with the <b>UK GDPR</b> and <b>Data Protection Act 2018.</b><p>
    
    <h2>1.How We Use Your Data</h2>

    <p>We use your personal data for the following purposes:</p>

    <ul>
    <li>To create and manage your user account</li>
    <li>To process meal/tiffin orders and payments</li>
    <li>To deliver your orders to your selected address</li>
    <li>To communicate order updates, offers, or service notifications</li>
    <li>To improve app functionality and customer experience</li>
    <li>For fraud prevention and security</li>
    <li>To comply with legal obligations</li>
    </ul>

    <h2>2.Data Retention</h2>

    <p>We retain your personal data only as long as necessary:</p>

    <ul>
    <li>Account information: until you delete your account</li>
    <li>Order history: up to 7 years (for accounting/legal requirements)</li>
    <li>Marketing data: until you withdraw consent</li>
    </ul>

    <h2>3.Changes to This Privacy Policy</h2>

    <p>We may update this policy from time to time.
    Changes will be posted in the app, and the “Last Updated” date will be revised.</p><br><br>

    `
   
 return(
           
 <DrawerScreenWrapper
          navigation={navigation}
          headerTitle={"Privacy Policy"}
          headerDes={"fahfahfgh"} 
          index={Constants.drawerIndex.HOME}
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
                    }
                  }}
                />        

    </DrawerScreenWrapper>
)

}
export default Privacy