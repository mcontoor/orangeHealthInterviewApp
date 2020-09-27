import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../Button/Button';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  placeHolderStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeHolderTextStyle: {
    fontFamily: 'Montserrat-Medium',
    lineHeight: 22,
    fontSize: 20,
    textAlign: 'center',
  },
  placeHolderMessageStyle: {
    fontFamily: 'Montserrat-Regular',
    lineHeight: 20,
    fontSize: 16,
    textAlign: 'center',
    color: '#616161',
  },
  addDoctorContainer: {
    backgroundColor: '#ffffff',
    elevation: 12,
    width: '100%',
    marginTop: 70,
  },
  addDoctorTitle: {
    fontFamily: 'Montserrat-Medium',
    lineHeight: 20,
    fontSize: 14,
    textAlign: 'center',
  },
  addDoctorText: {
    fontFamily: 'Montserrat-Medium',
    lineHeight: 20,
    fontSize: 14,
    textAlign: 'center',
    color: '#6a6a6a',
  },
  addDoctorButton: {
    marginTop: 13,
    marginHorizontal: 40,
    backgroundColor: '#ff970a',
    borderRadius: 10,
  },
  addDoctorButtonText: {
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    fontSize: 16,
    color: '#ffffff',
  },
});

const EmptySearchPlaceholder = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.placeHolderStyle}>
      <Text style={styles.placeHolderTextStyle}>No results found</Text>
      <Text style={styles.placeHolderMessageStyle}>
        We couldn’t find any doctor with this name or orange id
      </Text>
      <View style={styles.addDoctorContainer}>
        <Text style={styles.addDoctorTitle}>Can’t find your doctor?</Text>
        <Text style={styles.addDoctorText}>
          Add them through your contact list
        </Text>
        <Button
          style={styles.addDoctorButton}
          onPress={() => navigation.navigate('InviteDoctor')}>
          <Text style={styles.addDoctorButtonText}>Add your doctor</Text>
        </Button>
      </View>
    </View>
  );
};

export default EmptySearchPlaceholder;
