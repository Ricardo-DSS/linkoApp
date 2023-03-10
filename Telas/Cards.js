import React from "react";
import { View, Button, Text, TouchableOpacity, StyleSheet, ScrollView, Modal } from 'react-native';

export default function Cards ({ route }) {

    //Essa linha coleta o nome do deck no arquivo 'Decks' e passa para este arquivo aqui, usaremos ele para 
    //para buscar um array com todos os cards com esse nome
    const { title } = route.params;

    const cartoes  = ['(Pergunta-1)', '(Pergunta-2)', '(Pergunta-3)', '(Pergunta-4)', '(Pergunta-5)', '(Pergunta-6)'];
    const repostas = ['(Resposta-1)', '(Resposta-2)', '(Resposta-3)', '(Resposta-4)', '(Resposta-5)', '(Resposta-6)'];

    const handleModalOpen = () => {
        setIsModalVisible(true);
    };
    
    const handleModalClose = () => {
        setIsModalVisible(false);
    };

    const handleTextChange = (text) => {
        setText(text);
    };

    //o scrollView funciona somente no android verificar depois
    return(
        <View style={styles.container}>
            <ScrollView fadingEdgeLength={100}>
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
                title="Revisar"
                onPress={() => {}}
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
        position: 'relative'
    },
    buttonRevisar: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 5,
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,
    },
    cardView: {
        width: 250,
        height: 150,
        marginBottom: 10,
        backgroundColor: '#26abff',
        textAlign: "center",
        paddingTop: 70,
        borderRadius: 10
    }
})