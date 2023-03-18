//importar KeyboardAvoidingView para evitar que o teclado cubra elementos

import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, Image, TextInput, Button, Text } from 'react-native';

import { verificarDados } from './Banco/Conect';

const TelaLogin = ( { navigation } ) => {

      const [inputs, setInputs] = useState({
        usuario: '',
        senha: '',
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
          borderBottomWidth: 2,
        }}
        value={inputs.usuario}
        onChangeText={(text) => handleInputChange('usuario', text)}
        placeholder = 'Email'
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
        value={inputs.senha}
        onChangeText={(text) => handleInputChange('senha', text)}
        placeholder = 'Senha'
        secureTextEntry = {true}
      />
      <View style={{marginVertical: 5, width: 250}}>
        <Button
            title='Entrar'
            color ='blue'
            onPress={() => {
              navigation.navigate('BottomNav')
            }}
        />
      </View>
      <View style={{marginVertical: 5, width: 250, alignItems: 'center'}}>
      <Text style={{marginTop: 150, marginBottom: 5}}>Ainda não tem uma conta?</Text>
        <Button
        title='Cadastrar' 
        color ='blue'
        onPress={() => {
          navigation.navigate('TelaCadastrar')
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

export default TelaLogin;