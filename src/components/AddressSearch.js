import React from 'react';
import { View, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Constants from '../utills/Constants';

const AddressSearch = ({ onSelect }) => {


  return (
    <View style={{ flex: 1, padding: 10 }}>
      <GooglePlacesAutocomplete
        placeholder="Enter your address"
        fetchDetails={true}
        predefinedPlaces={[]}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          if (onSelect) {
            onSelect(details); // pass selected address to parent
          }
        }}
        query={{
          key: Constants.GoogleAPIKey,  // your API key
          language: 'en',
          components: 'country:uk|country:in',    // restrict to UK
        }}
        styles={{
          textInputContainer: { width: '100%' },
          textInput: { height: 40, color: '#5d5d5d', fontSize: 16 },
          predefinedPlacesDescription: { color: '#1faadb' },
        }}
        debounce={200} // debounce input to reduce API calls
      />
    </View>
  );
};

export default AddressSearch;
