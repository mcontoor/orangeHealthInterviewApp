import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import ContactList from '../../components/ContactList/ContactList';
import {transformDrContactDetails} from '../../utils';

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  inviteTextStyle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 18,
  },
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
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setDoctors(data.map(transformDrContactDetails)));
  }, []);

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
        allowMultipleSelect={false}
      />
      {![].length && (
        <View style={styles.placeHolderStyle}>
          <Image
            source={require('../../icons/search_doctor_empty_state.png')}
          />
          <KeyboardAvoidingView
            behavior="position"
            style={styles.placeHolderTextContainer}>
            <Text style={styles.placeHolderTextStyle}>Find your doctors</Text>
            <Text style={styles.placeHolderMessageStyle}>
              Use the search bar to find your doctors using their orange ID
            </Text>
          </KeyboardAvoidingView>
        </View>
      )}
    </View>
  );
};

export default FindDoctor;
