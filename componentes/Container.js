import React from 'react';
import { StyleSheet, View } from 'react-native';

const Container = ({ children }) => {
    return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
});

export default Container;
