import React, { useState, useEffect, createRef } from "react";
import { StyleSheet, View, Dimensions, Text, Image } from "react-native";
import { Appbar, Button } from "react-native-paper";
import MapView, { Marker } from "react-native-maps";
import Header from "../componentes/Header";
import Footer from "../componentes/footer";

export default function Maps({ route }) {
  const mapRef = createRef();
  const { latitude, longitude, label } = route.params;

  useEffect(() => {
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
              source={require("../Img/Logo/logoipiranga.png")}
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
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
});