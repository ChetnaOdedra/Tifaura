import AsyncStorage from '@react-native-async-storage/async-storage';

class PreferenceManager {

  static KEYS = {
      USER: "user",
      TOKEN: "token",
      IS_LOGGED_IN: "isLoggedIn",
      IS_NOT_NOW_APP_UPDATE:"isNotNowAppUpdate",
      IS_PROVIDER_ONLINE:'isProviderOnline'

  };
  
  // Save string or object
  static async setItem(key, value) {
    try {
      const jsonValue = typeof value === "string" ? value : JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.log("Error saving data:", e);
    }
  }

  // Get string or object
  static async getItem(key) {
    try {
      const value = await AsyncStorage.getItem(key);
      try {
        return JSON.parse(value); // if it’s JSON, return object
      } catch {
        return value; // else return as string
      }
    } catch (e) {
      console.log("Error retrieving data:", e);
      return null;
    }
  }

  // Remove item
  static async removeItem(key) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.log("Error removing data:", e);
    }
  }

  // Clear all preferences
  static async clearAll() {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      console.log("Error clearing data:", e);
    }
  }

}

export default PreferenceManager;
