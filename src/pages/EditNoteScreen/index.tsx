import React, { useState, useEffect, useLayoutEffect } from "react";
import { View, TextInput, TouchableHighlight, Image, Text } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";

// Creations
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import styles from "./styles";
import { addNote, editNote, delNote } from "../../redux/reducers/noteReducer";

const EditNoteScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const list = useAppSelector(state => state.note.list);

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [status, setStatus] = useState('new');

    useEffect(()=> {
        if(route.params?.key != undefined && list[route.params.key]) {
            setStatus('edit');
            setTitle(list[route.params.key].title);
            setBody(list[route.params.key].body);
        }
    }, []);

    useLayoutEffect(()=>{
        navigation.setOptions({
            title: status == 'new' ? 'Nova Anotação' : 'Editar Anotação',
            headerLeft: () => (
                <TouchableHighlight underlayColor="transparent" style={styles.closeButton} onPress={handleCloseButton}>
                    <Image style={styles.closeButtonImage} source={require('../../assets/images/close.png')} />
                </TouchableHighlight>
            ),
            headerRight: () => (
                <TouchableHighlight underlayColor="transparent" style={styles.saveButton} onPress={handleSaveButton}>
                    <Image style={styles.saveButtonImage} source={require('../../assets/images/save.png')} />
                </TouchableHighlight>
            )
        })
    }, [status, title, body]);



    /**
     * ----------
     *  HELPERS
     * ----------
     */
    function helperAddNote( title, body) {
        return dispatch(addNote({title, body}));
    }

    function helperEditNote(key, title, body) {
        return dispatch(editNote({key, title, body}));
    }

    function helperDelNote(key) {
        return dispatch(delNote({key}));
    }


    /**
     * ---------
     * HANDLERS
     * ---------
     */
    const handleSaveButton = () => {
        if(!title && !body) {
            alert("Preencha o título e o conteúdo da anotação.");
            return;
        }
         if(status === 'edit') {
            helperEditNote(route.params.key, title, body);
        }  else {
            helperAddNote(title, body);
        }
        navigation.goBack();
    }

    const handleDeleteNoteButton = () => {
        helperDelNote(route.params.key);
        navigation.goBack();
    }

    const handleCloseButton = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>

            <TextInput 
                value={title}
                onChangeText={t=>setTitle(t)}
                style={styles.titleInput}
                placeholder="Digite o título da anotação"
                placeholderTextColor="#ccc"
                autoFocus={true}
            />
            <TextInput
                value={body}
                onChangeText={t=>setBody(t)}
                style={styles.bodyInput}
                placeholder="Digite o conteúdo da anotação" 
                placeholderTextColor="#ccc"
                multiline={true}
                textAlignVertical="top"   
            />

            {status == 'edit' &&
                <TouchableHighlight underlayColor="#FF0000" style={styles.deleteButton} onPress={handleDeleteNoteButton}>
                    <Text style={styles.deleteButtonText}>Excluir anotação</Text>
                </TouchableHighlight>
            }
        </View>
    );
}

export default EditNoteScreen;