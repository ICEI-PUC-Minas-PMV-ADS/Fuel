import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('fuel_plus.db');

// Assegura a criação da tabela
const initDB = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS postos (' +
        'id INTEGER PRIMARY KEY NOT NULL, ' +
        'nome TEXT NOT NULL, ' +
        'tipoCombustivel TEXT NOT NULL, ' +
        'cnpj TEXT NOT NULL, ' +
        'preco REAL NOT NULL, ' +
        'telefone TEXT NOT NULL, ' +
        'endereco TEXT NOT NULL, ' +
        'bandeiraPosto TEXT NOT NULL, ' +
        'outrosServicos TEXT NOT NULL)',
        [],
        () => console.log('Tabela postos criada com sucesso'),
        (tx, error) => console.error('Erro ao criar a tabela postos', error)
      );
    });
};

// Função genérica para executar queries
const executeQuery = (sql, params = []) => new Promise((resolve, reject) => {
    db.transaction((trans) => {
        trans.executeSql(sql, params, (trans, results) => {
            resolve(results);
        }, (trans, error) => {
            reject(error);
        });
    });
});

export const Database = {
    initDB,
    executeQuery,
};

export default Database;