import React, { useState } from 'react';
import { View, Button, StyleSheet, Modal, TextInput } from 'react-native';

export default function Decks ({navigation}) {

    //Exemplo a constante decks deve receber um Array do banco de dados
    const decks = ['Matemática', 'Biologia', 'História', 'Física', 'Inglês'];
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [text, setText] = useState('');

    const handleModalOpen = () => {
        setIsModalVisible(true);
    };
    
    const handleModalClose = () => {
        setIsModalVisible(false);
    };

    const handleTextChange = (text) => {
        setText(text);
    };
    
      //A função abaixo deverá ser usada para registrar no banco de dados
      /*const handleSave = () => {
        console.log(`Saving text: ${text}`);
        handleModalClose();
      };*/

    return (
        <View style={styles.container}>
            <View style={styles.buttonDecks}>
            {decks.map((deck, index) => (
            <View style={styles.buttonDecksMargin}>    
            <Button
                key={index}
                title={deck}
                onPress={() => {
                    navigation.navigate('Cards', { title: deck });
                }}
            />
            </View>
            ))}
            </View>
            <Modal visible={isModalVisible} animationType="slide">
                <View style={styles.modalContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do Deck"
                    onChangeText={handleTextChange}
                />
                <View style={styles.buttonContainer}>
                    <Button title="Cancel" onPress={handleModalClose} />
                    <Button title="Save" onPress={handleModalClose} />
                </View>
                </View>
            </Modal>
            <View style={styles.buttonAdd}>
            <Button
                title="Adicionar"
                onPress={handleModalOpen}
            />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 10,
    },
    buttonDecks: {
        flexDirection: 'column',
        paddingHorizontal: 1,
    },
    buttonDecksMargin: {
        width: 400,
        height: 40,
    },
    buttonAdd: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 5,
        position: 'absolute',
        bottom: 1,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
    },
})