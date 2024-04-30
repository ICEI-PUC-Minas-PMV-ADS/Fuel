import * as SQLite from 'expo-sqlite';

const Database = {
    getConnection: () => {
        const db = SQLite.openDatabase('estabelecimentos.db');

        db.transaction((tx) => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS estabelecimentos(id INTEGER PRIMARY KEY NOT NULL, nome TEXT NOT NULL, cnpj TEXT NOT NULL, endereco TEXT NOT NULL, telefone TEXT NOT NULL, tipoCombustivel TEXT NOT NULL, preco REAL NOT NULL, bandeiraPosto TEXT NOT NULL, outrosServicos TEXT NOT NULL)');
        });

        const ExecuteQuery = (sql, params = []) => {
            return new Promise((resolve, reject) => {
                db.transaction((trans) => {
                    trans.executeSql(
                        sql,
                        params,
                        (trans, results) => {
                            resolve(results);
                        },
                        (error) => {
                            reject(error);
                        }
                    );
                });
            });
        };

        return ExecuteQuery;
    }
};

export default Database;
