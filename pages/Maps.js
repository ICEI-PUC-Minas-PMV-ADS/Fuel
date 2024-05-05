import React, { useState, createRef } from 'react';
import { StyleSheet, View, Dimensions, Text, Image } from 'react-native';
import { Appbar } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import MapView, { Marker } from 'react-native-maps';
import Header from '../componentes/Header';
import Footer from '../componentes/footer';

export default function Mapa() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState({
    latitude: -19.92246,
    longitude: -43.97385,
    label: 'Posto Ipiranga',
  });
  const [items, setItems] = useState([
    {
      label: 'Posto Shell',
      value: {
        latitude: -19.55297,
        longitude: -43.55541,
        label: 'Posto Shell',
      },
    },
    {
      label: 'Posto Quick-Petrobrás',
      value: {
        latitude: -19.91939,
        longitude: -43.96950,
        label: 'Posto Quick-Petrobrás',
      },
    },
  ]);

  const mapRef = createRef();

  return (
    <>
      <Header />
      <Appbar.Header>
        <Appbar.Content title="Postos" />
      </Appbar.Header>
      <DropDownPicker
        placeholder="Selecione uma unidade..."
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onChangeValue={(value) => {
          mapRef.current.animateToRegion({
            latitude: value.latitude,
            longitude: value.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          })
        }}
      />
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: value.latitude,
          longitude: value.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}>
        <Marker
          coordinate={{
            latitude: value.latitude,
            longitude: value.longitude,
          }}
        >
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.title}>{value.label}</Text>
            <Image
              source={require('../Img/Logo/logoshell.png')}
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
    color: '#FFF',
    backgroundColor: 'gray',
    padding: 5,
    borderRadius: 5,
  },
  imageStyle: {
    width: 50,
    height: 50,
    resizeMode: 'contain',  
  },
});
