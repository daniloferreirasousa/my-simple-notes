import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar, View, TouchableHighlight, Image, FlatList, Text } from "react-native";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import styles from "./styles";
import NoteItem from "../../components/NoteItem";


const ListScreen = () => {
    const navigation = useNavigation();
    const list = useAppSelector(state => state.note.list);
    
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Anotações',
            headerRight: () => (
                <TouchableHighlight underlayColor="transparent" onPress={()=>navigation.navigate('EditNote')} style={styles.addButton} >
                    <Image source={require('../../assets/images/more.png')} style={styles.addImageButton} />
                </TouchableHighlight>
            )
        });
    }, []);

    const handleNotePress = (index) => {
        navigation.navigate('EditNote', {
            key: index
        });
    }

    return (
        <View style={styles.container}>
            <StatusBar 
                animated={true}
                backgroundColor="#222"
                hidden={false}
            />
            {list.length > 0 &&
                <FlatList 
                    data={list}
                    renderItem={({item, index})=>(
                        <NoteItem 
                            data={item}
                            index={index}
                            onPress={handleNotePress}
                        />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    style={styles.list}
                />
            }

            {list.length == 0 &&
                <View style={styles.noteItem}>
                    <Image style={styles.noteImage} source={require('../../assets/images/note.png')} />
                    <Text style={styles.noteTitle}>Nenhuma anotação</Text>
                </View>
            }
            
        </View>
    );
}

export default ListScreen;