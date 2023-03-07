import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

//telas

import TelaLogin from './Telas/TelaLogin';
import TelaCadastrar from './Telas/TelaCadastrar';
import Cards from './Telas/Cards';
import Tarefas from './Telas/Tarefas';
import TelaPrincipal from './Telas/TelaPrincipal';

const Navegar = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navegar.Navigator initialRouteName="TelaLogin">
        <Navegar.Screen name="TelaLogin" options={{ headerShown: false }} component={TelaLogin}/>
        <Navegar.Screen name="TelaCadastrar" options={{ headerShown: false }} component={TelaCadastrar}/>
        <Navegar.Screen name="Cards" component={Cards}/>
        <Navegar.Screen name="Main" options={{ headerShown: false }} component={MainNavigator}/>
      </Navegar.Navigator>
    </NavigationContainer>
  );
}

function MainNavigator() {
  return (
    <TelaPrincipal.Navigator>
      <TelaPrincipal.Screen name="Cards" component={Cards} />
      <TelaPrincipal.Screen name="Tarefas" component={Tarefas} />
    </TelaPrincipal.Navigator>
  );
}


