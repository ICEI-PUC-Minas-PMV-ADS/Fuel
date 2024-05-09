import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('fuel_plus.db');

// Assegura a criação da tabela
const initDB = () => {

    db.transaction((tx) => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS postos (' +
            'id INTEGER PRIMARY KEY NOT NULL, ' +
            'nome TEXT NOT NULL, ' +
            'cnpj TEXT NOT NULL, ' +
            'endereco TEXT NOT NULL, ' +
            'tipoCombustivel_1 TEXT, ' +
            'preco_1 REAL, ' +
            'tipoCombustivel_2 TEXT, ' +
            'preco_2 REAL, ' +
            'tipoCombustivel_3 TEXT, ' +
            'preco_3 REAL, ' +
            'tipoCombustivel_4 TEXT, ' +
            'preco_4 REAL, ' +
            'tipoCombustivel_5 TEXT, ' +
            'preco_5 REAL, ' +
            'tipoCombustivel_6 TEXT, ' +
            'preco_6 REAL, ' +
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
            console.error('Erro ao executar SQL:', error);
            reject(error);
        });
    });
});

export const Database = {
    initDB,
    executeQuery,
};

export default Database;