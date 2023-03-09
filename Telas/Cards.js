import React from "react";
import { View } from 'react-native';

export default function Cards () {

    const cartoes = ['(Pergunta-1)', '(Pergunta-2)', '(Pergunta-3)', '(Pergunta-4)'];
    return(
        <View>
            {cartoes.map((cartao, index) => (
            <Button
            key={index}
            title={cartao}
            onPress={() => {}}
            />
            ))}
            <Button
                title="Revisar"
                onPress={() => {}}
            />
        </View>
    );
}