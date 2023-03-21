import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//telas

import TelaLogin from './Telas/TelaLogin';
import TelaCadastrar from './Telas/TelaCadastrar';
import Decks from './Telas/Decks';
import Cards from './Telas/Cards';
import Tarefas from './Telas/Tarefas';
import Revisao from './Telas/Revisao';

//banco

import { criarTabelas } from './Telas/Banco/Connect';

const Navegar = createStackNavigator();
const Tab = createBottomTabNavigator();

function BottomNav () {
  return(
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Decks') {
            iconName = 'list';
          } else if (route.name === 'Versão') {
            iconName = 'checkmark-circle';
          }

          // Retorna o ícone com o nome e cor definidos acima
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#0C63E7',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Decks" component={Decks} options={{ headerStyle: {backgroundColor: '#0C63E7'}, headerTintColor: '#fff' }}/>
      <Tab.Screen name="Versão" component={Tarefas} options={{ headerStyle: {backgroundColor: '#0C63E7'}, headerTintColor: '#fff' }}/>
    </Tab.Navigator>
  );
}

function MainNavigator() {
  return (
    <Navegar.Navigator>
      <Navegar.Screen name="TelaLogin" component={TelaLogin} options={{ headerShown: false }}/>
      <Navegar.Screen name="TelaCadastrar" component={TelaCadastrar} options={{ headerShown: false }} />
      <Navegar.Screen name="Cards" component={Cards} options={{ headerStyle: {backgroundColor: '#0C63E7'}, headerTintColor: '#fff' }}/>
      <Navegar.Screen name="Revisão" component={Revisao} options={{ headerStyle: {backgroundColor: '#0C63E7'}, headerTintColor: '#fff' }}/>
      <Navegar.Screen name="BottomNav" component={BottomNav} options={{ headerShown: false }} />
    </Navegar.Navigator>
  );
}

export default function App() {
  criarTabelas();
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}


