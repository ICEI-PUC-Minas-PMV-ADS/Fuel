import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Home from "../home";
import MeuPerfil from "../meuperfil";


const Stack = createStackNavigator();

const Main = () => {

    return (
        <Stack.Navigator>
          <Stack.Screen name="TelaInicial" component={TelaInicial} />
          <Stack.Screen name="MeuPerfil" component={MeuPerfil} />
        </Stack.Navigator>
      );
    };


export default Main;