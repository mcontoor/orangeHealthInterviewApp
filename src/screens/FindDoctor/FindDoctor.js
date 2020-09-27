import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ContactList from '../../components/ContactList/ContactList';

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  inviteTextStyle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 18,
  },
  placeHolderStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  placeHolderTextStyle: {
    fontFamily: 'Montserrat-Bold',
    lineHeight: 22,
    fontSize: 16,
    textAlign: 'center',
  },
  placeHolderMessageStyle: {
    fontFamily: 'Montserrat-Medium',
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

const FindDoctor = () => {
  return (
    <View style={styles.body}>
      <ContactList
        title={
          <Text style={styles.inviteTextStyle}>
            Search by Orange ID or name
          </Text>
        }
        contacts={[]}
        action={{
          title: 'Connect with doctor',
          onPress: () => console.log('connect'),
        }}
        searchPrefix={'@dr.'}
      />
      {/* {![].length && (
        <View style={styles.placeHolderStyle}>
          <Image
            source={require('../../icons/search_doctor_empty_state.png')}
          />
          <View style={styles.placeHolderTextContainer}>
            <Text style={styles.placeHolderTextStyle}>Find your doctors</Text>
            <Text style={styles.placeHolderMessageStyle}>
              Use the search bar to find your doctors using their orange ID
            </Text>
          </View>
        </View>
      )} */}
    </View>
  );
};

export default FindDoctor;
