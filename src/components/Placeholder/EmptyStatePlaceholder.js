import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const styles = StyleSheet.create({
  placeHolderStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeHolderTextStyle: {
    fontFamily: 'Montserrat-Bold',
    lineHeight: 22,
    fontSize: 16,
    textAlign: 'center',
  },
  placeHolderMessageStyle: {
    fontFamily: 'Montserrat-Regular',
    lineHeight: 22,
    fontSize: 16,
    textAlign: 'center',
    color: '#616161',
  },
  placeHolderTextContainer: {
    marginTop: 39,
    marginHorizontal: 30,
  },
});

const EmptyStatePlaceholder = () => {
  return (
    <View style={styles.placeHolderStyle}>
      <Image source={require('../../icons/search_doctor_empty_state.png')} />
      <View style={styles.placeHolderTextContainer}>
        <Text style={styles.placeHolderTextStyle}>Find your doctors</Text>
        <Text style={styles.placeHolderMessageStyle}>
          Use the search bar to find your doctors using their orange ID
        </Text>
      </View>
    </View>
  );
};

export default EmptyStatePlaceholder;
