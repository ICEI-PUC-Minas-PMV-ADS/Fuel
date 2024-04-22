import React, { useState, createRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import { Appbar, Avatar, Image, } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';

export default function App() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState({
    latitude: -19.92246,
  longitude: -43.97385,
  label: 'Posto Ipiranga',
});
const [items, setItems] = useState([
  {
  label: 'Posto Ipiranga',
  value: {
    latitude: -19.92246,
    longitude: -43.97385,
    label: 'Posto Ipiranga',
    icon: () => <Image source={require('../Img/Logo/logoshell.png')} style={styles.iconStyle} />
    },
  },
  {
    label: 'Posto Quick-Petrobrás',
    value: {
      latitude: -19.91938,
      longitude: -43.97009,
      label: 'Posto Quick-Petrobrás',
      icon: () => <Image source={require('../Img/Logo/logoshell.png')} style={styles.iconStyle} />
    },
  },
  ]);

  const mapRef = createRef();

  return (
    <View style={styles.container}>
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
          }}>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.title}>{value.label}</Text>
            Image={require('../Img/Logo/logoshell.png')}
          
          </View>
        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  map: {
    flex: 1,
  },
  title: {
    fontSize: 12,
    color: '#ffff',
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 10,
  },
});
   
   