import * as React from 'react';
import { StyleSheet, } from "react-native";
import { BottomNavigation, Text, Icon, } from 'react-native-paper';
import { useNavigation, useNavigationState } from '@react-navigation/native';

const HomeRoute = () => null;
const FavoritosRoute = () => null;
const MapaRoute = () => null;
const PerfilRoute = () => null;
const CalculadoraRoute = () => <Text>Calculadora</Text>;
 
const Footer = () => {
  const navigation = useNavigation();
  const navState = useNavigationState(state => state);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Home', title: 'Home', icon: 'gas-station', },
    { key: 'Favoritos', title: 'Favoritos', icon: 'star' },
    { key: 'Cadastro', title: 'Cadastro', icon: 'calculator' },
    { key: 'Maps', title: 'Mapa', icon: 'map' },
    { key: 'Login', title: 'Login', icon: 'account' },
  ]);
 
  const renderScene = BottomNavigation.SceneMap({
    Home: HomeRoute,
    Favoritos: FavoritosRoute,
    Cadastro: CalculadoraRoute,
    Maps: MapaRoute,
    Login: PerfilRoute,
  });
 
  React.useEffect(() => {
    if (navState && navState.routes) {
      const currentRoute = navState.routes[navState.index]?.name;
      const currentIndex = routes.findIndex(route => route.key === currentRoute);

      if (currentIndex !== -1 && currentIndex !== index) {
        setIndex(currentIndex);
      }
    }
  }, [navState]);

const handleIconPress = (newIndex) => {
    if (routes[newIndex]) {
      const routeName = routes[newIndex].key;
      navigation.navigate(routeName);
      setIndex(newIndex);
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