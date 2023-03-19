import React, { useState } from 'react';
import { View, Button, Text, TouchableOpacity, StyleSheet, ScrollView, Modal, TextInput } from 'react-native';

export default function Cards ({ route, navigation }) {

    //Essa linha coleta o nome do deck no arquivo 'Decks' e passa para este arquivo aqui, usaremos ele para 
    //para buscar um array com todos os cards com esse nome
    const { title } = route.params;

    //Modal
    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleModalOpen = () => {
        setIsModalVisible(true);
    };
    const handleModalClose = () => {
        setIsModalVisible(false);
    };

    //Variaveis para os dados inseridos nos campos
    const [inputs, setInputs] = useState({
        pergunta: '',
        resposta: '',
      });
    const handleInputChange = (inputName, inputValue) => {
    setInputs({ ...inputs, [inputName]: inputValue });
    };
    
    const cartoes  = ['(Pergunta-1)', '(Pergunta-2)', '(Pergunta-3)', '(Pergunta-4)', '(Pergunta-5)', '(Pergunta-6)'];
    const repostas = ['(Resposta-1)', '(Resposta-2)', '(Resposta-3)', '(Resposta-4)', '(Resposta-5)', '(Resposta-6)'];

    return(
        <View style={styles.container}>
            <ScrollView fadingEdgeLength={10}>
            {cartoes.map((cartao, index) => (
            <TouchableOpacity
                key={index}
                title={cartao}
                onPress={() => {}}
            >
                <View>
                <Text style={styles.cardView}>{cartao}</Text>
                </View>
            </TouchableOpacity>
            ))}
            </ScrollView>
            <View style={styles.buttonRevisar}>
            <Button
                color={'#0C63E7'}
                title="Adicionar card"
                onPress={handleModalOpen}
            />
            <Button
                color={'#0C63E7'}
                title="Revisão"
                onPress={() => navigation.navigate('Revisão')}
            />
            </View>
            <Modal visible={isModalVisible} animationType="slide">
                <View style={styles.modalContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Pergunta"
                    value={inputs.pergunta}
                    onChangeText={(text) => handleInputChange('pergunta', text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Resposta"
                    value={inputs.resposta}
                    onChangeText={(text) => handleInputChange('resposta', text)}
                />
                <View style={styles.buttonContainer}>
                    <Button title="Cancelar" onPress={handleModalClose} />
                    <Button title="Salvar" onPress={handleModalClose} />
                </View>
                </View>
            </Modal>
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
    buttonRevisar: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 5,
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,
    },
    cardView: {
        width: 300,
        height: 150,
        marginBottom: 10,
        backgroundColor: '#FF9100',
        textAlign: "center",
        paddingTop: 70,
        borderRadius: 10
    },
    scrollView: {
        maxHeight: '80%',
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