import React from "react";
import { StyleSheet, View } from "react-native";


const Body = ({ children }) => {
    return <View style={styles.container}>{children}</View>;

};

const styles = StyleSheet.create({


    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ff0fff',
        padding: 10,

    },

})

export default Body;

