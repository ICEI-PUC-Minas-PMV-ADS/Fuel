import * as React from 'react';
import { BottomNavigation, Text, Icon } from 'react-native-paper';

const HomeRoute = () => <Text></Text>;
const FavoritosRoute = () => <Text>Favoritos</Text>;
const MapaRoute = () => <Text>Mapa</Text>;
const PerfilRoute = () => <Text>Perfil</Text>;
const CalculadoraRoute = () => <Text>Calculadora</Text>;

const Footer = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'gas-station' },
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

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: '#00052F' }}
      shifting={true}
      renderIcon={({ route, focused, color }) => (
        <Icon source={route.icon} size={30} color={color} />
      )}
    />
  );
};

export default Footer;
