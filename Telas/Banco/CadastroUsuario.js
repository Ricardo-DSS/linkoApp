import { db } from "./Connect";

function cadastrarUsuario(nome, email, senha) {
    try {
        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)',
                [`${nome}`, `${email}`, `${senha}`]
            );
        });
        console.log('Usuário cadastrado!');
    } catch (error) {
        console.log('Não foi possível criar usuário:', error);
    }
}

function verificarUsuarioExiste(email, senha) {
  return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM usuarios where email = ? and senha = ?', 
          [email, senha],
          (tx, results) => {
            const resultado = results.rows.length;
            if (resultado > 0) {
              resolve(true);
            } else {
              resolve(false);
            }
          },
          (error) => {
            console.log("Erro ao verificar se usuario existe:", error);
            reject(error);
          }
        );
      });
    });
}

export { cadastrarUsuario, verificarUsuarioExiste };