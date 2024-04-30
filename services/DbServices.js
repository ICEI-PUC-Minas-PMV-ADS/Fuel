import * as SQLite from 'expo-sqlite';


const Database = {

    getConnection: () => {
        
        const db = SQLite.openDatabase('estabelecimentos.db');
        
        db.transaction((tx) => {

            tx.executeSql('create table if not exists estabelecimentos(id intreger primary key not null, nome string not null, cnpj string not null, endereco string not null, telefone string not null, tipoCombustivel string not null, preco real not null, bandeiraPosto string not null, outrosServicos string not null)');
        });

        const ExecuteQuery = (sql, params = []) =>

            new Promise ((resolve, reject) => {
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
return ExecuteQuery;

    },

};



export default Database;