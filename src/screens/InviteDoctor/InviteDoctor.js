import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CtaButton from '../../components/Button/CtaButton';

const styles = StyleSheet.create({
  font: {
    fontFamily: 'Montserrat-Medium',
  },
});

const InviteDoctor = () => {
  return (
    <View>
      <CtaButton />
      <Text style={styles.font}>Invite Doctor</Text>
    </View>
  );
};

export default InviteDoctor;
