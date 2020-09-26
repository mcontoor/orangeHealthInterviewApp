import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import FindDoctor from './screens/FindDoctor/FindDoctor';
import InviteDoctor from './screens/InviteDoctor/InviteDoctor';

const Stack = createStackNavigator();
const Navigator = () => {
  return (
    <NavigationContainer fallback={<InviteDoctor />}>
      <Stack.Navigator
        screenOptions={{animationEnabled: true}}
        initialRouteName="InviteDoctor"
        headerMode="float">
        <Stack.Screen component={InviteDoctor} name="InviteDoctor" />
        <Stack.Screen component={FindDoctor} name="FindDoctor" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
