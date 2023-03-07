import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, Image, TextInput, Button } from 'react-native';

const Cards = () => {

    const decks = ['Matemática', 'Biologia', 'História', 'Física', 'Inglês'];

    return (
        <View>
            {decks.map((deck, index) => (
            <Button
                key={index}
                title={deck}
                onPress={() => {}}
            />
            ))}
        </View>
    );
}

export default Cards;