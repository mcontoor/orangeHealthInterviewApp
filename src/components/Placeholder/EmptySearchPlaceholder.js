import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../Button/Button';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  placeHolderStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
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
    width: 240,
  },
  addDoctorContainer: {
    backgroundColor: '#ffffff',
    elevation: 12,
    width: '103%',
    marginTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    paddingTop: 19,
    paddingBottom: 21,
    paddingHorizontal: 40,
  },
  addDoctorTitle: {
    fontFamily: 'Montserrat-Medium',
    lineHeight: 20,
    fontSize: 14,
    textAlign: 'center',
  },
  addDoctorText: {
    fontFamily: 'Montserrat-Regular',
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
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addDoctorButtonText: {
    fontFamily: 'Montserrat-Bold',
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
