import React, { useState } from 'react';
import { View, Button, StyleSheet, Modal, TextInput, TouchableOpacity, Text, ScrollView} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Decks ({navigation}) {

    //Exemplo a constante decks deve receber um Array do banco de dados
    const decks = ['Matemática', 'Biologia', 'História', 'Física', 'Inglês', 'Sociologia', 'Filosofia'];
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
            <StatusBar style='light' backgroundColor='#0D41E1'/>
            <ScrollView fadingEdgeLength={10}>
                <View style={styles.buttonDecks} >
                    {decks.map((deck, index) => (
                    <View key={index}>    
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Cards', { title: deck });
                            }}
                            style={styles.touchableOpacityStyle}>
                            <Text style={styles.buttonText}>{deck}</Text>
                        </TouchableOpacity>
                    </View>
                    ))}
                </View>
            </ScrollView>
            <Modal visible={isModalVisible} animationType="slide">
                <View style={styles.modalContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do Deck"
                    onChangeText={handleTextChange}
                />
                <View style={styles.buttonContainer}>
                    <Button title="Cancelar" onPress={handleModalClose} />
                    <Button title="Salvar" onPress={handleModalClose} />
                </View>
                </View>
            </Modal>
            <View style={styles.buttonAdd}>
            <Button
                color={'#0C63E7'}
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
        paddingBottom: 70,
        position: 'relative'
    },
    buttonDecks: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    touchableOpacityStyle: {
        backgroundColor: '#FF9100',
        width: 300,
        height: 100,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
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