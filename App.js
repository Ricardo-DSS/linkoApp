import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//telas

import TelaLogin from './Telas/TelaLogin';
import TelaCadastrar from './Telas/TelaCadastrar';
import Decks from './Telas/Decks';
import Cards from './Telas/Cards';
import Tarefas from './Telas/Tarefas';
import Revisao from './Telas/Revisao';

const Navegar = createStackNavigator();
const Tab = createBottomTabNavigator();

function BottomNav () {
  return(
    <Tab.Navigator>
      <Tab.Screen name="Decks" component={Decks}/>
      <Tab.Screen name="Tarefas" component={Tarefas}/>
    </Tab.Navigator>
  );
}

function MainNavigator() {
  return (
    <Navegar.Navigator>
      <Navegar.Screen name="TelaLogin" component={TelaLogin} />
      <Navegar.Screen name="TelaCadastrar" component={TelaCadastrar} />
      <Navegar.Screen name="Cards" component={Cards} />
      <Navegar.Screen name="Revisao" component={Revisao}/>
      <Navegar.Screen name="BottomNav" component={BottomNav} options={{ headerShown: false }} />
    </Navegar.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}


