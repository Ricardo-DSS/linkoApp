import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

const CARD_DATA = [
  { id: 1, question: 'What is React?', answer: 'Resposta1' },
  { id: 2, question: 'What is JSX?', answer: 'Resposta2' },
  { id: 3, question: 'What is a component?', answer: 'Resposta3' },
  { id: 4, question: 'Quem descobriu o brasil?', answer: 'Resposta4' }
];

export default function Revisao () {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
  
    const handleNextCard = () => {
      if (currentCardIndex < CARD_DATA.length - 1) {
        setCurrentCardIndex(currentCardIndex + 1);
        setShowAnswer(false);
      }
    };
  
    const handlePreviousCard = () => {
      if (currentCardIndex > 0) {
        setCurrentCardIndex(currentCardIndex - 1);
        setShowAnswer(false);
      }
    };
  
    const handleShowAnswer = () => {
      setShowAnswer(true);
    };
  
    const renderItem = ({ item }) => (
      <View style={styles.card}>
        <Text style={styles.cardText}>{showAnswer ? item.answer : item.question}</Text>
      </View>
    );
  
    return (
      <View style={styles.container}>
        <FlatList
          data={[CARD_DATA[currentCardIndex]]}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={1}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleShowAnswer}>
            <Text style={styles.buttonText2}>Mostrar Resposta</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handlePreviousCard}>
            <Text style={styles.buttonText1}>Errei</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNextCard}>
            <Text style={styles.buttonText3}>Acertei</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      },
      card: {
        marginTop: 100,
        height: 350,
        width: 350,
        backgroundColor: '#F8F8F8',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 20,
      },
      cardText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 25,
        width: '100%',
      },
      buttonText1: {
        color: 'white',
        backgroundColor: 'red',
        padding: 10,
        paddingHorizontal: 50,
        borderRadius: 5,
      },
      buttonText2: {
        color: 'white',
        backgroundColor: 'blue',
        padding: 10,
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 5
      },
      buttonText3: {
        color: 'white',
        backgroundColor: 'green',
        padding: 10,
        paddingHorizontal: 45,
        borderRadius: 5,
      },
});


