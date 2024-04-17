import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Image, View, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <Appbar.Header style={styles.appbar}>
      <View style={styles.container}>
        <Image
          source={require('../Img/Logo/LogoP.png')}
          style={styles.image}
        />
      </View>
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
    width: '38%',
    height: '120%',
  },
});

export default Header;
