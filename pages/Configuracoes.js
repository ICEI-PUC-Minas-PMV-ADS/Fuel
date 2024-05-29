import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
//import { useAuth } from '../contexts/AuthContext';

const ConfigScreen = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigation = useNavigation();
  //const { user } = useAuth();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleHelpPress = () => {
    // Implement logic to show help
  };

  const handleExitPress = () => {
    // Implement logic to exit the app
  };

  const handleCadastrarPosto = () => {
    navigation.navigate('Cadastro');
  };
  

    

  return (
    <View style={[styles.container, darkMode ? styles.darkContainer : styles.lightContainer]}>
      <Text style={styles.title}>Configurações</Text>
      <View style={styles.setting}>
        <View style={styles.settingRow}>
          <Icon name="brightness-6" size={24} color={darkMode ? '#fff' : '#000'} />
          <Text style={[styles.text, darkMode ? styles.darkText : styles.lightText]}>Modo Escuro</Text>
        </View>
        <Switch value={darkMode} onValueChange={toggleDarkMode} />
      </View>
      <TouchableOpacity onPress={handleHelpPress} style={styles.setting}>
        <View style={styles.settingRow}>
          <Icon name="help-outline" size={24} color={darkMode ? '#fff' : '#000'} />
          <Text style={[styles.text, darkMode ? styles.darkText : styles.lightText]}>Ajuda</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleExitPress} style={styles.setting}>
        <View style={styles.settingRow}>
          <Icon name="exit-to-app" size={24} color={darkMode ? '#fff' : '#000'} />
          <Text style={[styles.text, darkMode ? styles.darkText : styles.lightText]}>Sair</Text>
        </View>
      </TouchableOpacity>
     {/* {user && user.role === 'admin' && ( */}
        <TouchableOpacity onPress={handleCadastrarPosto} style={styles.setting}>
          <View style={styles.settingRow}>
            <Icon name="add-location" size={24} color={darkMode ? '#fff' : '#000'} />
            <Text style={[styles.text, darkMode ? styles.darkText : styles.lightText]}>Cadastrar Novo Posto</Text>
          </View>
        </TouchableOpacity>
      {/*)}*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  lightContainer: {
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginLeft: 10,
  },
  darkText: {
    color: '#fff',
  },
  lightText: {
    color: '#000',
  },
});

export default ConfigScreen;
