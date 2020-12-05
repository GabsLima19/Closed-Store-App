import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeApp from './componentes/home';
import BlusasApp from './componentes/blusa';
import CalçasApp from './componentes/calça';
import TenisApp from './componentes/tenis';
import BonesApp from './componentes/bone';
import SobreApp from './componentes/sobre';

const Stack = createStackNavigator();

function LojaClosedApp() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Closed Store">
        <Stack.Screen name="Closed Store" component={HomeApp} />
        <Stack.Screen name="Blusas" component={BlusasApp} />
        <Stack.Screen name="Calças/Bermudas" component={CalçasApp} />
        <Stack.Screen name="Tênis" component={TenisApp} />
        <Stack.Screen name="Bonés" component={BonesApp} />
        <Stack.Screen name="Sobre" component={SobreApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default LojaClosedApp;

