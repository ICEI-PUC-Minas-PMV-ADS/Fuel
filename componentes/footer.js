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
 
  // Este hook useEffect é disparado sempre que o navState muda.
// Seu objetivo é sincronizar o estado do índice visual com a rota atual no estado de navegação.
React.useEffect(() => {
  // Extrai o nome da rota atual do estado de navegação usando o índice atual.
  const currentRoute = navState.routes[navState.index].name;
  // Encontra o índice da rota atual na lista de rotas definida.
  const currentIndex = routes.findIndex(route => route.key === currentRoute);
  // Verifica se o índice atual é diferente do índice do estado.
  // Se for diferente, atualiza o estado do índice para refletir a rota atual visualmente.
  if (currentIndex !== index) {
    setIndex(currentIndex);
  }
}, [navState]);  // Dependência do useEffect, só executa novamente se navState mudar.

// Função chamada quando um ícone de navegação é pressionado.
const handleIconPress = (newIndex) => {
  // Pega o nome da rota associada ao índice selecionado.
  const routeName = routes[newIndex].key;
  // Navega para a rota selecionada.
  navigation.navigate(routeName);
  // Atualiza o estado do índice para refletir a mudança visualmente.
  setIndex(newIndex);
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