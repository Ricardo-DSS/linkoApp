import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, Image, TextInput, Button } from 'react-native';

import { inserirUsuario } from './Banco/Conect';

export default function TelaLogin( { navigation }) {

    const [inputs, setInputs] = useState({
      nome: '',
      usuario: '',
      senha: '',
      repitaSenha: ''
    });

    const handleInputChange = (inputName, inputValue) => {
      setInputs({ ...inputs, [inputName]: inputValue });
    };

    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/logo-sem-fundo.png')}
          style={{width: 150, height: 150}}
        />
        <TextInput
          style={{ 
            marginTop: 40,
            height: 40, 
            width: 300, 
            borderColor: 'darkblue', 
            borderWidth: 0,
            borderBottomWidth: 2
          }}
          value={inputs.nome}
          onChangeText={(text) => handleInputChange('nome', text)}
          placeholder = 'Nome'
        />
        <TextInput
          style={{ 
            marginTop: 10,
            height: 40, 
            width: 300, 
            borderColor: 'darkblue', 
            borderWidth: 0,
            borderBottomWidth: 2
          }}
          value={inputs.usuario}
          onChangeText={(text) => handleInputChange('usuario', text)}
          placeholder = 'Informe seu email'
        />
        <TextInput
          style={{ 
            marginTop: 10,
            height: 40, 
            width: 300, 
            borderColor: 'darkblue', 
            borderWidth: 0,
            borderBottomWidth: 2
          }}
          onChangeText={(text) => handleInputChange('senha', text)}
          value={inputs.senha}
          placeholder = 'Senha'
          secureTextEntry = {true}
        />
        <TextInput
          style={{ 
            marginTop: 10,
            marginBottom: 50,
            height: 40, 
            width: 300, 
            borderColor: 'darkblue', 
            borderWidth: 0,
            borderBottomWidth: 2
          }}
          onChangeText={(text) => handleInputChange('repitaSenha', text)}
          value={inputs.repitaSenha}
          placeholder = 'Senha'
          secureTextEntry = {true}
        />
        <View style={{marginVertical: 5, width: 150}}>
          <Button
          title='Cadastrar' 
          color ='blue'
          onPress={() => {
              inserirUsuario(inputs.nome, inputs.usuario, inputs.senha);
              navigation.navigate('TelaLogin');
          }}
          />
        </View>
        <StatusBar style='light' backgroundColor='#0D41E1'/>
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