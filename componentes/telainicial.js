import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Colors } from 'react-native-paper';

const TelaInicial = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../Img/Logo/LogoFuel.png')}
        resizeMode="contain"
      />
      <Text style={styles.text}>Melhores preços e serviços para seu veículo</Text>
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBCD04',
  },
  logo: {
    width: width * 0.94, // 90% da largura da tela
    height: height * 0.5, // 20% da altura da tela
    position: 'absolute',
  },
  text: {
    fontSize: width * 0.042, // 5% da largura da tela como tamanho de fonte
    fontWeight: 'bold',
    color: Colors,
    textAlign: 'center', // Alinhamento centralizado
    marginTop: height * 0.15,
  },
});

export default TelaInicial;
