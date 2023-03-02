import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default function App() {
  const [usuario, setText] = useState('');
  const handleTextChange = (inputText) => {
    setText(inputText);
  };

  const [senha, setText2] = useState('');
  const handleTextChange2 = (inputText) => {
    setText2(inputText);
  };


  return (
    <View style={styles.container}>
      <Image
        source={require('../linko/assets/logo-sem-fundo.png')}
        style={{width: 150, height: 150}}
      />
      <TextInput
        style={{ 
          marginTop: 40,
          height: 40, 
          width: 300, 
          borderColor: 'darkblue', 
          borderWidth: 1,
          borderRadius: 10,
        }}
        onChangeText={handleTextChange}
        value={usuario}
        placeholder = 'Nome de usuário'
      />
      <TextInput
        style={{ 
          marginTop: 10,
          marginBottom: 50,
          height: 40, 
          width: 300, 
          borderColor: 'darkblue', 
          borderWidth: 1,
          borderRadius: 10,
        }}
        onChangeText={handleTextChange2}
        value={senha}
        placeholder = 'Senha'
        secureTextEntry = {true}
      />
      <View style={{marginVertical: 5, width: 150}}>
        <Button
            title='Entrar' onPress={() => {}}
            color ='blue'
        />
      </View>
      <View style={{marginVertical: 5, width: 150}}>
        <Button
        title='Cadastrar' onPress={() => {}}
        color ='blue'
        />
      </View>
      <StatusBar style="auto"/>
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
