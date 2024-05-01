import * as SQLite from 'expo-sqlite';

const Database = {
    getConnection: () => {
        const db = SQLite.openDatabase('estabelecimentos.db');
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
    },
};

export default Database;
