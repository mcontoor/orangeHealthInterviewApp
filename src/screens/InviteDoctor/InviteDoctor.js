import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const InviteDoctor = () => {
  const {navigate} = useNavigation();
  return (
    <View>
      <Text>Invite Doctor</Text>
      <Pressable onPress={() => navigate('FindDoctor')}>
        <Text>Find a Doctor</Text>
      </Pressable>
    </View>
  );
};

export default InviteDoctor;
