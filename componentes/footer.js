import * as React from 'react';
import { View, StyleSheet, FlatList, Image } from "react-native";
import { BottomNavigation, Text, Icon, } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


const HomeRoute = () => null;
const FavoritosRoute = () => null;
const MapaRoute = () => null;
const PerfilRoute = () => null;
const CalculadoraRoute = () => <Text>Calculadora</Text>;




const Footer = () => {

  const navigation = useNavigation();


  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'gas-station', },
    { key: 'favoritos', title: 'Favoritos', icon: 'star' },
    { key: 'calculadora', title: 'Calculadora', icon: 'calculator' },
    { key: 'mapa', title: 'Mapa', icon: 'map' },
    { key: 'perfil', title: 'Perfil', icon: 'account' },
  ]);


  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    favoritos: FavoritosRoute,
    calculadora: CalculadoraRoute,
    mapa: MapaRoute,
    perfil: PerfilRoute,
  });


  const handleIconPress = (index) => {
    setIndex(index);
    switch (index) {
      case 0:
        navigation.navigate('Home');
        break;
      case 1:
        navigation.navigate('Favoritos');
        break;
      case 2:
        navigation.navigate('Cadastro');
        break;
      case 3:
        navigation.navigate('Maps');
        break;
      case 4:
        navigation.navigate('MeuPerfil');
        break;
      default:
        break;
    }
  };

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={handleIconPress}
      renderScene={renderScene}
      barStyle={{ backgroundColor: '#00052F' }}
      shifting={true}
      style={{ position: 'absolute', bottom: 0, left: 0, right: 0, }}
      renderIcon={({ route, focused, }) => (
        <Icon source={route.icon} size={28} color={focused ? '#00052F' : 'white'} />
      )}
      renderLabel={({ route }) => (
        <Text style={[styles.labelSelected]}>{route.title}</Text>
      )}
    />
  );
};

const styles = StyleSheet.create({

  labelSelected: {
    color: 'white',
    textAlign: 'center',
    fontSize: 11,
  }
})

export default Footer;