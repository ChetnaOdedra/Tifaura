/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, useColorScheme } from 'react-native';
import React, { useEffect ,useState} from "react";
import AppNavigator from "./src/navigations/AppNavigator";
import { ApolloProvider } from "@apollo/client/react";
import PreferenceManager from "./src/utills/PreferenceManager";
import client from "./src/api/apolloClient";
import { ScreenNames } from "./src/utills/ScreenName";
import Toast, {
  BaseToast,
  ErrorToast,
  ToastConfig,
  ToastConfigParams,
} from 'react-native-toast-message';import {SafeAreaProvider} from 'react-native-safe-area-context';
import dimensions from './src/res/dimenstion';

const toastConfig: ToastConfig = {
  success: (props: ToastConfigParams<any>) => (
    <BaseToast
      {...props}
      style={{ 
        borderLeftColor: '#4CAF50', 
        width: '95%',
        height:'auto'
      }}
      contentContainerStyle={{ 
        paddingHorizontal: dimensions.dp_15,
        paddingVertical:dimensions.dp_10 
      }}
      text1Style={{
        fontSize: dimensions.textDimension.text_14,
        fontWeight: 'bold',
        color: '#222',
        flexWrap: 'wrap',
      }}
      text2Style={{
        fontSize: dimensions.textDimension.text_16,
        color: '#555',
        flexWrap: 'wrap',
      }}
      text1NumberOfLines={3}
      text2NumberOfLines={5}
    />
  ),
  error: (props: ToastConfigParams<any>) => (
    <ErrorToast
      {...props}
      style={{ 
        borderLeftColor: '#F44336', 
        width: '95%',
        height:'auto'
      }}
      contentContainerStyle={{ 
        paddingHorizontal: dimensions.dp_15,
        paddingVertical:dimensions.dp_10 }}
      text1Style={{
        fontSize: dimensions.textDimension.text_14,
        fontWeight: 'bold',
        color: '#222',
        flexWrap: 'wrap',
      }}
      text2Style={{
        fontSize: dimensions.textDimension.text_16,
        color: '#555',
        flexWrap: 'wrap',
      }}
      text1NumberOfLines={3}
      text2NumberOfLines={5}
    />
  ),
};


export default function App() {

  const isDarkMode = useColorScheme() === 'dark';
  const [initialRoute, setInitialRoute] = useState("");


  useEffect(() => {
  
   const init = async () => {
      try {
        const isLoggedIn = await PreferenceManager.getItem(PreferenceManager.KEYS.IS_LOGGED_IN);
        setInitialRoute(isLoggedIn == true ? ScreenNames.Home : ScreenNames.LOGIN);
      } catch (e) {
        setInitialRoute(ScreenNames.LOGIN);
      }
    };
    init();
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ApolloProvider client={client}>
          <AppNavigator initialRoute={initialRoute} />
                <Toast config={toastConfig} />
        </ApolloProvider>
    </SafeAreaProvider>
  );
}

