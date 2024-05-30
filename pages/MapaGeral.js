import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Modal, Linking, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { useNavigation } from '@react-navigation/native';


// Componentes personalizados
import Header from '../componentes/Header';
import Footer from '../componentes/footer';
import Body from '../componentes/body';

import { imageMap } from './home';

// Serviço para obter postos
import { getPostos } from '../services/postos.service';

// Chave da API do Google Maps
const GOOGLE_MAPS_APIKEY = 'YOUR_GOOGLE_MAPS_API_KEY';


const openGoogleMaps = () => {
  const latitude = 37.7749; // Latitude do local que você deseja mostrar
  const longitude = -122.4194; // Longitude do local que você deseja mostrar
  const label = 'Local'; // Rótulo opcional do local

  const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}&query_place_id=${label}`;

  Linking.openURL(url);
};

const Mapageral = () => {
  const navigation = useNavigation();
  const [postos, setPostos] = useState([]);
  const [destination, setDestination] = useState(null);
  const [selectedPosto, setSelectedPosto] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [initialRegion, setInitialRegion] = useState({
    latitude: -19.953070834385482, // Ajuste as coordenadas para a região inicial do mapa
    longitude: -43.99020871043262,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
    
  });

  useEffect(() => {
    getPostos()
      .then(dados => setPostos(dados))
      .catch(error => console.error('Erro ao buscar os postos:', error));
  }, []);

  const handlePressMarker = (posto) => {
    setSelectedPosto(posto);
    setModalVisible(true);
  };


  const handleNavigateToPostoPage = () => {
    setModalVisible(false);
    navigation.navigate('Postos', { posto: selectedPosto });
  };

  const handleNavigateToPosto = () => {
    setModalVisible(false);
    openGoogleMaps(selectedPosto.latitude, selectedPosto.longitude, selectedPosto.nome);
  };


  return (
    <>
      <Header />
      <Body>
        <MapView
          style={styles.map}
          initialRegion={initialRegion}
        >
          {postos.map((posto) => (
            <Marker
              key={posto.id}
              coordinate={{
                latitude: parseFloat(posto.latitude),
                longitude: parseFloat(posto.longitude),
              }}
              title={posto.nome}
              description={posto.endereco}
              onPress={() => handlePressMarker(posto)}
            >
              <Image
                source={imageMap[posto.bandeiraPosto]}
                style={styles.markerImage}
              />
            </Marker>
          ))}

          {destination && (
            <MapViewDirections
              origin={initialRegion}
              destination={destination}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={3}
              strokeColor="hotpink"
            />
          )}
        </MapView>
      </Body>
      <Footer />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Escolha uma opção:</Text>
          <TouchableOpacity
            style={styles.openButton}
            onPress={handleNavigateToPostoPage}
          >
            <Text style={styles.textStyle}>Ver detalhes do posto</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.openButton}
            onPress={handleNavigateToPosto}
          >
            <Text style={styles.textStyle}>Dirigir Até o Posto</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  markerImage: {
    width: 40,
    height: 40,
  },

  modalView: {
    margin: 90,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#00052F",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default Mapageral;
