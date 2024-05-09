import React from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";

const Body = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#ffffff',
    },
    contentContainer: {
        alignItems: 'center',
        padding: 10,
    },
});

export default Body;


