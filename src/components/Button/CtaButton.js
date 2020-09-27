import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Image, StyleSheet, Text} from 'react-native';
import Button from './Button';

const styles = StyleSheet.create({
  ctaButton: {
    backgroundColor: '#ffe8ca',
    height: 70,
    justifyContent: 'center',
    marginBottom: 30,
  },
  ctaButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 21,
    paddingRight: 19,
  },
  ctaButtonText: {
    fontFamily: 'Montserrat-Medium',
    color: '#ff970a',
    fontSize: 16,
  },
});

const CtaButton = () => {
  const {navigate} = useNavigation();

  const navigateToFindDoctor = useCallback(() => navigate('FindDoctor'), [
    navigate,
  ]);

  return (
    <Button style={styles.ctaButton} onPress={navigateToFindDoctor}>
      <View style={styles.ctaButtonView}>
        <Image source={require('../../icons/add_patient_rx.png')} />
        <Text style={styles.ctaButtonText}>Find your doctor on Orange</Text>
        <Image source={require('../../icons/step_action.png')} />
      </View>
    </Button>
  );
};

export default CtaButton;
