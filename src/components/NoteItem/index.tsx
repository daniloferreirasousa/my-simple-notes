import React from "react";
import styles from "./styles";
import { TouchableHighlight, Text } from "react-native";

export default ({data, index, onPress}) => {
    return (
        <TouchableHighlight underlayColor="#222"  style={styles.button} onPress={()=>onPress(index)}>
            <Text style={styles.title}>{data.title}</Text>
        </TouchableHighlight>
    )
}