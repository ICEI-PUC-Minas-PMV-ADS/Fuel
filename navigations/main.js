import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../pages/home";
import MeuPerfil from "../pages/meuperfil";
import Maps from "../pages/Maps";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import Postos from "../pages/Postos";
import Favoritos from "../pages/Favoritos";

const Stack = createNativeStackNavigator();

const Main = () => {

    return (
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
      name="Home" 
      component={Home}
      options={{
        header:() => null
      }} />
      <Stack.Screen 
      name="MeuPerfil" 
      component={MeuPerfil}
      options={{
        header:() => null
      }}
       />
        <Stack.Screen 
      name="Maps" 
      component={Maps}
      options={{
        header:() => null
      }}
       />
       <Stack.Screen 
      name="Cadastro" 
      component={Cadastro}
      options={{
        header:() => null
      }}
       />
       <Stack.Screen 
      name="Login" 
      component={Login}
      options={{
        header:() => null
      }}
       />
        <Stack.Screen 
        name="Postos" 
        component={Postos}
        options={{
          header:() => null
        }}
      />
       
       <Stack.Screen 
        name="Favoritos" 
        component={Favoritos}
        options={{
          header:() => null
        }}
      />
    </Stack.Navigator>


      );
    };


export default Main;