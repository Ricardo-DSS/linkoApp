import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, Image, TextInput, Button } from 'react-native';

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
          borderWidth: 1,
          borderRadius: 10,
        }}
        value={inputs.usuario}
        onChangeText={(text) => handleInputChange('usuario', text)}
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
        value={inputs.senha}
        onChangeText={(text) => handleInputChange('senha', text)}
        placeholder = 'Senha'
        secureTextEntry = {true}
      />
      <View style={{marginVertical: 5, width: 150}}>
        <Button
            title='Entrar' onPress={() => navigation.navigate('BottomNav')}
            color ='blue'
        />
      </View>
      <View style={{marginVertical: 5, width: 150}}>
        <Button
        title='Cadastrar' onPress={() => navigation.navigate('TelaCadastrar')}
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

export default TelaLogin;