import * as React from 'react';
import { StyleSheet, } from "react-native";
import { BottomNavigation, Text, Icon, } from 'react-native-paper';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeRoute = () => null;
const FavoritosRoute = () => null;
const MapaRoute = () => null;
const MapaGeralRoute = () => null;
const PerfilRoute = () => null;
const CalculadoraRoute = () => null;
 
const Footer = () => {
  const navigation = useNavigation();
  const navState = useNavigationState(state => state);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Home', title: 'Home', icon: 'gas-station', },
    { key: 'Favoritos', title: 'Favoritos', icon: 'star' },
    { key: 'Calculadora', title: 'Calculadora', icon: 'calculator' },
    { key: 'MapaGeral', title: 'Mapa', icon: 'map' },
    { key: 'Login', title: 'Login', icon: 'account' },
  ]);
 
  const renderScene = BottomNavigation.SceneMap({
    Home: HomeRoute,
    Favoritos: FavoritosRoute,
    Calculadora: CalculadoraRoute,
    Maps: MapaRoute,
    MapaGeral: MapaGeralRoute,
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
  
  const checkIfLoggedIn = async () => {
    const user = await AsyncStorage.getItem('loggedInUser');
    return !!user; // Retorna true se houver um usuário logado
  };

  const handleIconPress = async (newIndex) => {
    if (routes[newIndex]) {
      const routeName = routes[newIndex].key;
      if (routeName === 'Login') {
        const isLoggedIn = await checkIfLoggedIn();
        if (isLoggedIn) {
          navigation.navigate('MeuPerfil');
        } else {
          navigation.navigate(routeName);
        }
      } else {
        navigation.navigate(routeName);
      }
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
    fontWeight: 'bold',
    marginTop: '3%',
  }
})
 
export default Footer;