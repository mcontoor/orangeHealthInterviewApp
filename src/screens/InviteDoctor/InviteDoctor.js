import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  font: {
    fontFamily: 'Montserrat-Medium',
  },
});

const InviteDoctor = () => {
  const {navigate} = useNavigation();
  return (
    <View>
      <Text style={styles.font}>Invite Doctor</Text>
      <Pressable onPress={() => navigate('FindDoctor')}>
        <Text>Find a Doctor</Text>
      </Pressable>
    </View>
  );
};

export default InviteDoctor;
