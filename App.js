import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

//telas

import TelaLogin from './Telas/TelaLogin';
import TelaCadastrar from './Telas/TelaCadastrar';

const Navegar = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navegar.Navigator initialRouteName="TelaLogin">
        <Navegar.Screen name="TelaLogin" options={{ headerShown: false }} component={TelaLogin}/>
        <Navegar.Screen name="TelaCadastrar" options={{ headerShown: false }} component={TelaCadastrar}/>
      </Navegar.Navigator>
    </NavigationContainer>
  );
}


