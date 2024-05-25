import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const ConfigScreen = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleHelpPress = () => {
    // Implement logic to show help
  };

  const handleExitPress = () => {
    // Implement logic to exit the app
  };

  const handleAddStationPress = () => {
    // Implement logic to add a new establishment
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
      <TouchableOpacity onPress={handleAddStationPress} style={styles.setting}>
        <View style={styles.settingRow}>
          <Icon name="add-location" size={24} color={darkMode ? '#fff' : '#000'} />
          <Text style={[styles.text, darkMode ? styles.darkText : styles.lightText]}>Cadastrar Estabelecimento</Text>
        </View>
      </TouchableOpacity>
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
