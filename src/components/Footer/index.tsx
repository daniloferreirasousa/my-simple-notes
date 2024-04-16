import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

export default () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerTitle}>&copy; 2024 - Danilo Ferreira</Text>
        </View>
    );
}