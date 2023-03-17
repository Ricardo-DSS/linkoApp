import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("linko.db");

function inserirUsuario(nome, email, senha) {
  try {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT NOT NULL, email TEXT NOT NULL UNIQUE, senha TEXT NOT NULL)'
      );
      tx.executeSql(
        'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)',
        [`${nome}`, `${email}`, `${senha}`]
      );
    });
    console.log('Tabela "usuarios" criada e registro inserido com sucesso!');
  } catch (error) {
    console.log('Erro ao criar a tabela "usuarios":', error);
  }
}

function verificarDados() {
  try{
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM usuarios', [], (_, { rows }) =>
        console.log(rows._array)
      );
    });
  } catch (error){
    console.log("Não foi possivel", error);
  }
}

export { inserirUsuario, verificarDados };
