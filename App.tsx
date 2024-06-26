import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider, DefaultTheme, } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Importe os ícones do pacote @expo/vector-icons
import {NavigationContainer} from '@react-navigation/native';


import TelaInicial from './componentes/telainicial';
import Home from './pages/home';
import MeuPerfil from './pages/meuperfil';
import Body from './componentes/body';
import Main from './navigations/main';
import Cadastro from './pages/Cadastro';

const App = () => {
  const [showTelaInicial, setShowTelaInicial] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowTelaInicial(false);
    }, 2000); // Tempo de 2 segundos
  }, []);

  return (
    <NavigationContainer>
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          {showTelaInicial ? <TelaInicial /> : <Main />}
        </View>
      </PaperProvider>
    </SafeAreaProvider>
    </NavigationContainer>
  );
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBCD04',
  },
});

export default App;