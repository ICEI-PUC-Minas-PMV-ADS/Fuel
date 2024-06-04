import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../pages/home";
import MeuPerfil from "../pages/meuperfil";
import Maps from "../pages/Maps";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import Postos from "../pages/Postos";
import Favoritos from "../pages/Favoritos";
import ConfigScreen from "../pages/Configuracoes";
import Header from "../componentes/Header";
import MapaGeral from "../pages/MapaGeral";
import Calculadora from "../pages/Calculadora";

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
      name="Calculadora" 
      component={Calculadora}
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
      <Stack.Screen 
        name="Config" 
        component={ConfigScreen}
        options={{ header: (props) => <Header {...props} /> }}
      />

<Stack.Screen 
      name="MapaGeral" 
      component={MapaGeral}
      options={{
        header:() => null
      }}
       />

    </Stack.Navigator>

    


      );
    };


export default Main;