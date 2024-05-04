import * as React from 'react';
import { Appbar, Menu, useTheme } from 'react-native-paper';
import { Image, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = React.useState(false);

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);


  const handleMenuPress = () => {
    // Adicione aqui a lógica para a função do menu
  };

  const handleSettingsPress = () => {
    // Adicione aqui a lógica para a função de configurações
  };

  return (
    <Appbar.Header style={styles.appbar}>

<Menu
        visible={menuVisible}
        onDismiss={closeMenu}
        anchor={<Appbar.Action icon="menu" onPress={openMenu} size={30} color={'white'} />}
        contentStyle={styles.menuContent}
      >
        {/* Opções do menu */}
        <Menu.Item onPress={() => { /* Adicione aqui a lógica para a primeira opção do menu */ }} title="O que iremos colocar 1" />
        <Menu.Item onPress={() => { /* Adicione aqui a lógica para a segunda opção do menu */ }} title="ja que td ta no footer ou config 2" />
        {/* Adicione mais opções conforme necessário */}
      </Menu>

      <View style={styles.container}>
        <Image
          source={require('../Img/Logo/LogoP.png')}
          style={styles.image}
        />
      </View>


      <Appbar.Action
        icon="cog"
        size={28} // Definindo o tamanho dos ícones
        onPress={handleSettingsPress}
        shifting={true}
        color={'white'}

      // color={navigation.isFocused(true) ? '#ffffff' : '#888888'} // Definindo a cor dos ícones com base no estado ativo/inativo
      />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  appbar: {
    backgroundColor: '#00052F',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '50%',
    height: '120%',
  },

  menuContent: {
    opacity: .85, // Definindo a opacidade da mini tela do menu
  },
});

export default Header;