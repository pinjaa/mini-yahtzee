import React, { useLayoutEffect } from "react";
import { Text, View } from "react-native";
import styles from '../styles/style';

export default Footer = () => {

    return (
        <View style={styles.footer} >
            <Text style={styles.author}>
                Author: Pinja Åman
            </Text>
        </View>
    )
}