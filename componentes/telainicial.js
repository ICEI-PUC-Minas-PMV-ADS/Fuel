import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Colors } from 'react-native-paper';

const TelaInicial = () => {
    
  return (
<>
    <Image style={styles.logo}
      source={require('../Img/Logo/LogoFuel.png')}
    />
    <Text style={styles.text}>Melhores preços e serviços para seu veículo</Text>
</>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBCD04',
  },

  logo: {
    width: 390, // Largura
    height: 140, // Altura
  },
  
  text: {
    fontSize: 19,
    fontWeight: 'bold',
    color: Colors
  },
  
});

export default TelaInicial;