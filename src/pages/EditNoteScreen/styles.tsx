import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
        padding: 5,
        paddingBottom: 40
    },
    titleInput: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 15,
        color: '#FFF',
        backgroundColor: '#444',
        borderRadius: 5,
        marginBottom: 5
    },
    bodyInput: {
        flex: 1,
        padding: 15,
        fontSize: 15,
        color: '#FFF',
        backgroundColor: '#444',
        borderRadius: 5,
    },
    saveButton: {
        marginRight: 15,

    },
    saveButtonImage: {  
        width: 20,
        height: 20
    },
    closeButton: {
        marginLeft: 15,
    },
    closeButtonImage: {
        width: 16,
        height: 16
    },
    deleteButton: {
        height: 40,
        backgroundColor:  '#FF3333',
        justifyContent: 'center',
        alignItems: 'center'
    },
    deleteButtonText: {
        fontSize: 14,
        color: '#FFF',
    }
});

export default styles;