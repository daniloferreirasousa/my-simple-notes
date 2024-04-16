import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        paddingBottom: 40
    },
    addButton: {
        marginRight: 15,
    },
    addImageButton: {
        width: 24,
        height: 24,
    },
    list: {
        flex: 1,
        width: '100%'
    },
    noteItem: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    noteTitle: {
        fontSize: 17,
        color: '#aaa',
    },
    noteImage: {
        width: 50,
        height: 50,
        marginBottom: 10
    }
});

export default styles;