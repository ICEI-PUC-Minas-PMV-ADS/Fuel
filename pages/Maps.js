import React, { useState, useEffect, createRef } from "react";
import { StyleSheet, View, Dimensions, Text, Image } from "react-native";
import { Appbar, Button } from "react-native-paper";
import DropDownPicker from "react-native-dropdown-picker";
import MapView, { Marker } from "react-native-maps";
import Header from "../componentes/Header";
import Footer from "../componentes/footer";

// Mapeamento de bandeiras a imagens
const imageMap = {
  'shell': require('../Img/Logo/logoshell.png'),
  'ale': require('../Img/Logo/logoale.png'),
  'br': require('../Img/Logo/logoBR.png'),
  'ipiranga': require('../Img/Logo/logoipiranga.png'),
};

// Função para normalizar o nome da bandeira e obter a imagem correspondente
const getBandeiraImage = (bandeira) => {
  if (!bandeira) return require('../Img/Logo/default.png');
  const normalizedBandeira = bandeira.toLowerCase().replace(/\s+/g, '');
  return imageMap[normalizedBandeira] || require('../Img/Logo/default.png'); // Imagem padrão se não encontrar
};


export default function Maps({ route }) {
  const mapRef = createRef();
  const { latitude, longitude, label, bandeiraPosto } = route.params;

  useEffect(() => { // Ajuste das coordenadas no mapa
    if (mapRef.current) {
      mapRef.current.animateToRegion({
        latitude,
        longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });
    }
  }, [latitude, longitude]);

  return (
    <>
      <Header />
      <Appbar.Header>
        <Appbar.Content title="Postos" />
      </Appbar.Header>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <Marker
          coordinate={{
            latitude,
            longitude,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text style={styles.title}>{label}</Text>

            <Image
              source={getBandeiraImage(bandeiraPosto)}
              style={styles.imageStyle}
            />
          </View>
        </Marker>
      </MapView>
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  title: {
    fontSize: 12,
    color: "#FFF",
    backgroundColor: "gray",
    padding: 5,
    borderRadius: 5,
  },
  imageStyle: {
    width: 37,
    height: 35,
    //resizeMode: "center",
  },
});
