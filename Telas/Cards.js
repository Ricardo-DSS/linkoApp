import React from 'react';
import { View, Button } from 'react-native';

export default function Cards () {

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