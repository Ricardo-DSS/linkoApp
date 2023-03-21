import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function Tarefas() {
    return (
        <View style={styles.container}>
            <Text>Linko</Text>
            <Text>Versão 1.0</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});