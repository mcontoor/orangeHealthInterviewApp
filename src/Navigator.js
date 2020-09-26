import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import FindDoctor from './screens/FindDoctor/FindDoctor';
import InviteDoctor from './screens/InviteDoctor/InviteDoctor';
import Header from './components/Header/Header';

const Stack = createStackNavigator();
const Navigator = () => {
  return (
    <NavigationContainer fallback={<InviteDoctor />}>
      <Stack.Navigator
        screenOptions={{
          animationEnabled: true,
          header: (props) => <Header {...props} />,
          cardStyle: {backgroundColor: '#ffffff'},
        }}
        initialRouteName="InviteDoctor"
        headerMode="float">
        <Stack.Screen component={InviteDoctor} name="InviteDoctor" />
        <Stack.Screen component={FindDoctor} name="FindDoctor" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
