import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tarefas from './Tarefas';
import Cards from './Cards';

const Tab = createBottomTabNavigator();

export default function TelaPrincipal() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Cards" component={Cards} />
        <Tab.Screen name="Tarefas" component={Tarefas} />
    </Tab.Navigator>
  );
}